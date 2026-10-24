import { ArrowUpRight, Github, Linkedin, Mail, Menu, ShieldCheck, Code2, Cpu, Database, X, Download, FileText } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    number: '01',
    title: 'P.A.S.S.',
    subtitle: 'Password Protection App',
    description: 'A password-management application concept designed to keep password data stored locally, with no cloud backup. Includes random password generation and password strength and integrity checks.',
    tags: ['Application Security', 'Password Integrity', 'Local Storage'],
    status: 'Waiting for Deployment',
    url: null,
  },
  {
    number: '02',
    title: 'AI-Based Vacation Recommendation System',
    subtitle: 'Recommendation system',
    description: 'A system that recommends vacation plans according to a user’s budget and preferences, using AI-based algorithms including binary-tree classification.',
    tags: ['AI Algorithms', 'Python', 'Classification'],
    status: 'Project',
    url: 'https://github.com/raveel1202-jpg/AI-Based-Recommendation-System',
  },
  {
    number: '03',
    title: '32-bit Single-Cycle Processor',
    subtitle: 'Digital systems design',
    description: 'A 32-bit single-cycle processor designed in Logisim, incorporating the core components including memory, an ALU, and a control unit.',
    tags: ['Logisim', 'Processor Design', 'Digital Logic'],
    status: 'Project',
    url: 'https://github.com/raveel1202-jpg/32-Bit-Single-Cycle-Processor',
  },
  {
    number: '04',
    title: 'Supermarket Inventory System',
    subtitle: 'Collaborative Project',
    description: 'A SQL-based inventory management application for recording and managing product inventory, sales, and order placement.',
    tags: ['SQL', 'MySQL', 'Database Design'],
    status: 'Collaborative',
    url: 'https://github.com/raveel1202-jpg/Supermarket-Management-System',
  },
  {
    number: '05',
    title: 'AI-Driven Bidirectional Sign Language Communication System',
    subtitle: 'In development',
    description: 'An AI-driven communication concept intended to support interaction between sign-language users and non-signers, with video calling and real-time translation on both ends.',
    tags: ['AI', 'Real-time Translation', 'Communication'],
    status: 'In progress',
    url: 'https://www.youtube.com/',
  },
]

const skillGroups = [
  { title: 'Programming', icon: Code2, items: ['Python', 'JavaScript', 'C', 'C++', 'SQL', 'Verilog', 'SystemVerilog'] },
  { title: 'Web & Development', icon: Cpu, items: ['React', 'Node.js', 'Vite', 'Git', 'Application Testing'] },
  { title: 'Cybersecurity', icon: ShieldCheck, items: ['Wireshark', 'Kali Linux', 'Password Integrity Checks', 'OWASP Top 10 Concepts'] },
  { title: 'Data & Tools', icon: Database, items: ['MySQL', 'MATLAB', 'Linux', 'Logisim'] },
]

function SectionHeading({ eyebrow, title, detail }) {
  return <div className="section-heading"><div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2></div>{detail && <p>{detail}</p>}</div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = [['About', '#about'], ['Experience', '#experience'], ['Skills', '#skills'], ['Projects', '#projects'], ['Resume', '#resume'], ['Contact', '#contact']]
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Muhammad Raveel Jamil home"><span className="brand-mark">RJ</span><span className="brand-name">MUHAMMAD RAVEEL JAMIL</span></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
        <nav className={menuOpen ? 'navigation navigation-open' : 'navigation'} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> SOFTWARE DEVELOPMENT · APPLICATION SECURITY · AI SYSTEMS</div>
            <h1>Muhammad Raveel<br/><span>Jamil</span></h1>
            <p className="hero-role">Software Developer | AI &amp; Cyber-Security Analyst | Computer Engineering at CUST | Application Security | AI-Based Systems</p>
            <p className="hero-summary">Final-year Computer Engineering student at Capital University of Science and Technology, with practical experience in software development, web development, application testing, online security analysis, and AI-based projects.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">View Projects <ArrowUpRight size={16}/></a><a className="button button-secondary" href="#contact">Contact Me <ArrowUpRight size={16}/></a></div>
          </div>
          <aside className="hero-panel" aria-label="Professional focus">
            <div className="panel-monogram">RJ<span>.</span></div>
            <div className="panel-rule"/>
            <div className="focus-row"><span>01</span><div><strong>Software Engineering</strong><p>Development, testing and web applications</p></div></div>
            <div className="focus-row"><span>02</span><div><strong>Application Security</strong><p>Security analysis and OWASP concepts</p></div></div>
            <div className="focus-row"><span>03</span><div><strong>AI-Based Systems</strong><p>Applied AI and recommendation projects</p></div></div>
          </aside>
        </section>

        <section className="section-wrap content-section" id="about">
          <SectionHeading eyebrow="" title="Professional Overview" detail=""/>
          <div className="about-grid">
            <p className="about-lead">I am a Computer Engineering student developing practical experience across software engineering, application security, and artificial intelligence.</p>
            <div className="about-copy"><p>My work spans web application development, software testing, password protection, digital systems, and database-driven applications. Through internships and academic projects, I have contributed to development workflows and explored how security concepts can be applied to real applications.</p><p>I am interested in opportunities where I can continue strengthening my engineering skills, contribute to a team, and develop reliable, well-considered technical solutions.</p></div>
          </div>
        </section>

        <section className="section-wrap content-section" id="experience">
          <SectionHeading eyebrow="" title="Experience & Education" detail=""/>
          <div className="timeline">
            <article className="timeline-item"><div className="timeline-date">JUL 2026 — OCT 2026</div><div className="timeline-main"><h3>Junior Software Developer Intern</h3><div className="timeline-org">Encoders Den</div><ul><li>Developed and tested applications as part of the software development workflow.</li><li>Worked on enhancements and development of the organization’s website.</li></ul></div><span className="timeline-type">INTERNSHIP</span></article>
            <article className="timeline-item"><div className="timeline-date">JUL 2026 — SEP 2026</div><div className="timeline-main"><h3>Junior Software Developer &amp; AI Intern</h3><div className="timeline-org">IB Proptech</div><ul><li>Contributed to software enhancements and web page development.</li><li>Helped develop a platform for checking application compliance against OWASP Top 10 concepts to support application security reviews.</li></ul></div><span className="timeline-type">INTERNSHIP</span></article>
            <article className="timeline-item"><div className="timeline-date">2023 — 2027 EXPECTED</div><div className="timeline-main"><h3>Bachelor of Science in Computer Engineering</h3><div className="timeline-org">Capital University of Science and Technology (CUST) · Islamabad</div></div><span className="timeline-type">EDUCATION</span></article>
            <article className="timeline-item"><div className="timeline-date">2021 — 2023</div><div className="timeline-main"><h3>F.Sc. Pre-Engineering</h3><div className="timeline-org">Punjab Group of Colleges · Blue Area, Islamabad</div></div><span className="timeline-type">EDUCATION</span></article>
          </div>
        </section>

        <section className="section-wrap content-section" id="skills">
          <SectionHeading eyebrow="" title="Technical Skills" detail=""/>
          <div className="skills-grid">{skillGroups.map(({ title, icon: Icon, items }, i) => <article className="skill-card" key={title}><div className="skill-card-head"><span className="skill-number">0{i + 1}</span><Icon size={20} strokeWidth={1.6}/></div><h3>{title}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section className="section-wrap content-section" id="projects">
          <SectionHeading eyebrow="" title="Projects" detail=""/>
          <div className="projects-list">{projects.map(project => <article className={`project-card ${project.url ? 'project-linked' : 'project-unlinked'}`} key={project.number}>
            <div className="project-number">{project.number}</div>
            <div className="project-content"><div className="project-status">{project.status}</div><h3>{project.title}</h3><div className="project-subtitle">{project.subtitle}</div><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
            {project.url ? <a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} link`}><ArrowUpRight size={20}/></a> : <span className="project-no-link" aria-label="No public link yet">PRIVATE / PENDING</span>}
          </article>)}</div>
        </section>

        <section className="section-wrap resume-section" id="resume">
          <div className="resume-card">
            <div className="resume-icon"><FileText size={24} strokeWidth={1.5}/></div>
            <div className="resume-copy"><span className="eyebrow">CURRICULUM VITAE</span><h2>Resume</h2><p>Download my resume for a concise overview of my education, experience, technical skills, and projects.</p><span className="resume-file">PDF DOCUMENT · MUHAMMAD RAVEEL JAMIL</span></div>
            <a className="button button-primary resume-download" href="/Portfolio/Muhammad_Raveel_Jamil_Resume.pdf" download="Muhammad_Raveel_Jamil_Resume.pdf"><Download size={16}/> Download Resume</a>
          </div>
        </section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div><h2>Professional enquiries<br/><span>and opportunities.</span></h2><p>For opportunities in software development, application security, AI, or related engineering work, please get in touch by email or through my professional profiles.</p></div><div className="contact-details"><a className="contact-link" href="mailto:muhammadraveeljamil@gmail.com"><span><Mail size={18}/> Email</span><strong>muhammadraveeljamil@gmail.com</strong><ArrowUpRight size={17}/></a><a className="contact-link" href="https://github.com/raveel1202-jpg" target="_blank" rel="noreferrer"><span><Github size={18}/> GitHub</span><strong>github.com/raveel1202-jpg</strong><ArrowUpRight size={17}/></a><a className="contact-link" href="https://www.linkedin.com/in/muhammad-raveel-jamil-22b1423ba/" target="_blank" rel="noreferrer"><span><Linkedin size={18}/> LinkedIn</span><strong>linkedin.com/in/muhammad-raveel-jamil-22b1423ba</strong><ArrowUpRight size={17}/></a></div></div></section>
      </main>
      <footer className="footer section-wrap"><a className="footer-brand" href="#home">RJ<span>.</span></a><span>© 2026 Muhammad Raveel Jamil</span><a href="#home">Back to top ↑</a></footer>
    </div>
  )
}

export default App
