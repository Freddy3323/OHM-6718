import { useState } from "react";
import { MessageCircle, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MessageMindWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "0468046283";
  const formattedPhone = "+61468046283";

  const handleCall = () => {
    window.location.href = `tel:${formattedPhone}`;
  };

  const handleSMS = () => {
    window.location.href = `sms:${formattedPhone}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${formattedPhone.replace('+', '')}`, "_blank");
  };

  return (
    <>
      {isOpen && (
        <Card className="fixed bottom-24 right-4 w-96 z-50 shadow-2xl border-2 border-primary animate-in slide-in-from-bottom-5">
          <CardHeader className="bg-primary text-white pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                AI Assistant
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-primary/90 h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-blue-100 mt-2">
              Get instant help with your inspection needs
            </p>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-3">
              <Button
                onClick={handleCall}
                className="w-full bg-primary hover:bg-primary/90 text-white justify-start"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Us: {phoneNumber}
              </Button>

              <Button
                onClick={handleSMS}
                variant="outline"
                className="w-full justify-start"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send SMS
              </Button>

              <Button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white justify-start"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Chat
              </Button>
            </div>

            <div className="border-t pt-4 mt-4">
              <h4 className="font-semibold text-sm mb-2 text-foreground">
                Quick Links
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a
                  href="/booking"
                  className="block hover:text-primary transition"
                >
                  → Book an Inspection
                </a>
                <a
                  href="/dashboard"
                  className="block hover:text-primary transition"
                >
                  → View My Inspections
                </a>
                <a href="/#faq" className="block hover:text-primary transition">
                  → FAQ
                </a>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-3 text-xs text-muted-foreground">
              <p className="font-semibold text-foreground mb-1">
                Business Hours
              </p>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </CardContent>
        </Card>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg flex items-center justify-center z-50 transition-all hover:scale-110 animate-pulse"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </>
  );
}
