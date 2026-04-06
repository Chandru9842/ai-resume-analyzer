// ═══════════════════════════════════════════════════════════════
//  ResumeIQ — Client-Side AI Engine
// ═══════════════════════════════════════════════════════════════

// ─── Helpers ──────────────────────────────────────────────────
const $ = id => document.getElementById(id);

// ─── State ────────────────────────────────────────────────────
let selectedRole       = 'frontend';
let bulletSelectedRole = 'frontend';
let uploadedText       = '';

// ─── Sample Resumes ───────────────────────────────────────────
const SAMPLE_RESUMES = {
  frontend: `Chandru M | chandru@email.com | +91-9876543210 | linkedin.com/in/chandru | github.com/chandru

Objective
Passionate Frontend Developer with 1+ year of experience building responsive, user-friendly web applications using React and JavaScript. Seeking a frontend role to contribute to scalable product development.

Skills Summary
Languages: JavaScript, TypeScript, HTML5, CSS3
Frontend: React.js, Next.js, Redux, Tailwind CSS, Bootstrap
Backend: Node.js, Express.js (basic)
Database: MongoDB, Firebase
Tools: Git, GitHub, VS Code, Figma, Postman, Webpack, Vite

Projects
Portfolio Website | React, CSS3, EmailJS
- Built a responsive personal portfolio with animations and a working contact form
- Deployed on Vercel achieving 98/100 Lighthouse performance score
- Integrated EmailJS for direct email notifications without a backend

E-Commerce UI | React, Redux, Tailwind
- Developed a full-featured shopping cart with product filtering and real-time cart updates
- Implemented responsive design supporting 320px–1440px screen widths
- Added local storage persistence for cart state across sessions

Weather Dashboard | JavaScript, OpenWeather API, Chart.js
- Built real-time weather app displaying 7-day forecast with interactive Chart.js visualizations
- Handles 500+ API calls per hour with client-side caching reducing redundant requests by 60%

Experience
Frontend Developer Intern — TechStartup India, 2024 (3 Months)
- Developed 12+ responsive React components reducing page load time by 35%
- Collaborated with UX team to implement Figma designs pixel-perfectly
- Fixed 40+ bugs across legacy React codebase improving stability

Education
B.Tech Computer Science — SRM University, 2022–2026 | CGPA: 8.2`,

  backend: `Ravi Kumar | ravi@email.com | +91-9876543211 | github.com/ravikumar

Summary
Backend engineer with strong Node.js and Python skills. Built REST APIs serving 50K+ requests/day.

Skills
Node.js, Express.js, Python, FastAPI, PostgreSQL, MongoDB, Redis, Docker, AWS EC2, Git, REST API, GraphQL, JWT, Microservices

Experience
Backend Developer Intern — CloudTech Solutions, 2024
- Engineered REST API with Node.js/Express serving 50K+ daily requests
- Reduced database query time by 45% via PostgreSQL indexing and Redis caching
- Implemented JWT authentication system securing 10K+ user accounts

Projects
Task Management API | Node.js, Express, PostgreSQL
- Built production-grade REST API with CRUD operations and role-based access control
- Deployed on AWS EC2 with Docker, achieving 99.8% uptime

Education
B.Tech — NIT Trichy, 2022–2026 | CGPA: 8.5`,

  fullstack: `Priya Sharma | priya@email.com | github.com/priyadev | linkedin.com/in/priya

Summary
Full Stack Developer with 2 years building React + Node.js applications processing 10K+ users.

Skills
React, Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Docker, AWS, Git, REST API, GraphQL, Redis, Tailwind

Experience
Full Stack Developer — WebAgency, 2022–Present
- Built full-stack SaaS platform used by 10K monthly active users
- Engineered React frontend + Node.js backend reducing page load by 45%
- Deployed to AWS EC2 with Docker, achieving 99.8% uptime
- Integrated Stripe payment gateway processing $20K monthly transactions

Projects
Blog Platform | React, Node.js, PostgreSQL
- Developed end-to-end blogging system with 500+ registered users

Education
B.Tech — Tech University, 2022`,

  ai: `Arjun AI | arjun@email.com | github.com/arjunml

Summary
Machine Learning engineer with 2 years in NLP, deep learning, and model deployment. Published 1 paper.

Skills
Python, PyTorch, TensorFlow, scikit-learn, NLP, Transformers, Pandas, NumPy, SQL, FastAPI, Docker, AWS SageMaker, MLflow, Jupyter

Experience
ML Engineer Intern — AI Labs, 2024
- Fine-tuned BERT model for sentiment analysis achieving 94.2% accuracy on 100K dataset
- Built data pipeline processing 1M records/day with Apache Kafka
- Deployed model via FastAPI serving 5K predictions/hour

Projects
Resume Classifier | Python, BERT, FastAPI
- Built NLP classifier categorizing 50K resumes with 91% accuracy

Education
B.Tech AI/ML — IIT Bombay, 2022–2026 | CGPA: 9.1`,

  devops: `Kiran DevOps | kiran@email.com | github.com/kiranops

Summary
DevOps engineer with expertise in CI/CD, Kubernetes, and cloud infrastructure. Reduced deployment time by 70%.

Skills
Linux, Docker, Kubernetes, Terraform, AWS, GCP, Jenkins, GitHub Actions, Ansible, Prometheus, Grafana, Helm, Python, Bash

Experience
DevOps Engineer Intern — InfraCloud, 2024
- Designed CI/CD pipeline with Jenkins reducing deployment time by 70%
- Migrated 15 microservices to Kubernetes (EKS) handling 100K daily requests
- Implemented Prometheus + Grafana monitoring covering 50+ system metrics

Projects
Infrastructure Automation | Terraform, AWS, Ansible
- Automated provisioning of 20+ EC2 instances reducing setup time by 85%

Education
B.Tech — VIT Vellore, 2022–2026 | CGPA: 7.9`
};

// ─── Role Skills ───────────────────────────────────────────────
const ROLE_SKILLS = {
  frontend: ['react','javascript','typescript','html','css','next.js','redux','webpack','vite','tailwind','figma','responsive design','rest api','git'],
  backend:  ['node.js','python','java','express','fastapi','django','rest api','graphql','postgresql','mongodb','redis','docker','aws','jwt','microservices','sql'],
  fullstack:['react','node.js','javascript','typescript','express','postgresql','mongodb','docker','aws','git','rest api','redis','graphql','next.js'],
  ai:       ['python','pytorch','tensorflow','scikit-learn','nlp','pandas','numpy','sql','docker','fastapi','transformers','hugging face','mlflow','jupyter'],
  devops:   ['docker','kubernetes','aws','gcp','terraform','jenkins','github actions','linux','ansible','prometheus','grafana','helm','python','bash','ci/cd']
};

// ─── Action verbs ──────────────────────────────────────────────
const ACTION_VERBS = ['architected','engineered','built','developed','designed','implemented','deployed','optimized','reduced','increased','improved','created','led','delivered','automated','migrated','integrated','launched','streamlined'];
const WEAK_VERBS   = ['worked','helped','assisted','participated','involved','contributed','was responsible','made','did','used','utilized'];

// ─── Bullet templates per role ─────────────────────────────────
const BULLET_TEMPLATES = {
  frontend: [
    'Engineered {n} responsive React components reducing page load time by {p}% and improving Core Web Vitals score to 95+',
    'Implemented lazy loading and code splitting achieving {p}% bundle size reduction across {n} production features',
    'Collaborated with UX team to build accessible, pixel-perfect UI using Figma designs serving {k}+ monthly users',
    'Integrated REST APIs and optimized state management with Redux, reducing re-renders by {p}% on critical routes',
    'Developed reusable component library of {n}+ elements adopted across {k}+ projects, cutting development time by {p}%',
  ],
  backend: [
    'Architected RESTful API with Node.js/Express serving {k}K+ daily requests with 99.9% uptime SLA',
    'Optimized PostgreSQL queries and implemented Redis caching reducing average response time by {p}%',
    'Designed JWT-based authentication system securing {k}K+ user accounts with role-based access control',
    'Engineered microservices architecture processing {k}K+ events/hour using message queuing',
    'Deployed containerized backend on AWS EC2 with Docker, scaling to handle {p}x traffic spikes',
  ],
  fullstack: [
    'Built end-to-end SaaS platform using React + Node.js serving {k}K+ monthly active users',
    'Engineered full-stack feature cutting development cycle from {n} days to {p} days using Next.js App Router',
    'Integrated Stripe payment gateway processing ${k}K+ monthly transactions with 100% uptime',
    'Designed and deployed REST API with Express.js handling {k}+ concurrent connections',
    'Implemented CI/CD pipeline with GitHub Actions reducing deployment time by {p}%',
  ],
  ai: [
    'Fine-tuned BERT model for {task} achieving {p}% accuracy on dataset of {k}K+ samples',
    'Built automated data pipeline processing {k}M+ records/day using Python and Apache Kafka',
    'Deployed ML model via FastAPI endpoint serving {k}K+ predictions/hour with <100ms latency',
    'Reduced model inference time by {p}% using ONNX optimization and batch processing',
    'Implemented MLflow experiment tracking for {n}+ model iterations, improving reproducibility',
  ],
  devops: [
    'Designed CI/CD pipeline with Jenkins/GitHub Actions reducing deployment time by {p}%',
    'Migrated {n}+ microservices to Kubernetes (EKS) handling {k}K+ daily requests with auto-scaling',
    'Automated infrastructure provisioning with Terraform reducing setup time by {p}%',
    'Implemented Prometheus + Grafana monitoring covering {n}+ system metrics and alerting rules',
    'Reduced cloud infrastructure costs by {p}% through AWS resource optimization and reserved instances',
  ]
};

// ─── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initRoleChips();
  initBulletRoleChips();
  initUploadZone();
  initStats();
  initSmoothScroll();

  $('analyze-btn').addEventListener('click', runAnalysis);
  $('download-btn').addEventListener('click', downloadReport);
  $('sample-btn').addEventListener('click', loadSampleResume);
  $('rewrite-btn').addEventListener('click', rewriteBullet);
  $('go-to-builder-btn').addEventListener('click', () => scrollTo('builder'));
  initBuilder();
});

// ─── Smooth scroll ────────────────────────────────────────────
function initSmoothScroll() {
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    scrollTo(id);
  });
}
function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: 'smooth' });
}

// ─── Navbar scroll effect ─────────────────────────────────────
function initNav() {
  window.addEventListener('scroll', () => {
    $('navbar').style.boxShadow = window.scrollY > 10 ? '0 2px 40px rgba(0,0,0,0.4)' : 'none';
  });
}

// ─── Animated stats ───────────────────────────────────────────
function initStats() {
  const counters = document.querySelectorAll('.stat-n');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.target;
      if (target === 0) { el.textContent = '0'; return; }
      let current = 0;
      const step = target / 40;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.round(current);
        if (current >= target) clearInterval(timer);
      }, 30);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
}

// ─── Role chips ───────────────────────────────────────────────
function initRoleChips() {
  document.querySelectorAll('#role-chips .role-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#role-chips .role-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedRole = chip.dataset.role;
    });
  });
}

function initBulletRoleChips() {
  document.querySelectorAll('#bullet-role-chips .role-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#bullet-role-chips .role-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      bulletSelectedRole = chip.dataset.role;
    });
  });
}

// ─── Upload zone ──────────────────────────────────────────────
function initUploadZone() {
  const zone   = $('upload-zone');
  const fileIn = $('resume-file');

  // Only the trigger span opens the dialog — stop bubbling to zone
  $('upload-trigger').addEventListener('click', e => { e.stopPropagation(); fileIn.click(); });

  // Zone click opens dialog only if not clicking the trigger
  zone.addEventListener('click', e => {
    if (e.target.id === 'upload-trigger') return;
    fileIn.click();
  });

  zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
  zone.addEventListener('drop', e => {
    e.preventDefault(); zone.classList.remove('drag-over');
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  });

  fileIn.addEventListener('change', () => handleFile(fileIn.files[0]));
}

async function handleFile(file) {
  if (!file) return;
  const fn = $('upload-filename');
  fn.textContent = `⏳ Reading ${file.name}...`;
  fn.style.display = 'block';

  try {
    let text = '';
    if (file.type === 'application/pdf') {
      text = await extractPdfText(file);
    } else {
      text = await readAsText(file);
    }

    if (!text.trim()) {
      toast('Could not extract text. Please paste your resume in the box below.', 'error');
      fn.textContent = `⚠️ ${file.name} — paste text manually`;
      fn.style.background = 'rgba(239,68,68,0.08)'; fn.style.color = '#f87171';
      return;
    }

    uploadedText = text;
    $('resume-text').value = text;
    fn.textContent = `✅ ${file.name} — text extracted!`;
    fn.style.background = 'rgba(16,185,129,0.1)'; fn.style.color = '#34d399';
    toast(`Resume loaded from ${file.name}! 🎉`, 'success');
  } catch (err) {
    fn.textContent = `⚠️ ${file.name} — paste text below`;
    fn.style.background = 'rgba(239,68,68,0.08)'; fn.style.color = '#f87171';
    toast('Could not read file automatically. Paste your text below.', 'info');
  }
}

function readAsText(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = e => resolve(e.target.result);
    r.onerror = reject;
    r.readAsText(file);
  });
}

async function extractPdfText(file) {
  if (typeof pdfjsLib === 'undefined') throw new Error('PDF.js not loaded');
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  const ab  = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: ab }).promise;
  let full  = '';
  for (let i = 1; i <= pdf.numPages; i++) {
    const page    = await pdf.getPage(i);
    const content = await page.getTextContent();
    full += content.items.map(it => it.str).join(' ') + '\n';
  }
  return full.trim();
}

// ─── Sample resume ────────────────────────────────────────────
function loadSampleResume() {
  const sample = SAMPLE_RESUMES[selectedRole] || SAMPLE_RESUMES.frontend;
  $('resume-text').value = sample;
  uploadedText = sample;
  toast('Sample resume loaded! Click "Get My ATS Score". ✅', 'success');
}

// ─── Run Analysis ─────────────────────────────────────────────
async function runAnalysis() {
  const resumeText = ($('resume-text').value || '').trim() || uploadedText.trim();
  const jdText     = ($('jd-text').value || '').trim();

  if (!resumeText) {
    toast('Please paste your resume text or upload a file first.', 'error');
    return;
  }

  setLoading(true);
  await new Promise(r => setTimeout(r, 800));

  const result = analyzeResume(resumeText, jdText, selectedRole);
  renderResults(result);
  setLoading(false);

  setTimeout(() => scrollTo('results-content'), 400);
}

function setLoading(on) {
  $('btn-text') && ($('analyze-btn').querySelector('.btn-text').style.display = on ? 'none' : 'flex');
  $('analyze-btn').querySelector('.btn-loading').style.display = on ? 'flex' : 'none';
  $('analyze-btn').disabled = on;
}

// ─── ATS Engine ───────────────────────────────────────────────
function analyzeResume(text, jd, role) {
  const t = text.toLowerCase();

  /* 1. Detect skills */
  const roleSkills   = ROLE_SKILLS[role] || ROLE_SKILLS.frontend;
  const presentSkills = roleSkills.filter(s => t.includes(s.toLowerCase()));
  const missingSkills = roleSkills.filter(s => !t.includes(s.toLowerCase()));

  /* 2. Scores */
  const skillScore  = Math.min(100, Math.round((presentSkills.length / roleSkills.length) * 100));

  const hasSections = ['experience','education','project','skill'].filter(s => t.includes(s)).length;
  const hasMetrics  = (text.match(/\d+[\s]?(%|k\+|x|hours|users|months|years|days|ms)/gi) || []).length;
  const hasGithub   = /github\.com/.test(t);
  const hasLinkedin = /linkedin\.com/.test(t);
  const hasEmail    = /[\w.]+@[\w.]+\.\w+/.test(t);
  const hasSummary  = /summary|objective|about/i.test(t);
  const words       = text.split(/\s+/).length;
  const hasActionVerbs = ACTION_VERBS.filter(v => t.includes(v)).length;
  const hasWeakVerbs   = WEAK_VERBS.filter(v => t.includes(v)).length;

  const expScore  = Math.min(100, hasSections * 15 + hasMetrics * 8 + (hasActionVerbs * 6) + (hasSummary ? 10 : 0));
  const projScore = Math.min(100, (t.includes('project') ? 30 : 0) + hasMetrics * 6 + (t.includes('github') ? 15 : 0) + (words > 200 ? 20 : 0) + hasActionVerbs * 4);
  const fmtScore  = Math.min(100,
    (hasEmail    ? 15 : 0) +
    (hasGithub   ? 15 : 0) +
    (hasLinkedin ? 15 : 0) +
    (hasSummary  ? 20 : 0) +
    (hasSections >= 3 ? 20 : hasSections * 5) +
    (words >= 300 ? 15 : Math.round(words / 20))
  );

  const overall = Math.round(skillScore * 0.35 + expScore * 0.30 + projScore * 0.20 + fmtScore * 0.15);

  /* 3. Strengths & weaknesses */
  const strengths = [], weaknesses = [];
  if (skillScore >= 70)   strengths.push(`Strong ${role} skill set — ${presentSkills.length}/${roleSkills.length} required skills detected`);
  if (hasGithub)          strengths.push('GitHub profile link found — great for verifying your work');
  if (hasMetrics >= 3)    strengths.push('Good use of measurable metrics — recruiters love numbers');
  if (hasActionVerbs >= 3) strengths.push(`${hasActionVerbs} strong action verbs detected (e.g. engineered, deployed, optimized)`);
  if (hasSummary)         strengths.push('Professional summary/objective section present');
  if (words >= 350)       strengths.push('Resume has good length and detail');

  if (skillScore < 70)    weaknesses.push(`Missing ${missingSkills.length} key ${role} skills: ${missingSkills.slice(0,4).join(', ')}...`);
  if (!hasGithub)         weaknesses.push('No GitHub link found — hard for recruiters to verify your code');
  if (hasMetrics < 2)     weaknesses.push('Very few quantifiable metrics — add numbers like "improved by 30%", "served 10K users"');
  if (!hasSummary)        weaknesses.push('Missing professional summary/objective at the top');
  if (hasWeakVerbs > 2)   weaknesses.push(`Replace weak phrases like "worked on", "helped with" with strong action verbs`);
  if (words < 200)        weaknesses.push('Resume is too short — add more detail to projects and experience sections');
  if (!hasLinkedin)       weaknesses.push('No LinkedIn profile link found');

  /* 4. Suggestions */
  const suggestions = [];
  if (hasMetrics < 2)   suggestions.push({ icon: '📊', text: 'Add quantifiable achievements: e.g. "Improved load time by 40%" or "Served 10K+ users"' });
  if (!hasGithub)       suggestions.push({ icon: '🔗', text: 'Include your GitHub profile URL — recruiters always check your actual code' });
  if (hasWeakVerbs > 1) suggestions.push({ icon: '✍️', text: 'Replace weak phrases like "worked on" or "helped with" — use "architected", "engineered", "deployed"' });
  if (!hasSummary)      suggestions.push({ icon: '📝', text: 'Add a 2–3 line professional summary at the top to immediately capture recruiter attention' });
  if (skillScore < 60)  suggestions.push({ icon: '🎯', text: `Add key ${role} skills to your projects or experience: ${missingSkills.slice(0,3).join(', ')}` });
  if (words < 300)      suggestions.push({ icon: '📋', text: 'Expand your resume — add measurable responsibilities and impact for each role/project' });
  if (!hasLinkedin)     suggestions.push({ icon: '💼', text: 'Add your LinkedIn URL — it builds credibility and helps recruiters connect with you' });
  suggestions.push({ icon: '🚀', text: 'Add a dedicated "Key Achievements" or "Impact" section to highlight your best wins upfront' });

  /* 5. Enhanced bullets */
  const templates = BULLET_TEMPLATES[role] || BULLET_TEMPLATES.frontend;
  const bullets   = templates.slice(0, 4).map(t =>
    t.replace('{n}', Math.floor(Math.random()*10)+5)
     .replace('{p}', Math.floor(Math.random()*30)+20)
     .replace('{k}', Math.floor(Math.random()*9)+1)
     .replace('{task}', 'sentiment analysis')
  );

  /* 6. Job Description Match */
  let match = null;
  if (jd) {
    const jdWords = [...new Set(jd.toLowerCase().match(/\b\w{4,}\b/g) || [])].filter(w => !STOP_WORDS.has(w));
    const matched = jdWords.filter(w => t.includes(w));
    const missing = jdWords.filter(w => !t.includes(w)).slice(0, 16);
    const pct = Math.min(100, Math.round((matched.length / Math.max(jdWords.length, 1)) * 100));
    match = { percentage: pct, matched_keywords: matched.slice(0,16), missing_keywords: missing };
  }

  return {
    overall, skillScore, expScore, projScore, fmtScore,
    presentSkills, missingSkills, strengths, weaknesses,
    suggestions, bullets, match
  };
}

const STOP_WORDS = new Set(['this','that','with','have','will','from','they','been','were','their','what','when','where','which','your','more','also','into','than','other','some','these','those','there','about','each','then','over','just','like','only','many','most','both','such','well','even','back','come','could','should','would','after','before','being','doing','going','having','looking','making','taking','using','working']);

// ─── Render Results ───────────────────────────────────────────
function renderResults(data) {
  $('empty-state').style.display  = 'none';
  $('results-content').style.display = 'flex';
  $('results-content').style.flexDirection = 'column';
  $('results-content').style.gap = '16px';

  // Score
  const circ = 2 * Math.PI * 50;
  setTimeout(() => {
    $('ring-fill').setAttribute('stroke-dasharray', `${(data.overall / 100) * circ} ${circ}`);
    const color = data.overall >= 80 ? '#10b981' : data.overall >= 60 ? '#6366f1' : data.overall >= 40 ? '#f59e0b' : '#ef4444';
    $('ring-fill').style.stroke = color;
  }, 100);

  animateNumber($('score-number'), 0, data.overall, 1200);

  const badge = data.overall >= 80 ? ['excellent','🔥 Excellent'] : data.overall >= 60 ? ['good','✅ Good'] : data.overall >= 40 ? ['average','⚠️ Average'] : ['poor','❌ Needs Work'];
  $('score-badge').className = `score-badge ${badge[0]}`;
  $('score-badge').textContent = badge[1];

  // Score bars
  const bars = [
    { label: 'Skills',      score: data.skillScore, color: '#6366f1' },
    { label: 'Experience',  score: data.expScore,   color: '#8b5cf6' },
    { label: 'Projects',    score: data.projScore,  color: '#06b6d4' },
    { label: 'Formatting',  score: data.fmtScore,   color: '#10b981' },
  ];
  $('score-breakdown').innerHTML = bars.map(b => `
    <div class="score-bar-row">
      <span>${b.label}</span>
      <div class="bar-track"><div class="bar-fill" style="background:${b.color}" data-w="${b.score}"></div></div>
      <span class="pct">${b.score}</span>
    </div>`).join('');
  setTimeout(() => {
    document.querySelectorAll('.bar-fill').forEach(el => { el.style.width = el.dataset.w + '%'; });
  }, 200);

  // Match
  if (data.match) {
    $('match-card').style.display = 'block';
    $('match-pct').textContent = `${data.match.percentage}%`;
    setTimeout(() => { $('match-bar').style.width = `${data.match.percentage}%`; }, 100);
    $('matched-tags').innerHTML = data.match.matched_keywords.map(k => `<span class="kw-tag matched">${k}</span>`).join('');
    $('missing-tags').innerHTML = data.match.missing_keywords.map(k  => `<span class="kw-tag missing">${k}</span>`).join('');
  }

  // SW
  $('strengths-list').innerHTML  = data.strengths.map(s => `<li>${s}</li>`).join('');
  $('weaknesses-list').innerHTML = data.weaknesses.map(w => `<li>${w}</li>`).join('');

  // Skills
  $('user-skills').innerHTML    = data.presentSkills.map(s => `<span class="skill-tag present">${s}</span>`).join('');
  $('missing-skills').innerHTML = data.missingSkills.map(s => `<span class="skill-tag absent">${s}</span>`).join('');

  // Suggestions
  $('suggestions-list').innerHTML = data.suggestions.map(s => `
    <div class="suggestion-item">
      <span class="sug-icon">${s.icon}</span>
      <span class="sug-text">${s.text}</span>
    </div>`).join('');

  // Bullets
  $('bullets-list').innerHTML = data.bullets.map(b => `<div class="bullet-item">${b}</div>`).join('');

  toast(`Analysis complete! Your ATS score: ${data.overall}/100 🎯`, data.overall >= 60 ? 'success' : 'info');
}

function animateNumber(el, from, to, duration) {
  const start = performance.now();
  const update = now => {
    const t = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(from + (to - from) * easeOut(t));
    if (t < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}
const easeOut = t => 1 - Math.pow(1 - t, 3);

// ─── AI Bullet Rewriter (Killer Feature) ──────────────────────
async function rewriteBullet() {
  const input = ($('bullet-input').value || '').trim();
  if (!input) { toast('Please paste a bullet point to rewrite.', 'error'); return; }

  const btn = $('rewrite-btn');
  btn.querySelector('.btn-text').style.display = 'none';
  btn.querySelector('.btn-loading').style.display = 'flex';
  btn.disabled = true;

  await new Promise(r => setTimeout(r, 700));

  const role      = bulletSelectedRole;
  const templates = BULLET_TEMPLATES[role] || BULLET_TEMPLATES.frontend;

  // Extract context from the input
  const hasVerb     = ACTION_VERBS.find(v => input.toLowerCase().includes(v));
  const techMatches = (input.match(/\b(react|node|python|aws|docker|sql|api|mongodb|express|java|typescript|next\.?js|postgresql|redis|kubernetes)\b/gi) || []).join(', ') || 'modern technologies';
  const numbers     = (input.match(/\d+/g) || []);

  const rewrites = [
    generateRewrite(input, role, 1, techMatches, numbers),
    generateRewrite(input, role, 2, techMatches, numbers),
    generateRewrite(input, role, 3, techMatches, numbers),
  ];

  $('rewrite-results').innerHTML = rewrites.map((r, i) => `
    <div class="rewrite-card">
      <span class="rewrite-num">Version ${i+1}</span>
      <p>${r}</p>
      <button class="copy-btn" onclick="navigator.clipboard.writeText('${r.replace(/'/g,"\\'")}').then(()=>toast('Copied!','success'))">📋 Copy</button>
    </div>`).join('');

  $('rewrite-output').style.display = 'block';

  btn.querySelector('.btn-text').style.display = 'flex';
  btn.querySelector('.btn-loading').style.display = 'none';
  btn.disabled = false;

  toast('3 powerful rewrites generated! ✨', 'success');
}

function generateRewrite(input, role, version, tech, nums) {
  const verbs = { 1: 'Engineered', 2: 'Developed', 3: 'Architected' };
  const verb  = verbs[version];
  const n     = nums.length > 0 ? nums[0] : (Math.floor(Math.random()*8)+3);
  const p     = Math.floor(Math.random()*35)+20;
  const k     = Math.floor(Math.random()*9)+1;

  const templates = {
    1: `${verb} ${tech || 'full-stack'} solution based on original task, resulting in ${p}% improvement in performance metrics and serving ${k}K+ end users`,
    2: `${verb} and deployed scalable ${tech || 'web application'} feature, reducing processing time by ${p}% and improving user satisfaction score by ${Math.floor(p*0.6)}%`,
    3: `${verb} high-impact ${tech || 'software component'} using best practices, delivering ${n} key features while maintaining ${Math.floor(90+Math.random()*9)}% code test coverage`,
  };

  // Try to incorporate original context
  const lower = input.toLowerCase();
  let base = templates[version];

  if (lower.includes('react') || lower.includes('frontend') || lower.includes('ui')) {
    base = base.replace('solution based on original task', 'React-based UI with responsive design');
  } else if (lower.includes('api') || lower.includes('backend') || lower.includes('server')) {
    base = base.replace('solution based on original task', 'RESTful API with robust error handling');
  } else if (lower.includes('database') || lower.includes('sql') || lower.includes('mongodb')) {
    base = base.replace('solution based on original task', 'database schema with optimized queries');
  } else if (lower.includes('deploy') || lower.includes('docker') || lower.includes('aws')) {
    base = base.replace('solution based on original task', 'containerized deployment pipeline');
  } else if (lower.includes('test') || lower.includes('bug') || lower.includes('fix')) {
    base = base.replace('solution based on original task', 'automated testing suite');
  }

  return base;
}

// ─── Download Report ──────────────────────────────────────────
function downloadReport() {
  const score   = $('score-number').textContent;
  const strList = [...document.querySelectorAll('#strengths-list li')].map(el => el.textContent);
  const weakList = [...document.querySelectorAll('#weaknesses-list li')].map(el => el.textContent);
  const sugList  = [...document.querySelectorAll('.suggestion-item .sug-text')].map(el => el.textContent);
  const bullList = [...document.querySelectorAll('.bullet-item')].map(el => el.textContent.replace('▸ ',''));

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>ATS Report</title>
<style>
  @page{margin:0}
  body{font-family:Arial,sans-serif;max-width:780px;margin:0 auto;padding:48px;color:#1e293b;font-size:13px;line-height:1.65;-webkit-print-color-adjust:exact;print-color-adjust:exact}
  h1{font-size:1.8rem;font-weight:800;color:#1e293b;border-bottom:3px solid #6366f1;padding-bottom:8px;margin-bottom:4px}
  .score-big{font-size:3.5rem;font-weight:900;color:#6366f1;margin:16px 0 4px}
  h2{font-size:.85rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:#4f46e5;border-bottom:2px solid #e2e8f0;padding-bottom:4px;margin:24px 0 10px}
  ul{padding-left:18px;margin:0}
  li{margin-bottom:5px}
  .good{color:#059669} .bad{color:#dc2626} .sug{color:#6366f1}
  .footer{margin-top:40px;padding-top:16px;border-top:1px solid #e2e8f0;color:#94a3b8;font-size:.75rem;text-align:center}
  @media print{@page{margin:0}body{padding:48px}}
</style></head><body>
<h1>📊 ResumeIQ ATS Analysis Report</h1>
<p style="color:#64748b;font-size:.85rem">Generated on ${new Date().toLocaleDateString()}</p>
<div class="score-big">${score}<span style="font-size:1.5rem;color:#94a3b8">/100</span></div>
<p style="font-size:.9rem;color:#64748b">ATS Compatibility Score</p>
<h2>✅ Strengths</h2><ul class="good">${strList.map(s=>`<li>${s}</li>`).join('')}</ul>
<h2>❌ Weaknesses</h2><ul class="bad">${weakList.map(w=>`<li>${w}</li>`).join('')}</ul>
<h2>💡 AI Improvement Suggestions</h2><ul class="sug">${sugList.map(s=>`<li>${s}</li>`).join('')}</ul>
<h2>🚀 AI-Enhanced Bullet Points</h2><ul>${bullList.map(b=>`<li>${b}</li>`).join('')}</ul>
<div class="footer">Generated by ResumeIQ — 100% Client-Side · No Data Sent to Servers</div>
</body></html>`;

  const win = window.open('', '_blank');
  if (!win) { toast('Allow pop-ups to download.', 'error'); return; }
  win.document.write(html);
  win.document.close();
  setTimeout(() => {
    win.print();
    toast('💡 In print dialog → More Settings → uncheck "Headers and footers" → Save as PDF', 'info');
  }, 400);
}

// ─── Toast ────────────────────────────────────────────────────
function toast(msg, type = 'info', duration = 4000) {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  $('toast-container').appendChild(el);
  setTimeout(() => {
    el.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => el.remove(), 300);
  }, duration);
}

// ═══════════════════════════════════════════════════════════════
//  RESUME BUILDER
// ═══════════════════════════════════════════════════════════════
let expCount = 0, projCount = 0;

function initBuilder() {
  // Tabs
  document.querySelectorAll('.btab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.btab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.btab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      $(`tab-${tab.dataset.tab}`).classList.add('active');
    });
  });

  // Add initial entries
  $('add-exp-btn').addEventListener('click', addExperience);
  $('add-proj-btn').addEventListener('click', addProject);
  addExperience();
  addProject();

  // Buttons
  $('builder-preview-btn').addEventListener('click', () => {
    const html = buildResumeHTML();
    if (!html) return;
    $('resume-preview-content').innerHTML = html;
    $('preview-modal').style.display = 'grid';
  });
  $('preview-close').addEventListener('click', () => $('preview-modal').style.display = 'none');
  $('preview-modal').addEventListener('click', e => { if (e.target === $('preview-modal')) $('preview-modal').style.display = 'none'; });
  $('builder-generate-btn').addEventListener('click', generateAndDownload);
  $('preview-download-btn').addEventListener('click', printResume);
}

function addExperience() {
  expCount++;
  const id = `exp${expCount}`;
  const div = document.createElement('div');
  div.className = 'exp-item'; div.id = id;
  div.innerHTML = `
    <div class="item-header">
      <h5>Experience #${expCount}</h5>
      <button class="btn-remove" onclick="document.getElementById('${id}').remove()">✕ Remove</button>
    </div>
    <div class="exp-grid">
      <div class="form-group" style="padding:0"><label class="form-label">Job Title</label><input class="text-input" id="${id}-title" placeholder="Web Dev Intern"></div>
      <div class="form-group" style="padding:0"><label class="form-label">Company</label><input class="text-input" id="${id}-company" placeholder="Tech Co."></div>
      <div class="form-group" style="padding:0"><label class="form-label">Location</label><input class="text-input" id="${id}-loc" placeholder="Remote"></div>
      <div class="form-group" style="padding:0"><label class="form-label">Duration</label><input class="text-input" id="${id}-date" placeholder="Jan–Mar 2024"></div>
    </div>
    <div class="form-group" style="padding:0">
      <label class="form-label">Responsibilities (one per line)</label>
      <textarea class="text-input" id="${id}-desc" rows="4" placeholder="- Built responsive pages using React&#10;- Integrated REST APIs&#10;- Reduced load time by 30%"></textarea>
    </div>`;
  $('exp-list').appendChild(div);
}

function addProject() {
  projCount++;
  const id = `proj${projCount}`;
  const div = document.createElement('div');
  div.className = 'proj-item'; div.id = id;
  div.innerHTML = `
    <div class="item-header">
      <h5>Project #${projCount}</h5>
      <button class="btn-remove" onclick="document.getElementById('${id}').remove()">✕ Remove</button>
    </div>
    <div class="exp-grid">
      <div class="form-group" style="padding:0"><label class="form-label">Project Name</label><input class="text-input" id="${id}-name" placeholder="E-Commerce App"></div>
      <div class="form-group" style="padding:0"><label class="form-label">Tech Stack</label><input class="text-input" id="${id}-tech" placeholder="React, Node.js, PostgreSQL"></div>
    </div>
    <div class="form-group" style="padding:0">
      <label class="form-label">Description (one bullet per line)</label>
      <textarea class="text-input" id="${id}-desc" rows="3" placeholder="- Built full-stack app with 500+ users&#10;- Deployed on AWS with 99.9% uptime"></textarea>
    </div>`;
  $('proj-list').appendChild(div);
}

function getVal(id) { const el = $(id); return el ? el.value.trim() : ''; }

function buildResumeHTML() {
  const name = getVal('b-name');
  if (!name) { toast('Enter your name in the Personal tab.', 'error'); return null; }

  const contacts = [getVal('b-email'), getVal('b-phone'), getVal('b-location'), getVal('b-linkedin'), getVal('b-github')].filter(Boolean);
  const skillRows = [['Languages', getVal('b-lang')], ['Frontend', getVal('b-frontend')], ['Backend', getVal('b-backend')], ['Database', getVal('b-db')], ['DevOps/Cloud', getVal('b-devops')], ['Tools', getVal('b-tools')]].filter(([,v]) => v);
  const exps  = [...document.querySelectorAll('.exp-item')].map(el => ({ id:el.id, title:getVal(`${el.id}-title`), company:getVal(`${el.id}-company`), loc:getVal(`${el.id}-loc`), date:getVal(`${el.id}-date`), desc:getVal(`${el.id}-desc`) })).filter(e => e.title||e.company);
  const projs  = [...document.querySelectorAll('.proj-item')].map(el => ({ name:getVal(`${el.id}-name`), tech:getVal(`${el.id}-tech`), desc:getVal(`${el.id}-desc`) })).filter(p => p.name);

  const toList = text => text.split('\n').map(l => l.trim().replace(/^[-•*]\s*/,'')).filter(Boolean).map(l => `<li>${l}</li>`).join('');

  let html = `<h1>${name}</h1><div class="rp-contact">${contacts.join(' &nbsp;|&nbsp; ')}</div>`;
  if (getVal('b-summary')) html += `<h2>Objective</h2><p>${getVal('b-summary')}</p>`;
  if (skillRows.length) {
    html += `<h2>Skills Summary</h2><div class="rp-skills-table">`;
    skillRows.forEach(([cat,val]) => html += `<div class="rp-skill-row"><span class="rp-skill-cat">${cat}:</span><span>${val}</span></div>`);
    html += `</div>`;
  }
  if (exps.length) {
    html += `<h2>Experience</h2>`;
    exps.forEach(e => {
      html += `<h3>${e.title}${e.company ? ` — ${e.company}` : ''}</h3>`;
      html += `<div class="rp-meta">${[e.loc, e.date].filter(Boolean).join(' · ')}</div>`;
      if (e.desc) html += `<ul>${toList(e.desc)}</ul>`;
    });
  }
  if (projs.length) {
    html += `<h2>Projects</h2>`;
    projs.forEach(p => {
      html += `<h3>${p.name}${p.tech ? ` <span style="font-weight:400;color:#64748b">| ${p.tech}</span>` : ''}</h3>`;
      if (p.desc) html += `<ul>${toList(p.desc)}</ul>`;
    });
  }
  const deg = getVal('b-degree'), col = getVal('b-college');
  if (deg||col) { html += `<h2>Education</h2><h3>${deg}</h3><div class="rp-meta">${[col, getVal('b-year'), getVal('b-cgpa')?`CGPA: ${getVal('b-cgpa')}`:''].filter(Boolean).join(' · ')}</div>`; }
  const certs = getVal('b-certs');
  if (certs) { html += `<h2>Certifications</h2><ul>${certs.split('\n').filter(Boolean).map(c=>`<li>${c.trim()}</li>`).join('')}</ul>`; }
  return html;
}

const PRINT_CSS = `@page{margin:0;size:A4}*{box-sizing:border-box}body{font-family:Arial,sans-serif;max-width:780px;margin:0 auto;padding:48px 56px;color:#1e293b;font-size:13px;line-height:1.65;-webkit-print-color-adjust:exact;print-color-adjust:exact}h1{font-size:1.6rem;font-weight:700;margin-bottom:4px}.rp-contact{color:#475569;font-size:.8rem;margin-bottom:14px;line-height:1.8}h2{font-size:.82rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:#4f46e5;border-bottom:2px solid #e2e8f0;padding-bottom:4px;margin:20px 0 10px}h3{font-size:.9rem;font-weight:700;margin-bottom:2px}.rp-meta{color:#64748b;font-size:.78rem;margin-bottom:6px}ul{padding-left:18px;margin:5px 0}li{margin-bottom:3px;color:#334155}p{color:#334155;margin-bottom:8px}.rp-skills-table{display:grid;grid-template-columns:1fr 1fr;gap:4px 16px}.rp-skill-row{display:flex;gap:8px;font-size:.78rem}.rp-skill-cat{font-weight:700;color:#334155;min-width:90px}@media print{@page{margin:0}body{padding:48px 56px}}`;

function generateAndDownload() {
  const html = buildResumeHTML();
  if (!html) return;
  const name = getVal('b-name') || 'Resume';
  const win  = window.open('', '_blank');
  if (!win) { toast('Allow pop-ups.', 'error'); return; }
  win.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${name}</title><style>${PRINT_CSS}</style></head><body>${html}</body></html>`);
  win.document.close();
  setTimeout(() => { win.print(); toast('💡 In print dialog → More Settings → uncheck "Headers and footers" → Save as PDF', 'info'); }, 400);
}

function printResume() {
  const content = $('resume-preview-content').innerHTML;
  const name    = getVal('b-name') || 'Resume';
  const win     = window.open('', '_blank');
  if (!win) { toast('Allow pop-ups.', 'error'); return; }
  win.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${name}</title><style>${PRINT_CSS}</style></head><body>${content}</body></html>`);
  win.document.close();
  setTimeout(() => win.print(), 400);
}
