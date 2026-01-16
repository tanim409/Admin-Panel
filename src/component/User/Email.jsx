import { useState } from "react";
import "./Email.css";
import emailjs from "@emailjs/browser";
import { X } from "lucide-react";
export default function Email({ onClose }) {


  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_qn8wb6d";
    const templateId = "template_knu7h8c";
    const publicKey = "wmfaLuIEnDJ9JEUP6";

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then((Response) => {
        alert("email sent successfully");
        setFormData({
          from_name: "",
          from_email: "",
          message: "",
        });
        if (onClose) onClose();
      });
  };

  return (
    <>
      <div className="model-overlay">
        <div className="model-container">
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="email-header">
                <h2 className="modal-title">Email Section</h2>
                <button className="close-btn" onClick={onClose}>
                  <X style={{ width: "1.5", height: "1.5" }} />
                </button>
              </div>
              <div className="user-detail-grid">
                <input
                  type="text"
                  name="from_name"
                  placeholder="your name"
                  className="detail-row"
                  value={formData.from_name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="your email"
                  name="from_email"
                  className="detail-row"
                  value={formData.from_email}
                  onChange={handleChange}
                />
                <textarea
                  cols="30"
                  rows="10"
                  name="message"
                  value={formData.message}
                  className="detail-row"
                  onChange={handleChange}
                ></textarea>
                <div className="button-container">
                  <button type="submit" className="detail-button">
                    Send Email
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// import { useState } from "react";
// import "./Email.css";
// import emailjs from "@emailjs/browser";
// import { X } from "lucide-react";

// export default function Email({ onClose }) { // Accept onClose prop
//   const [formData, setFormData] = useState({
//     from_name: "", // Match EmailJS template variable names
//     from_email: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const serviceId = "service_qn8wb6d";
//     const templateId = "template_knu7h8c";
//     const publicKey = "wmfaLuIEnDJ9JEUP6";

//     // Correct order: serviceId, templateId, parameters, publicKey
//     emailjs.send(serviceId, templateId, formData, publicKey)
//       .then((response) => {
//         console.log("Email sent successfully!", response);
//         alert("Email sent successfully!");

//         // Reset form
//         setFormData({
//           from_name: "",
//           from_email: "",
//           message: ""
//         });

//         // Close modal
//         if (onClose) onClose();
//       })
//       .catch((error) => {
//         console.error("Error sending email:", error);
//         alert("Failed to send email. Please try again.");
//       });
//   };

//   return (
//     <div className="model-overlay">
//       <div className="model-container email-modal">
//         <div className="email-header">
//           <h2 className="modal-title">Send Email</h2>
//           <button className="close-btn" onClick={onClose}>
//             <X style={{ width: "1.5rem", height: "1.5rem" }} />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="email-form">
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="from_name"
//                 placeholder="Your name"
//                 className="form-input"
//                 value={formData.from_name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="email"
//                 name="from_email"
//                 placeholder="Your email"
//                 className="form-input"
//                 value={formData.from_email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <textarea
//                 name="message"
//                 placeholder="Your message"
//                 className="form-textarea"
//                 rows="5"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//             </div>

//             <div className="email-button-container">
//               <button type="submit" className="submit-button">
//                 Send Email
//               </button>
//               <button type="button" className="cancel-button" onClick={onClose}>
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
