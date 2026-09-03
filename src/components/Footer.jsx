import React from 'react';
import { ArrowUp } from 'lucide-react';
import { LinkedinIcon, GithubIcon, TwitterIcon, InstagramIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="brand-logo">
              <span className="brand-avatar-mini">M</span>
              <span className="brand-name">{personalInfo.name.toUpperCase()}<span className="dot">.</span></span>
            </div>
            <p className="footer-brand-tagline">
              Crafting premium digital experiences, clean web interfaces, and high-performance applications with modern web technologies.
            </p>
            <div className="social-links-row">
              <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="icon-box" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="icon-box" aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
              <a href={personalInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="icon-box" aria-label="Twitter">
                <TwitterIcon size={18} />
              </a>
              <a href={personalInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="icon-box" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">QUICK LINKS</h4>
            <ul className="footer-link-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#services">What I Do</a></li>
              <li><a href="#projects">Best Work</a></li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">SERVICES</h4>
            <ul className="footer-link-list">
              <li><a href="#services">Frontend Development</a></li>
              <li><a href="#services">Backend Development</a></li>
              <li><a href="#services">Full Stack Solutions</a></li>
              <li><a href="#services">Database Optimization</a></li>
              <li><a href="#services">SEO Optimization</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">CONTACT ME</h4>
            <ul className="footer-link-list">
              <li><a href={`mailto:${personalInfo.contact.email}`}>{personalInfo.contact.email}</a></li>
              <li><a href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`}>{personalInfo.contact.phone}</a></li>
              <li><span>{personalInfo.contact.location}</span></li>
              <li><a href="#contact" className="status-indicator-link"><span className="status-dot"></span> Available for Hire</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()}. All rights reserved by <strong>{personalInfo.name}</strong>.
          </p>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
