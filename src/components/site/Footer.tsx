import { Link } from "@tanstack/react-router";
import { Twitter, Facebook, Linkedin, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { SITE, socialLinks } from "@/lib/site-config";

const socialIcons = {
  twitter: Twitter,
  facebook: Facebook,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
} as const;

export function Footer() {
  return (
    <footer className="bg-navy text-white/70 pt-16 sm:pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-sm">
          <div>
            <div className="mb-6">
              <Logo variant="light" />
            </div>
            <p className="text-cyan/90 text-sm font-medium mb-3">{SITE.tagline}</p>
            <p className="leading-relaxed mb-6">
              Specialized freight and logistics across East & Southern Africa &mdash; dry containers, reefer
              units, gensets, and inland haulage tailored to every shipment.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ key, label }) => {
                const Icon = socialIcons[key];
                const href = SITE.social[key] || "#";

                return (
                  <a
                    key={key}
                    href={href}
                    aria-label={label}
                    {...(SITE.social[key]
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : { "aria-disabled": true, tabIndex: -1 })}
                    className="size-9 grid place-items-center border border-white/15 hover:border-cyan hover:text-cyan hover:bg-cyan/10 transition-colors rounded-sm"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-cyan transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-cyan transition-colors">Our Services</Link></li>
              <li><Link to="/fleet" className="hover:text-cyan transition-colors">Our Fleet</Link></li>
              <li><Link to="/projects" className="hover:text-cyan transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="hover:text-cyan transition-colors">Latest Blogs</Link></li>
              <li><Link to="/quote" className="hover:text-cyan transition-colors">Get a Quote</Link></li>
              <li><Link to="/contact" className="hover:text-cyan transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Operating Hours</h4>
            <ul className="space-y-3">
              <li>Mon &ndash; Fri: 08:00 &ndash; 17:00</li>
              <li>Sat: 08:00 &ndash; 13:00</li>
              <li>Sun: Closed</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><MapPin className="size-4 text-cyan shrink-0 mt-0.5" /> Off Airport North Road, Nairobi</li>
              <li className="flex items-center gap-3"><Phone className="size-4 text-cyan shrink-0" /> +254 721 121 287</li>
              <li className="flex items-center gap-3"><Mail className="size-4 text-cyan shrink-0" /> {SITE.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Link Freight Logistics Ltd. All Rights Reserved.</p>
          <div className="flex gap-6 uppercase tracking-widest font-bold">
            <span className="text-cyan">Dry</span>
            <span>Reefer</span>
            <span>Gensets</span>
            <span>Haulage</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
