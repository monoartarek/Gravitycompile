import React, { useState } from "react";
import "./FAQ.css";
import Header2 from "./header2";
import Footer from "./Footer";

const faqData = [
  {
    question: "What is PikiLive Technology?",
    answer:
      "PikiLive Technology is an app development company that helps creators, agencies, and businesses launch their own branded live streaming apps. Whether you want to start your own platform like BIGO or manage your own hosts, we provide complete app development and rental solutions.",
    category: "About Company",
  },
  {
    question: "Who can use PikiLive Live services?",
    answer:
      "Creators, agencies, and businesses looking to launch their own live streaming apps can use PikiLive Live services.",
    category: "Services",
  },
  {
    question: "Do I need technical knowledge to run my own app?",
    answer:
      "No, PikiLive Technology provides full support and a user-friendly platform, so you don’t need technical knowledge.",
    category: "Technical",
  },
  {
    question: "How much does it cost?",
    answer: "Pricing depends on the plan you select. Contact us for more details.",
    category: "Pricing",
  },
  {
    question: "What features are included?",
    answer: "Live streaming, chat, monetization, analytics, and more.",
    category: "Features",
  },
  {
    question: "How to get support?",
    answer: "You can contact our support team via email or chat.",
    category: "Support",
  },
];

const categories = [
  "All Questions",
  "About Company",
  "Services",
  "Pricing",
  "Features",
  "Technical",
  "Support",
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Questions");
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredFaq = faqData.filter((item) => {
    const matchCategory =
      selectedCategory === "All Questions" || item.category === selectedCategory;
    const matchSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
    <Header2 />

    <div className="faq-container">
      <h1>Frequently Asked Questions(FAQ)</h1>
      <p>Everything you need to know about PikiLive Technology's live streaming app development services</p>

      <input
        type="text"
        placeholder="Search FAQs..."
        className="faq-search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="faq-categories">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat} {cat !== "All Questions" && `(${faqData.filter(f => f.category === cat).length})`}
          </button>
        ))}
      </div>

      <div className="faq-list">
        {filteredFaq.map((item, idx) => (
          <div key={idx} className="faq-item">
            <div
              className="faq-question"
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            >
              {item.question}
              <span className={`arrow ${activeIndex === idx ? "open" : ""}`}>⌄</span>
            </div>
            {activeIndex === idx && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
        {filteredFaq.length === 0 && <p className="no-results">No results found.</p>}
      </div>
    </div>


    <Footer/>
    </>
  );
}
