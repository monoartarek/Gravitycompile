import React, { useState } from "react";
import "./Blog.css";
import Header2 from "./header2";
import Footer from "./Footer";

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "Why Every Live Streaming Agency Should Launch Its Own App",
    tags: ["Live Streaming", "App Development", "Business Strategy", "Digital Marketing"],
    summary:
      "Discover why having your own branded app is crucial for long-term success and client retention.",
    author: "Digital Streaming Team",
    date: "January 15, 2025",
    readTime: "8 min read",
    content: `The Streaming Revolution is Here
The live streaming industry has exploded from a niche entertainment category to a $70+ billion global market.
As streaming consumption continues to surge, agencies that rely solely on third-party platforms are missing out on massive opportunities for growth, brand building, and revenue optimization.

1. Complete Brand Control and Identity
When you operate exclusively on platforms like YouTube, Twitch, or Facebook Live, you're essentially building someone else's empire. Your brand becomes secondary to the platform's interface, algorithms, and user experience decisions.

2. Own Your Brand Experience
With your own app, every pixel serves your brand story. From custom color schemes and logos to personalized user journeys, you can create a seamless and unique experience for your users.
`,
    featured: true,
  },
  {
    id: 2,
    title: "Build vs. Buy: Should You Develop a Custom Live Streaming App or Use Existing Platforms?",
    tags: ["Strategy", "Development", "Platforms"],
    summary:
      "Learn the pros and cons of building your own live streaming app versus using existing platforms.",
    author: "Tech Insights",
    date: "January 20, 2025",
    readTime: "7 min read",
    content: `Building your own app gives full control, branding, and monetization freedom.
Using existing platforms is faster and cheaper but limits your brand and revenue options.
Weigh the trade-offs carefully before making a decision.`,
  },
  {
    id: 3,
    title: "How Much Does It Cost to Develop a Live Streaming App in 2025?",
    tags: ["Pricing", "App Development"],
    summary:
      "Understand the cost factors and pricing models for launching your own live streaming app in 2025.",
    author: "Finance Tech Team",
    date: "January 25, 2025",
    readTime: "6 min read",
    content: `The cost depends on features, platform (iOS/Android/Web), and customization level.
Basic apps may cost $10k–$30k, while advanced platforms with live monetization, chat, and analytics can go up to $100k+.`,
  },
  {
    id: 4,
    title: "Top Live Streaming Apps Globally in 2025",
    tags: ["Global", "Trends", "Streaming"],
    summary:
      "Check out the leading live streaming apps across the globe and what makes them successful.",
    author: "Digital Trends",
    date: "February 1, 2025",
    readTime: "5 min read",
    content: `The global market leaders include Twitch, YouTube Live, BIGO Live, and Facebook Live.
Each platform offers unique engagement features, monetization options, and audience reach.`,
  },
  {
    id: 5,
    title: "Top Live Streaming Apps in India 2025",
    tags: ["India", "Local Trends", "Streaming"],
    summary:
      "Explore the most popular live streaming apps in India and their market strategies.",
    author: "India Tech Team",
    date: "February 5, 2025",
    readTime: "5 min read",
    content: `Local apps like ShareChat Live, Roposo, and Josh Live are dominating the Indian market.
They focus on regional content, influencer engagement, and gamification features.`,
  },
];

export default function Blog() {
  const [activeBlog, setActiveBlog] = useState(blogs[0]);

  return (
    <>
    <Header2 />

    <div className="blog-page">
      {/* Sidebar / Mobile menu */}
      <aside className="blog-sidebar">
        <h2>Latest Posts</h2>
        <ul>
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className={blog.id === activeBlog.id ? "active-post" : ""}
              onClick={() => setActiveBlog(blog)}
            >
              <p>{blog.title}</p>
              <small>{blog.date}</small>
              {blog.featured && <span className="featured-badge">Featured</span>}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Blog Content */}
      <main className="blog-content">
        <div className="blog-tags">
          {activeBlog.tags.map((tag, idx) => (
            <span key={idx} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="blog-title">{activeBlog.title}</h1>
        <p className="blog-summary">{activeBlog.summary}</p>

        <div className="blog-meta">
          <span>👤 {activeBlog.author}</span>
          <span>📅 {activeBlog.date}</span>
          <span>⏱ {activeBlog.readTime}</span>
        </div>

        <div className="blog-full-content">
          {activeBlog.content.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </main>
    </div>


    <Footer />
    </>
  );
}
