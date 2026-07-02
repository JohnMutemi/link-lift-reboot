export const SITE = {
  tagline: "Link Freight Logistics Ltd",
  phone: "+254 721 121 287",
  phoneTel: "+254721121287",
  phoneWhatsApp: "254721121287",
  email: "jmtutorsalp@gmail.com",
  address: ["Off Airport North Road", "Nairobi, Kenya"],
  /** Replace empty strings with real profile URLs when available */
  social: {
    twitter: "",
    facebook: "",
    linkedin: "",
    instagram: "",
    youtube: "",
  },
} as const;

export const socialLinks = [
  { key: "twitter" as const, label: "Twitter / X" },
  { key: "facebook" as const, label: "Facebook" },
  { key: "linkedin" as const, label: "LinkedIn" },
  { key: "instagram" as const, label: "Instagram" },
  { key: "youtube" as const, label: "YouTube" },
];
