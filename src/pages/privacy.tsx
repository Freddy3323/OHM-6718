import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="OpenHouseMate.com" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground">OpenHouseMate.com</span>
              <span className="text-xs text-muted-foreground">Building Inspection Specialists</span>
            </div>
          </div>
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              OpenHouseMate.com ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our building inspection services, website, and mobile applications. This policy complies with the Australian Privacy Act 1988 and the General Data Protection Regulation (GDPR) for international users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">2.1 Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">We collect the following types of personal information:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Contact details (name, email address, phone number)</li>
              <li>Property information (address, property type)</li>
              <li>Booking and appointment information</li>
              <li>Payment and billing information</li>
              <li>Communication records (emails, SMS messages, chat logs)</li>
              <li>User account credentials</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">2.2 Technical Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, time spent, features used)</li>
              <li>Location data (if you enable location services)</li>
              <li>Cookies and tracking technologies</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">2.3 Inspection Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Video recordings of virtual inspections</li>
              <li>Photographs and images of properties</li>
              <li>AI-generated defect detection data</li>
              <li>Inspection reports and findings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Providing building inspection services</li>
              <li>Scheduling and conducting virtual inspections via Zoom</li>
              <li>Generating and delivering inspection reports</li>
              <li>Processing payments and managing billing</li>
              <li>Communicating with you via email, SMS (Twilio), and MessageMind AI assistant</li>
              <li>Improving our AI defect detection algorithms</li>
              <li>Complying with legal obligations and Australian building standards</li>
              <li>Marketing and promotional communications (with your consent)</li>
              <li>Analyzing usage to improve our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the following third-party services which may collect and process your data:
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Zoom Video Communications</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use Zoom for virtual inspections. Zoom's privacy policy applies to data collected during video calls. Video recordings are stored securely and only accessible to authorized personnel.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">4.2 Twilio (SMS Communications)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use Twilio to send appointment confirmations and notifications. Your phone number is processed according to Twilio's privacy policy.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">4.3 MessageMind AI Assistant</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our AI assistant (phone: 0468 046 283) uses MessageMind technology to provide customer support. Chat logs and voice data are processed to improve service quality.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">4.4 Payment Processors</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Payment information is processed by secure third-party payment providers. We do not store complete credit card information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Storage and Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Data is stored on secure servers in Australia</li>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Staff training on data protection and privacy</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Inspection reports and recordings are retained for 7 years in accordance with Australian building industry standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">Under Australian privacy law and GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your data (subject to legal retention requirements)</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Objection:</strong> Object to processing of your personal data</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, contact us at <a href="mailto:info@openhousemate.com" className="text-primary hover:underline">info@openhousemate.com</a> or call 0468 046 283.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to improve user experience, analyze website usage, and deliver personalized content. You can control cookie preferences through your browser settings. Note that disabling cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Some third-party services (e.g., Zoom, Twilio) may transfer data internationally. We ensure appropriate safeguards are in place, including standard contractual clauses and adherence to data protection frameworks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For privacy-related inquiries or to exercise your rights:
            </p>
            <div className="bg-muted/50 p-6 rounded-2xl space-y-2">
              <p className="text-foreground font-semibold">OpenHouseMate.com</p>
              <p className="text-muted-foreground">Email: <a href="mailto:info@openhousemate.com" className="text-primary hover:underline">info@openhousemate.com</a></p>
              <p className="text-muted-foreground">Phone: <a href="tel:0468046283" className="text-primary hover:underline">0468 046 283</a></p>
              <p className="text-muted-foreground">Address: Sydney, Australia</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Complaints</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you believe we have breached your privacy rights, you can lodge a complaint with us. If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.oaic.gov.au</a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
