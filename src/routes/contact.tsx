import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { PageHero } from "./about";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Link Freight Logistics Ltd" },
      { name: "description", content: "Get in touch with Link Freight Logistics. Request a quote, track a shipment, or partner with East Africa's precision freight operator." },
      { property: "og:title", content: "Contact Link Freight Logistics" },
      { property: "og:description", content: "Get a quote or get in touch with our team." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { Icon: MapPin, title: "Office", lines: ["Off Airport North Road", "Nairobi, Kenya"] },
  { Icon: Phone, title: "Phone", lines: ["+254 721 121 287"] },
  { Icon: Mail, title: "Email", lines: ["info@linkfreightltd.co.ke"] },
  { Icon: Clock, title: "Hours", lines: ["Mon–Fri: 08:00–17:00", "Sat: 08:00–13:00"] },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        tag="Contact Us"
        title="Let's move your shipment."
        subtitle="Whether you need a quote, a tracking update, or want to partner with us — our team is on standby."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {channels.map(({ Icon, title, lines }) => (
              <div key={title} className="flex gap-4 p-6 bg-slate-50 border-l-4 border-cyan">
                <Icon className="size-6 text-orange shrink-0" />
                <div>
                  <div className="font-display text-lg uppercase text-navy font-bold">{title}</div>
                  {lines.map((l) => (
                    <div key={l} className="text-sm text-slate-600 mt-1">{l}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <form
            className="lg:col-span-3 bg-navy text-white p-10"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <h2 className="font-display text-3xl uppercase font-extrabold mb-2">Request a Quote</h2>
            <p className="text-white/60 text-sm mb-8">Tell us about your shipment and we'll get back within 24 hours.</p>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" />
            </div>

            <div className="mt-5">
              <label className="text-xs uppercase tracking-widest text-cyan font-bold">Service</label>
              <select className="mt-2 w-full bg-white/5 border border-white/15 px-4 py-3 text-sm focus:outline-none focus:border-cyan">
                <option className="text-navy">Dry Containers</option>
                <option className="text-navy">Reefer Containers</option>
                <option className="text-navy">Gensets</option>
                <option className="text-navy">Inland Haulage</option>
                <option className="text-navy">Other</option>
              </select>
            </div>

            <div className="mt-5">
              <label className="text-xs uppercase tracking-widest text-cyan font-bold">Shipment Details</label>
              <textarea rows={5} className="mt-2 w-full bg-white/5 border border-white/15 px-4 py-3 text-sm focus:outline-none focus:border-cyan" />
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex items-center gap-2 bg-orange hover:bg-orange-600 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-colors"
            >
              <Send className="size-4" /> Send Enquiry
            </button>

            {sent && (
              <p className="mt-4 text-cyan text-sm">Thanks — your enquiry has been received. We'll be in touch shortly.</p>
            )}
          </form>
        </div>
      </section>

      <section className="bg-slate-50 pb-24">
        <div className="container mx-auto px-6">
          <div className="aspect-[16/7] w-full bg-navy/5 overflow-hidden border-b-4 border-cyan">
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
        className="mt-2 w-full bg-white/5 border border-white/15 px-4 py-3 text-sm focus:outline-none focus:border-cyan"
      />
    </div>
  );
}
