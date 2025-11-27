import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, Upload, Video, Clock, Mail, MapPin, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { apiClient } from '@/lib/api-client';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    propertyAddress: '',
    propertyListingUrl: '',
    videoMethod: 'upload',
    specificConcerns: '',
    pricingTier: '249',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    preferredContact: 'email',
  });

  const [bookingComplete, setBookingComplete] = useState(false);

  const bookingMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiClient.bookings.$post({
        json: {
          propertyAddress: data.propertyAddress,
          propertyType: 'N/A',
          propertySize: 'N/A',
          contactName: data.contactName,
          contactEmail: data.contactEmail,
          contactPhone: data.contactPhone,
          scheduledDate: new Date().toISOString(),
          notes: `Pricing Tier: $${data.pricingTier} | Video Method: ${data.videoMethod} | Listing URL: ${data.propertyListingUrl} | Specific Concerns: ${data.specificConcerns} | Preferred Contact: ${data.preferredContact}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to create booking');
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
        <Card className="max-w-2xl w-full rounded-2xl border-2 border-amber-200/50">
          <CardContent className="p-12 text-center space-y-6">
            <div className="h-20 w-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-10 w-10 text-amber-600" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-foreground">Inspection Booked!</h2>
              <p className="text-muted-foreground text-lg">
                Thank you for choosing Open Home Mate
              </p>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6 space-y-4 text-left">
              <h3 className="font-semibold text-lg mb-4">What Happens Next:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <div className="font-medium">We'll contact you within 1 hour</div>
                    <div className="text-sm text-muted-foreground">
                      Via {formData.preferredContact} to confirm details and arrange video submission
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <div className="font-medium">
                      {formData.videoMethod === 'upload' ? 'Upload your video' : 'Join a guided Zoom session'}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {formData.videoMethod === 'upload'
                        ? "We'll provide secure upload instructions"
                        : "We'll schedule a time and send you a Zoom link"}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <div className="font-medium">AI analysis begins immediately</div>
                    <div className="text-sm text-muted-foreground">
                      Our computer vision system scans every frame for defects
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white font-bold text-sm">
                    4
                  </div>
                  <div>
                    <div className="font-medium">Builder verifies findings</div>
                    <div className="text-sm text-muted-foreground">
                      {formData.pricingTier === '149'
                        ? 'AI report is finalized'
                        : 'A licensed builder reviews and confirms all findings'}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white font-bold text-sm">
                    5
                  </div>
                  <div>
                    <div className="font-medium">Report delivered</div>
                    <div className="text-sm text-muted-foreground">
                      {formData.pricingTier === '299'
                        ? 'Within 60 minutes with priority processing'
                        : 'Typically within 2-4 hours'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl bg-muted/50 p-4 text-left">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-medium text-sm">Property Address</div>
                    <div className="text-sm text-muted-foreground">{formData.propertyAddress}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-medium text-sm">Pricing Tier</div>
                    <div className="text-sm text-muted-foreground">
                      ${formData.pricingTier} -{' '}
                      {formData.pricingTier === '149'
                        ? 'AI Report'
                        : formData.pricingTier === '249'
                        ? 'AI + Builder Verification'
                        : 'Priority 60-Minute Delivery'}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                A confirmation email has been sent to <strong>{formData.contactEmail}</strong>
              </div>
            </div>
            <Button asChild className="rounded-full" size="lg">
              <Link to="/">Return Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-cream to-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Start Your AI-Powered Inspection
            </h1>
            <p className="text-lg text-muted-foreground">
              Book now and receive your builder-verified report within 60 minutes
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <Card className="rounded-2xl border-2 border-amber-200/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  Property Information
                </CardTitle>
                <CardDescription>Tell us about the property you want to inspect</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="propertyAddress">Property Address *</Label>
                  <Input
                    id="propertyAddress"
                    placeholder="123 Main Street, Sydney NSW 2000"
                    value={formData.propertyAddress}
                    onChange={(e) => handleChange('propertyAddress', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="propertyListingUrl">Property Listing URL (optional)</Label>
                  <Input
                    id="propertyListingUrl"
                    type="url"
                    placeholder="https://www.realestate.com.au/..."
                    value={formData.propertyListingUrl}
                    onChange={(e) => handleChange('propertyListingUrl', e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Helps us understand the property layout and features
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 border-amber-200/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-amber-600" />
                  Video Submission Method
                </CardTitle>
                <CardDescription>Choose how you'll provide the video walkthrough</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={formData.videoMethod}
                  onValueChange={(value) => handleChange('videoMethod', value)}
                  className="space-y-4"
                >
                  <div className="flex items-start space-x-3 rounded-xl border-2 border-border p-4 cursor-pointer hover:border-amber-500 transition-colors">
                    <RadioGroupItem value="upload" id="upload" className="mt-1" />
                    <Label htmlFor="upload" className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-2 mb-1">
                        <Upload className="h-5 w-5 text-amber-600" />
                        <span className="font-semibold">Upload a recording</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Record a video walkthrough on your smartphone and upload it. We'll provide detailed
                        instructions on what to film.
                      </p>
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3 rounded-xl border-2 border-border p-4 cursor-pointer hover:border-amber-500 transition-colors">
                    <RadioGroupItem value="guided-zoom" id="guided-zoom" className="mt-1" />
                    <Label htmlFor="guided-zoom" className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-2 mb-1">
                        <Video className="h-5 w-5 text-amber-600" />
                        <span className="font-semibold">Join a guided Zoom session</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Schedule a live video call where we guide you through the property in real-time. Perfect for
                        first-time users.
                      </p>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 border-amber-200/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-amber-600" />
                  Select Pricing Tier
                </CardTitle>
                <CardDescription>Choose the level of service you need</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={formData.pricingTier}
                  onValueChange={(value) => handleChange('pricingTier', value)}
                  className="space-y-4"
                >
                  <div className="flex items-start space-x-3 rounded-xl border-2 border-border p-4 cursor-pointer hover:border-amber-500 transition-colors">
                    <RadioGroupItem value="149" id="tier-149" className="mt-1" />
                    <Label htmlFor="tier-149" className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold">AI Report</span>
                        <span className="text-2xl font-bold text-amber-600">$149</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        AI-only defect detection with clear visuals. Best for initial assessments.
                      </p>
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3 rounded-xl border-4 border-amber-500 p-4 cursor-pointer bg-amber-50/50 relative">
                    <div className="absolute -top-3 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      RECOMMENDED
                    </div>
                    <RadioGroupItem value="249" id="tier-249" className="mt-1" />
                    <Label htmlFor="tier-249" className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold">AI + Builder Verification</span>
                        <span className="text-2xl font-bold text-amber-600">$249</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        A licensed builder reviews and finalises your report. Most popular choice.
                      </p>
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3 rounded-xl border-2 border-border p-4 cursor-pointer hover:border-amber-500 transition-colors">
                    <RadioGroupItem value="299" id="tier-299" className="mt-1" />
                    <Label htmlFor="tier-299" className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">Priority 60-Minute Delivery</span>
                          <Clock className="h-5 w-5 text-amber-600" />
                        </div>
                        <span className="text-2xl font-bold text-amber-600">$299</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Fastest turnaround with builder verification. Perfect for urgent decisions.
                      </p>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 border-amber-200/50">
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="specificConcerns">Any specific concerns to focus on? (optional)</Label>
                  <Textarea
                    id="specificConcerns"
                    placeholder="E.g., visible cracks in the ceiling, damp smell in bathroom, uneven flooring..."
                    value={formData.specificConcerns}
                    onChange={(e) => handleChange('specificConcerns', e.target.value)}
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 border-amber-200/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-amber-600" />
                  Contact Details
                </CardTitle>
                <CardDescription>How can we reach you?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Full Name *</Label>
                  <Input
                    id="contactName"
                    placeholder="John Smith"
                    value={formData.contactName}
                    onChange={(e) => handleChange('contactName', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Email Address *</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.contactEmail}
                    onChange={(e) => handleChange('contactEmail', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Phone Number *</Label>
                  <Input
                    id="contactPhone"
                    type="tel"
                    placeholder="0400 000 000"
                    value={formData.contactPhone}
                    onChange={(e) => handleChange('contactPhone', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                  <Select
                    value={formData.preferredContact}
                    onValueChange={(value) => handleChange('preferredContact', value)}
                  >
                    <SelectTrigger id="preferredContact">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="sms">SMS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-2xl bg-amber-50 p-6 space-y-4">
              <h3 className="font-semibold text-lg">What Happens After Booking:</h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white text-xs font-bold">
                    1
                  </div>
                  <span>We'll contact you within 1 hour to confirm details</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white text-xs font-bold">
                    2
                  </div>
                  <span>
                    You'll either upload your video or we'll schedule a guided Zoom session
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white text-xs font-bold">
                    3
                  </div>
                  <span>Our AI scans every frame for defects</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white text-xs font-bold">
                    4
                  </div>
                  <span>A licensed builder reviews the findings (if selected tier includes verification)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white text-xs font-bold">
                    5
                  </div>
                  <span>
                    Report delivered within 60 minutes (Priority) or 2-4 hours (Standard)
                  </span>
                </li>
              </ol>
            </div>

            <div className="flex flex-col gap-4">
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full"
                disabled={bookingMutation.isPending}
              >
                {bookingMutation.isPending ? 'Processing...' : 'Book Inspection Now'}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                By booking, you agree to our{' '}
                <Link to="/terms" className="underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
