import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, Clock, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full rounded-2xl border-2 border-amber-200/50">
          <CardContent className="p-12 text-center space-y-6">
            <div className="h-20 w-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-10 w-10 text-amber-600" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-foreground">Message Sent!</h2>
              <p className="text-muted-foreground text-lg">
                Thank you for contacting Open Home Mate. We'll get back to you within 24 hours.
              </p>
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-cream to-background">
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Get in Touch</h1>
              <p className="text-lg text-muted-foreground">
                Have questions? We're here to help. Contact our team for support, partnerships, or general inquiries.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card className="rounded-2xl border-2 border-amber-200/50">
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>Fill out the form below and we'll respond within 24 hours</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="0400 000 000"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Select value={formData.subject} onValueChange={(value) => handleChange('subject', value)}>
                          <SelectTrigger id="subject">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="booking">Booking Support</SelectItem>
                            <SelectItem value="agent">Agent Partnership</SelectItem>
                            <SelectItem value="builder">Builder Application</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="report">Report Question</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us how we can help..."
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          rows={6}
                          required
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full rounded-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="rounded-2xl border-2 border-amber-200/50">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10">
                          <Mail className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">Email</div>
                          <a
                            href="mailto:support@openhomemate.com"
                            className="text-sm text-muted-foreground hover:text-amber-600"
                          >
                            support@openhomemate.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10">
                          <Phone className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">Phone</div>
                          <a
                            href="tel:0468046283"
                            className="text-sm text-muted-foreground hover:text-amber-600"
                          >
                            0468 046 283
                          </a>
                          <p className="text-xs text-muted-foreground mt-1">(MessageMind)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10">
                          <Clock className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">Business Hours</div>
                          <div className="text-sm text-muted-foreground">
                            <p>Monday - Friday: 8am - 6pm</p>
                            <p>Saturday: 9am - 5pm</p>
                            <p>Sunday: Closed</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10">
                          <MapPin className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">Location</div>
                          <p className="text-sm text-muted-foreground">Australia-wide service</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border-2 border-amber-200/50 bg-amber-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-amber-600" />
                      Live Chat
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Need immediate assistance? Chat with our support team during business hours.
                    </p>
                    <Button variant="outline" className="w-full rounded-full" disabled>
                      Start Live Chat
                      <span className="ml-2 text-xs">(Coming Soon)</span>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border-2 border-amber-200/50">
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Looking for quick answers? Check our FAQ section for common questions about our service.
                    </p>
                    <Button asChild variant="outline" className="w-full rounded-full">
                      <Link to="/#faq">View FAQs</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
