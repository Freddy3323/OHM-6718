import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, CheckCircle2, Clock, MapPin, Phone, Mail, Home } from "lucide-react";
import { Link } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    propertyAddress: "",
    propertyType: "",
    propertySize: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    scheduledDate: "",
    scheduledTime: "",
    notes: "",
  });

  const [bookingComplete, setBookingComplete] = useState(false);

  const bookingMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const scheduledDateTime = new Date(`${data.scheduledDate}T${data.scheduledTime}`);
      
      const response = await apiClient.bookings.$post({
        json: {
          propertyAddress: data.propertyAddress,
          propertyType: data.propertyType,
          propertySize: data.propertySize,
          contactName: data.contactName,
          contactEmail: data.contactEmail,
          contactPhone: data.contactPhone,
          scheduledDate: scheduledDateTime.toISOString(),
          notes: data.notes,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create booking");
      }

      return response.json();
    },
    onSuccess: () => {
      setBookingComplete(true);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    bookingMutation.mutate(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full">
          <CardContent className="p-12 text-center space-y-6">
            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-foreground">Booking Confirmed!</h2>
              <p className="text-muted-foreground text-lg">
                Thank you for choosing OpenHomeMate
              </p>
            </div>
            <div className="bg-muted/50 rounded-2xl p-6 space-y-2 text-left">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium">Property Address</div>
                  <div className="text-sm text-muted-foreground">{formData.propertyAddress}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CalendarIcon className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium">Scheduled Time</div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(`${formData.scheduledDate}T${formData.scheduledTime}`).toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium">Contact</div>
                  <div className="text-sm text-muted-foreground">{formData.contactPhone}</div>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-4">
              <p className="text-sm text-muted-foreground">
                We've sent confirmation details to <strong>{formData.contactEmail}</strong> including your Zoom meeting link.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/dashboard">
                  <Button className="bg-primary rounded-full hover:bg-primary/90 text-white">
                    View Dashboard
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline">
                    Return Home
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src="/logo.png" alt="OpenHomeMate" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-foreground">OpenHomeMate</span>
                <span className="text-xs text-muted-foreground">Building Inspection Specialists</span>
              </div>
            </div>
          </Link>
          <Link href="/dashboard">
            <Button variant="ghost">Dashboard</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Book Your Inspection</h1>
            <p className="text-muted-foreground text-lg">
              Schedule your AI-powered building inspection in just a few minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <CalendarIcon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Quick Scheduling</h3>
                <p className="text-sm text-muted-foreground">Choose your preferred date and time</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">24hr Turnaround</h3>
                <p className="text-sm text-muted-foreground">Receive your report within 24 hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Expert Service</h3>
                <p className="text-sm text-muted-foreground">30+ years of experience</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Inspection Details</CardTitle>
              <CardDescription>
                Please provide information about your property and preferred inspection time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Home className="h-5 w-5 text-primary" />
                    Property Information
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="propertyAddress">Property Address *</Label>
                    <Input
                      id="propertyAddress"
                      placeholder="123 Main Street, Sydney NSW 2000"
                      value={formData.propertyAddress}
                      onChange={(e) => handleChange("propertyAddress", e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="propertyType">Property Type *</Label>
                      <Select
                        value={formData.propertyType}
                        onValueChange={(value) => handleChange("propertyType", value)}
                        required
                      >
                        <SelectTrigger id="propertyType">
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="house">House</SelectItem>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                          <SelectItem value="unit">Unit</SelectItem>
                          <SelectItem value="villa">Villa</SelectItem>
                          <SelectItem value="duplex">Duplex</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="propertySize">Property Size (approx)</Label>
                      <Input
                        id="propertySize"
                        placeholder="e.g., 150 sqm"
                        value={formData.propertySize}
                        onChange={(e) => handleChange("propertySize", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Contact Information
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="contactName">Full Name *</Label>
                    <Input
                      id="contactName"
                      placeholder="John Smith"
                      value={formData.contactName}
                      onChange={(e) => handleChange("contactName", e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Email Address *</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.contactEmail}
                        onChange={(e) => handleChange("contactEmail", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactPhone">Phone Number *</Label>
                      <Input
                        id="contactPhone"
                        type="tel"
                        placeholder="+61 400 000 000"
                        value={formData.contactPhone}
                        onChange={(e) => handleChange("contactPhone", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    Schedule Inspection
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="scheduledDate">Preferred Date *</Label>
                      <Input
                        id="scheduledDate"
                        type="date"
                        value={formData.scheduledDate}
                        onChange={(e) => handleChange("scheduledDate", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="scheduledTime">Preferred Time *</Label>
                      <Input
                        id="scheduledTime"
                        type="time"
                        value={formData.scheduledTime}
                        onChange={(e) => handleChange("scheduledTime", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any specific areas of concern or additional information..."
                    value={formData.notes}
                    onChange={(e) => handleChange("notes", e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                  <h4 className="font-semibold text-foreground mb-2">What happens next?</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>You'll receive instant confirmation via email and SMS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Zoom meeting link will be provided for your inspection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Our expert inspector will conduct a thorough virtual walkthrough</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Comprehensive report delivered within 24 hours</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white flex-1"
                    disabled={bookingMutation.isPending}
                  >
                    {bookingMutation.isPending ? "Processing..." : "Confirm Booking"}
                  </Button>
                  <Link href="/">
                    <Button type="button" variant="outline" className="w-full sm:w-auto">
                      Cancel
                    </Button>
                  </Link>
                </div>

                {bookingMutation.isError && (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded-2xl p-4">
                    <p className="font-semibold">Booking Failed</p>
                    <p className="text-sm">
                      {bookingMutation.error?.message || "An error occurred. Please try again."}
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
