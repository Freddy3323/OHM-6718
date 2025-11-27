import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  Video,
  Heart,
  FileCheck,
  Shield,
  Clock,
  Calendar,
  MessageSquare,
  Award,
  Sparkles,
  Home as HomeIcon,
  Star,
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
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition">
              Services
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition">
              How It Works
            </a>
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition">
              Why Choose Us
            </a>
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                Dashboard
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-md">
                Book My Inspection
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
                30+ Years of Trusted Expertise
              </Badge>
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight">
                  Your Builder In Your Pocket
                </h1>
                <p className="text-2xl text-primary font-semibold">
                  Live Remote Building Inspections via Zoom
                </p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Get expert building inspections from the comfort of your home. Join a live video call with a qualified builder who'll guide you through every detail, answer all your questions, and deliver a comprehensive report instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto rounded-full shadow-lg hover:shadow-xl transition-all">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book My Inspection
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto rounded-full border-2 border-primary text-primary hover:bg-amber-50"
                  onClick={() => window.location.href = 'sms:0468046283'}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chat With Us
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
                    <div className="font-semibold text-foreground">10,000+ Happy Homeowners</div>
                    <div className="text-muted-foreground">99.8% Customer Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/30 to-amber-600/20 rounded-3xl blur-3xl" />
              <img
                src="/branding-hero.png"
                alt="Professional Building Inspector"
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

      <section id="services" className="py-24 bg-gradient-to-b from-background to-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 rounded-full border-primary/30 text-primary">
              What We Offer
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Expert Support You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Combining decades of professional experience with cutting-edge care for thorough, reliable inspections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all rounded-3xl bg-card">
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Save Time & Travel</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Live video inspections via Zoom with real-time interaction. No need to be on-site—inspect from anywhere, anytime.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    HD Video Quality
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    Real-time Communication
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    Recorded for Your Records
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all rounded-3xl bg-card">
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Smart & Reliable</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced technology analyzes live video to identify potential issues instantly, ensuring nothing is missed.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    Instant Recognition
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    Australian Standards Database
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    99.8% Accuracy
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all rounded-3xl bg-card">
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                  <FileCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Clear Answers, Peace of Mind</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive reports generated in real-time during inspection, delivered immediately after completion.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    Easy-to-Read PDF Format
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    Photo Documentation
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    Standards Compliance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 rounded-full border-primary/30 text-primary">
              Simple & Easy
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get your professional building inspection in just four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-semibold text-foreground">Book in Minutes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Choose your preferred date and time. Fill in your property details and confirm your booking instantly online.
                </p>
              </div>
              <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-amber-300 to-transparent -z-10" />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-semibold text-foreground">We'll Confirm & Connect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Receive instant confirmation via SMS and email with your Zoom meeting details for the inspection.
                </p>
              </div>
              <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-amber-300 to-transparent -z-10" />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-semibold text-foreground">Join Your Personal Inspection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join the video call as your expert builder conducts a thorough inspection and answers all your questions.
                </p>
              </div>
              <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-amber-300 to-transparent -z-10" />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  4
                </div>
                <h3 className="text-xl font-semibold text-foreground">Get Your Report Instantly</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Receive your comprehensive inspection report immediately after completion with all findings clearly documented.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-gradient-to-b from-amber-50/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img
                src="/virtual-inspection.png"
                alt="Virtual Inspection"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="space-y-8">
              <Badge variant="outline" className="rounded-full border-primary/30 text-primary">Why Choose Us</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Convenience Meets Expertise
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our approach combines professional expertise with modern convenience to deliver unmatched inspection quality and peace of mind.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Heart className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground mb-2">Confident Decisions</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Understand your property's condition clearly so you can buy or sell with complete confidence and peace of mind.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <HomeIcon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground mb-2">Clear Reports That Make Sense</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Easy-to-understand reports with thousands of Australian building standards and defect references.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Clock className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground mb-2">Instant Clarity</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Professional reports created automatically during inspection with all issues documented and explained clearly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-8 order-2 md:order-1">
              <Badge variant="outline" className="rounded-full border-primary/30 text-primary">Australian Compliance</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Built for Australian Building Standards
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our system is specifically designed around Australian building codes, NCC requirements, and NSW Building Commission standards.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground mb-2">NCC Compliant</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      All inspections reference National Construction Code requirements and guidelines for your protection.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <FileCheck className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground mb-2">Standards Reference</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Every finding linked to relevant Australian Standards for complete transparency and clarity.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground mb-2">Qualified Professionals</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      All inspections conducted by licensed builders with 30+ years combined experience you can trust.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/defect-detection.png"
                alt="Defect Detection"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
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
              Trusted by Thousands of Homeowners
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of happy customers who've experienced our professional, caring service
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-3">Licensed & Insured</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Full professional coverage for your peace of mind</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-3">30+ Years</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Of trusted professional experience</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle2 className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-3">10,000+</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Happy homeowners served</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg rounded-3xl bg-card">
              <CardContent className="p-8">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Star className="h-10 w-10 text-white fill-white" />
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-3">99.8%</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Customer satisfaction rate</p>
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
              Ready to Get Your Property Inspected?
            </h2>
            <p className="text-xl text-amber-50 leading-relaxed">
              Book your live video building inspection today and receive your comprehensive report instantly. Your peace of mind is just a click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/booking">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 w-full sm:w-auto rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book My Inspection
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto rounded-full font-semibold"
                onClick={() => window.location.href = 'sms:0468046283'}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat With Your Builder
              </Button>
            </div>
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-amber-50">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                30+ Years Experience
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                99.8% Satisfaction
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Instant Reports
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
