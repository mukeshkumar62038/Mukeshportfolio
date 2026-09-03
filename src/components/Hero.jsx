import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const roles = ["Web Developer", "Frontend Developer", "Full Stack Developer", "UI/UX Designer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('Web Developer');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];

      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 2500);
          setTypingSpeed(60);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(120);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="hero-highlight">{personalInfo.name}</span>
          </h1>

          <div className="hero-role-wrapper">
            <span className="hero-role-text">{displayedText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-description">
            {personalInfo.tagline}
          </p>

          <div className="hero-social-block">
            <span className="hero-social-title">FIND WITH ME</span>
            <div className="hero-social-icons">
              <a
                href="https://www.facebook.com/mukeshkumar.mjhonson/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                title="Facebook"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="https://www.instagram.com/mukesh_ydv167/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                title="Instagram"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                title="Twitter / X"
                aria-label="Twitter"
              >
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Visual Image */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img
              src="/images/bg1.png"
              alt="Mukesh - Web Developer"
              className="hero-person-img"
              loading="eager"
            />
            <div className="hero-image-blend-left" />
            <div className="hero-image-blend-bottom" />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hero-scroll-hint">
        <a href="#about" aria-label="Scroll down to About section">
          <ArrowDown size={20} className="bounce-arrow" />
        </a>
      </div>
    </section>
  );
}
