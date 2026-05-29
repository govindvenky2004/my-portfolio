import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-logo">
            <span className="footer-bracket">&lt;</span>GV<span className="footer-bracket">/&gt;</span>
          </span>
          <p className="footer-copy">© 2025 Govind Venkatesh. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/govindvenky2004" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/govind-venkatesh-938597259/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:govindvenkatesh2004@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
