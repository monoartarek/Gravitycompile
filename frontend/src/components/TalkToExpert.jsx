// import "./TalkToExpert.css";
// import bgImage from "../assets/others_image/form.jpg";

// const TalkToExpert = () => {
//   return (
//     <section
//       className="expert-section"
//       // style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <div className="expert-overlay" style={{ backgroundImage: `url(${bgImage})` }}>
//         <div className="expert-container">
//           {/* Left Content */}
//           <div className="expert-left">
//             <h2>Talk to an expert</h2>
//             <p className="subtitle1">
//               Fill the form and get free consultation
//             </p>

//             <ul className="expert-list">
//               <li>Request updated demos</li>
//               <li>Learn more about pricing</li>
//               <li>1 on 1 onboarding support session</li>
//               <li>Work with us and get started 3x faster</li>
//             </ul>
//           </div>

//           {/* Right Form */}
//           <div className="expert-form">
//             <form>
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>First name *</label>
//                   <input type="text" placeholder="Your First name" />
//                 </div>
//                 <div className="form-group">
//                   <label>Last name *</label>
//                   <input type="text" placeholder="Your Last name" />
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Email address *</label>
//                   <input type="email" placeholder="Your Email" />
//                 </div>
//                 <div className="form-group">
//                   <label>Phone number *</label>
//                   <input type="text" placeholder="Your phone number" />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label>Category *</label>
//                 <select>
//                   <option>Select a Category</option>
//                   <option>Live Streaming App</option>
//                   <option>Consultation</option>
//                   <option>Custom Development</option>
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>How may we help you?</label>
//                 <textarea placeholder="Tell us about your needs."></textarea>
//               </div>

//               <button type="submit" className="submit-btn">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TalkToExpert;
import { useState } from "react";
import "./TalkToExpert.css";

const TalkToExpert = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    category: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://127.0.0.1:8000/api/talk-to-expert/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      category: "",
      message: "",
    });
  };

  return (
    <section className="expert-section">
      <div className="expert-overlay">
        <div className="expert-container">

          {/* Left */}
          <div className="expert-left">
            <h2>Talk to an expert</h2>
            <p className="subtitle">
              Fill the form and get free consultation
            </p>

            <ul className="expert-list">
              <li>Request updated demos</li>
              <li>Learn more about pricing</li>
              <li>1 on 1 onboarding support session</li>
              <li>Work with us and get started 3x faster</li>
            </ul>
          </div>

          {/* Form */}
          <div className="expert-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First name *</label>
                  <input
                    name="first_name"
                    placeholder="Your First name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Last name *</label>
                  <input
                    name="last_name"
                    placeholder="Your Last name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone number *</label>
                  <input
                    name="phone_number"
                    placeholder="Your phone number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a Category</option>
                  <option value="live_streaming">Live Streaming App</option>
                  <option value="consultation">Consultation</option>
                  <option value="custom_dev">Custom Development</option>
                </select>
              </div>

              <div className="form-group">
                <label>How may we help you?</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your needs."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button className="submit-btn">Submit</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TalkToExpert;
