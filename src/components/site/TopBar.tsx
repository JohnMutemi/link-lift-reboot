import { useLocation } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Twitter, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

const socials = [
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

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
      {socials.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="size-6 grid place-items-center rounded-full border border-white/20 text-white/80 hover:text-cyan hover:border-cyan transition-colors"
        >
          <Icon className="size-3" />
        </a>
      ))}
    </div>
  );
}

export function TopBar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="w-full bg-navy text-white/90 text-[11px] sm:text-xs border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-2.5">
        {/* Mobile: compact phone + socials only */}
        <div className="flex sm:hidden items-center justify-between gap-2">
          <a href="tel:+254721121287" className="flex items-center gap-1.5 truncate">
            <Phone className="size-3 text-cyan shrink-0" />
            <span className="truncate">+254 721 121 287</span>
          </a>
          <Socials />
        </div>

        {/* Tablet/Desktop: contact row + socials, with marquee on home */}
        <div className="hidden sm:flex items-center justify-between gap-6">
          <div className="relative flex-1 min-w-0 overflow-hidden">
            {isHome ? (
              <div className="lf-marquee-track lf-marquee-animate">
                <ContactRow />
                <ContactRow />
              </div>
            ) : (
              <ContactRow />
            )}
          </div>
          <Socials />
        </div>
      </div>
    </div>
  );
}
