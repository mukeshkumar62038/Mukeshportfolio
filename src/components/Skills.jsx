import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import SkillIcon from './SkillIcon';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Frontend', 'Backend', 'Database'];

  const filteredSkills = activeFilter === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">WHAT MY SKILLS ARE</span>
          <h2 className="section-title">My Skill</h2>
        </div>

        {/* Category Filters */}
        <div className="skills-filter-row">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-card neumorphic-card">
              <div className="skill-icon-wrap">
                <SkillIcon type={skill.iconType} className="skill-svg-icon" />
              </div>

              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-category-tag">{skill.category}</span>
              </div>

              <div className="skill-progress-box">
                <div className="progress-header">
                  <span className="progress-label">Proficiency</span>
                  <span className="progress-percent">{skill.level}%</span>
                </div>
                <div className="progress-bar-track">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

              <p className="skill-desc">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
