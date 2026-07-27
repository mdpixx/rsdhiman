/* ============================================================
 *  All website copy & data lives here — edit in ONE place.
 *  Fields marked TODO_EDIT are placeholders for you to replace.
 * ============================================================ */

export const company = {
  name: "RS Consultants & E Solutions",
  shortName: "RS Consultants",
  tagline: "Your Trusted Partner in Government & Private Tender Consultancy",
  heroHeadline: "Turning Opportunities into Successful Contracts.",
  heroSub:
    "Helping businesses win Government and Private contracts through professional tender management and end-to-end e-tendering consultancy.",
  mission:
    "To empower businesses with professional tender consultancy that enables them to compete successfully in Government and Private procurement while maintaining the highest standards of integrity, compliance, and excellence.",
  // TODO_EDIT: replace placeholder links
  phone: "+91-XXXXXXXXXX",
  email: "info@rsconsultants.in",
  website: "www.rsconsultants.in",
  locations: ["Chandigarh", "Mohali", "Panchkula"],
  social: {
    linkedin: "#",
    facebook: "#",
    whatsapp: "#",
  },
};

export const consultant = {
  // TODO_EDIT: replace with the real founder name & title
  name: "RS",
  title: "Founder & Lead Consultant",
  photo: "/consultant.png",
};

/* Numbers shown in the stats bar — TODO_EDIT to your real figures */
export const stats = [
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 1500, suffix: "+", label: "Tenders Managed" },
  { value: 350, suffix: "+", label: "Clients Served" },
  { value: 99.5, suffix: "%", label: "On-time Submission", decimals: 1 },
];

export const heroChips = [
  "Government e-Tenders",
  "GeM Portal Services",
  "Bid Management",
  "Tender Documentation",
  "Technical & Financial Bid Preparation",
  "Vendor Registration",
  "Compliance Support",
];

export const about = {
  eyebrow: "About Us",
  title: "Your Success is Our Priority",
  paragraphs: [
    "RS Consultants & E Solutions is a professional consultancy specializing in Government and Private Tender Management. We provide complete end-to-end tender consultancy services to businesses across India, helping them identify opportunities, prepare compliant bids, and submit winning proposals.",
    "Whether you are participating in your first tender or managing multiple bids, our experienced team ensures accuracy, compliance, confidentiality, and timely submission.",
  ],
  belief: "We believe every business deserves the opportunity to compete with confidence.",
  highlights: [
    "Accuracy & compliance in every bid",
    "Complete confidentiality of business information",
    "Experienced across multiple sectors",
  ],
};

export type Service = {
  icon: string; // maps to an icon key in components/Services.tsx
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    icon: "landmark",
    title: "Government Tender Consultancy",
    description:
      "Find, qualify, and win Government tenders with a strategy built around your strengths.",
    items: [
      "Tender Search & Identification",
      "Tender Analysis",
      "Eligibility Assessment",
      "Bid Strategy",
      "Tender Documentation",
      "Technical Bid Preparation",
      "Financial Bid Preparation",
      "Online Bid Submission",
      "Corrigendum Monitoring",
    ],
  },
  {
    icon: "cart",
    title: "GeM Portal Consultancy",
    description:
      "Register, list, and bid confidently on the Government e-Marketplace (GeM).",
    items: [
      "GeM Registration",
      "OEM Authorization Support",
      "Product Listing",
      "Catalog Management",
      "Bid Participation",
      "Contract Management",
      "Invoice & Order Support",
    ],
  },
  {
    icon: "clipboard",
    title: "End-to-End Bid Management",
    description:
      "We coordinate the complete bidding process so nothing falls through the cracks.",
    items: [
      "Complete Bid Coordination",
      "Documentation Review",
      "Compliance Verification",
      "Bid Submission",
      "Bid Tracking",
      "Clarification Support",
      "Post-Bid Assistance",
    ],
  },
  {
    icon: "register",
    title: "Vendor Registration Services",
    description:
      "Get registered on the portals that matter — PSU, Government, and private.",
    items: [
      "PSU Vendor Registration",
      "Government Department Registration",
      "Private Company Vendor Registration",
      "E-Procurement Portal Registration",
    ],
  },
  {
    icon: "key",
    title: "Digital Signature (DSC) Support",
    description:
      "Class III DSC assistance and end-to-end portal configuration support.",
    items: [
      "Class III DSC Assistance",
      "Installation & Configuration",
      "Portal Troubleshooting",
      "Token Support",
    ],
  },
  {
    icon: "chat",
    title: "Consultancy & Advisory Services",
    description:
      "Strategic procurement advisory, training, and ongoing compliance guidance.",
    items: [
      "Tender Process Consultation",
      "Procurement Advisory",
      "Documentation Support",
      "Contract Compliance Guidance",
      "Tender Training & Support",
    ],
  },
];

export type Feature = { icon: string; title: string; description: string };

export const whyChooseUs: Feature[] = [
  {
    icon: "expertise",
    title: "Professional Expertise",
    description:
      "Experienced professionals with extensive knowledge of Government procurement procedures and e-tendering platforms.",
  },
  {
    icon: "support",
    title: "End-to-End Support",
    description:
      "From tender identification to final submission, we manage the complete bidding process.",
  },
  {
    icon: "doc",
    title: "Accurate Documentation",
    description:
      "Well-prepared, compliant, and professionally organized tender documents.",
  },
  {
    icon: "clock",
    title: "Timely Submission",
    description:
      "Strict adherence to deadlines to avoid last-minute risks.",
  },
  {
    icon: "shield",
    title: "Confidential Services",
    description:
      "Complete confidentiality of business information and bid documents.",
  },
  {
    icon: "handshake",
    title: "Dedicated Client Support",
    description:
      "Personalized assistance throughout the tender lifecycle.",
  },
];

export const industries = [
  "Information Technology",
  "Healthcare",
  "Pharmaceuticals",
  "Construction & Infrastructure",
  "Civil Engineering",
  "Electrical & Mechanical",
  "Facility Management",
  "Security Services",
  "Education",
  "Manufacturing",
  "Consultancy Services",
  "Supply & Trading Companies",
];

export const process = [
  { step: "01", title: "Requirement Discussion", desc: "Understanding your business, products, and services." },
  { step: "02", title: "Tender Identification", desc: "Finding suitable Government & Private tender opportunities." },
  { step: "03", title: "Eligibility Assessment", desc: "Reviewing technical and financial qualification requirements." },
  { step: "04", title: "Documentation", desc: "Preparing all mandatory documents and declarations." },
  { step: "05", title: "Bid Preparation", desc: "Preparing technical and commercial bids." },
  { step: "06", title: "Online Submission", desc: "Secure and timely submission on the respective portal." },
  { step: "07", title: "Post-Bid Support", desc: "Clarifications, correspondence, and assistance until award." },
];

export const commitments = [
  "Professional Service",
  "Transparency",
  "Reliability",
  "Confidentiality",
  "Compliance",
  "Client Satisfaction",
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];
