export const starter = [
  {
    image: "/images/svg/price-icon-1.svg",
    plantitle: "Starter",
    description: `To start your learning to day you will get only
        <span className="text-dark fw-medium">free Course</span>
        access.`,
    monthly: 0,
    yearly: 0,
    buttonText: "Get Started For Free",
    buttonClass: "outline-primary",
    featureHeading: "All core features, including:",
    features: [
      { feature: "Only free courses" },
      {
        feature: `<span className="fw-bold text-dark">Free </span>learning paths`,
      },
      { feature: `<span className="fw-bold text-dark">5GB </span>storage` },
      { feature: "Analytics" },
      { feature: "Free mobile app" },
      { feature: "Access to support forums" },
    ],
  },
];

export const individual = [
  {
    image: "/images/svg/price-icon-2.svg",
    plantitle: "Individual",
    description: `Access all
        <span className="text-dark fw-medium">premium courses, workshops, and mobile apps.</span>
        Renewed monthly.`,
    monthly: 39,
    yearly: 99,
    buttonText: "Get Started For Free",
    buttonClass: "primary",
    featureHeading: "Everything in Starter, plus:",
    features: [
      { feature: "Offline viewing" },
      {
        feature: `<span className="fw-bold text-dark">Offline </span>projects`,
      },
      {
        feature: `<span className="fw-bold text-dark">Unlimited </span>storage`,
      },
      { feature: "Custom domain support" },
      { feature: "Bulk editing" },
      { feature: "12 / 5 support" },
    ],
  },
];

export const team = [
  {
    image: "/images/svg/price-icon-3.svg",
    plantitle: "Team",
    description: `Upto 10 member access everything. Save
        <span className="text-primary fw-medium">$78 </span>per
        year! Renewed yearly.`,
    monthly: 99,
    yearly: 199,
    buttonText: "Get Started For Free",
    buttonClass: "outline-primary",
    featureHeading: "Everything in Individual, plus:",
    features: [
      { feature: "Workshop" },
      {
        feature: `<span className="fw-bold text-dark">Dedicated  </span>hardware`,
      },
      {
        feature: `<span className="fw-bold text-dark">99.9% uptime </span>guarantee`,
      },
      { feature: "Advanced analytics" },
      { feature: "3rd party integrations" },
      { feature: "24 / 7 support" },
    ],
  },
];

export const PricingPlansData = [starter, individual, team];

export default PricingPlansData;
