import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { PageHero } from "./about";
import { SiteCard } from "@/components/site/SiteCard";
import { SITE } from "@/lib/site-config";
import { useState } from "react";
import { HERO_CAROUSEL_4 } from "@/lib/media";

const hero = HERO_CAROUSEL_4;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Link Freight Logistics Ltd" },
      { name: "description", content: "Get in touch with Link Freight Logistics. Track a shipment, partner with us, or reach our Nairobi office." },
      { property: "og:title", content: "Contact Link Freight Logistics" },
      { property: "og:description", content: "Get in touch with our team." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { Icon: MapPin, title: "Office", lines: SITE.address },
  { Icon: Phone, title: "Phone", lines: [SITE.phone] },
  { Icon: Mail, title: "Email", lines: [SITE.email] },
  { Icon: Clock, title: "Hours", lines: ["Mon–Fri: 08:00–17:00", "Sat: 08:00–13:00"] },
];
function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        tag="Contact Us"
        title="Let's move your shipment."
        subtitle="Whether you need a tracking update or want to partner with us — our team is on standby. For pricing, use our dedicated quote form."
        image={hero}
      />

      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-6">
            {channels.map(({ Icon, title, lines }) => (
              <SiteCard key={title} variant="info">
                <Icon className="size-6 text-orange shrink-0" />
                <div>
                  <div className="font-display text-lg uppercase text-navy font-bold">{title}</div>
                  {lines.map((l) => (
                    <div key={l} className="text-sm text-slate-600 mt-1">{l}</div>
                  ))}
                </div>
              </SiteCard>
            ))}

            <SiteCard variant="info" className="bg-orange/10 border-l-orange">              <div className="font-display text-lg uppercase text-navy font-bold mb-2">Need a quote?</div>
              <p className="text-sm text-slate-600 mb-4">
                Share your route and cargo details on our quote page for a tailored response within 24 hours.
              </p>
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-600 text-white px-6 py-3 font-bold uppercase tracking-widest text-xs transition-colors w-full sm:w-auto"
              >
                Get a Quote
              </Link>
            </SiteCard>          </div>

          <form
            className="lg:col-span-3 bg-navy text-white p-5 sm:p-8 lg:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <h2 className="font-display text-2xl sm:text-3xl uppercase font-extrabold mb-2">Send a Message</h2>
            <p className="text-white/60 text-sm mb-8">General enquiries, partnerships, or shipment updates.</p>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" />
            </div>

            <div className="mt-5">
              <label className="text-xs uppercase tracking-widest text-cyan font-bold">Subject</label>
              <input
                name="subject"
                required
                className="mt-2 w-full bg-white/5 border border-white/15 px-4 py-3 text-base sm:text-sm focus:outline-none focus:border-cyan"
              />
            </div>

            <div className="mt-5">
              <label className="text-xs uppercase tracking-widest text-cyan font-bold">Message</label>
              <textarea rows={5} className="mt-2 w-full bg-white/5 border border-white/15 px-4 py-3 text-base sm:text-sm focus:outline-none focus:border-cyan" />
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-600 text-white px-8 py-4 font-bold uppercase tracking-widest text-xs sm:text-sm transition-colors w-full sm:w-auto"
            >
              <Send className="size-4" /> Send Message
            </button>

            {sent && (
              <p className="mt-4 text-cyan text-sm">Thanks — your message has been received. We&apos;ll be in touch shortly.</p>
            )}
          </form>
        </div>
      </section>

      <section className="bg-slate-50 pb-12 sm:pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="aspect-[4/3] sm:aspect-[16/7] w-full bg-navy/5 overflow-hidden border-b-4 border-cyan">
            <iframe
              title="Link Freight office location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=36.8950%2C-1.3450%2C36.9450%2C-1.3050&amp;layer=mapnik"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-cyan font-bold">{label}</label>
      <input
        name={name}
        type={type}
        required
        className="mt-2 w-full bg-white/5 border border-white/15 px-4 py-3 text-base sm:text-sm focus:outline-none focus:border-cyan"
      />
    </div>
  );
}
