import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  CheckCircle2,
  Video,
  Brain,
  FileCheck,
  Shield,
  Clock,
  Phone,
  Calendar,
  MessageSquare,
  Award,
  Zap,
  Search,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="OpenHomeMate"
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground">OpenHomeMate</span>
              <span className="text-xs text-muted-foreground">Building Inspection Specialists</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
              Services
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
              How It Works
            </a>
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                Dashboard
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                Book Inspection
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-background -z-10" />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                <Award className="h-3 w-3 mr-1" />
                30+ Years of Expertise
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                AI-Powered Building Inspections
              </h1>
              <p className="text-lg text-muted-foreground">
                Professional Australian residential building inspections with cutting-edge AI defect detection. Get comprehensive reports delivered instantly through live virtual inspections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Now
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-2xl font-bold text-foreground">10,000+</div>
                  <div className="text-sm text-muted-foreground">Inspections Completed</div>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <div className="text-2xl font-bold text-foreground">99.8%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <div className="text-2xl font-bold text-foreground">24hr</div>
                  <div className="text-sm text-muted-foreground">Report Delivery</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl blur-3xl" />
              <img
                src="/hero-inspector.png"
                alt="Professional Building Inspector"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Building Inspection Solutions
            </h2>
            <p className="text-muted-foreground">
              Combining decades of professional experience with advanced AI technology for thorough, accurate inspections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-600 transition">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-blue-600/10 flex items-center justify-center">
                  <Video className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Virtual Inspections</h3>
                <p className="text-muted-foreground">
                  Live video inspections via Zoom with real-time interaction. No need to be on-site, we bring the inspection to you.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    HD Video Quality
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Real-time Communication
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Recorded for Reference
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-600 transition">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-blue-600/10 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">AI Defect Detection</h3>
                <p className="text-muted-foreground">
                  Advanced AI analyzes live video to identify potential defects instantly, ensuring nothing is missed.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Instant Recognition
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Australian Standards Database
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    99.8% Accuracy
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-600 transition">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-blue-600/10 flex items-center justify-center">
                  <FileCheck className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Instant Reports</h3>
                <p className="text-muted-foreground">
                  Comprehensive reports generated in real-time during inspection, delivered immediately after completion.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Professional PDF Format
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Photo Documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Standards Compliance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">
              Simple Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              Get your professional building inspection in just four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-foreground">Book Online</h3>
                <p className="text-muted-foreground">
                  Choose your preferred date and time. Fill in property details and confirm your booking instantly.
                </p>
              </div>
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -z-10" />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-foreground">Get Confirmed</h3>
                <p className="text-muted-foreground">
                  Receive instant confirmation via SMS and email with Zoom meeting details for your inspection.
                </p>
              </div>
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -z-10" />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-foreground">Live Inspection</h3>
                <p className="text-muted-foreground">
                  Join the video call as our expert conducts a thorough inspection with AI-powered defect detection.
                </p>
              </div>
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -z-10" />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold text-foreground">Receive Report</h3>
                <p className="text-muted-foreground">
                  Get your comprehensive inspection report immediately after completion with all findings documented.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/virtual-inspection.png"
                alt="Virtual Inspection"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-6">
              <Badge variant="outline">Technology Advantage</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Advanced Virtual Inspection Platform
              </h2>
              <p className="text-muted-foreground text-lg">
                Our proprietary platform combines professional expertise with cutting-edge AI to deliver unmatched inspection quality and convenience.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Real-Time AI Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      AI identifies potential defects during live inspection, alerting the inspector immediately.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <Search className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Comprehensive Defect Database</h4>
                    <p className="text-sm text-muted-foreground">
                      Access to thousands of Australian residential building defects and standards references.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Instant Report Generation</h4>
                    <p className="text-sm text-muted-foreground">
                      Professional reports created automatically during inspection with all defects documented.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <Badge variant="outline">Australian Compliance</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Built for Australian Building Standards
              </h2>
              <p className="text-muted-foreground text-lg">
                Our system is specifically designed around Australian building codes, NCC requirements, and NSW Building Commission standards.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">NCC Compliant</h4>
                    <p className="text-sm text-muted-foreground">
                      All inspections reference National Construction Code requirements and guidelines.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Standards Reference</h4>
                    <p className="text-sm text-muted-foreground">
                      Every defect linked to relevant Australian Standards for complete transparency.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Certified Inspectors</h4>
                    <p className="text-sm text-muted-foreground">
                      All inspections conducted by licensed professionals with 30+ years combined experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/defect-detection.png"
                alt="Defect Detection"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Your Property Inspected?
            </h2>
            <p className="text-xl text-blue-100">
              Book your AI-powered building inspection today and receive your comprehensive report within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Inspection Now
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat with AI Assistant
              </Button>
            </div>
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                30+ Years Experience
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                99.8% Accuracy
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                24hr Delivery
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="OpenHomeMate" className="h-8 w-auto" />
                <span className="font-bold text-lg">OpenHomeMate</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional building inspections powered by AI technology and decades of expertise.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-foreground">Virtual Inspections</a></li>
                <li><a href="#services" className="hover:text-foreground">AI Defect Detection</a></li>
                <li><a href="#services" className="hover:text-foreground">Instant Reports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/dashboard" className="hover:text-foreground">Dashboard</Link></li>
                <li><Link href="/booking" className="hover:text-foreground">Book Inspection</Link></li>
                <li><a href="#" className="hover:text-foreground">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@openhomemate.com.au</li>
                <li>Australia</li>
                <li>
                  <Link href="/terms" className="hover:text-foreground">Terms</Link> | <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} OpenHomeMate. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
