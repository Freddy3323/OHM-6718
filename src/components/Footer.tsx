import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Open Home Mate" className="h-8 w-auto" />
              <span className="text-lg font-bold text-foreground">Open Home Mate</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered visual inspections based on video walkthrough. Fast, affordable, builder-verified reports.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@openhomemate.com" className="hover:text-amber-600">
                  support@openhomemate.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:0468046283" className="hover:text-amber-600">
                  0468 046 283
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/booking" className="hover:text-amber-600 transition-colors">
                  Book Inspection
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-amber-600 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/#pricing" className="hover:text-amber-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="/#sample-report" className="hover:text-amber-600 transition-colors">
                  Sample Report
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Partners</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/agents" className="hover:text-amber-600 transition-colors">
                  For Agents
                </Link>
              </li>
              <li>
                <Link to="/builders" className="hover:text-amber-600 transition-colors">
                  For Builders
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/contact" className="hover:text-amber-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="hover:text-amber-600 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-amber-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-amber-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/#disclaimer" className="hover:text-amber-600 transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="space-y-4">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Service Description:</strong> Open Home Mate provides AI-powered visual inspections based on
              video walkthrough. Not a replacement for comprehensive on-site inspections. Findings limited to visible
              elements captured in video. Hidden defects behind walls, floors, ceilings, or coverings cannot be
              detected. If major risks are identified, a full on-site inspection is recommended.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© {currentYear} Matt Friend. All rights reserved.</p>
              <p>Australia-wide service</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
