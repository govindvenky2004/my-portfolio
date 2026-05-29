import './Skills.css';

const categories = [
  {
    label: 'Languages',
    icon: '{ }',
    skills: ['Python', 'JavaScript', 'Java', 'C', 'Solidity'],
  },
  {
    label: 'Frontend',
    icon: '⬡',
    skills: ['React.js', 'HTML', 'CSS', 'Vite'],
  },
  {
    label: 'Backend & DB',
    icon: '⬡',
    skills: ['FastAPI', 'Flask', 'Node.js', 'MongoDB', 'MySQL'],
  },
  {
    label: 'AI / Data',
    icon: '⬡',
    skills: ['Machine Learning', 'PySpark', 'Scikit-learn', 'Pandas', 'Power BI'],
  },
  {
    label: 'Blockchain',
    icon: '⬡',
    skills: ['Solidity', 'Hardhat', 'web3.js', 'Ethereum'],
  },
  {
    label: 'Tools',
    icon: '⬡',
    skills: ['Git', 'GitHub', 'Postman', 'Linux', 'Google Cloud'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-inner">
        <span className="eyebrow">What I work with</span>
        <h2 className="skills-heading">Skills &amp; Technologies</h2>
        <p className="skills-sub">
          Comfortable across the full stack — from low-level ML pipelines to interactive frontends and smart contracts.
        </p>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div className="skill-card" key={i}>
              <div className="skill-card-header">
                <span className="skill-card-icon">{ cat.icon }</span>
                <span className="skill-card-label">{cat.label}</span>
              </div>
              <div className="skill-tags">
                {cat.skills.map((s, j) => (
                  <span className="skill-tag" key={j}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
