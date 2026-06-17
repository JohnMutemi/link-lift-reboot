import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const DEFAULT_PROMPT =
  "Hello Link Freight, I'd like to enquire about your freight and logistics services.";

function buildWhatsAppUrl(message: string) {
  const digits = SITE.phoneWhatsApp.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(DEFAULT_PROMPT);

  const startChat = () => {
    window.open(buildWhatsAppUrl(message.trim() || DEFAULT_PROMPT), "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <div className="lf-fixed-corner z-50 flex flex-col items-end gap-3">
      <div
        className={cn(
          "w-[min(100vw-3rem,340px)] origin-bottom-right transition-all duration-300",
          open ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-2 pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div className="rounded-2xl bg-white shadow-2xl shadow-navy/15 ring-1 ring-slate-200 overflow-hidden">
          <div className="bg-[#25D366] px-5 py-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="size-10 rounded-full bg-white/20 grid place-items-center shrink-0">
                <MessageCircle className="size-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="font-display text-lg uppercase font-bold text-white leading-tight truncate">
                  Link Freight
                </p>
                <p className="text-xs text-white/90">Typically replies within an hour</p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close chat prompt"
              onClick={() => setOpen(false)}
              className="size-8 rounded-full hover:bg-white/15 grid place-items-center text-white transition-colors shrink-0"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="p-5 space-y-4">
            <div className="rounded-xl rounded-tl-sm bg-slate-50 px-4 py-3 text-sm text-slate-700 leading-relaxed border border-slate-100">
              Hi there! Tell us about your shipment and we&apos;ll connect you with our team on WhatsApp.
            </div>

            <div>
              <label htmlFor="whatsapp-message" className="text-xs uppercase tracking-widest text-navy font-bold">
                Your message
              </label>
              <textarea
                id="whatsapp-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-base sm:text-sm text-slate-700 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
              />
            </div>

            <button
              type="button"
              onClick={startChat}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-3 font-bold uppercase tracking-widest text-xs transition-colors"
            >
              <WhatsAppIcon className="size-4" />
              Start Chat
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label={open ? "Close WhatsApp chat" : "Chat on WhatsApp"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "size-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/35 ring-1 ring-[#1ebe5d]/40 touch-manipulation",
          "hover:bg-[#1ebe5d] hover:scale-105 active:scale-95 transition-all duration-300 grid place-items-center",
        )}
      >
        {open ? <X className="size-6" /> : <WhatsAppIcon className="size-7" />}
      </button>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
