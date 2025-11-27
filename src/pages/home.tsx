import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  Video,
  Calendar,
  MessageSquare,
  Award,
  Home as HomeIcon,
  Star,
  DollarSign,
  Zap,
  Users,
  ThumbsUp,
  XCircle,
  Eye,
  AlertTriangle,
  FileText,
  HelpCircle,
  Shield,
  Clock,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="OpenHomeMate"
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground">OpenHomeMate</span>
              <span className="text-xs text-muted-foreground">Your Builder In Your Pocket</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition">
              Pricing
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition">
              How It Works
            </a>
            <a href="#what-we-check" className="text-sm font-medium text-muted-foreground hover:text-primary transition">
              What We Check
            </a>
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                Dashboard
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-md">
                Book Video Walkthrough
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-background to-amber-50/30 -z-10" />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit rounded-full px-4 py-1.5 shadow-sm">
                <Award className="h-3 w-3 mr-1.5" />
                Licensed Builder • 25+ Years Experience
              </Badge>
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight">
                  Your Builder In Your Pocket
                </h1>
                <p className="text-2xl text-primary font-semibold">
                  Get expert building advice during any open home—live via video call
                </p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Attending an open home? Don't go alone. Video call with Matt, a licensed builder with 25+ years of experience, DURING your walkthrough. He'll guide you on what to check, spot red flags, and give instant honest feedback. You film, he watches, you get answers—all in 15-30 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto rounded-full shadow-lg hover:shadow-xl transition-all">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Video Walkthrough - $129
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto rounded-full border-2 border-primary text-primary hover:bg-amber-50"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See Pricing
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-white text-xs border-2 border-background">
                      <Star className="w-4 h-4 fill-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs border-2 border-background">
                      <Star className="w-4 h-4 fill-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-white text-xs border-2 border-background">
                      <Star className="w-4 h-4 fill-white" />
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">Fast, Affordable, Honest</div>
                    <div className="text-muted-foreground">$79-$199 • 15-30 Minutes</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/30 to-amber-600/20 rounded-3xl blur-3xl" />
              <img
                src="/branding-hero.png"
                alt="Licensed Builder Matt - Video Property Walkthroughs"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-amber-50 via-amber-100/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,166,35,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <Badge variant="outline" className="mb-4 rounded-full border-primary/30 text-primary bg-background/50 backdrop-blur-sm">
              <Video className="h-3 w-3 mr-1.5" />
              See It In Action
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              See How It Works
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Watch a live building inspection in action and discover how easy it is to get expert guidance from anywhere
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 p-2">
              <div className="relative rounded-2xl overflow-hidden bg-black shadow-inner">
                <video
                  className="w-full aspect-video"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="OpenHomeMate demo video showing live building inspection"
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="text-center mt-12 space-y-6">
              <p className="text-lg text-muted-foreground">
                See why thousands of homeowners trust OpenHomeMate for their building inspections
              </p>
              <Link href="/booking">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all group"
                >
                  <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Ready to Book Your Inspection?
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-gradient-to-b from-background to-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 rounded-full border-primary/30 text-primary">
              Simple Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Fast, Affordable Video Walkthroughs
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Compare to $600-$900 traditional inspections. Choose the tier that fits your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-border shadow-lg hover:shadow-xl transition-all rounded-3xl bg-card">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-foreground">Basic</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-foreground">$79</span>
                  </div>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>15-minute video call with Matt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>You film, he guides what to check</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Instant verbal feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Red flags identified</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Perfect for quick second opinion</span>
                  </li>
                </ul>
                <Link href="/booking" className="block">
                  <Button size="lg" variant="outline" className="w-full rounded-full border-2">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-4 border-primary shadow-2xl hover:shadow-3xl transition-all rounded-3xl bg-card relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1.5 text-sm font-semibold rounded-bl-2xl">
                MOST POPULAR
              </div>
              <CardContent className="p-8 space-y-6 pt-12">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-foreground">Standard</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-primary">$129</span>
                  </div>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>30-minute</strong> video call with Matt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Detailed guided walkthrough</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>You show: walls, ceilings, floors, kitchen, bathroom, yard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Comprehensive verbal feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Q&A time included</span>
                  </li>
                </ul>
                <Link href="/booking" className="block">
                  <Button size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 shadow-lg">
                    Book Standard - $129
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-border shadow-lg hover:shadow-xl transition-all rounded-3xl bg-card">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-foreground">Premium</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-foreground">$199</span>
                  </div>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>30-minute video call with Matt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Everything in Standard PLUS:</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Written summary emailed after call</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Key findings documented</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Photo references from your video</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Repair advice in writing</span>
                  </li>
                </ul>
                <Link href="/booking" className="block">
                  <Button size="lg" variant="outline" className="w-full rounded-full border-2">
                    Get Premium
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center max-w-4xl mx-auto">
            <div className="bg-amber-50 rounded-3xl p-8 border-2 border-amber-200">
              <h4 className="font-bold text-xl text-foreground mb-4">Add-Ons ($49 each)</h4>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Repair Cost Estimate</p>
                    <p className="text-sm text-muted-foreground">Get ballpark figures for any issues found</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Video className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Call Recording</p>
                    <p className="text-sm text-muted-foreground">Download link sent to you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 rounded-full border-primary/30 text-primary">
              Simple & Fast
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From booking to expert feedback in just 5 easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-semibold text-foreground">Book Online</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Choose your time slot ($79/$129/$199), pay instantly, get confirmation
                </p>
              </div>
              <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-amber-300 to-transparent -z-10" />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-semibold text-foreground">Share Property Details</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Send us the listing link and open home date/time
                </p>
              </div>
              <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-amber-300 to-transparent -z-10" />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-semibold text-foreground">You Attend, We Guide</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Go to the open home with your smartphone. We'll call you at the scheduled time.
                </p>
              </div>
              <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-amber-300 to-transparent -z-10" />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  4
                </div>
                <h3 className="text-xl font-semibold text-foreground">Live Video Walkthrough</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  You film and show us around. Matt guides you: "Show me under the sink," "Pan up to that ceiling"
                </p>
              </div>
              <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-amber-300 to-transparent -z-10" />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  5
                </div>
                <h3 className="text-xl font-semibold text-foreground">Instant Expert Feedback</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Get honest answers during the call. Know exactly what you're dealing with before you make an offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-check" className="py-24 bg-gradient-to-b from-amber-50/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 rounded-full border-primary/30 text-primary">
              <Eye className="h-3 w-3 mr-1.5" />
              Visual-Only Assessment
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What You'll Show Us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              During the video call, Matt will guide you to check
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Cracking</h4>
                <p className="text-sm text-muted-foreground">Walls, ceilings, floors</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Moisture</h4>
                <p className="text-sm text-muted-foreground">Water damage signs</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Roofing</h4>
                <p className="text-sm text-muted-foreground">Roofline condition</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Flooring</h4>
                <p className="text-sm text-muted-foreground">Visible issues</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Plumbing/Electrical</h4>
                <p className="text-sm text-muted-foreground">Visible concerns</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Yard</h4>
                <p className="text-sm text-muted-foreground">Drainage, structures</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Fresh Paint Red Flags</h4>
                <p className="text-sm text-muted-foreground">Covering up issues?</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <HomeIcon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Structural</h4>
                <p className="text-sm text-muted-foreground">General concerns</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto bg-red-50 border-2 border-red-200 rounded-3xl p-8">
            <h3 className="font-bold text-xl text-foreground mb-4 flex items-center gap-2">
              <XCircle className="h-6 w-6 text-red-600" />
              What We DON'T Do
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Use tools or equipment</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Access restricted areas (roof cavities, under floors)</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Provide formal pre-purchase reports</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Written guarantees or warranties</span>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-br from-amber-50 to-amber-100/50 border-2 border-amber-300 rounded-3xl p-8">
            <h3 className="font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
              <Video className="h-8 w-8 text-primary" />
              You Control the Camera
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Matt tells you where to point your phone. You're his eyes at the property.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-foreground">You Just Need:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Your smartphone (iPhone or Android)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Good mobile data or WiFi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ability to walk around property</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-foreground">We Provide:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Video call link (FaceTime, Zoom, or WhatsApp - your choice)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Scheduled time slot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Matt's expert guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 rounded-full border-primary/30 text-primary">
              Why OpenHomeMate
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Fast, Affordable, Convenient
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The smart way to get expert eyes on a property before committing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all rounded-3xl bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Fast</h3>
                <p className="text-muted-foreground leading-relaxed">
                  15-30 minutes. No waiting weeks for a full inspection.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all rounded-3xl bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Affordable</h3>
                <p className="text-muted-foreground leading-relaxed">
                  $79-$199. Compare that to $600-$900 traditional inspections.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all rounded-3xl bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Convenient</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Perfect for interstate buyers. Send a friend/family with their phone if you can't attend.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all rounded-3xl bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Licensed</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Matt has 25+ years building experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all rounded-3xl bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                  <ThumbsUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Honest</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Zero sugar-coating. Straight-shooting Aussie advice.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all rounded-3xl bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Instant</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get answers during the open home, not days later.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-amber-50/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 rounded-full border-primary/30 text-primary">
              <Users className="h-3 w-3 mr-1.5" />
              Who It's For
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Perfect For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            <Card className="border-0 shadow-lg rounded-3xl bg-card text-center">
              <CardContent className="p-6 space-y-3">
                <div className="text-4xl mb-2">🏠</div>
                <h4 className="font-semibold text-foreground">First-Home Buyers</h4>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card text-center">
              <CardContent className="p-6 space-y-3">
                <div className="text-4xl mb-2">✈️</div>
                <h4 className="font-semibold text-foreground">Interstate Buyers</h4>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card text-center">
              <CardContent className="p-6 space-y-3">
                <div className="text-4xl mb-2">💼</div>
                <h4 className="font-semibold text-foreground">Busy Professionals</h4>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card text-center">
              <CardContent className="p-6 space-y-3">
                <div className="text-4xl mb-2">💰</div>
                <h4 className="font-semibold text-foreground">Property Investors</h4>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card text-center">
              <CardContent className="p-6 space-y-3">
                <div className="text-4xl mb-2">🤔</div>
                <h4 className="font-semibold text-foreground">Anyone Needing Quick Advice</h4>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 rounded-full border-primary/30 text-primary">
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real feedback from real homebuyers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8 space-y-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "I was at an open home and FaceTimed Matt. He spotted water damage under the sink I completely missed. Saved me $30k!"
                </p>
                <div className="pt-4">
                  <p className="font-semibold text-foreground">— Sarah</p>
                  <p className="text-sm text-muted-foreground">First Home Buyer</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8 space-y-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "I'm in Melbourne, property was in Sydney. My sister attended with her phone and Matt guided her through everything. Genius!"
                </p>
                <div className="pt-4">
                  <p className="font-semibold text-foreground">— David</p>
                  <p className="text-sm text-muted-foreground">Interstate Investor</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8 space-y-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "Matt told me 'that crack is cosmetic, don't stress.' Gave me confidence to make an offer. Best $129 I spent."
                </p>
                <div className="pt-4">
                  <p className="font-semibold text-foreground">— Emma</p>
                  <p className="text-sm text-muted-foreground">Busy Professional</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-amber-50/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 rounded-full border-primary/30 text-primary">
              <HelpCircle className="h-3 w-3 mr-1.5" />
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8 space-y-4">
                <h4 className="font-bold text-xl text-foreground flex items-start gap-3">
                  <span className="text-primary">Q:</span>
                  Does the builder come to the property?
                </h4>
                <p className="text-muted-foreground leading-relaxed ml-8">
                  <strong>A:</strong> No. You attend the open home, and Matt joins you via video call. You film and show him around while he guides you on what to check.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8 space-y-4">
                <h4 className="font-bold text-xl text-foreground flex items-start gap-3">
                  <span className="text-primary">Q:</span>
                  What if I can't attend the open home?
                </h4>
                <p className="text-muted-foreground leading-relaxed ml-8">
                  <strong>A:</strong> No problem! Send a friend, family member, or even your real estate agent with their phone. Matt guides them on what to film.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8 space-y-4">
                <h4 className="font-bold text-xl text-foreground flex items-start gap-3">
                  <span className="text-primary">Q:</span>
                  What if the agent doesn't allow filming?
                </h4>
                <p className="text-muted-foreground leading-relaxed ml-8">
                  <strong>A:</strong> Most agents are fine with buyers filming for personal records. If there's an issue, discreetly explain you're consulting with a builder remotely. Or book a private inspection instead of open home.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8 space-y-4">
                <h4 className="font-bold text-xl text-foreground flex items-start gap-3">
                  <span className="text-primary">Q:</span>
                  Do I need good internet?
                </h4>
                <p className="text-muted-foreground leading-relaxed ml-8">
                  <strong>A:</strong> Yes, mobile data or WiFi. FaceTime, Zoom, and WhatsApp all work. 4G is usually fine.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8 space-y-4">
                <h4 className="font-bold text-xl text-foreground flex items-start gap-3">
                  <span className="text-primary">Q:</span>
                  Can you see everything on video?
                </h4>
                <p className="text-muted-foreground leading-relaxed ml-8">
                  <strong>A:</strong> We can assess anything you show us with your camera. But we can't see inside walls, roof spaces, or under floors—just like you can't.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8 space-y-4">
                <h4 className="font-bold text-xl text-foreground flex items-start gap-3">
                  <span className="text-primary">Q:</span>
                  Is this a full building inspection?
                </h4>
                <p className="text-muted-foreground leading-relaxed ml-8">
                  <strong>A:</strong> No. This is a quick visual screening. Think of it as "builder's eyes for 30 minutes" to help you decide if a property is worth pursuing further.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8 space-y-4">
                <h4 className="font-bold text-xl text-foreground flex items-start gap-3">
                  <span className="text-primary">Q:</span>
                  Is this as good as a full inspection?
                </h4>
                <p className="text-muted-foreground leading-relaxed ml-8">
                  <strong>A:</strong> No. This is a quick visual screening to help you decide if a property is worth pursuing further. For properties you're seriously considering, we recommend a full pre-purchase inspection.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8 space-y-4">
                <h4 className="font-bold text-xl text-foreground flex items-start gap-3">
                  <span className="text-primary">Q:</span>
                  When do I get the written summary?
                </h4>
                <p className="text-muted-foreground leading-relaxed ml-8">
                  <strong>A:</strong> Premium tier only. Sent via email within 24 hours of your call.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8 space-y-4">
                <h4 className="font-bold text-xl text-foreground flex items-start gap-3">
                  <span className="text-primary">Q:</span>
                  Can I record the call myself?
                </h4>
                <p className="text-muted-foreground leading-relaxed ml-8">
                  <strong>A:</strong> Yes! Or add the $49 recording add-on and we'll send you a professional copy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8 space-y-4">
                <h4 className="font-bold text-xl text-foreground flex items-start gap-3">
                  <span className="text-primary">Q:</span>
                  How fast do I get feedback?
                </h4>
                <p className="text-muted-foreground leading-relaxed ml-8">
                  <strong>A:</strong> Instant! During the video call. Premium tier includes written summary sent within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-4 border-amber-300 shadow-2xl rounded-3xl bg-gradient-to-br from-amber-50 to-background">
              <CardContent className="p-12 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      Important: What This Service Is (And Isn't)
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      OpenHomeMate is a remote visual assessment service. You film the property via your smartphone, and our licensed builder provides real-time expert opinion.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-bold text-xl text-foreground flex items-center gap-2">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                      Our Service Includes:
                    </h3>
                    <ul className="space-y-3 text-muted-foreground ml-8">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Live video call guidance (15-30 minutes)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Visual assessment based on what you show us
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Verbal feedback in real-time
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        General builder opinion from 25+ years experience
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Optional written summary (Premium)
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-xl text-foreground flex items-center gap-2">
                      <XCircle className="h-6 w-6 text-red-600" />
                      Our Service Does NOT Include:
                    </h3>
                    <ul className="space-y-3 text-muted-foreground ml-8">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        Physical attendance at the property
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        Use of tools or testing equipment
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        Access to restricted areas (roofs, subfloors, wall cavities)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        Formal pre-purchase inspection reports
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        Warranties or guarantees
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        Compliance with AS 4349.1 standards
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-100 rounded-2xl p-6 border-2 border-amber-300">
                  <h3 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Important Limitations
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We can only assess what you show us on camera. We cannot see inside walls, under floors, or in roof spaces. Lighting and camera quality affect our assessment. This is <strong>NOT</strong> a substitute for a comprehensive building inspection.
                  </p>
                </div>

                <div className="bg-primary/10 rounded-2xl p-6 border-2 border-primary/30">
                  <h3 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Recommendation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Use OpenHomeMate for quick property screening. For properties you're seriously considering purchasing, we <strong>recommend</strong> a full pre-purchase inspection with physical site access.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 rounded-full border-primary/30 text-primary">
              Trusted Excellence
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Licensed & Experienced
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional service you can trust
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-3">Licensed & Insured</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Full professional coverage</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-3">25+ Years</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Building experience</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-3">15-30 Min</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Fast turnaround</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <DollarSign className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-3">$79-$199</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Affordable pricing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready to Book Your Video Walkthrough?
            </h2>
            <p className="text-xl text-amber-50 leading-relaxed">
              Get expert builder's eyes on your next open home. Fast, affordable, honest advice in 15-30 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/booking">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 w-full sm:w-auto rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Now - From $79
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto rounded-full font-semibold"
                onClick={() => window.location.href = 'sms:0468046283'}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat With Matt
              </Button>
            </div>
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-amber-50">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                25+ Years Experience
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Fast & Affordable
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Instant Feedback
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
