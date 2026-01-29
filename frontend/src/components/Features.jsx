import "./Features.css";
import battle from "../assets/features_section/home_features_battle.webp";
import audManage from "../assets/features_section/home_features_aud_manage.webp";
import gift from "../assets/features_section/home_features_gift.webp";
import goLive from "../assets/features_section/home_features_go_live.webp";
import liveChat from "../assets/features_section/home_features_live_chat.webp";
import multiGuest from "../assets/features_section/home_features_multi_guest.webp";


const features = [
  {
    title: "PK Battle Mode",
    desc: "Let hosts challenge each other in real-time with interactive PK Battles. Boost viewer excitement, fan competition, and audience retention with dynamic matchups.",
    img: battle,
  },
  {
    title: "Multi-Guest Rooms",
    desc: "Invite viewers to join live sessions as co-hosts. Enable real-time conversations, interviews, or group discussions.",
    img: multiGuest,
  },
  {
    title: "Live Chat & Reactions",
    desc: "Keep your audience active with live comments, emojis, and likes. Spark interaction throughout the stream.",
    img: liveChat,
  },
  {
    title: "Virtual Gifting System",
    desc: "Monetize effortlessly with animated virtual gifts, from emojis to full-screen surprises.",
     img: gift,
  },
  {
    title: "Smart Audience Tools",
    desc: "Track, tag, and manage your audience with real-time controls and moderation tools.",
     img: audManage,
  },
  {
    title: "Pro Streaming Assistant",
    desc: "Enhance live streams with screen sharing, beauty filters, voice effects, and themes.",
    img: goLive,
  },
];

export default function Features() {
  return (
    <section className="features">
      <h2 className="features-title">Features</h2>

      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-image">
              <img src={item.img} alt={item.title} />
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
