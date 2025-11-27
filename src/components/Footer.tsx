import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-background to-amber-50/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="space-y-6 md:col-span-2">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="OpenHomeMate" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground">OpenHomeMate</span>
                <span className="text-xs text-primary font-medium">Your Builder In Your Pocket</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Live remote building inspections via Zoom. Expert support you can trust, with 30+ years of professional experience.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-2xl bg-amber-100 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <a href="tel:0468046283" className="hover:text-primary transition">0468 046 283</a>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-2xl bg-amber-100 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <a href="mailto:info@openhousemate.com" className="hover:text-primary transition">info@openhousemate.com</a>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-2xl bg-amber-100 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span>Sydney, Australia</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/#services" className="hover:text-primary transition">Virtual Inspections</a></li>
              <li><a href="/#services" className="hover:text-primary transition">Smart Technology</a></li>
              <li><a href="/#services" className="hover:text-primary transition">Instant Reports</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/dashboard" className="hover:text-primary transition">Dashboard</Link></li>
              <li><Link to="/booking" className="hover:text-primary transition">Book Inspection</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition">Terms of Use</Link></li>
              <li><Link to="/data-handling" className="hover:text-primary transition">Data Handling</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 space-y-6">
          <div className="text-xs text-muted-foreground leading-relaxed bg-amber-50/50 p-4 rounded-2xl">
            <strong className="text-foreground">Liability Disclaimer:</strong> Building inspections are visual assessments only. OpenHomeMate and its inspectors are not liable for hidden defects, structural issues not visible during inspection, or subsequent property damage. Professional indemnity insurance details available upon request.
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <div>
              © {new Date().getFullYear()} Matt Friend. All rights reserved. | ABN: To be provided
            </div>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-primary transition">Privacy</Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-primary transition">Terms</Link>
              <span>|</span>
              <Link to="/contact" className="hover:text-primary transition">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
