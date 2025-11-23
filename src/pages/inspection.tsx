import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "wouter";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { authClient } from "@/lib/auth";
import { ZoomMeeting } from "@/components/zoom/zoom-meeting";
import {
  Video,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  FileText,
  Plus,
  Search,
  AlertTriangle,
  Download,
  Brain,
  Zap,
  ArrowLeft,
} from "lucide-react";

export default function InspectionPage() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const [isInspecting, setIsInspecting] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [aiDetectionEnabled, setAiDetectionEnabled] = useState(true);
  const [zoomSignature, setZoomSignature] = useState<string | null>(null);
  const [meetingInfo, setMeetingInfo] = useState<{
    meetingId: string;
    password?: string;
  } | null>(null);
  
  const [defectForm, setDefectForm] = useState<{
    defectTypeId?: string;
    customDefectName?: string;
    location: string;
    severity: "minor" | "major" | "critical" | "safety" | "";
    description: string;
    standardsReference?: string;
    recommendedAction?: string;
    estimatedCost?: string;
  }>({
    defectTypeId: "",
    customDefectName: "",
    location: "",
    severity: "",
    description: "",
    standardsReference: "",
    recommendedAction: "",
    estimatedCost: "",
  });

  const { data: session } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data } = await authClient.getSession();
      return data;
    },
  });

  const { data: inspection, isLoading } = useQuery({
    queryKey: ["inspection", id],
    queryFn: async () => {
      const response = await apiClient.inspections[":id"].$get({
        param: { id: id || "" },
      });
      if (!response.ok) throw new Error("Failed to fetch inspection");
      return response.json();
    },
    enabled: !!id,
  });

  useEffect(() => {
    const fetchZoomInfo = async () => {
      if (inspection?.inspection?.bookingId) {
        try {
          const response = await apiClient.zoom.meeting[":id"].$get({
            param: { id: inspection.inspection.bookingId },
          });
          
          if (response.ok) {
            const data = await response.json();
            setMeetingInfo({
              meetingId: data.meetingId,
              password: data.password,
            });

            const sigResponse = await apiClient.zoom["sdk-signature"].$post({
              json: {
                meetingNumber: data.meetingId,
                role: session?.user?.role === "admin" ? 1 : 0,
              },
            });

            if (sigResponse.ok) {
              const sigData = await sigResponse.json();
              setZoomSignature(sigData.signature || null);
            }
          }
        } catch (error) {
          console.error("Failed to fetch Zoom info:", error);
        }
      }
    };

    if (isInspecting && inspection?.inspection) {
      fetchZoomInfo();
    }
  }, [isInspecting, inspection, session]);

  const { data: defectTypes } = useQuery({
    queryKey: ["defect-types"],
    queryFn: async () => {
      const response = await apiClient.defects.types.$get();
      if (!response.ok) throw new Error("Failed to fetch defect types");
      return response.json();
    },
  });

  const { data: detectedDefects } = useQuery({
    queryKey: ["inspection-defects", id],
    queryFn: async () => {
      const response = await apiClient.inspections[":id"].defects.$get({
        param: { id: id || "" },
      });
      if (!response.ok) throw new Error("Failed to fetch defects");
      return response.json();
    },
    enabled: !!id && isInspecting,
    refetchInterval: 5000,
  });

  const { data: aiSuggestions } = useQuery({
    queryKey: ["ai-suggestions", id],
    queryFn: async () => {
      const response = await apiClient.ai["detect-defects"].$post({
        json: { inspectionId: id || "", videoFrame: "" },
      });
      if (!response.ok) return { suggestions: [] };
      return response.json();
    },
    enabled: aiDetectionEnabled && isInspecting,
    refetchInterval: 3000,
  });

  const startInspectionMutation = useMutation({
    mutationFn: async () => {
      const response = await apiClient.inspections[":id"].start.$post({
        param: { id: id || "" },
      });
      if (!response.ok) throw new Error("Failed to start inspection");
      return response.json();
    },
    onSuccess: () => {
      setIsInspecting(true);
      queryClient.invalidateQueries({ queryKey: ["inspection", id] });
    },
  });

  const addDefectMutation = useMutation({
    mutationFn: async (data: {
      defectTypeId?: string;
      customDefectName?: string;
      location: string;
      severity: "minor" | "major" | "critical" | "safety";
      description: string;
      standardsReference?: string;
      recommendedAction?: string;
      estimatedCost?: string;
    }) => {
      const response = await apiClient.inspections[":id"].defects.$post({
        param: { id: id || "" },
        json: data,
      });
      if (!response.ok) throw new Error("Failed to add defect");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inspection-defects", id] });
      setDefectForm({
        defectTypeId: "",
        customDefectName: "",
        location: "",
        severity: "",
        description: "",
        standardsReference: "",
        recommendedAction: "",
        estimatedCost: "",
      });
    },
  });

  const completeInspectionMutation = useMutation({
    mutationFn: async () => {
      const response = await apiClient.inspections[":id"].complete.$post({
        param: { id: id || "" },
      });
      if (!response.ok) throw new Error("Failed to complete inspection");
      return response.json();
    },
    onSuccess: () => {
      setIsInspecting(false);
      queryClient.invalidateQueries({ queryKey: ["inspection", id] });
    },
  });

  const handleStartInspection = () => {
    startInspectionMutation.mutate();
  };

  const handleAddDefect = (e: React.FormEvent) => {
    e.preventDefault();
    if (defectForm.severity === "") {
      return;
    }
    addDefectMutation.mutate({
      ...defectForm,
      severity: defectForm.severity as "minor" | "major" | "critical" | "safety",
    });
  };

  const handleCompleteInspection = () => {
    completeInspectionMutation.mutate();
  };

  const getSeverityBadge = (severity: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive"; color: string }> = {
      minor: { variant: "secondary", color: "text-yellow-600" },
      major: { variant: "default", color: "text-orange-600" },
      critical: { variant: "destructive", color: "text-red-600" },
      safety: { variant: "destructive", color: "text-red-600" },
    };

    const config = variants[severity] || variants.minor;

    return (
      <Badge variant={config.variant} className="flex items-center gap-1 w-fit">
        <AlertTriangle className="h-3 w-3" />
        {severity.charAt(0).toUpperCase() + severity.slice(1)}
      </Badge>
    );
  };

  const isInspector = session?.user?.role === "admin";

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading inspection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="flex items-center gap-4">
            <Badge variant={isInspecting ? "default" : "outline"}>
              {isInspecting ? "In Progress" : "Not Started"}
            </Badge>
            {isInspector && (
              <Button
                variant="destructive"
                size="sm"
                onClick={handleCompleteInspection}
                disabled={!isInspecting}
              >
                Complete Inspection
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Video Call</span>
                    {isInspector && aiDetectionEnabled && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Brain className="h-3 w-3" />
                        AI Detection Active
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {!isInspecting ? (
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="text-center space-y-4">
                        <Video className="h-16 w-16 text-muted-foreground mx-auto" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Inspection Not Started</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {isInspector
                              ? "Click Start Inspection to begin the video call"
                              : "Waiting for inspector to start the call"}
                          </p>
                          {isInspector && (
                            <Button
                              className="bg-blue-600 hover:bg-blue-700 text-white"
                              onClick={handleStartInspection}
                            >
                              <Video className="mr-2 h-4 w-4" />
                              Start Inspection
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : zoomSignature && meetingInfo && session?.user ? (
                    <ZoomMeeting
                      meetingNumber={meetingInfo.meetingId}
                      password={meetingInfo.password}
                      userName={session.user.name || session.user.email}
                      userEmail={session.user.email}
                      signature={zoomSignature}
                      onMeetingEnd={() => {
                        setIsInspecting(false);
                        queryClient.invalidateQueries({ queryKey: ["inspection", id] });
                      }}
                      onError={(error) => {
                        console.error("Zoom error:", error);
                      }}
                    />
                  ) : (
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <Video className="h-16 w-16 text-muted-foreground mx-auto" />
                        <p className="text-sm text-muted-foreground">
                          Initializing video call...
                        </p>
                      </div>
                    </div>
                  )}

                  {isInspector && aiDetectionEnabled && isInspecting && (
                    <div className="absolute top-4 right-4 space-y-2 pointer-events-none">
                      {aiSuggestions?.suggestions?.map((suggestion: any, index: number) => (
                        <div
                          key={index}
                          className="bg-yellow-500/90 backdrop-blur text-yellow-900 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 animate-pulse"
                        >
                          <Zap className="h-4 w-4" />
                          {suggestion.name} detected ({Math.round(suggestion.confidence * 100)}%)
                        </div>
                      ))}
                    </div>
                  )}

                  {isInspecting && (
                    <div className="flex items-center justify-center gap-4 mt-4">
                      <Button
                        variant={audioEnabled ? "default" : "outline"}
                        size="sm"
                        onClick={() => setAudioEnabled(!audioEnabled)}
                      >
                        {audioEnabled ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                      </Button>
                      <Button
                        variant={videoEnabled ? "default" : "outline"}
                        size="sm"
                        onClick={() => setVideoEnabled(!videoEnabled)}
                      >
                        {videoEnabled ? <Camera className="h-4 w-4" /> : <CameraOff className="h-4 w-4" />}
                      </Button>
                      {isInspector && (
                        <Button
                          variant={aiDetectionEnabled ? "default" : "outline"}
                          size="sm"
                          onClick={() => setAiDetectionEnabled(!aiDetectionEnabled)}
                          className="gap-2"
                        >
                          <Brain className="h-4 w-4" />
                          AI Detection
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Detected Defects</CardTitle>
                </CardHeader>
                <CardContent>
                  {!detectedDefects?.defects || detectedDefects.defects.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <FileText className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p>No defects recorded yet</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {detectedDefects.defects.map((defect: any) => (
                        <div
                          key={defect.id}
                          className="border-2 rounded-lg p-4 hover:border-blue-600 transition cursor-pointer"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-foreground">
                                {defect.customDefectName || defect.defectTypeName}
                              </h4>
                              <p className="text-sm text-muted-foreground">{defect.location}</p>
                            </div>
                            <div className="flex gap-2">
                              {defect.aiDetected && (
                                <Badge variant="secondary" className="flex items-center gap-1">
                                  <Brain className="h-3 w-3" />
                                  AI
                                </Badge>
                              )}
                              {getSeverityBadge(defect.severity)}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">{defect.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {isInspector && isInspecting && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Add Defect</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleAddDefect} className="space-y-4">
                      <div className="space-y-2">
                        <Label>Defect Type</Label>
                        <Select
                          value={defectForm.defectTypeId}
                          onValueChange={(value) =>
                            setDefectForm((prev) => ({ ...prev, defectTypeId: value }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            {defectTypes?.types?.map((type: any) => (
                              <SelectItem key={type.id} value={type.id}>
                                {type.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Location *</Label>
                        <Input
                          placeholder="e.g., Bathroom ceiling"
                          value={defectForm.location}
                          onChange={(e) =>
                            setDefectForm((prev) => ({ ...prev, location: e.target.value }))
                          }
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Severity *</Label>
                        <Select
                          value={defectForm.severity}
                          onValueChange={(value) =>
                            setDefectForm({ ...defectForm, severity: value as "minor" | "major" | "critical" | "safety" | "" })
                          }
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select severity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="minor">Minor</SelectItem>
                            <SelectItem value="major">Major</SelectItem>
                            <SelectItem value="critical">Critical</SelectItem>
                            <SelectItem value="safety">Safety Hazard</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Description *</Label>
                        <Textarea
                          placeholder="Describe the defect..."
                          value={defectForm.description}
                          onChange={(e) =>
                            setDefectForm((prev) => ({ ...prev, description: e.target.value }))
                          }
                          required
                          rows={3}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        disabled={addDefectMutation.isPending}
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        {addDefectMutation.isPending ? "Adding..." : "Add Defect"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Defect Library</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search defects..." className="pl-9" />
                    </div>
                    
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {defectTypes?.types?.slice(0, 8).map((type: any) => (
                        <button
                          key={type.id}
                          type="button"
                          className="w-full text-left p-3 border rounded-lg hover:border-blue-600 hover:bg-blue-50 transition"
                          onClick={() => {
                            if (isInspector && isInspecting) {
                              setDefectForm({
                                ...defectForm,
                                defectTypeId: type.id,
                                customDefectName: type.name,
                                standardsReference: type.standardsReference || "",
                              });
                            }
                          }}
                        >
                          <div className="font-medium text-sm">{type.name}</div>
                          <div className="text-xs text-muted-foreground">{type.categoryName}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Inspection Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Defects</span>
                    <span className="font-semibold">{detectedDefects?.defects?.length || 0}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Critical</span>
                    <span className="font-semibold text-red-600">
                      {detectedDefects?.defects?.filter((d: any) => d.severity === "critical" || d.severity === "safety").length || 0}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Major</span>
                    <span className="font-semibold text-orange-600">
                      {detectedDefects?.defects?.filter((d: any) => d.severity === "major").length || 0}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Minor</span>
                    <span className="font-semibold text-yellow-600">
                      {detectedDefects?.defects?.filter((d: any) => d.severity === "minor").length || 0}
                    </span>
                  </div>
                  {inspection?.inspection?.status === "completed" && (
                    <Button variant="outline" className="w-full mt-4">
                      <Download className="mr-2 h-4 w-4" />
                      Download Report
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
