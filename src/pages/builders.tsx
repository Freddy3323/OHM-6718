import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle2,
  Home,
  DollarSign,
  MapPin,
  Calendar,
  Laptop,
  GraduationCap,
  ChevronRight,
  Mail,
} from 'lucide-react';

export default function BuildersPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-amber-50 via-cream to-amber-100/30 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,166,35,0.1),transparent_50%)]" />
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="inline-block rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-700">
              For Qualified Builders
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Earn Anywhere as an Open Home Mate Builder Verifier
            </h1>
            <p className="text-xl text-muted-foreground">
              Turn your experience into flexible remote income. No travel, no physical labour, no site visits. Just
              your expertise from the comfort of home.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="#apply">
                  Apply to Become a Verifier
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
                Why Builders Are Joining Open Home Mate
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>No Travel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Review property videos from anywhere. Work from home, a cafe, or even on holiday. No more
                    driving across the city.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>No Physical Labour</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No crawling through subfloors, no climbing ladders, no heat exhaustion. Just your knowledge and
                    experience applied to video analysis.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <Laptop className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Work from Home</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All you need is a laptop and internet connection. Review videos and submit findings through our
                    simple online platform.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>$15–$40 per Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Earn competitive rates for your time. Most reports take 15-30 minutes to review. Stack multiple
                    reports and earn more.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Choose Your Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Work when it suits you. Morning, evening, weekends — completely flexible. Accept jobs only when
                    you're available.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Full Training Provided</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We provide complete onboarding and training on our platform, AI tools, and reporting standards.
                    No prior remote work experience needed.
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
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How Builder Verification Works</h2>
              <p className="text-lg text-muted-foreground">Simple workflow, powerful impact</p>
            </div>

            <div className="space-y-6">
              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardContent className="flex items-start gap-6 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white text-xl font-bold">
                    1
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">You receive a video + AI report</h3>
                    <p className="text-muted-foreground">
                      Our AI has already scanned the property video and flagged potential defects. You'll see
                      timestamped clips, screenshots, and preliminary findings.
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
                    <h3 className="text-xl font-semibold">Review the footage and AI findings</h3>
                    <p className="text-muted-foreground">
                      Watch the video (usually 5-10 minutes long) and assess the AI's accuracy. Confirm, correct, or
                      add findings based on your professional judgement.
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
                    <h3 className="text-xl font-semibold">Add your professional opinion</h3>
                    <p className="text-muted-foreground">
                      Rate severity levels, add recommendations, and provide context. Your insights make the report
                      valuable and actionable.
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
                    <h3 className="text-xl font-semibold">Submit and get paid</h3>
                    <p className="text-muted-foreground">
                      Once submitted, the report is finalized and delivered to the customer. You get paid
                      automatically — typically within 48 hours.
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
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Requirements</h2>
              <p className="text-lg text-muted-foreground">
                We're looking for qualified, experienced building professionals
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <CardTitle>Essential Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Current building license or qualification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Minimum 5 years building experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Knowledge of Australian building codes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Reliable internet connection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Computer or tablet</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50">
                <CardHeader>
                  <CardTitle>Preferred Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Building inspection experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Attention to detail</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Clear written communication</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Comfortable with technology</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                      <span className="text-sm">Ability to work independently</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gradient-to-br from-cream to-amber-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Earnings & Payment</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="rounded-2xl border-2 border-amber-200/50 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-amber-600">$15-$25</CardTitle>
                  <CardDescription>Standard Report</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">15-20 minute review time</p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-4 border-amber-500 shadow-lg text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white">
                  MOST COMMON
                </div>
                <CardHeader className="pt-8">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-amber-600">$25-$35</CardTitle>
                  <CardDescription>Detailed Report</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">20-30 minute review time</p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-amber-200/50 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-amber-600">$35-$40</CardTitle>
                  <CardDescription>Priority Report</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">30+ minute review time</p>
                </CardContent>
              </Card>
            </div>

            <Card className="rounded-2xl border-2 border-amber-200/50 bg-amber-50">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">Payment Details:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                    <span>Paid via direct deposit within 48 hours of submission</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                    <span>Weekly payment summary dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                    <span>Bonuses for high-quality reviews and fast turnaround</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                    <span>Potential to earn $500-$2000+ per week depending on availability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="apply" className="py-20 md:py-24 bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to Join Open Home Mate?
            </h2>
            <p className="text-xl text-amber-50">
              Start earning with flexible, remote building verification work
            </p>
            <Card className="rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur text-white">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4">
                    <Mail className="h-6 w-6" />
                    <a
                      href="mailto:support@openhomemate.com?subject=Builder Verifier Application"
                      className="text-xl font-semibold hover:underline"
                    >
                      support@openhomemate.com
                    </a>
                  </div>
                  <p className="text-amber-100">
                    Or call us at <strong>0468 046 283</strong> to discuss the opportunity
                  </p>
                  <div className="rounded-xl bg-white/10 p-4 text-left">
                    <p className="text-sm text-amber-100">
                      Please include: Your building license number, years of experience, and brief summary of your
                      background
                    </p>
                  </div>
                </div>
                <Button asChild size="lg" variant="secondary" className="rounded-full">
                  <Link to="/contact">
                    Contact Us to Apply
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
