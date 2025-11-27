import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle2,
  Clock,
  Users,
  Globe,
  DollarSign,
  Zap,
  BarChart,
  ChevronRight,
  Mail,
} from 'lucide-react';

export default function AgentsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-amber-50 via-cream to-amber-100/30 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,166,35,0.1),transparent_50%)]" />
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="inline-block rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-700">
              For Real Estate Agents
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              A Better Inspection Solution for Real Estate Agents
            </h1>
            <p className="text-xl text-muted-foreground">
              Give your buyers confidence, speed up campaigns, and close deals faster with AI-powered building
              inspections. No scheduling delays, no inspector coordination, no waiting.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="#contact">
                  Become a Partner
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/booking">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Why Real Estate Agents Choose Open Home Mate
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Faster Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No need to wait weeks for traditional inspectors. Reports delivered in 60 minutes mean buyers
                    can make decisions while the property is still fresh in their mind.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Better Buyer Confidence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    AI-powered visual inspections with builder verification give buyers peace of mind without the
                    delays and uncertainty of traditional inspections.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Perfect for Interstate Buyers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Interstate and overseas buyers can get professional building assessments without flying in. A
                    game-changer for expanding your buyer pool.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Affordable for Vendors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    At $149–$299, pre-listing inspections are now accessible to more vendors. Transparency builds
                    trust and reduces negotiation friction.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>No Scheduling Delays</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No coordinating inspectors, vendors, and buyers. Video can be recorded anytime, and reports are
                    delivered within hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <BarChart className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>White-Label Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Custom dashboards and white-label reports available for high-volume agencies. Your branding,
                    our technology.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gradient-to-br from-amber-50 to-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How It Works for Agents</h2>
            </div>

            <div className="space-y-6">
              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardContent className="flex items-start gap-6 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white text-xl font-bold">
                    1
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Recommend Open Home Mate to your buyers</h3>
                    <p className="text-muted-foreground">
                      Provide your buyers with a fast, affordable inspection alternative. We handle everything from
                      there.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardContent className="flex items-start gap-6 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white text-xl font-bold">
                    2
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Buyer uploads video or joins guided Zoom</h3>
                    <p className="text-muted-foreground">
                      They walk through the property with their smartphone. We guide every step to ensure quality
                      footage.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardContent className="flex items-start gap-6 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white text-xl font-bold">
                    3
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">AI + builder verification</h3>
                    <p className="text-muted-foreground">
                      Our AI scans for defects, and qualified builders verify findings. Professional-grade accuracy
                      without the delays.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardContent className="flex items-start gap-6 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white text-xl font-bold">
                    4
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Report delivered in 60 minutes</h3>
                    <p className="text-muted-foreground">
                      Clear, visual, builder-verified reports help buyers make confident decisions quickly.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Partnership Options</h2>
              <p className="text-lg text-muted-foreground">
                We offer flexible partnership models for agencies of all sizes
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Referral Partners</CardTitle>
                  <CardDescription>Perfect for individual agents and small agencies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Refer buyers and earn commission</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Marketing materials provided</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">No setup fees</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Track referrals via dashboard</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-4 border-amber-500 shadow-lg relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-sm font-bold text-white">
                  POPULAR
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl">Enterprise Partners</CardTitle>
                  <CardDescription>For high-volume agencies and franchises</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Bulk pricing discounts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">White-label reports with your branding</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Custom agency dashboard</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Priority support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">API integration available</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-24 bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to Partner with Open Home Mate?
            </h2>
            <p className="text-xl text-amber-50">
              Join leading agents who are using AI-powered inspections to close deals faster
            </p>
            <Card className="rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur text-white">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4">
                    <Mail className="h-6 w-6" />
                    <a
                      href="mailto:support@openhomemate.com"
                      className="text-xl font-semibold hover:underline"
                    >
                      support@openhomemate.com
                    </a>
                  </div>
                  <p className="text-amber-100">
                    Or call us at <strong>0468 046 283</strong> to discuss partnership opportunities
                  </p>
                </div>
                <Button asChild size="lg" variant="secondary" className="rounded-full">
                  <Link to="/contact">
                    Contact Us
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
