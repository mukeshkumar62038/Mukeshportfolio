import React, { useState } from 'react';
import { ArrowUpRight, Check, Sparkles, Eye } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];

  return (
    <section id="projects" className="portfolio-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">VISIT MY PORTFOLIO & KEEP YOUR FEEDBACK</span>
          <h2 className="section-title">My Best Work</h2>
        </div>

        {/* Featured Showcase directly matching PDF */}
        <div className="featured-showcase neumorphic-card">
          <div className="featured-content">
            <div className="featured-badge">
              <Sparkles size={14} />
              <span>FEATURED WORK</span>
            </div>
            <h3 className="featured-title">{featuredProject.subtitle}</h3>
            <h4 className="featured-project-name">{featuredProject.title}</h4>
            <p className="featured-desc">{featuredProject.description}</p>

            <ul className="featured-checklist">
              {featuredProject.tags.map((tag) => (
                <li key={tag}>
                  <div className="check-badge">
                    <Check size={14} />
                  </div>
                  <span>{tag}</span>
                </li>
              ))}
            </ul>

            <div className="featured-actions">
              <button
                className="btn-primary"
                onClick={() => setSelectedProject(featuredProject)}
              >
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight size={18} />
              </button>
              <a
                href={featuredProject.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>LIVE PREVIEW</span>
              </a>
            </div>
          </div>

          <div className="featured-mockup-wrapper" onClick={() => setSelectedProject(featuredProject)}>
            <div className="mockup-frame">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="mockup-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80";
                }}
              />
              <div className="mockup-hover-overlay">
                <span className="overlay-btn">
                  <Eye size={20} /> View Project Details
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card neumorphic-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-thumbnail-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-thumbnail"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80";
                  }}
                />
                <span className="project-category-badge">{project.category}</span>
              </div>

              <div className="project-card-body">
                <div className="project-card-meta">
                  <h3 className="project-card-title">{project.title}</h3>
                  <div className="project-card-arrow">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <p className="project-card-desc">
                  {project.description.length > 95
                    ? `${project.description.substring(0, 95)}...`
                    : project.description}
                </p>

                <div className="project-tags-row">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
