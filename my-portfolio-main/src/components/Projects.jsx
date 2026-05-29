import './Projects.css';

const projects = [
  {
    num: '01',
    title: 'India AI Water Supply Management',
    description:
      'AI-driven platform to monitor, predict, and optimize water distribution across urban and rural networks. Built during Infosys internship — 7 roles, 25 user stories, 10 tables.',
    tech: ['ML/PySpark', 'Power BI', 'MySQL', 'MongoDB'],
    highlight: true,
    tag: 'Internship Project',
    code: 'https://github.com/govindvenky2004',
    demo: null,
  },
  {
    num: '02',
    title: 'Heart Attack Prediction',
    description:
      'Predictive analytics system that forecasts heart attack risk from patient medical data using ML models. Exposed via a REST API built with FastAPI.',
    tech: ['Python', 'FastAPI', 'Scikit-learn', 'Pandas'],
    highlight: false,
    tag: 'ML / Healthcare',
    code: 'https://github.com/govindvenky2004/heart_attack_prediction',
    demo: null,
  },
  {
    num: '03',
    title: 'DomiChain',
    description:
      'Decentralised property management platform using Ethereum smart contracts. Enables secure registration and transparent ownership transfers with a React frontend.',
    tech: ['Solidity', 'Hardhat', 'web3.js', 'React'],
    highlight: false,
    tag: 'Blockchain',
    code: 'https://github.com/govindvenky2004/DomiChain',
    demo: null,
  },
  {
    num: '04',
    title: 'SafeSurf',
    description:
      'ML-driven phishing detection for URLs and emails using Random Forest & Naïve Bayes — achieving 97.47% and 98.52% accuracy respectively. Flask + MongoDB backend.',
    tech: ['Python', 'Flask', 'Random Forest', 'MongoDB'],
    highlight: false,
    tag: 'Cybersecurity / ML',
    code: '#',
    demo: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-inner">
        <span className="eyebrow">What I've built</span>
        <h2 className="projects-heading">Featured Projects</h2>
        <p className="projects-sub">
          A selection of projects across ML, blockchain, and full-stack — each solving a real problem.
        </p>

        <div className="projects-list">
          {projects.map((p) => (
            <div className={`project-item ${p.highlight ? 'featured' : ''}`} key={p.num}>
              <div className="project-meta">
                <span className="project-num">{p.num}</span>
                {p.highlight && <span className="project-badge">Featured</span>}
              </div>

              <div className="project-body">
                <div className="project-top">
                  <div>
                    <span className="project-tag">{p.tag}</span>
                    <h3 className="project-title">{p.title}</h3>
                  </div>
                  <div className="project-actions">
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="proj-btn">
                        Demo ↗
                      </a>
                    )}
                    {p.code && p.code !== '#' && (
                      <a href={p.code} target="_blank" rel="noreferrer" className="proj-btn">
                        Code ↗
                      </a>
                    )}
                  </div>
                </div>

                <p className="project-desc">{p.description}</p>

                <div className="project-tech">
                  {p.tech.map((t, i) => (
                    <span key={i} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
