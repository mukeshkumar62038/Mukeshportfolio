import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container neumorphic-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        <div className="modal-grid">
          <div className="modal-image-col">
            <div className="modal-img-frame">
              <img
                src={project.image}
                alt={project.title}
                className="modal-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80";
                }}
              />
            </div>
          </div>

          <div className="modal-info-col">
            <span className="modal-category">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-subtitle">{project.subtitle}</p>

            <p className="modal-description">{project.description}</p>

            <div className="modal-highlights">
              <h4>Key Highlights:</h4>
              <ul className="modal-highlights-list">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>{tag}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-actions">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>VIEW LIVE DEMO</span>
                <ExternalLink size={16} />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>GITHUB REPO</span>
                <GithubIcon size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
