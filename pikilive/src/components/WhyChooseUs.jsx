import "./WhyChooseUs.css";

const features = [
  {
    title: "Fully Customizable Apps",
    description:
      "Get complete control over your app’s design and flow. Customize UI elements, interactions, features, and branding to match your vision.",
    icon: "⚙️",
  },
  {
    title: "Affordable Pricing",
    description:
      "Built to scale with your business—our pricing is transparent and budget-friendly for startups, creators, and enterprises alike.",
    icon: "💰",
  },
  {
    title: "3-Month Free Tech Support",
    description:
      "Enjoy dedicated technical support for 90 days after onboarding. Smooth integration and fast issue resolution guaranteed.",
    icon: "🎧",
  },
  {
    title: "Free Virtual Gifts",
    description:
      "Delight users with pre-built animated gifts—boost engagement and monetization from day one at no extra cost.",
    icon: "🎁",
  },
  {
    title: "Experienced Team",
    description:
      "Our expert developers and engineers have delivered scalable live solutions trusted by top apps.",
    icon: "👥",
  },
  {
    title: "Consultation Included",
    description:
      "We guide you with one-on-one strategic consultation on feature planning, scaling, and product success.",
    icon: "💬",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-container">
      <h2 className="why-title">Why Choose Us</h2>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
