import { useEffect, useRef } from 'react';
import { ReactTyped } from 'react-typed';
import './Hero.css';

export default function Hero() {
  const orbRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Background orbs */}
      <div className="hero-orbs" ref={orbRef}>
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
      </div>

      {/* Grid lines */}
      <div className="hero-grid" />

      <div className="hero-content">
        <span className="hero-tag">Available for opportunities</span>

        <h1 className="hero-name">
          <ReactTyped
            strings={["Govind Venkatesh"]}
            typeSpeed={55}
            showCursor={false}
            startDelay={300}
          />
        </h1>

        <div className="hero-roles">
          <ReactTyped
            strings={[
              "Full-Stack Developer",
              "ML Engineer",
              "Blockchain Builder",
              "AI Enthusiast",
            ]}
            typeSpeed={50}
            backSpeed={30}
            backDelay={1800}
            loop
            showCursor
            cursorChar="|"
          />
        </div>

        <p className="hero-desc">
          Final-year CSE student crafting intelligent systems at the intersection of
          AI, blockchain, and full-stack web development.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-ghost">Let's Talk →</a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">4+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">3</span>
            <span className="stat-label">Domains</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">97%</span>
            <span className="stat-label">ML Accuracy</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
