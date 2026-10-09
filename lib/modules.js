// Full module breakdown used on the Home and Features pages.
// Each module carries a "theme" (color family) and short "chips" used to
// render an illustrative feature panel instead of real app screenshots.
export const moduleGroups = [
  {
    id: "dashboard",
    title: "Dashboard",
    theme: "blue",
    summary:
      "A single screen business command centre — today's sales, purchases, income, expenses, a 7-day revenue trend, live service ticket volume, and a payables/receivables/queue pulse.",
    points: [
      "Sales, purchase, income & expense — today, at a glance",
      "7-day revenue trend chart",
      "Active service log with real-time ticket status",
      "Payables, receivables, queue and total tickets in one card",
      "Quick actions: New Purchase, New Sales, New Service",
    ],
    chips: ["Sales today", "7-day trend", "Live queue"],
  },
  {
    id: "settings",
    title: "Settings",
    theme: "violet",
    summary:
      "Every setting a growing shop needs to run legally and consistently — business profile, GST/tax templates, print design, numbering, payments, barcodes, WhatsApp, users and data migration.",
    points: [
      "Business Info — company profile, GSTIN/PAN, branding, logo & signature upload",
      "Tax Settings — GST template groups (e.g. GST2026 slabs), billwise tax toggle, per-document tax status (inclusive/exclusive/no tax), currency & symbol configuration",
      "Print Template — fully customisable invoice designer: paper size (A4/A5/Thermal), themes, accent colours, fonts, table columns, company branding, bank details, signature, QR code and terms & conditions",
      "Invoice No. Settings — custom prefixes and auto-reset rules (business year) for every document type: Purchase, Sales, Quotation, Service, Delivery, Credit/Debit Notes, Income & Expense",
      "Payment Settings — configure accepted payment methods (Cash, Card, UPI and more)",
      "Barcode Settings — sticker layouts for thermal and A4 sheet printers (2–3 per row, 24–65 labels per sheet)",
      "WhatsApp Connector — connect your own number or an API integration to send invoices and updates directly to customers (charges apply for API usage)",
      "Manage Users — role-based multi-user access (up to 3 users per plan)",
      "Stock Adjustment & Excel Migration — bulk import/export via spreadsheet templates, with full activity logs",
    ],
    chips: ["GST templates", "Print designer", "WhatsApp connect"],
  },
  {
    id: "purchase",
    title: "Purchase & Inventory",
    theme: "teal",
    summary:
      "Manage procurement, suppliers and stock levels with a guided, step-by-step entry flow that keeps inventory numbers accurate.",
    points: [
      "Purchase Orders & Purchase Invoices with a guided supplier → product → payment flow, barcode scan and serial-number capture",
      "Billwise Payments — track pending vs. paid purchases per supplier with running balances",
      "Debit Notes for stock returns",
      "Product Master, Categories, Brands, Suppliers & Payment Terms configuration",
    ],
    chips: ["Purchase orders", "Supplier balances", "Debit notes"],
  },
  {
    id: "sales",
    title: "Sales & Billing",
    theme: "amber",
    summary:
      "From a quick quotation to a finished sale — retail or wholesale — with loyalty points, finance options and full payment tracking.",
    points: [
      "Quotations that convert straight into invoices",
      "Sales Invoice — retail/wholesale pricing, barcode & serial lookup, loyalty points redemption, finance option",
      "Quick Sale — a no-fuss single-screen flow for instant walk-in billing",
      "Invoice Payments — full balance breakdown across sales, quick sales, delivery and credit notes",
      "Credit Notes for returns and adjustments",
    ],
    chips: ["Quotations", "Quick sale", "Loyalty points"],
  },
  {
    id: "service",
    title: "Service & Repair Management",
    theme: "rose",
    summary:
      "The heart of ServicePro — a guided, tutorial-backed workflow that takes a repair job from intake to delivery, with full customer-approval tracking at every step.",
    points: [
      "New Service Entry — a 5-step guided wizard: Customer Details → Product & Security (with device lock/PIN capture) → Problem Details → Service Details (expected/received amount, contract type) → Accessories, generating a printable Service Job Card",
      "Quick Services — the same guided flow streamlined for solo shop owners who need to log jobs fast",
      "Service Jobs board — every ticket tracked across 8 live stages: Pending, Diagnosis, Awaiting Confirmation, In Progress, Completed, Delivered, Escalated to Manufacturer, Returned Without Repair",
      "Diagnosis workflow — technician notes, estimated cost, a printable Repair Estimate & Approval slip, and a clear customer Approve / Return Without Repair decision",
      "Full timeline history per job — every status change, technician and note logged and time-stamped",
      "Service Delivery — normal delivery or a full delivery invoice with automatic inventory adjustment, plus a final Service Invoice with advance-paid adjustment",
    ],
    chips: ["Pending", "Diagnosis", "Delivered"],
  },
  {
    id: "day-sheet",
    title: "Day Sheet",
    theme: "blue",
    summary: "Simple daily income and expense entries that feed straight into your ledgers and P&L — no separate cash book needed.",
    points: ["Income Entry", "Expense Entry"],
    chips: ["Income", "Expense"],
  },
  {
    id: "reports",
    title: "Reports & Auditing",
    theme: "emerald",
    summary:
      "GST-ready, exportable reporting across every module — built for owners and auditors alike.",
    points: [
      "Log Reports — a detailed audit trail of every system action, by user and category",
      "Sales & Purchase Auditing Reports — invoice-wise GSTR-1 tax breakdown (CGST, SGST, IGST)",
      "Profit & Loss Report — income vs. expense summary for any date range",
      "Ledger Reports — Purchase Ledger, Sales Ledger, Service Ledger and a unified Business Ledger",
      "Stock Reports — overall stock, stock management, stock transactions and product serial tracking",
      "One-click Excel and PDF export on every report",
    ],
    chips: ["GSTR-1 ready", "P&L", "4 ledgers"],
  },
  {
    id: "invoice",
    title: "Invoice Centre",
    theme: "indigo",
    summary: "Every document type your business issues, organised in one place.",
    points: ["Delivery Invoice", "Receipt Voucher", "Invoice Payment", "Configurable per-document settings"],
    chips: ["Delivery invoice", "Receipt voucher"],
  },
  {
    id: "warranty",
    title: "Warranty & AMC Tracking",
    theme: "fuchsia",
    summary: "Record warranty and AMC coverage against any product or service, and look up status in seconds.",
    points: ["New Warranty entry with duration, product & invoice linkage", "Warranty Status lookup"],
    chips: ["Warranty status", "AMC tracking"],
  },
];

export const roadmapItems = [
  {
    title: "Multi-Shop Management",
    description:
      "Run several branches or outlets from a single ServicePro account, with consolidated reporting across locations.",
  },
  {
    title: "Inter-Store Stock Transfer",
    description:
      "Move inventory between your own branches with a full transfer trail — no more manual stock reconciliation.",
  },
  {
    title: "Connected Purchaser-Seller Ecosystem",
    description:
      "A planned network connecting distributors, retailers and service centres so stock can move between businesses directly inside ServicePro — reducing manual entries across the supply chain.",
  },
  {
    title: "GCC & International Expansion",
    description:
      "ServicePro is built for businesses across India today, with expansion to the GCC and other markets planned next.",
  },
];
