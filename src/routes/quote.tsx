import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Phone, Mail } from "lucide-react";
import { PageHero } from "./about";
import { QuoteForm } from "@/components/site/QuoteForm";
import { SiteCard } from "@/components/site/SiteCard";
import { SITE } from "@/lib/site-config";
export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get a Quote — Link Freight Logistics Ltd" },
      {
        name: "description",
        content:
          "Request a freight quote from Link Freight Logistics Ltd for long-distance freight and logistics support across East & Southern Africa.",
      },
      { property: "og:title", content: "Get a Quote — Link Freight Logistics" },
      { property: "og:description", content: "Request a tailored freight quote within 24 hours." },
    ],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <>
      <PageHero
        tag="Get a Quote"
        title="Tell us what you're moving."
        subtitle="Share your route, cargo type, and timeline — our team will respond with a tailored quote within one business day."
      />

      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-6">
            <SiteCard variant="info" className="!block">
              <div className="font-display text-lg uppercase text-navy font-bold mb-2">What to include</div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>Origin and destination</li>
                <li>Cargo type and weight</li>
                <li>Container size (20ft / 40ft / reefer)</li>
                <li>Preferred pickup or delivery date</li>
              </ul>
            </SiteCard>

            <SiteCard variant="info" className="border-l-orange">
              <Phone className="size-6 text-orange shrink-0" />
              <div>
                <div className="font-display text-lg uppercase text-navy font-bold">Prefer to call?</div>
                <a href={`tel:${SITE.phoneTel}`} className="text-sm text-slate-600 mt-1 hover:text-cyan transition-colors">
                  {SITE.phone}
                </a>
              </div>
            </SiteCard>

            <SiteCard variant="info">
              <Mail className="size-6 text-orange shrink-0" />
              <div>
                <div className="font-display text-lg uppercase text-navy font-bold">Email us directly</div>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-slate-600 mt-1 hover:text-cyan transition-colors"
                >
                  {SITE.email}
                </a>
              </div>
            </SiteCard>

            <SiteCard variant="info">
              <Clock className="size-6 text-orange shrink-0" />
              <div>
                <div className="font-display text-lg uppercase text-navy font-bold">Response time</div>
                <div className="text-sm text-slate-600 mt-1">Mon–Fri within 24 hours</div>
              </div>
            </SiteCard>
            <p className="text-sm text-slate-500">
              General enquiries?{" "}
              <Link to="/contact" className="text-cyan hover:underline">
                Visit our contact page
              </Link>
              .
            </p>
          </div>

          <div className="lg:col-span-3">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
