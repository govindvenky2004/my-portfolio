import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs
      .sendForm(
        'service_3obclie',
        'template_4y9rnf9',
        form.current,
        'xmAuMI2KmltDiGJW6'
      )
      .then(
        () => {
          setStatus('success');
          e.target.reset();
          setTimeout(() => setStatus(''), 4000);
        },
        (error) => {
          console.error(error.text);
          setStatus('error');
          setTimeout(() => setStatus(''), 4000);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="section-inner">
        <span className="eyebrow">Get in touch</span>

        <div className="contact-grid">
          {/* Left */}
          <div className="contact-left">
            <h2 className="contact-heading">
              Let's build something<br />
              <span className="contact-gradient">worth remembering.</span>
            </h2>
            <p className="contact-copy">
              Open to internships, collaborations, and interesting projects.
              Drop me a message and I'll get back to you.
            </p>

            <div className="contact-info">
              <a href="mailto:govindvenkatesh2004@gmail.com" className="contact-detail">
                <span className="cd-label">Email</span>
                <span className="cd-val">govindvenkatesh2004@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/govind-venkatesh-938597259/" target="_blank" rel="noreferrer" className="contact-detail">
                <span className="cd-label">LinkedIn</span>
                <span className="cd-val">/in/govind-venkatesh</span>
              </a>
              <a href="https://github.com/govindvenky2004" target="_blank" rel="noreferrer" className="contact-detail">
                <span className="cd-label">GitHub</span>
                <span className="cd-val">govindvenky2004</span>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-right">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows="5" placeholder="What's on your mind?" required />
              </div>
              <button type="submit" className="form-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Message →'}
              </button>

              {status === 'success' && (
                <p className="form-status success">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="form-status error">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
