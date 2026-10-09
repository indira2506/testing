export const site = {
  name: "ServicePro",
  brand: "ServicePro by BUYP Technologies",
  tagline: "Run your service centre smarter.",
  description:
    "ServicePro is an all-in-one billing, inventory, CRM and repair-service management platform built for electronics stores, mobile & laptop repair shops, and appliance service centres across India.",
  url: "https://www.buyp.in/servicepro",
  trialUrl: "https://service.buyp.ai/",
  loginUrl: "https://service.buyp.ai/",
  company: {
    legalName: "BUYP Technologies Pvt. Ltd.",
    email: "support@buyp.in",
    phone: "1800 890 0803",
    phoneAvailability: "Available 24/7",
    address: "158, S.M Complex, Tenkasi, Tamil Nadu 627811, India",
    website: "www.buyp.in",
    linkedin: "https://www.linkedin.com/company/buyp-technologies",
    instagram: "https://www.instagram.com/buyptechnologies",
  },
  badges: [
    "No credit card required",
    "15-day free trial",
    "Set up in 2 minutes",
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "FAQ", href: "/faq/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const pricingPlans = [
  {
    id: "starter",
    name: "Starter Plan",
    dotColor: "#22C55E",
    tag: null,
    blurb: "Perfect for flexible, month-to-month usage.",
    price: "₹399",
    period: "/ Month",
    subPrice: null,
    savingBadge: null,
    cta: "Subscribe Now",
    ctaStyle: "dark",
    features: [
      "Full Inventory & Stock Management",
      "Purchase & Supplier Tracking",
      "Unlimited Sales & Billing",
      "Service & Repair Management",
      "WhatsApp Invoice Sharing",
      "Multiple Barcode Options",
      "Reports & Business Insights",
      "Warranty & Customer Tracking",
    ],
    footnote: "Best for getting started without commitment",
  },
  {
    id: "growth",
    name: "Growth Plan",
    dotColor: "#3B82F6",
    tag: "MOST POPULAR",
    blurb: "Same features. Better savings.",
    price: "₹2,199",
    period: "/ 6 Months",
    subPrice: "₹366 / month",
    savingBadge: "15 Days Saving",
    cta: "Subscribe Now",
    ctaStyle: "gradient",
    highlighted: true,
    features: [
      "Includes all features",
      "No limitations",
      "Save more compared to monthly",
    ],
    footnote: "Most popular choice for growing businesses",
  },
  {
    id: "pro",
    name: "Pro Business Plan",
    dotColor: "#8B5CF6",
    tag: "BEST VALUE",
    blurb: "Same features. Maximum value.",
    price: "₹3,999",
    period: "/ Year",
    subPrice: "₹333 / month",
    savingBadge: "2 Month Saving",
    cta: "Subscribe Now",
    ctaStyle: "dark",
    features: [
      "Includes all features",
      "No limitations",
      "Highest savings",
    ],
    footnote: "Best for serious business owners",
  },
];

export const pricingTrustBadges = [
  "No feature restrictions",
  "No hidden charges",
  "Cancel anytime",
  "Instant activation",
];

export const faqData = [
  {
    category: "General",
    items: [
      {
        q: "Are all features included in every plan?",
        a: "Yes. All plans include full access to every feature. The only difference is the billing duration and savings.",
      },
      {
        q: "Is there any limitation in features for lower plans?",
        a: "No. There are no feature restrictions. Every plan gives you complete access to the system.",
      },
      {
        q: "How many users are included?",
        a: "Each plan includes up to 3 users. You can contact us if you need additional users.",
      },
      {
        q: "Is ServicePro easy to use for beginners?",
        a: "Yes. ServicePro is designed to be simple and user-friendly, even for non-technical users.",
      },
    ],
  },
  {
    category: "Pricing",
    items: [
      {
        q: "Can I cancel my subscription anytime?",
        a: "Yes. You can cancel anytime, and your access will remain active until the end of the billing period.",
      },
      {
        q: "Are there any hidden charges?",
        a: "No. Our pricing is completely transparent with no hidden costs.",
      },
      {
        q: "Can I upgrade or change my plan later?",
        a: "Yes. You can upgrade or switch plans anytime based on your business needs.",
      },
      {
        q: "Do you offer a free trial?",
        a: "Yes. We offer a free trial so you can explore all features before subscribing.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit/debit cards, UPI, net banking, and digital wallets through Razorpay.",
      },
      {
        q: "How does renewal work?",
        a: "We'll send you a renewal link on WhatsApp 5 days before your subscription expires. Click the link to renew. If you don't renew within 7 days after expiry, your account will be temporarily disabled until you renew.",
      },
    ],
  },
  {
    category: "Features",
    items: [
      {
        q: "Is ServicePro suitable for my business type?",
        a: "ServicePro is designed for electronics shops, mobile stores, computer shops, home appliance businesses, and service centres.",
      },
      {
        q: "Does ServicePro support service and repair management?",
        a: "Yes. You can create job cards, track repair status, manage delivery, and handle complete service workflows.",
      },
      {
        q: "Can I manage inventory and purchases?",
        a: "Yes. You can track stock, manage purchases, and monitor supplier details easily.",
      },
      {
        q: "Can I generate unlimited invoices?",
        a: "Yes. There are no limits on billing, invoices, or transactions.",
      },
    ],
  },
  {
    category: "WhatsApp",
    items: [
      {
        q: "Can I send invoices via WhatsApp?",
        a: "Yes. You can instantly send invoices to customers via WhatsApp.",
      },
    ],
  },
  {
    category: "Security",
    items: [
      {
        q: "Is my business data secure?",
        a: "Yes. Your data is securely stored with proper encryption and regular backups.",
      },
      {
        q: "Do you provide customer support?",
        a: "Yes. We provide support via phone, WhatsApp, and email to assist you whenever needed.",
      },
    ],
  },
];

export const testimonials = [
  {
    name: "Arun Kumar",
    business: "Classic Mobile Care, Bengaluru",
    quote:
      "Sample testimonial — before ServicePro we tracked repairs on paper slips and lost track of who owed what. Now every job card, estimate and delivery is logged automatically.",
  },
  {
    name: "Meena Stores",
    business: "Electronics Retailer, Coimbatore",
    quote:
      "Sample testimonial — billing, purchases and service tickets used to live in three different notebooks. ServicePro brought it all into one screen our staff actually enjoy using.",
  },
  {
    name: "Ravi Traders",
    business: "Laptop & Mobile Service Centre, Chennai",
    quote:
      "Sample testimonial — the WhatsApp invoice sharing alone saves us a print run every day, and the diagnosis-to-delivery workflow keeps customers in the loop without phone calls.",
  },
];
