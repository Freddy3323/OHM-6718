import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="OpenHouseMate.com" className="h-8 w-auto" />
              <span className="font-bold text-lg">OpenHouseMate.com</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional building inspections powered by AI technology and 30+ years of expertise.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:0468046283" className="hover:text-foreground">0468 046 283</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@openhousemate.com" className="hover:text-foreground">info@openhousemate.com</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Sydney, Australia</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#services" className="hover:text-foreground">Virtual Inspections</a></li>
              <li><a href="/#services" className="hover:text-foreground">AI Defect Detection</a></li>
              <li><a href="/#services" className="hover:text-foreground">Instant Reports</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/dashboard" className="hover:text-foreground">Dashboard</Link></li>
              <li><Link to="/booking" className="hover:text-foreground">Book Inspection</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms of Use</Link></li>
              <li><Link to="/data-handling" className="hover:text-foreground">Data Handling</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 space-y-4">
          <div className="text-xs text-muted-foreground leading-relaxed">
            <strong>Liability Disclaimer:</strong> Building inspections are visual assessments only. OpenHouseMate and its inspectors are not liable for hidden defects, structural issues not visible during inspection, or subsequent property damage. Professional indemnity insurance details available upon request.
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <div>
              © {new Date().getFullYear()} Matt Friend. All rights reserved. | ABN: To be provided
            </div>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-foreground">Terms</Link>
              <span>|</span>
              <Link to="/contact" className="hover:text-foreground">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
