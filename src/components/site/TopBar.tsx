import { useLocation } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Twitter, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { SITE, socialLinks } from "@/lib/site-config";

const socialIcons = {
  twitter: Twitter,
  facebook: Facebook,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
} as const;

function ContactRow() {
  return (
    <div className="flex items-center gap-5 sm:gap-7 shrink-0">
      <span className="flex items-center gap-2">
        <MapPin className="size-3.5 text-cyan shrink-0" />
        <span>Off Airport North Road, Nairobi</span>
      </span>
      <a href="tel:+254721121287" className="flex items-center gap-2 hover:text-cyan transition-colors">
        <Phone className="size-3.5 text-cyan shrink-0" />
        <span>+254 721 121 287</span>
      </a>
      <a href="mailto:info@linkfreightltd.co.ke" className="flex items-center gap-2 hover:text-cyan transition-colors">
        <Mail className="size-3.5 text-cyan shrink-0" />
        <span>info@linkfreightltd.co.ke</span>
      </a>
    </div>
  );
}

function Socials() {
  return (
    <div className="flex items-center gap-3 shrink-0">
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
            className="size-6 grid place-items-center rounded-full border border-white/20 text-white/80 hover:text-cyan hover:border-cyan transition-colors"
          >
            <Icon className="size-3" />
          </a>
        );
      })}
    </div>
  );
}

export function TopBar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="w-full bg-navy text-white/90 text-[11px] sm:text-xs border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-2.5">
        <div className="flex sm:hidden items-center justify-between gap-2">
          <a href="tel:+254721121287" className="flex items-center gap-1.5 truncate">
            <Phone className="size-3 text-cyan shrink-0" />
            <span className="truncate">+254 721 121 287</span>
          </a>
          <Socials />
        </div>

        <div className="hidden sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-4">
          <div className="relative min-w-0 overflow-hidden">
            {isHome ? (
              <div className="lf-marquee-track lf-marquee-animate">
                <ContactRow />
                <ContactRow />
              </div>
            ) : (
              <ContactRow />
            )}
          </div>

          <p className="hidden md:block text-cyan/90 font-medium tracking-wide text-center whitespace-nowrap px-2">
            {SITE.tagline}
          </p>

          <div className="justify-self-end">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}
