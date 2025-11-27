import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle2,
  Video,
  Upload,
  Scan,
  UserCheck,
  FileText,
  Clock,
  ChevronRight,
  Smartphone,
  Camera,
  Download,
} from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-amber-50 via-cream to-amber-100/30 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,166,35,0.1),transparent_50%)]" />
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              How AI-Powered Inspections Work
            </h1>
            <p className="text-xl text-muted-foreground">
              From video upload to builder-verified report in 60 minutes. Here's the complete process.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/booking">
                Start an Inspection
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">The Complete Process</h2>
              <p className="text-lg text-muted-foreground">5 simple steps to a comprehensive inspection report</p>
            </div>

            <div className="space-y-12">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <Card className="rounded-2xl border-4 border-amber-500 shadow-lg">
                    <CardHeader>
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600">
                        <Video className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white font-bold">
                          1
                        </div>
                        <CardTitle className="text-2xl">Record or Join a Guided Walkthrough</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Choose between uploading a pre-recorded video or joining a live guided Zoom session.
                      </p>
                      <div className="space-y-3">
                        <div className="rounded-xl bg-amber-50 p-4">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Upload className="h-5 w-5 text-amber-600" />
                            Option 1: Upload Recording
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Walk through the property with your smartphone. We'll provide detailed instructions on
                            what to film and how to capture quality footage.
                          </p>
                        </div>
                        <div className="rounded-xl bg-amber-50 p-4">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Video className="h-5 w-5 text-amber-600" />
                            Option 2: Guided Zoom Session
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Schedule a time and we'll guide you through the property in real-time via video call.
                            Perfect for first-time users.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">What to Film</h3>
                  <ul className="space-y-3">
                    {[
                      'All rooms from multiple angles',
                      'Ceilings, walls, and floors',
                      'Windows and doors',
                      'Bathrooms and wet areas',
                      'Kitchen fixtures and appliances',
                      'Any visible defects or concerns',
                      'Roof space access (manhole view)',
                      'Subfloor access (if visible)',
                      'External walls and drainage',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="space-y-4 order-2 md:order-1">
                  <h3 className="text-2xl font-bold">AI Computer Vision Analysis</h3>
                  <p className="text-muted-foreground">
                    Our advanced AI system processes your video frame-by-frame, identifying:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Cracks and structural movement',
                      'Moisture stains and dampness',
                      'Ceiling sag or damage',
                      'Uneven floors and walls',
                      'Poor workmanship',
                      'Electrical hazards',
                      'Safety concerns',
                      'Drainage issues',
                      'Tile displacement',
                      'Ventilation problems',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 md:order-2">
                  <Card className="rounded-2xl border-4 border-amber-500 shadow-lg">
                    <CardHeader>
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600">
                        <Scan className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white font-bold">
                          2
                        </div>
                        <CardTitle className="text-2xl">AI Scans Every Frame</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Our computer vision system analyzes your video using trained models that detect visible
                        defects, patterns, and anomalies.
                      </p>
                      <div className="rounded-xl bg-amber-50 p-4 space-y-2">
                        <h4 className="font-semibold">The AI identifies:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Timestamps of potential issues</li>
                          <li>• Still frames showing defects</li>
                          <li>• Severity indicators</li>
                          <li>• Location in property</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <Card className="rounded-2xl border-4 border-amber-500 shadow-lg">
                    <CardHeader>
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600">
                        <UserCheck className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white font-bold">
                          3
                        </div>
                        <CardTitle className="text-2xl">Builder Verification</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        A licensed, qualified builder reviews the AI findings and the original video footage.
                      </p>
                      <div className="space-y-3">
                        <div className="rounded-xl bg-amber-50 p-4">
                          <h4 className="font-semibold mb-2">The Builder:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Confirms or corrects AI findings</li>
                            <li>• Adds professional context</li>
                            <li>• Rates severity levels</li>
                            <li>• Provides recommendations</li>
                            <li>• Identifies anything AI missed</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Human Expertise Matters</h3>
                  <p className="text-muted-foreground">
                    AI is powerful, but building expertise is irreplaceable. Our licensed builders:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Have 5+ years of building experience',
                      'Hold current building licenses',
                      'Know Australian building codes',
                      'Understand building context and history',
                      'Apply professional judgement',
                      'Provide actionable advice',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="space-y-4 order-2 md:order-1">
                  <h3 className="text-2xl font-bold">Your Comprehensive Report</h3>
                  <p className="text-muted-foreground">You'll receive a detailed PDF report containing:</p>
                  <ul className="space-y-3">
                    {[
                      'Property overview and summary',
                      'All identified defects with photos',
                      'Severity ratings (low, medium, high, critical)',
                      'Detailed descriptions of each issue',
                      'Recommended actions',
                      'Estimated urgency',
                      'Areas of concern',
                      'Builder commentary',
                      'Next steps guidance',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 md:order-2">
                  <Card className="rounded-2xl border-4 border-amber-500 shadow-lg">
                    <CardHeader>
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600">
                        <FileText className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white font-bold">
                          4
                        </div>
                        <CardTitle className="text-2xl">Report Delivered</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Receive a clear, visual, professional-grade inspection report via email.
                      </p>
                      <div className="rounded-xl bg-amber-50 p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Clock className="h-6 w-6 text-amber-600" />
                          <h4 className="font-semibold">Delivery Times:</h4>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• AI Report: 2-4 hours</li>
                          <li>• AI + Builder Verification: 2-4 hours</li>
                          <li>• Priority 60-Minute: Within 60 minutes</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gradient-to-br from-amber-50 to-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Equipment & Requirements</h2>
              <p className="text-lg text-muted-foreground">Everything you need for a successful inspection</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Required Equipment</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Smartphone with camera (most modern phones work)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Good lighting (open curtains, turn on lights)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Stable internet connection (for upload or Zoom)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">10-20 minutes of filming time</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Filming Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Film in landscape mode (horizontal)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Move slowly and steadily</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Get close-ups of any concerns</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Film all corners of each room</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Narrate any concerns as you film</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">See a Sample Report</h2>
            <p className="text-lg text-muted-foreground">
              Download a real example to see the level of detail and clarity you'll receive
            </p>
            <Card className="rounded-2xl border-2 border-amber-200/50 p-8">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sample Inspection Report</h3>
              <p className="text-muted-foreground mb-6">
                Complete with photos, severity ratings, recommendations, and builder commentary
              </p>
              <Button asChild size="lg" className="rounded-full">
                <a href="/sample-report.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Sample Report
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to Inspect Your Property?
            </h2>
            <p className="text-xl text-amber-50">
              Get started with your AI-powered building inspection in minutes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link to="/booking">
                  Start an Inspection
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white text-white hover:bg-white hover:text-amber-600"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
