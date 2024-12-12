import React from "react";
import { FaTruck, FaCreditCard, FaUndo, FaClock } from "react-icons/fa"; // Import icons from react-icons

const featuresData = [
  {
    icon: <FaTruck />, // Replace with an icon component
    title: "Free delivery",
    description: "Free shipping for all orders",
  },
  {
    icon: <FaCreditCard />, // Replace with an icon component
    title: "100% Payment Secure",
    description: "Payment 100% secured",
  },
  {
    icon: <FaUndo />, // Replace with an icon component
    title: "14 Days Return",
    description: "You have 14 days to return",
  },
  {
    icon: <FaClock />, // Replace with an icon component
    title: "Support 24/7",
    description: "We support 24 hours a day",
  },
];

const Features = () => {
  return (
    <div className="features px-5">
      {featuresData.map((feature, index) => (
        <div className="feature" key={index}>
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;