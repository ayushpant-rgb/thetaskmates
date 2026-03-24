export const siteConfig = {
  name: "TaskMates",
  tagline: "Your Offshore Team. Your Rules.",
  domain: "www.thetaskmates.com",
  email: "hello@thetaskmates.com",
  whatsapp: "+91-XXXXXXXXXX",
  calendlyUrl: "#",
  parentCompany: "Elevate Biz Hub",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Administrative Support",
    icon: "ClipboardList" as const,
    description: "Streamline your daily operations with dedicated admin professionals.",
    items: ["Data Entry", "Email & Calendar Management", "Documentation"],
  },
  {
    title: "Executive Assistants",
    icon: "UserCheck" as const,
    description: "High-caliber support for busy executives and leadership teams.",
    items: ["Scheduling", "Client Coordination", "Business Support"],
  },
  {
    title: "Operations & Coordination",
    icon: "Settings" as const,
    description: "Keep your business running smoothly with process-driven support.",
    items: ["Workflow Management", "Process Optimization", "Reporting"],
  },
  {
    title: "Sales & Lead Generation",
    icon: "Phone" as const,
    description: "Fill your pipeline with qualified leads and appointments.",
    items: ["Cold Calling", "Appointment Setting", "CRM Updates"],
  },
  {
    title: "Digital Marketing",
    icon: "TrendingUp" as const,
    description: "Grow your online presence with skilled marketing support.",
    items: ["Social Media Management", "Paid Ads Support", "Content Creation"],
  },
  {
    title: "Customer Support",
    icon: "Headphones" as const,
    description: "Deliver exceptional customer experiences across channels.",
    items: ["Email & Chat Support", "Client Communication"],
  },
  {
    title: "Accounts & Bookkeeping",
    icon: "Calculator" as const,
    description: "Keep your finances accurate and up-to-date.",
    items: ["Invoicing", "Reconciliation", "Financial Tracking"],
  },
  {
    title: "Real Estate Support",
    icon: "Building" as const,
    description: "Specialized support for property and real estate businesses.",
    items: ["Property Management Admin", "Leasing Support", "CRM Updates"],
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Requirement Discovery",
    description: "We understand your business goals, role requirements, and expectations.",
  },
  {
    step: 2,
    title: "Talent Sourcing & Screening",
    description: "We identify and screen candidates through a multi-level process.",
  },
  {
    step: 3,
    title: "Client Interviews",
    description: "You interview and select the best candidate.",
  },
  {
    step: 4,
    title: "Hiring & Onboarding",
    description: "We manage contracts, onboarding, and compliance.",
  },
  {
    step: 5,
    title: "Ongoing Support",
    description: "We handle HR, payroll, and performance management.",
  },
];

export const benefits = [
  { icon: "Users" as const, text: "Flexible full-time and part-time staffing" },
  { icon: "Shield" as const, text: "No employee sharing for full-time roles" },
  { icon: "FileCheck" as const, text: "Complete HR and compliance management" },
  { icon: "Lock" as const, text: "Enterprise-grade data security" },
  { icon: "PhoneCall" as const, text: "Australian landline communication" },
  { icon: "BarChart" as const, text: "Transparent reporting systems" },
  { icon: "Layers" as const, text: "Scalable workforce solutions" },
];

export const homeHero = {
  headline: "Build Your Offshore Team, Dedicated or Part-Time, Without the HR Hassle",
  subheadline:
    "Hire skilled full-time or part-time professionals who work exclusively for your business — while we handle payroll, compliance, and HR management.",
  socialProof: "Save up to 60% on staffing costs without compromising quality",
  primaryCta: "Book a Strategy Call",
  secondaryCta: "See How It Works",
};

export const aboutPreview = {
  text: [
    "TaskMates is a leading offshore HR and workforce solutions company helping businesses across Australia, Europe, and the USA build high-performing offshore teams.",
    "As your trusted Employer of Record (EOR), we handle everything behind the scenes so you can focus on scaling your business.",
  ],
  linkText: "Learn More About Us",
};

export const staffingModels = [
  {
    title: "Dedicated Full-Time Staff",
    description: "Ideal for businesses needing long-term, committed professionals.",
    features: [
      { label: "Exclusivity", value: "Works exclusively for you" },
      { label: "Integration", value: "Fully integrated into ops" },
      { label: "Commitment", value: "Long-term" },
      { label: "Best For", value: "Core business roles" },
    ],
  },
  {
    title: "Part-Time Staff",
    description: "Flexible and cost-effective staffing for growing businesses.",
    features: [
      { label: "Exclusivity", value: "Flexible hours" },
      { label: "Integration", value: "Support-role focused" },
      { label: "Commitment", value: "Easily scalable" },
      { label: "Best For", value: "Growing businesses" },
    ],
  },
];

export const stats = [
  { value: 500, suffix: "+", label: "Professionals Placed" },
  { value: 4, suffix: "+", label: "Countries Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 60, suffix: "%", label: "Average Cost Savings" },
];

export const countries = ["Australia", "United Kingdom", "USA", "Other"];
export const staffCounts = ["1", "2–5", "5–10", "10+"];

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Administrative Support", href: "/services" },
    { label: "Executive Assistants", href: "/services" },
    { label: "Sales & Lead Generation", href: "/services" },
    { label: "Digital Marketing", href: "/services" },
  ],
};
