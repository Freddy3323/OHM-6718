import { useEffect, useRef, useState } from "react";
import ZoomMtgEmbedded from "@zoom/meetingsdk/embedded";
import { Button } from "@/components/ui/button";
import { Video, Loader2 } from "lucide-react";

interface ZoomMeetingProps {
  meetingNumber: string;
  password?: string;
  userName: string;
  userEmail: string;
  signature: string;
  onMeetingEnd?: () => void;
  onError?: (error: Error) => void;
}

export function ZoomMeeting({
  meetingNumber,
  password,
  userName,
  userEmail,
  signature,
  onMeetingEnd,
  onError,
}: ZoomMeetingProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const meetingSDKElement = useRef<HTMLDivElement>(null);
  const clientRef = useRef<any>(null);

  useEffect(() => {
    const initZoom = async () => {
      try {
        if (!meetingSDKElement.current) return;

        const client = ZoomMtgEmbedded.createClient();
        clientRef.current = client;

        await client.init({
          zoomAppRoot: meetingSDKElement.current,
          language: "en-US",
          patchJsMedia: true,
          leaveOnPageUnload: true,
        });

        await client.join({
          sdkKey: import.meta.env.VITE_ZOOM_SDK_KEY || "",
          signature,
          meetingNumber,
          password: password || "",
          userName,
          userEmail,
          tk: "",
        });

        setIsLoading(false);
      } catch (err) {
        console.error("Zoom initialization error:", err);
        const errorMessage =
          err instanceof Error ? err.message : "Failed to initialize Zoom";
        setError(errorMessage);
        setIsLoading(false);
        onError?.(
          err instanceof Error ? err : new Error("Failed to initialize Zoom")
        );
      }
    };

    initZoom();

    return () => {
      if (clientRef.current) {
        try {
          clientRef.current.leaveMeeting();
          onMeetingEnd?.();
        } catch (err) {
          console.error("Error leaving meeting:", err);
        }
      }
    };
  }, [meetingNumber, password, userName, userEmail, signature]);

  if (error) {
    return (
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
        <div className="text-center space-y-4 p-8">
          <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mx-auto">
            <Video className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-foreground">
              Unable to Load Video Call
            </h3>
            <p className="text-sm text-muted-foreground mb-4">{error}</p>
            <a
              href={`https://zoom.us/wc/join/${meetingNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Open in Zoom Web Client
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="h-12 w-12 text-blue-600 mx-auto animate-spin" />
          <p className="text-sm text-muted-foreground">
            Connecting to Zoom meeting...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
      <div ref={meetingSDKElement} className="w-full h-full" />
    </div>
  );
}
