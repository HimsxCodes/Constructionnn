import Link from "next/link";
import { Building2, Mail, Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: "/about", label: "About Us" },
      { href: "/services", label: "Services" },
      { href: "/projects", label: "Projects" },
      { href: "/contact", label: "Contact" },
    ],
    services: [
      { href: "/services#residential", label: "Residential" },
      { href: "/services#commercial", label: "Commercial" },
      { href: "/services#industrial", label: "Industrial" },
      { href: "/services#renovation", label: "Renovations" },
    ],
  };

  return (
    <footer className="bg-slate-dark dark:bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="w-8 h-8 text-primary" />
              <span className="text-xl font-heading font-bold">BuildPro</span>
            </div>
            <p className="text-slate-300 text-sm mb-4">
              Building excellence since 1995. Your trusted partner for construction projects of all
              sizes.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <span className="text-sm">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-sm">in</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <span className="text-sm">t</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>123 Construction Ave, Building City, BC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@buildpro.com"
                  className="hover:text-primary transition-colors"
                >
                  info@buildpro.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Mon-Fri: 7AM-6PM<br />Sat: 8AM-4PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {currentYear} BuildPro Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
