import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { LinkedinIcon, GithubIcon, TwitterIcon, InstagramIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ submitted: false, error: false, message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending with modern UX feedback
    setTimeout(() => {
      setLoading(false);
      setStatus({
        submitted: true,
        error: false,
        message: 'Thank you! Your message has been sent successfully. I will get back to you shortly.'
      });

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Confetti fallback
      }

      // Reset form fields
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });

      // Clear status after 6 seconds
      setTimeout(() => {
        setStatus({ submitted: false, error: false, message: '' });
      }, 6000);
    }, 900);
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">CONTACT</span>
          <h2 className="section-title">Contact With Me</h2>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact Profile Card */}
          <div className="contact-profile-card neumorphic-card">
            <div className="contact-card-img-wrapper">
              <img
                src="/images/about-avatar.jpg"
                alt="Mukesh Contact Card"
                className="contact-card-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/hero-avatar.jpg";
                }}
              />
            </div>

            <div className="contact-card-info">
              <h3 className="contact-person-name">{personalInfo.contact.name}</h3>
              <p className="contact-person-title">{personalInfo.contact.title}</p>
              <p className="contact-person-status">{personalInfo.contact.statusText}</p>

              <div className="contact-details-list">
                <a href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`} className="contact-detail-item">
                  <div className="detail-icon-box">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="detail-label">Phone:</span>
                    <span className="detail-value">{personalInfo.contact.phone}</span>
                  </div>
                </a>

                <a href={`mailto:${personalInfo.contact.email}`} className="contact-detail-item">
                  <div className="detail-icon-box">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="detail-label">Email:</span>
                    <span className="detail-value">{personalInfo.contact.email}</span>
                  </div>
                </a>

                <div className="contact-detail-item">
                  <div className="detail-icon-box">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">{personalInfo.contact.location}</span>
                  </div>
                </div>
              </div>

              <div className="contact-social-section">
                <span className="social-heading">FIND WITH ME</span>
                <div className="social-links-row">
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-box"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-box"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href={personalInfo.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-box"
                    aria-label="Twitter"
                  >
                    <TwitterIcon size={18} />
                  </a>
                  <a
                    href={personalInfo.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-box"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-wrapper neumorphic-card">
            {status.submitted && (
              <div className="form-success-banner">
                <CheckCircle size={20} className="success-icon" />
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="name">YOUR NAME *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">PHONE NUMBER</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">EMAIL *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">SUBJECT *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Inquiry about project..."
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">YOUR MESSAGE *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  placeholder="Write your project details or message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary form-submit-btn"
              >
                <span>{loading ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
