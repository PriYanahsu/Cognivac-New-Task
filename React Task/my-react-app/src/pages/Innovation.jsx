import React from 'react';
import './Innovation.css';

const Innovation = () => {
  return (
    <section className="innovation-section">
      <div className="innovation-container">
        <div className="innovation-content">
          <p className="section-subtitle">ABOUT US</p>
          <h2 className="section-title">Empowering Innovation AI</h2>

          <div className="text-content">
            <p className="lead-text">
              we are driven by the vision of transforming businesses with artificial intelligence. Founded in 2024, we have consistently pushed the boundaries of AI to offer smart, scalable, and intuitive solutions that drive growth and efficiency.                
              Our team of expert data scientists, engineers, and strategists combines cutting-edge technology with deep industry knowledge to deliver custom AI solutions that cater to unique business challenges.
            </p>
          </div>
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">32+</div>
              <div className="stat-label">Years in AI</div>
              <div className="stat-description">Innovation</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">20</div>
              <div className="stat-label">Clients Countries</div>
              <div className="stat-description">Worldwide</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">4000+</div>
              <div className="stat-label">Projects Successfully</div>
              <div className="stat-description">Implemented</div>
            </div>
          </div>

          <div className="read-more">
            <a href="#">Read more →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationAI;