import { useLocation } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Twitter, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

const socials = [
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

function Row() {
  return (
    <div className="flex items-center gap-8 shrink-0">
      <span className="flex items-center gap-2">
        <MapPin className="size-3.5 text-cyan" />
        <span>Off Airport North Road, Nairobi</span>
      </span>
      <a href="tel:+254721121287" className="flex items-center gap-2 hover:text-cyan transition-colors">
        <Phone className="size-3.5 text-cyan" />
        <span>+254 721 121 287</span>
      </a>
      <a href="mailto:info@linkfreightltd.co.ke" className="flex items-center gap-2 hover:text-cyan transition-colors">
        <Mail className="size-3.5 text-cyan" />
        <span>info@linkfreightltd.co.ke</span>
      </a>
      <div className="flex items-center gap-3 pl-6 border-l border-white/15">
        {socials.map(({ Icon, href, label }) => (
          <a key={label} href={href} aria-label={label} className="text-white/70 hover:text-cyan transition-colors">
            <Icon className="size-3.5" />
          </a>
        ))}
      </div>
    </div>
  );
}

export function TopBar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="w-full bg-navy text-white/90 text-xs py-2.5 overflow-hidden border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="relative whitespace-nowrap overflow-hidden">
          {isHome ? (
            <div className="lf-marquee-track lf-marquee-animate">
              <Row />
              <Row />
            </div>
          ) : (
            <div className="flex justify-between items-center gap-8 flex-wrap">
              <Row />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
