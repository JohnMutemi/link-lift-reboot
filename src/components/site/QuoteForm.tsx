import { Send } from "lucide-react";
import { useState } from "react";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="bg-navy text-white p-6 sm:p-8 lg:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <h2 className="font-display text-3xl uppercase font-extrabold mb-2">Request a Quote</h2>
      <p className="text-white/60 text-sm mb-8">
        Tell us about your shipment and we&apos;ll get back within 24 hours.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" />
        <Field label="Phone" name="phone" type="tel" />
      </div>

      <div className="mt-5">
        <label className="text-xs uppercase tracking-widest text-cyan font-bold">Service</label>
        <select className="mt-2 w-full bg-white/5 border border-white/15 px-4 py-3 text-base sm:text-sm focus:outline-none focus:border-cyan">
          <option className="text-navy">Long Distance Haulage</option>
          <option className="text-navy">Short Distance Haulage</option>
          <option className="text-navy">Dry Containers</option>
          <option className="text-navy">Reefer Containers</option>
          <option className="text-navy">Gensets</option>
          <option className="text-navy">Associated Services</option>
        </select>
      </div>

      <div className="mt-5">
        <label className="text-xs uppercase tracking-widest text-cyan font-bold">Shipment Details</label>
        <textarea
          rows={5}
          className="mt-2 w-full bg-white/5 border border-white/15 px-4 py-3 text-base sm:text-sm focus:outline-none focus:border-cyan"
        />
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex items-center gap-2 bg-orange hover:bg-orange-600 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-colors"
      >
        <Send className="size-4" /> Send Enquiry
      </button>

      {sent && (
        <p className="mt-4 text-cyan text-sm">
          Thanks — your enquiry has been received. We&apos;ll be in touch shortly.
        </p>
      )}
    </form>
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
