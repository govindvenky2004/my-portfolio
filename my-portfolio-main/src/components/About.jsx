import './About.css';

const timeline = [
  { year: '2022', label: 'Started BE in CSE', sub: 'DSATM, Bengaluru' },
  { year: '2024', label: 'Built DomiChain & SafeSurf', sub: 'Blockchain + ML projects' },
  { year: '2026 Jan', label: 'Infosys Internship', sub: 'Systems Engineer Trainee (BDA)' },
  { year: '2026 May', label: 'India AI Water System', sub: 'ML/PySpark + Power BI' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-inner">
        <span className="eyebrow">Who I am</span>

        <div className="about-grid">
          {/* Left — text */}
          <div className="about-text">
            <h2 className="about-heading">
              Building at the edge of<br />
              <span className="about-gradient">intelligence & code.</span>
            </h2>

            <p>
              I'm <strong>Govind Venkatesh</strong>, a final-year Computer Science student
              from Bengaluru who loves turning complex problems into clean, working systems.
            </p>
            <p>
              My work spans <span className="hl">AI & Machine Learning</span>,{' '}
              <span className="hl">Blockchain</span>, and{' '}
              <span className="hl">Full-Stack Development</span> — I thrive wherever
              these worlds intersect.
            </p>
            <p>
              Most recently, I built an AI-enhanced water supply management platform
              at Infosys using ML/PySpark, Power BI, and cloud databases — a system
              covering 7 roles, 25 user stories, and 10 data tables.
            </p>

            <div className="about-links">
              <a href="mailto:govindvenkatesh2004@gmail.com" className="about-link">
                Email me ↗
              </a>
              <a href="https://www.linkedin.com/in/govind-venkatesh-938597259/" target="_blank" rel="noreferrer" className="about-link">
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right — timeline */}
          <div className="about-timeline">
            <p className="timeline-label">Journey so far</p>
            {timeline.map((item, i) => (
              <div className="tl-item" key={i}>
                <div className="tl-dot" />
                <div className="tl-body">
                  <span className="tl-year">{item.year}</span>
                  <span className="tl-title">{item.label}</span>
                  <span className="tl-sub">{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
