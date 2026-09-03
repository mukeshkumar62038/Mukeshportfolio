import React from 'react';
import {
  Layout,
  Server,
  Code2,
  Smartphone,
  Database,
  Search,
  ArrowRight
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';

export default function Services() {
  const iconMap = {
    Layout: Layout,
    Server: Server,
    Code2: Code2,
    Smartphone: Smartphone,
    Database: Database,
    Search: Search
  };

  return (
    <section id="services" className="services-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">FEATURES</span>
          <h2 className="section-title">What I Do</h2>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Code2;
            return (
              <div key={service.id} className="service-card neumorphic-card">
                <div className="service-icon-box">
                  <IconComponent size={32} className="service-icon" />
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <div className="service-card-footer">
                  <span className="learn-more-link">
                    Explore Details
                    <ArrowRight size={18} className="arrow-icon" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
