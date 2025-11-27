import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { authClient } from "@/lib/auth";
import {
  Calendar,
  Video,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  Home,
  MapPin,
  User,
  LogOut,
} from "lucide-react";

export default function Dashboard() {
  const { data: session } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data } = await authClient.getSession();
      return data;
    },
  });

  const { data: bookings, isLoading: bookingsLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const response = await apiClient.bookings.$get();
      if (!response.ok) throw new Error("Failed to fetch bookings");
      return response.json();
    },
  });

  const { data: inspections, isLoading: inspectionsLoading } = useQuery({
    queryKey: ["inspections"],
    queryFn: async () => {
      const response = await apiClient.inspections.$get();
      if (!response.ok) throw new Error("Failed to fetch inspections");
      return response.json();
    },
    enabled: session?.user?.role === "admin",
  });

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline"; icon: any }> = {
      pending: { variant: "outline", icon: Clock },
      confirmed: { variant: "default", icon: CheckCircle2 },
      completed: { variant: "secondary", icon: CheckCircle2 },
      cancelled: { variant: "destructive", icon: AlertCircle },
    };

    const config = variants[status] || variants.pending;
    const Icon = config.icon;

    return (
      <Badge variant={config.variant} className="flex items-center gap-1 w-fit">
        <Icon className="h-3 w-3" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src="/logo.png" alt="OpenHomeMate" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-foreground">OpenHomeMate</span>
                <span className="text-xs text-muted-foreground">Dashboard</span>
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            {session?.user && (
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{session.user.email}</span>
                {session.user.role === "admin" && (
                  <Badge variant="secondary">Inspector</Badge>
                )}
              </div>
            )}
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground">
                Manage your inspections and view reports
              </p>
            </div>
            <Link href="/booking">
              <Button className="bg-primary rounded-full hover:bg-primary/90 text-white">
                <Calendar className="mr-2 h-4 w-4" />
                New Booking
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Bookings</p>
                    <p className="text-2xl font-bold text-foreground">
                      {bookings?.bookings?.length || 0}
                    </p>
                  </div>
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Completed</p>
                    <p className="text-2xl font-bold text-foreground">
                      {bookings?.bookings?.filter((b: any) => b.status === "completed").length || 0}
                    </p>
                  </div>
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Pending</p>
                    <p className="text-2xl font-bold text-foreground">
                      {bookings?.bookings?.filter((b: any) => b.status === "pending").length || 0}
                    </p>
                  </div>
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Reports</p>
                    <p className="text-2xl font-bold text-foreground">
                      {inspections?.inspections?.length || 0}
                    </p>
                  </div>
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="bookings" className="space-y-4">
            <TabsList>
              <TabsTrigger value="bookings">My Bookings</TabsTrigger>
              {session?.user?.role === "admin" && (
                <TabsTrigger value="inspections">Inspections</TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="bookings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Your Bookings</CardTitle>
                  <CardDescription>
                    View and manage your scheduled inspections
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {bookingsLoading ? (
                    <div className="text-center py-8 text-muted-foreground">Loading...</div>
                  ) : bookings?.bookings?.length === 0 ? (
                    <div className="text-center py-12">
                      <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-semibold text-lg mb-2">No bookings yet</h3>
                      <p className="text-muted-foreground mb-4">
                        Schedule your first building inspection
                      </p>
                      <Link href="/booking">
                        <Button className="bg-primary rounded-full hover:bg-primary/90 text-white">
                          Book Inspection
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {bookings?.bookings?.map((booking: any) => (
                        <Card key={booking.id} className="border-2 hover:border-primary transition">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                  <Home className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-lg text-foreground mb-1">
                                    {booking.propertyType.charAt(0).toUpperCase() + booking.propertyType.slice(1)} Inspection
                                  </h4>
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                    <MapPin className="h-4 w-4" />
                                    {booking.propertyAddress}
                                  </div>
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Calendar className="h-4 w-4" />
                                    {new Date(booking.scheduledDate).toLocaleString()}
                                  </div>
                                </div>
                              </div>
                              {getStatusBadge(booking.status)}
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {booking.status === "confirmed" && booking.zoomJoinUrl && (
                                <a href={booking.zoomJoinUrl} target="_blank" rel="noopener noreferrer">
                                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                                    <Video className="h-4 w-4 mr-2" />
                                    Join Video Call
                                  </Button>
                                </a>
                              )}
                              {booking.status === "completed" && (
                                <Link href={`/inspection/${booking.id}`}>
                                  <Button size="sm" variant="outline">
                                    <FileText className="h-4 w-4 mr-2" />
                                    View Report
                                  </Button>
                                </Link>
                              )}
                              <Link href={`/inspection/${booking.id}`}>
                                <Button size="sm" variant="ghost">
                                  View Details
                                </Button>
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {session?.user?.role === "admin" && (
              <TabsContent value="inspections" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Inspection Management</CardTitle>
                    <CardDescription>
                      Conduct inspections and manage reports
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {inspectionsLoading ? (
                      <div className="text-center py-8 text-muted-foreground">Loading...</div>
                    ) : inspections?.inspections?.length === 0 ? (
                      <div className="text-center py-12">
                        <Video className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-semibold text-lg mb-2">No inspections scheduled</h3>
                        <p className="text-muted-foreground">
                          Inspections will appear here when bookings are confirmed
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {inspections?.inspections?.map((inspection: any) => (
                          <Card key={inspection.id} className="border-2">
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex items-start gap-4">
                                  <div className="h-12 w-12 rounded-2xl bg-purple-600/10 flex items-center justify-center">
                                    <Video className="h-6 w-6 text-purple-600" />
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-lg text-foreground mb-1">
                                      Inspection #{inspection.id.slice(0, 8)}
                                    </h4>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                      <Calendar className="h-4 w-4" />
                                      {inspection.startedAt
                                        ? new Date(inspection.startedAt).toLocaleString()
                                        : "Not started"}
                                    </div>
                                  </div>
                                </div>
                                {getStatusBadge(inspection.status)}
                              </div>

                              <div className="flex flex-wrap gap-2">
                                {inspection.status === "scheduled" && (
                                  <Link href={`/inspection/${inspection.id}`}>
                                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                                      <Video className="h-4 w-4 mr-2" />
                                      Start Inspection
                                    </Button>
                                  </Link>
                                )}
                                {inspection.status === "in_progress" && (
                                  <Link href={`/inspection/${inspection.id}`}>
                                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                                      <Video className="h-4 w-4 mr-2" />
                                      Continue Inspection
                                    </Button>
                                  </Link>
                                )}
                                {inspection.status === "completed" && (
                                  <Link href={`/inspection/${inspection.id}`}>
                                    <Button size="sm" variant="outline">
                                      <FileText className="h-4 w-4 mr-2" />
                                      View Report
                                    </Button>
                                  </Link>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
