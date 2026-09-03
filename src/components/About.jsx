import React from 'react';
import { Download, CheckCircle2, User, Award, FolderCheck, Users } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const statIcons = [Award, FolderCheck, Users, CheckCircle2];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="about-grid">
          {/* Left: Portrait Card */}
          <div className="about-visual">
            <div className="about-card neumorphic-card">
              <div className="about-image-wrapper">
                <img
                  src="/images/about33.png"
                  alt="Mukesh Portrait"
                  className="about-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/bg1.png";
                  }}
                />
                <div className="about-card-badge">
                  <User size={18} />
                  <span>Web Developer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content">
            <span className="section-subtitle">{personalInfo.aboutMeSubtitle}</span>
            <h2 className="section-title">{personalInfo.aboutMeHeading}</h2>

            <div className="about-bio-text">
              {personalInfo.aboutBio.map((paragraph, index) => (
                <p key={index} className="bio-p">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
              {personalInfo.stats.map((stat, idx) => {
                const IconComponent = statIcons[idx % statIcons.length];
                return (
                  <div key={stat.label} className="stat-card neumorphic-card">
                    <div className="stat-icon">
                      <IconComponent size={22} />
                    </div>
                    <div className="stat-data">
                      <h4 className="stat-value">{stat.value}</h4>
                      <p className="stat-label">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="about-actions">
              <a
                href={personalInfo.contact.resumeUrl}
                download="Mukesh_Resume.pdf"
                className="btn-primary btn-download"
              >
                <span>DOWNLOAD CV</span>
                <Download size={18} />
              </a>

              <a href="#contact" className="btn-secondary">
                <span>LET'S TALK</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
