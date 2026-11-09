
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSuccess("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSuccess(
      `Thank you, ${form.name}! Your message is ready.`
    );

    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section className="page-section contact-page">
      <div className="section-heading">
        <span className="eyebrow">GET IN TOUCH</span>
        <h1>Contact Us</h1>
        <p>Have a question or idea? We would love to hear from you.</p>
      </div>

      <div className="contact-card">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn">
            Send Message →
          </button>

          {success && (
            <p className="success-message" role="status">
              {success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
