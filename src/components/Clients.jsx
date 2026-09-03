import React from 'react';
import { clientsData } from '../data/portfolioData';
import { Briefcase, Building2 } from 'lucide-react';

export default function Clients() {
  return (
    <section id="clients" className="clients-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">POPULAR PARTNERS</span>
          <h2 className="section-title">Our Trusted Client</h2>
        </div>

        <div className="clients-grid">
          {clientsData.map((client) => (
            <div key={client.id} className="client-card neumorphic-card">
              <div className="client-brand-badge">
                <span className="brand-initials">
                  {client.company.split(' ').map(w => w[0]).join('').substring(0, 3)}
                </span>
              </div>
              <h4 className="client-company">{client.company}</h4>
              <p className="client-person">{client.name}</p>
              <span className="client-role">{client.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
