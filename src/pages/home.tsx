import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle2,
  FileText,
  ShieldCheck,
  AlertTriangle,
  Download,
  Video,
  Scan,
  UserCheck,
  ChevronRight,
  AlertCircle,
  Home,
  Droplets,
  Zap,
  Wind,
  Eye,
  FileWarning,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-amber-50 via-cream to-amber-100/30 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,166,35,0.1),transparent_50%)]" />
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-block rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-700">
                AI-Powered Building Inspections in 60 Minutes
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                AI-Powered Building Inspections — No On-Site Visit Needed
              </h1>
              <p className="text-xl text-muted-foreground">
                Upload a video walkthrough or join a guided Zoom session. Our AI analyses every frame and qualified builders verify the results.
              </p>
              <div className="grid gap-3 text-base md:text-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600" />
                  <span className="font-medium">60-minute delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600" />
                  <span className="font-medium">From $149–$299</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600" />
                  <span className="font-medium">Builder-verified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600" />
                  <span className="font-medium">Clear visual reporting</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/booking">
                    Start an Inspection
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <a href="#sample-report">
                    <Download className="mr-2 h-5 w-5" />
                    See Sample Report
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/branding-hero.png"
                alt="AI-Powered Building Inspection"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUTH ABOUT TRADITIONAL INSPECTIONS */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                The Truth About Traditional Building Inspections And Why Open Home Mate Is the Future
              </h2>
              <p className="text-lg text-muted-foreground">
                Most buyers imagine a building inspector crawling into every space. But in reality, 80–90% of inspections in Australia are quick, visual-only checks backed by pages of disclaimers — and many areas are never inspected.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                    <Home className="h-6 w-6 text-amber-600" />
                  </div>
                  <CardTitle>Roof cavities are rarely entered</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>Unsafe access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>Heat/asbestos risk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>Tight clearance</span>
                    </li>
                  </ul>
                  <div className="rounded-lg bg-amber-50 p-4 text-sm italic text-amber-900">
                    "Roof space not safely accessible. Inspection limited at time of visit."
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                    <AlertTriangle className="h-6 w-6 text-amber-600" />
                  </div>
                  <CardTitle>Subfloors are almost never crawled</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>Dusty, cramped, damp</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>Limited visibility</span>
                    </li>
                  </ul>
                  <div className="rounded-lg bg-amber-50 p-4 text-sm italic text-amber-900">
                    "Subfloor inspection restricted due to limited access."
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                    <Zap className="h-6 w-6 text-amber-600" />
                  </div>
                  <CardTitle>Systems are not tested</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>No plumbing testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>No electrical testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>No gas testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>No drainage testing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                    <FileWarning className="h-6 w-6 text-amber-600" />
                  </div>
                  <CardTitle>Reports are filled with disclaimers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="italic">"Visual inspection only."</p>
                    <p className="italic">"Areas not visible were not assessed."</p>
                    <p className="italic">"Not a structural engineer's report."</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-2xl bg-amber-50 p-8 text-center">
              <p className="text-xl font-semibold text-amber-900">
                Traditional inspections exclude more than most buyers realise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE MODERN ALTERNATIVE */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-amber-50 to-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              A Smarter, More Transparent Way to Inspect Property
            </h2>
            <p className="text-xl text-muted-foreground">
              Open Home Mate uses guided video capture + AI + builder verification to deliver clear, fast, reliable inspections.
            </p>
            <div className="grid gap-6 md:grid-cols-2 text-left">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Guided Zoom or smartphone walkthrough</h3>
                  <p className="text-sm text-muted-foreground">We guide every step of the recording process</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">AI analyses every frame</h3>
                  <p className="text-sm text-muted-foreground">Computer vision detects visible defects automatically</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Builder verifies accuracy</h3>
                  <p className="text-sm text-muted-foreground">Licensed builders review every AI finding</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Clear visual report in 60 minutes</h3>
                  <p className="text-sm text-muted-foreground">Photos, severity levels, and recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How It Works</h2>
              <p className="text-lg text-muted-foreground">Simple, fast, and transparent</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="rounded-2xl border-2 border-amber-200/50 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <Video className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Step 1</CardTitle>
                  <CardDescription className="font-semibold text-foreground">
                    Record or Join a Guided Walkthrough
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Just walk through the property with your phone. We guide every step.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <Scan className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Step 2</CardTitle>
                  <CardDescription className="font-semibold text-foreground">
                    AI Scans Every Frame
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our computer vision system identifies visible defects, movement, moisture, hazards & more.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <UserCheck className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Step 3</CardTitle>
                  <CardDescription className="font-semibold text-foreground">
                    Builder Verification
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A qualified builder reviews, corrects, and confirms the findings.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Step 4</CardTitle>
                  <CardDescription className="font-semibold text-foreground">
                    Report Delivered
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Clear photos, severity levels, next steps, and recommendations — delivered within 60 minutes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DETECT */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-cream to-amber-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                What Our AI + Builders Look For
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: AlertCircle, text: 'Cracks & wall movement' },
                { icon: Droplets, text: 'Moisture stains & damp' },
                { icon: Eye, text: 'Workmanship issues' },
                { icon: Home, text: 'Ceiling sag or damage visible from manhole' },
                { icon: AlertTriangle, text: 'Uneven floors' },
                { icon: Zap, text: 'Electrical/wiring surface hazards' },
                { icon: Droplets, text: 'Drainage concerns' },
                { icon: ShieldCheck, text: 'Safety risks' },
                { icon: AlertCircle, text: 'Tile displacement' },
                { icon: Wind, text: 'Ventilation issues' },
                { icon: Eye, text: 'Subfloor visibility problems' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                    <item.icon className="h-5 w-5 text-amber-600" />
                  </div>
                  <span className="font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SAMPLE REPORT SECTION */}
      <section id="sample-report" className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                See Exactly What You'll Receive
              </h2>
              <p className="text-lg text-muted-foreground">
                Download a real example of an Open Home Mate inspection report.
              </p>
            </div>
            <Card className="rounded-2xl border-2 border-amber-200/50 p-8">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sample Inspection Report</h3>
              <p className="text-muted-foreground mb-6">
                See the level of detail, clarity, and visual documentation you'll receive with every inspection.
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

      {/* PRICING SECTION */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-amber-50 to-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Simple, Transparent Pricing
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="rounded-2xl border-2 border-border">
                <CardHeader className="text-center pb-8">
                  <div className="mb-4 text-4xl font-bold">$149</div>
                  <CardTitle className="text-2xl">AI Report</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-center text-muted-foreground">
                    AI-only defect detection with clear visuals.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">AI defect detection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Visual report with photos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Severity ratings</span>
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full rounded-full" size="lg">
                    <Link to="/booking">Select Plan</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-4 border-amber-500 shadow-lg relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-sm font-bold text-white">
                  RECOMMENDED
                </div>
                <CardHeader className="text-center pb-8 pt-8">
                  <div className="mb-4 text-4xl font-bold">$249</div>
                  <CardTitle className="text-2xl">AI + Builder Verification</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-center text-muted-foreground">
                    A licensed builder reviews and finalises your report.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Everything in AI Report</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Builder verification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Professional recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Accuracy guarantee</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full rounded-full" size="lg">
                    <Link to="/booking">Select Plan</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-border">
                <CardHeader className="text-center pb-8">
                  <div className="mb-4 text-4xl font-bold">$299</div>
                  <CardTitle className="text-2xl">Priority 60-Minute</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-center text-muted-foreground">
                    Our fastest turnaround with builder verification.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Everything in Builder Verification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">60-minute delivery guarantee</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Priority processing</span>
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full rounded-full" size="lg">
                    <Link to="/booking">Select Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> If major issues are found, you may be recommended to obtain a full physical inspection through our partner network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Made for Every Property Customer
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <CardTitle>Buyers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fast, affordable pre-purchase insights
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <CardTitle>Sellers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pre-listing inspections that increase transparency
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <CardTitle>Investors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Perfect for repeated checks and rental assessments
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <CardTitle>Real Estate Agents</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Speed up campaigns and support interstate buyers
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <CardTitle>Builders/Verifiers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Earn remotely with light, flexible work
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-cream to-amber-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Why Thousands Are Switching to Open Home Mate
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                'No scheduling delays',
                'No onsite inspector required',
                'Covers areas inspectors often avoid',
                'AI consistency + builder accuracy',
                'Faster than traditional inspections',
                'Affordable, transparent pricing',
                'Reports you can trust',
                'Perfect for interstate buyers',
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-amber-600" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHEN FULL INSPECTION NEEDED */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <Card className="rounded-2xl border-2 border-amber-500/50 bg-amber-50">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center text-2xl">
                  When a Physical Inspection Is Recommended
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-center text-muted-foreground">
                  If our system detects signs of:
                </p>
                <ul className="space-y-2 mx-auto max-w-md">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600">•</span>
                    <span>Major structural movement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600">•</span>
                    <span>Severe moisture or damp</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600">•</span>
                    <span>Roof failure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600">•</span>
                    <span>Electrical hazards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600">•</span>
                    <span>Serious drainage issues</span>
                  </li>
                </ul>
                <p className="text-center text-muted-foreground pt-4">
                  We may advise you to obtain a full on-site inspection. We partner with qualified inspectors who can provide this service when necessary.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-amber-50 to-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: 'Is this as accurate as a physical inspection?',
                  a: 'For visible issues, yes. We also recommend full inspections when major risks are detected.',
                },
                {
                  q: 'Does this replace a formal building inspection?',
                  a: 'Not in all cases. It is designed as a visual pre-purchase assessment.',
                },
                {
                  q: 'What equipment do I need?',
                  a: 'Just your smartphone.',
                },
                {
                  q: 'How long does it take?',
                  a: 'Most reports are delivered within 60 minutes.',
                },
                {
                  q: 'What if the video quality is bad?',
                  a: 'We will notify you to rescan any unclear areas.',
                },
                {
                  q: 'Is the AI reliable?',
                  a: 'All findings are reviewed and verified by qualified builders.',
                },
              ].map((faq, idx) => (
                <Card key={idx} className="rounded-2xl border-2 border-amber-200/50">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <Card className="rounded-2xl border-2 border-border">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Important Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  Open Home Mate provides a visual, non-invasive inspection based on video supplied by the customer. It does not replace a full on-site inspection where major structural or safety concerns are suspected. Findings are limited to visible elements captured in the video. Hidden defects behind walls, floors, ceilings, or coverings cannot be detected. If major risks are identified, a full on-site inspection is recommended.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to Inspect Your Next Property?
            </h2>
            <p className="text-xl text-amber-50">
              Fast, affordable, AI-powered inspections you can trust.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link to="/booking">
                  Start an Inspection
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-white text-white hover:bg-white hover:text-amber-600">
                <a href="#sample-report">
                  <Download className="mr-2 h-5 w-5" />
                  Download Sample Report
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
