// ─── Sample Resumes (one per role) ──────────────────────────
const SAMPLE_RESUMES = {
  frontend: `John Doe | john@email.com | github.com/johndoe | linkedin.com/in/johndoe

Summary
Frontend developer with 2 years of experience building responsive React applications.

Skills
React, JavaScript, TypeScript, HTML, CSS, Next.js, Git, REST APIs, Tailwind, Webpack

Experience
Frontend Developer — TechStartup, 2022–Present
- Built responsive React dashboard reducing user onboarding time by 35%
- Engineered reusable component library of 20+ elements used across 3 products
- Integrated REST APIs and optimized state management with Redux
- Improved page load speed by 40% using lazy loading and code splitting

Projects
E-Commerce UI | React, TypeScript, Tailwind
- Developed full-featured shopping cart serving 500+ test users
- Implemented dynamic search with debouncing reducing API calls by 60%

Simon Game | HTML, CSS, JavaScript
- Built browser-based memory game with dynamic sequence generation
- Achieved 95 Lighthouse performance score

Education
B.Tech Computer Science — ABC University, 2022`,

  backend: `Jane Smith | jane@email.com | github.com/janesmith

Summary
Backend engineer with 3 years experience designing scalable APIs and database systems.

Skills
Node.js, Python, PostgreSQL, MongoDB, Redis, Docker, REST APIs, SQL, AWS, Git

Experience
Backend Developer — DataCorp, 2021–Present
- Architected REST API serving 100K+ daily requests with 99.9% uptime
- Reduced database query time by 60% using PostgreSQL indexing strategies
- Deployed containerized microservices with Docker reducing server costs by 30%
- Built authentication system handling 2M+ JWT token validations per month

Projects
Task Management API | Node.js, PostgreSQL, Redis
- Designed RESTful API with caching layer reducing response time from 800ms to 120ms

Education
B.E. Computer Science — XYZ College, 2021`,

  fullstack: `Alex Kumar | alex@email.com | github.com/alexdev | linkedin.com/in/alexkumar

Summary
Full Stack Developer with experience in React, Node.js and cloud deployments.

Skills
React, Node.js, TypeScript, PostgreSQL, MongoDB, Docker, AWS, REST APIs, Git, Redis

Experience
Full Stack Developer — WebAgency, 2022–Present
- Built full-stack SaaS platform processing 10K monthly active users
- Engineered React frontend + Node.js backend reducing page load by 45%
- Deployed to AWS EC2 with Docker, achieving 99.8% uptime
- Integrated Stripe payment gateway processing $20K monthly transactions

Projects
Blog Platform | React, Node.js, PostgreSQL
- Developed end-to-end blogging system with 500+ registered users

Education
B.Tech — Tech University, 2022`,

  ai: `Priya AI | priya@email.com | github.com/priyaml

Summary
Machine Learning engineer with expertise in NLP, deep learning and model deployment.

Skills
Python, PyTorch, TensorFlow, scikit-learn, NLP, Pandas, NumPy, SQL, Jupyter, Git

Experience
ML Engineer — AILabs, 2022–Present
- Fine-tuned BERT model achieving 92% accuracy on text classification tasks
- Built NLP pipeline processing 500K documents/day with 94% precision
- Deployed ML models with FastAPI serving 10K predictions/day
- Reduced model inference time by 40% using quantization techniques

Projects
Sentiment Analyzer | Python, PyTorch, Transformers
- Built real-time sentiment analysis model trained on 100K reviews

Education
M.Tech Artificial Intelligence — AI University, 2022`,

  devops: `Dev Ops | dev@email.com | github.com/devopsdev

Summary
DevOps engineer specializing in Kubernetes, CI/CD pipelines and cloud infrastructure.

Skills
Docker, Kubernetes, AWS, Terraform, Linux, CI/CD, Jenkins, Git, Prometheus, Ansible

Experience
DevOps Engineer — CloudCo, 2021–Present
- Architected Kubernetes cluster managing 50+ microservices with 99.99% uptime
- Implemented Terraform IaC reducing provisioning time from days to 30 minutes
- Built CI/CD pipelines cutting deployment failures by 75% and release cycle by 60%
- Set up Prometheus/Grafana monitoring reducing MTTR from 4 hours to 20 minutes

Projects
Auto-Scaling Infrastructure | AWS, Terraform, Kubernetes
- Automated scaling for 200+ concurrent users with zero-downtime deployments

Education
B.E. Computer Science — Tech College, 2021`
};

// ─── Role Skill Libraries ─────────────────────────────────────
const ROLE_SKILLS = {
  frontend:  ['react', 'vue', 'angular', 'typescript', 'javascript', 'css', 'html', 'next.js', 'nextjs', 'webpack', 'vite', 'sass', 'tailwind', 'redux', 'graphql', 'rest api', 'git', 'figma', 'responsive'],
  backend:   ['node.js', 'nodejs', 'python', 'java', 'go', 'rust', 'sql', 'postgresql', 'mysql', 'mongodb', 'rest api', 'graphql', 'docker', 'redis', 'microservices', 'aws', 'express', 'fastapi', 'spring', 'git'],
  fullstack: ['react', 'node.js', 'nodejs', 'typescript', 'javascript', 'postgresql', 'mongodb', 'docker', 'rest api', 'git', 'aws', 'redis', 'next.js', 'nextjs', 'sql', 'html', 'css', 'express'],
  ai:        ['python', 'pytorch', 'tensorflow', 'machine learning', 'deep learning', 'llm', 'scikit-learn', 'nlp', 'sql', 'pandas', 'numpy', 'keras', 'transformers', 'computer vision', 'data science', 'jupyter', 'git'],
  devops:    ['docker', 'kubernetes', 'k8s', 'ci/cd', 'aws', 'gcp', 'azure', 'terraform', 'linux', 'jenkins', 'ansible', 'prometheus', 'grafana', 'git', 'bash', 'helm', 'nginx', 'github actions']
};

const ALL_TECH_SKILLS = [
  'javascript','typescript','python','java','c++','c#','go','rust','ruby','php','swift','kotlin',
  'react','vue','angular','svelte','next.js','nextjs','nuxt','gatsby','express','fastapi','django','flask','spring','laravel',
  'html','css','sass','scss','tailwind','bootstrap','webpack','vite','babel','eslint',
  'node.js','nodejs','deno','bun',
  'sql','postgresql','mysql','mongodb','redis','sqlite','cassandra','dynamodb','firebase','supabase',
  'docker','kubernetes','k8s','aws','gcp','azure','terraform','ansible','jenkins','github actions','ci/cd','nginx','linux',
  'git','github','gitlab','bitbucket',
  'machine learning','deep learning','pytorch','tensorflow','keras','scikit-learn','pandas','numpy','hugging face','llm','nlp','computer vision',
  'rest api','graphql','grpc','microservices','websocket',
  'figma','adobe xd','sketch',
  'jest','cypress','selenium','pytest',
  'agile','scrum','jira','confluence'
];

const ACTION_VERBS = [
  'architected','engineered','developed','built','designed','implemented','deployed','optimized',
  'led','managed','collaborated','coordinated','mentored','delivered','achieved','improved',
  'reduced','increased','accelerated','automated','integrated','migrated','refactored',
  'launched','created','established','streamlined','enhanced','transformed','drove',
  'spearheaded','pioneered','revamped','scaled','shipped'
];

const WEAK_VERBS = ['worked on','helped with','assisted','responsible for','was part of','participated in','involved in'];

const KEY_SECTIONS = ['experience','education','skills','projects','summary','objective','contact','certifications','achievements'];
const QUANTIFIER_PATTERNS = [/\d+%/g, /\d+x/g, /\$\d+/g, /\d+\s*(users|customers|requests|transactions|million|k|thousand)/gi, /\d+\+/g, /increased|decreased|reduced|improved|grew|boosted/gi];

const SUGGESTIONS_BANK = {
  noMetrics:    'Add quantifiable achievements: e.g. "Improved load time by 40%" or "Served 10K+ users"',
  noGithub:     'Include a GitHub profile link — recruiters want to see your actual code',
  weakVerbs:    'Replace weak phrases like "worked on" or "helped with" with strong verbs like "architected", "engineered", "deployed"',
  shortResume:  'Your resume seems short. Expand project descriptions with responsibilities and impact.',
  noProjects:   'Add a dedicated Projects section with 2-3 strong projects showcasing your skills',
  missingRole:  (skill) => `Add "${skill}" experience or projects — it is a must-have for this role`,
  noSummary:    'Add a 2–3 line professional summary at the top to immediately capture recruiter attention',
  noLinks:      'Include your LinkedIn and GitHub profile URLs',
  genericDesc:  'Make each bullet point unique — avoid generic descriptions like "Worked on web app" and be specific',
  addCert:      'Consider adding relevant certifications (AWS, GCP, Meta, etc.) to boost credibility'
};

// ─── State ────────────────────────────────────────────────────
let selectedRole = 'frontend';
let uploadedText  = '';
let analysisData  = null;

const $ = id => document.getElementById(id);

// ─── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initRoleChips();
  initUploadZone();
  $('analyze-btn').addEventListener('click', runAnalysis);
  $('download-btn').addEventListener('click', downloadReport);
  $('sample-btn').addEventListener('click', loadSampleResume);

  // "Build My Resume →" button — scroll to builder section
  const goToBuilder = $('go-to-builder-btn');
  if (goToBuilder) {
    goToBuilder.addEventListener('click', (e) => {
      e.stopPropagation();
      const section = $('builder-section');
      if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  }
});

// ─── Smooth Scroll (Event Delegation — catches every link) ────
document.addEventListener('click', e => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const targetId = link.getAttribute('href');
  const target   = document.querySelector(targetId);
  if (!target) return;
  e.preventDefault();
  const offset = 80; // navbar height
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
});

function loadSampleResume() {
  const sample = SAMPLE_RESUMES[selectedRole] || SAMPLE_RESUMES['fullstack'];
  $('resume-text').value = sample;
  uploadedText = sample;
  $('resume-text').focus();
  toast('Sample resume loaded! Click "Get My ATS Score" to analyze. ✅', 'success');
}

// ─── Role Chips ───────────────────────────────────────────────
function initRoleChips() {
  document.querySelectorAll('.role-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.role-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedRole = chip.dataset.role;
    });
  });
}

// ─── File Upload ──────────────────────────────────────────────
function initUploadZone() {
  const zone = $('upload-zone'), fileIn = $('resume-file'), trigger = $('upload-trigger');
  trigger.addEventListener('click', () => fileIn.click());
  zone.addEventListener('click', e => { if (e.target !== trigger) fileIn.click(); });
  zone.addEventListener('dragover',  e => { e.preventDefault(); zone.classList.add('drag-over'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
  zone.addEventListener('drop', e => { e.preventDefault(); zone.classList.remove('drag-over'); handleFile(e.dataTransfer.files[0]); });
  fileIn.addEventListener('change', () => handleFile(fileIn.files[0]));
}

async function handleFile(file) {
  if (!file) return;
  const fn = $('upload-filename');
  fn.textContent = `⏳ Reading ${file.name}...`;
  fn.style.display = 'block';
  fn.style.background = 'rgba(99,102,241,0.1)';
  fn.style.borderColor = 'rgba(99,102,241,0.3)';
  fn.style.color = '#818cf8';

  try {
    let text = '';

    if (file.type === 'application/pdf') {
      text = await extractPdfText(file);
    } else {
      text = await readAsText(file);
    }

    if (!text.trim()) {
      toast('Could not extract text from this file. Please paste your resume text manually.', 'error');
      fn.textContent = `⚠️ ${file.name} (paste text manually)`;
      fn.style.background = 'rgba(239,68,68,0.08)';
      fn.style.borderColor = 'rgba(239,68,68,0.3)';
      fn.style.color = '#f87171';
      return;
    }

    uploadedText = text;
    $('resume-text').value = text;

    fn.textContent = `✅ ${file.name} — text extracted!`;
    fn.style.background = 'rgba(16,185,129,0.1)';
    fn.style.borderColor = 'rgba(16,185,129,0.3)';
    fn.style.color = '#10b981';
    toast(`Resume loaded from ${file.name}! Click "Get My ATS Score" to analyze. 🎉`, 'success');
  } catch (err) {
    console.error('File read error:', err);
    fn.textContent = `⚠️ ${file.name} — paste text below manually`;
    fn.style.background = 'rgba(239,68,68,0.08)';
    fn.style.borderColor = 'rgba(239,68,68,0.3)';
    fn.style.color = '#f87171';
    toast('Could not read this file automatically. Please paste your resume text in the box below.', 'info');
  }
}

function readAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload  = e => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

async function extractPdfText(file) {
  // Set worker path for pdf.js
  if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  } else {
    throw new Error('PDF.js not loaded');
  }

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  let fullText = '';

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page    = await pdf.getPage(pageNum);
    const content = await page.getTextContent();
    const pageText = content.items.map(item => item.str).join(' ');
    fullText += pageText + '\n';
  }

  return fullText.trim();
}

// ─── Toast ────────────────────────────────────────────────────
function toast(msg, type = 'info') {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => {
    el.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => el.remove(), 300);
  }, 4000);
}

// ─── Main Analysis ────────────────────────────────────────────
async function runAnalysis() {
  let resumeText = ($('resume-text').value || '').trim() || uploadedText.trim();
  const jdText   = ($('jd-text').value || '').trim();

  setLoading(true);
  // Small delay so the button animation is visible
  await new Promise(r => setTimeout(r, 600));

  try {
    const result = analyzeResume(resumeText, jdText, selectedRole);
    analysisData  = result;
    renderResults(result, !!jdText);
    toast('Analysis complete! 🎉', 'success');
  } catch(err) {
    console.error(err);
    toast('Something went wrong. Please try again.', 'error');
  } finally {
    setLoading(false);
  }
}

function setLoading(on) {
  const btn = $('analyze-btn');
  btn.disabled = on;
  btn.querySelector('.btn-text').style.display    = on ? 'none' : 'flex';
  btn.querySelector('.btn-loading').style.display = on ? 'flex' : 'none';
}

// ══════════════════════════════════════════════════════════════
//  CORE ATS ENGINE — Pure JavaScript, No API
// ══════════════════════════════════════════════════════════════
function analyzeResume(resumeText, jdText, role) {
  const text  = resumeText.toLowerCase();
  const lines = resumeText.split('\n').map(l => l.trim()).filter(Boolean);

  // 1. Skills Detection
  const roleRequired  = ROLE_SKILLS[role] || ROLE_SKILLS['fullstack'];
  const presentSkills = ALL_TECH_SKILLS.filter(s => text.includes(s.toLowerCase()));
  const missingSkills = roleRequired.filter(s => !text.includes(s.toLowerCase()));
  const matchedRoleSkills = roleRequired.filter(s => text.includes(s.toLowerCase()));

  // 2. Section Detection
  const sectionsFound = KEY_SECTIONS.filter(s => text.includes(s));
  const hasProjects    = text.includes('project');
  const hasExperience  = text.includes('experience') || text.includes('work history') || text.includes('employment');
  const hasEducation   = text.includes('education') || text.includes('degree') || text.includes('university') || text.includes('college');
  const hasSummary     = text.includes('summary') || text.includes('objective') || text.includes('profile');
  const hasGithub      = text.includes('github');
  const hasLinkedin    = text.includes('linkedin');
  const hasContact     = text.includes('@') || text.includes('phone') || text.includes('email') || /\d{10}/.test(text);

  // 3. Action Verbs & Metrics
  const foundActionVerbs  = ACTION_VERBS.filter(v => text.includes(v.toLowerCase()));
  const foundWeakVerbs    = WEAK_VERBS.filter(v => text.includes(v.toLowerCase()));
  const hasMetrics        = QUANTIFIER_PATTERNS.some(p => p.test(resumeText));
  const bulletCount       = lines.filter(l => l.startsWith('-') || l.startsWith('•') || l.startsWith('*')).length;
  const wordCount         = resumeText.split(/\s+/).length;

  // 4. Score Breakdown
  const skillsScore = Math.round((matchedRoleSkills.length / roleRequired.length) * 100);

  let projectScore = 0;
  if (hasProjects) projectScore += 40;
  if (hasGithub)   projectScore += 25;
  if (bulletCount >= 5) projectScore += 20;
  if (hasMetrics)  projectScore += 15;
  projectScore = Math.min(100, projectScore);

  let experienceScore = 0;
  if (hasExperience) experienceScore += 40;
  if (hasEducation)  experienceScore += 20;
  if (foundActionVerbs.length >= 3) experienceScore += 25;
  if (hasMetrics) experienceScore += 15;
  experienceScore = Math.min(100, experienceScore);

  let formattingScore = 0;
  if (hasContact)       formattingScore += 20;
  if (hasSummary)       formattingScore += 15;
  if (sectionsFound.length >= 3) formattingScore += 20;
  if (wordCount >= 200 && wordCount <= 1000) formattingScore += 20;
  if (hasLinkedin || hasGithub) formattingScore += 15;
  if (foundWeakVerbs.length === 0) formattingScore += 10;
  formattingScore = Math.min(100, formattingScore);

  const atsScore = Math.round(
    skillsScore    * 0.35 +
    projectScore   * 0.25 +
    experienceScore* 0.25 +
    formattingScore* 0.15
  );

  const scoreLabel =
    atsScore >= 80 ? 'Excellent' :
    atsScore >= 65 ? 'Good'      :
    atsScore >= 45 ? 'Average'   : 'Needs Work';

  // 5. Strengths & Weaknesses
  const strengths = [];
  const weaknesses = [];

  if (matchedRoleSkills.length >= roleRequired.length * 0.7) strengths.push(`Strong match on key ${role} skills (${matchedRoleSkills.length}/${roleRequired.length} matched)`);
  if (hasGithub)   strengths.push('GitHub profile linked — great for showcasing your code');
  if (hasMetrics)  strengths.push('Resume includes quantifiable achievements and metrics');
  if (hasProjects) strengths.push('Projects section present, demonstrating hands-on experience');
  if (foundActionVerbs.length >= 5) strengths.push(`Strong action verb usage (${foundActionVerbs.length} found: ${foundActionVerbs.slice(0,3).join(', ')}...)`);
  if (hasExperience && hasEducation) strengths.push('Both Education and Experience sections are present');
  if (hasSummary)  strengths.push('Professional summary present — gives recruiters a quick overview');

  if (!hasMetrics)  weaknesses.push('No quantifiable metrics found (add numbers like "improved by 30%", "10K users")');
  if (missingSkills.length > 3) weaknesses.push(`Missing ${missingSkills.length} key skills for ${role} role: ${missingSkills.slice(0, 3).join(', ')}...`);
  if (!hasGithub)   weaknesses.push('No GitHub link found — hard to verify your coding ability');
  if (foundWeakVerbs.length > 0) weaknesses.push(`Weak verb usage detected: "${foundWeakVerbs[0]}" — use stronger action verbs`);
  if (!hasSummary)  weaknesses.push('Missing professional summary/objective at the top of your resume');
  if (wordCount < 200) weaknesses.push('Resume is too short. Add more detail to your projects and experience.');
  if (!hasContact)  weaknesses.push('Missing contact information (email, phone, or LinkedIn)');

  // 6. Smart Suggestions
  const suggestions = [];
  if (!hasMetrics)  suggestions.push(SUGGESTIONS_BANK.noMetrics);
  if (!hasGithub)   suggestions.push(SUGGESTIONS_BANK.noGithub);
  if (foundWeakVerbs.length > 0) suggestions.push(SUGGESTIONS_BANK.weakVerbs);
  if (!hasProjects) suggestions.push(SUGGESTIONS_BANK.noProjects);
  if (!hasSummary)  suggestions.push(SUGGESTIONS_BANK.noSummary);
  if (!hasLinkedin && !hasGithub)  suggestions.push(SUGGESTIONS_BANK.noLinks);
  if (missingSkills.length > 0) suggestions.push(SUGGESTIONS_BANK.missingRole(missingSkills[0]));
  if (wordCount < 250) suggestions.push(SUGGESTIONS_BANK.shortResume);
  suggestions.push(SUGGESTIONS_BANK.addCert);

  // 7. Enhanced Bullets (template-based improvement examples)
  const enhanced_bullets = generateEnhancedBullets(resumeText, role, foundActionVerbs);

  // 8. Job Match (if JD provided)
  let job_match = null;
  if (jdText) {
    const jdWords = extractKeywords(jdText.toLowerCase());
    const resumeWords = extractKeywords(text);
    const matched = jdWords.filter(w => resumeWords.includes(w));
    const missing = jdWords.filter(w => !resumeWords.includes(w)).slice(0, 15);
    job_match = {
      percentage: Math.min(100, Math.round((matched.length / Math.max(jdWords.length, 1)) * 100)),
      matched_keywords: matched.slice(0, 15),
      missing_keywords: missing
    };
  }

  return {
    ats_score: atsScore,
    score_label: scoreLabel,
    score_breakdown: {
      skills: skillsScore,
      projects: projectScore,
      experience: experienceScore,
      formatting: formattingScore
    },
    strengths:  strengths.slice(0, 5),
    weaknesses: weaknesses.slice(0, 5),
    present_skills: presentSkills.slice(0, 20),
    missing_skills: missingSkills.slice(0, 10),
    suggestions: suggestions.slice(0, 6),
    enhanced_bullets,
    job_match,
    role_analysis_summary: `Resume analyzed for ${role} role. Score: ${atsScore}/100 — ${scoreLabel}.`
  };
}

// ─── Keyword Extractor (for JD matching) ─────────────────────
function extractKeywords(text) {
  const stopWords = new Set(['the','a','an','and','or','but','in','on','at','to','for','is','are','was','were','be','been','with','that','this','it','from','by','as','of','we','you','your','our','their','have','has','will','can','should','must','may','would','could','about','which','who','what','when','where','how']);
  return [...new Set(
    text.split(/[\s,.\-–:;()\/\[\]]+/)
      .map(w => w.replace(/[^a-z0-9.#+]/g, ''))
      .filter(w => w.length > 2 && !stopWords.has(w))
  )];
}

// ─── Enhanced Bullet Generator ────────────────────────────────
function generateEnhancedBullets(resumeText, role, foundVerbs) {
  const templates = {
    frontend: [
      'Architected a responsive React application with TypeScript, reducing load time by 40% through code splitting and lazy loading',
      'Engineered a reusable component library of 25+ UI elements, cutting development time by 30% across 3 product teams',
      'Optimized frontend performance achieving 95+ Lighthouse score by implementing caching strategies and image optimization',
      'Integrated RESTful APIs with real-time WebSocket support, delivering live updates across 5 key user-facing features',
      'Led migration from JavaScript to TypeScript, reducing runtime bugs by 60% and improving developer experience'
    ],
    backend: [
      'Designed and deployed RESTful APIs serving 100K+ daily requests with 99.9% uptime using Node.js and PostgreSQL',
      'Architected microservices infrastructure with Docker/Kubernetes, enabling independent scaling and reducing downtime by 80%',
      'Optimized critical database queries using indexing strategies, reducing average response time from 800ms to 120ms',
      'Built secure authentication system handling 2M+ token validations/month using JWT, OAuth2, and Redis session caching',
      'Automated deployment pipeline with GitHub Actions CI/CD, reducing release cycle from 3 days to under 2 hours'
    ],
    fullstack: [
      'Developed full-stack e-commerce platform using React and Node.js, processing $50K+ monthly transactions for 5,000+ users',
      'Engineered real-time collaborative tools using WebSockets, reducing latency to under 50ms for 1,000+ concurrent users',
      'Architected PostgreSQL schema and Redis caching layer, improving API response times by 65% under peak load',
      'Built and deployed CI/CD pipeline with Docker, reducing deployment time from 2 hours to 15 minutes',
      'Led team of 3 engineers to deliver 8 major features ahead of schedule, achieving 4.8/5 customer satisfaction score'
    ],
    ai: [
      'Fine-tuned LLaMA-based LLM on domain-specific datasets, achieving 92% accuracy on classification tasks (vs 78% baseline)',
      'Built NLP pipeline using spaCy and Transformers, processing 500K+ documents/day with 94% entity extraction precision',
      'Developed computer vision model using PyTorch that reduced defect detection time by 70% in manufacturing pipeline',
      'Deployed ML models to production using FastAPI and Docker, serving 10K+ real-time predictions per day',
      'Engineered feature engineering pipeline with Pandas/NumPy, improving model AUC-ROC by 12% over baseline'
    ],
    devops: [
      'Architected Kubernetes cluster on AWS EKS, managing 50+ microservices with auto-scaling and 99.99% uptime',
      'Implemented Infrastructure as Code using Terraform, reducing provisioning time from days to 30 minutes',
      'Built comprehensive monitoring stack with Prometheus and Grafana, reducing MTTR from 4 hours to 20 minutes',
      'Designed multi-stage CI/CD pipelines with GitHub Actions, cutting deployment failures by 75% and release time by 60%',
      'Automated backup and disaster recovery procedures, achieving RPO of 15 minutes and RTO of 1 hour'
    ]
  };
  return (templates[role] || templates['fullstack']).slice(0, 5);
}

// ─── Render Results ───────────────────────────────────────────
function renderResults(data, hasJD) {
  $('empty-state').style.display     = 'none';
  $('results-content').style.display = 'flex';
  $('results-content').style.flexDirection = 'column';
  $('results-content').style.gap = '18px';

  renderScoreCard(data);
  renderSW(data);
  renderSkills(data);
  renderSuggestions(data);
  renderBullets(data);

  if (hasJD && data.job_match) renderMatchCard(data.job_match);
  else $('match-card').style.display = 'none';

  $('results-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderScoreCard(data) {
  const score = data.ats_score || 0;
  const circ  = 2 * Math.PI * 50;
  const svg   = $('score-ring-svg');

  if (!svg.querySelector('defs')) {
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `<linearGradient id="score-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#818cf8"/><stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>`;
    svg.insertBefore(defs, svg.firstChild);
  }

  $('score-number').textContent = '0';
  $('ring-fill').style.strokeDasharray = `0 ${circ}`;

  const dur = 1400, t0 = performance.now(), filled = (score / 100) * circ;
  const tick = now => {
    const t = Math.min((now - t0) / dur, 1), e = 1 - Math.pow(1 - t, 3);
    $('score-number').textContent = Math.round(e * score);
    $('ring-fill').style.strokeDasharray = `${e * filled} ${circ}`;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  $('score-badge').textContent = data.score_label || 'Analyzed';

  const bd = data.score_breakdown || {};
  const rows = [
    { label:'Skills',     val: bd.skills     ?? 0, color:'#818cf8' },
    { label:'Projects',   val: bd.projects    ?? 0, color:'#8b5cf6' },
    { label:'Experience', val: bd.experience  ?? 0, color:'#06b6d4' },
    { label:'Formatting', val: bd.formatting  ?? 0, color:'#10b981' },
  ];
  $('score-breakdown').innerHTML = rows.map(r => `
    <div class="breakdown-row">
      <div class="breakdown-label-row"><span>${r.label}</span><span>${r.val}/100</span></div>
      <div class="progress-bar">
        <div class="progress-fill" style="width:${r.val}%;background:linear-gradient(90deg,${r.color},${r.color}88)"></div>
      </div>
    </div>`).join('');
}

function renderMatchCard(match) {
  $('match-card').style.display = 'block';
  const pct = match.percentage || 0;
  $('match-pct').textContent = `${pct}%`;
  setTimeout(() => { $('match-bar').style.width = `${pct}%`; }, 100);
  $('matched-tags').innerHTML = (match.matched_keywords || []).map(k => `<span class="keyword-tag matched">${k}</span>`).join('');
  $('missing-tags').innerHTML = (match.missing_keywords || []).map(k => `<span class="keyword-tag missing">${k}</span>`).join('');
}

function renderSW(data) {
  $('strengths-list').innerHTML  = (data.strengths  || []).map(s => `<li>${s}</li>`).join('');
  $('weaknesses-list').innerHTML = (data.weaknesses || []).map(w => `<li>${w}</li>`).join('');
}

function renderSkills(data) {
  $('user-skills').innerHTML    = (data.present_skills || []).map(s => `<span class="skill-tag present">${s}</span>`).join('');
  $('missing-skills').innerHTML = (data.missing_skills || []).map(s => `<span class="skill-tag absent">${s}</span>`).join('');
}

function renderSuggestions(data) {
  const icons = ['💡','🎯','📊','✍️','🚀','📈'];
  $('suggestions-list').innerHTML = (data.suggestions || []).map((s, i) => `
    <div class="suggestion-item">
      <span class="suggestion-icon">${icons[i % icons.length]}</span><span>${s}</span>
    </div>`).join('');
}

function renderBullets(data) {
  $('bullets-list').innerHTML = (data.enhanced_bullets || []).map(b => `<div class="bullet-item">${b}</div>`).join('');
}

// ─── PDF Report ───────────────────────────────────────────────
function downloadReport() {
  if (!analysisData) { toast('Run an analysis first.', 'error'); return; }
  const d = analysisData;
  const jm = d.job_match ? `
    <h2>🔍 Job Match: ${d.job_match.percentage}%</h2>
    <h3>Matched</h3><p>${(d.job_match.matched_keywords||[]).join(' · ')}</p>
    <h3>Missing</h3><p>${(d.job_match.missing_keywords||[]).join(' · ')}</p>` : '';

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>ResumeIQ Report</title>
<style>
  body{font-family:Arial,sans-serif;max-width:800px;margin:0 auto;padding:40px;color:#1e293b}
  h1{color:#6366f1;font-size:2rem} .sub{color:#64748b;margin-bottom:32px}
  h2{color:#4f46e5;border-bottom:2px solid #e2e8f0;padding-bottom:8px;margin-top:32px} h3{color:#334155;margin-top:16px}
  .big{font-size:4rem;font-weight:900;color:#6366f1;text-align:center;margin:12px 0}
  .lbl{text-align:center;color:#64748b;margin-bottom:24px}
  .grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
  .box{padding:12px;border:1px solid #e2e8f0;border-radius:8px}
  ul{padding-left:20px} li{margin-bottom:6px;color:#475569}
  .badge{display:inline-block;padding:3px 10px;border-radius:100px;font-size:.75rem;font-weight:600;margin:3px}
  .blue{background:#ede9fe;color:#5b21b6} .orange{background:#fef9c3;color:#854d0e}
  .bullet{padding:8px 12px;border-left:3px solid #6366f1;margin:8px 0;background:#f8f7ff;font-size:.9rem}
  .footer{margin-top:40px;text-align:center;color:#94a3b8;font-size:.8rem;border-top:1px solid #e2e8f0;padding-top:16px}
</style></head><body>
  <h1>ResumeIQ Analysis Report</h1>
  <p class="sub">Generated on ${new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'})}</p>
  <h2>🎯 ATS Score</h2><div class="big">${d.ats_score}/100</div><div class="lbl">${d.score_label}</div>
  <h2>📊 Score Breakdown</h2><div class="grid">
    ${Object.entries(d.score_breakdown||{}).map(([k,v])=>`<div class="box"><strong>${k[0].toUpperCase()+k.slice(1)}</strong>: ${v}/100</div>`).join('')}
  </div>
  <h2>✅ Strengths & ❌ Weaknesses</h2><div class="grid">
    <div><h3>Strengths</h3><ul>${(d.strengths||[]).map(s=>`<li>${s}</li>`).join('')}</ul></div>
    <div><h3>Weaknesses</h3><ul>${(d.weaknesses||[]).map(w=>`<li>${w}</li>`).join('')}</ul></div>
  </div>
  <h2>🛠 Skills</h2>
  <h3>Present</h3>${(d.present_skills||[]).map(s=>`<span class="badge blue">${s}</span>`).join('')}
  <h3>Missing for Role</h3>${(d.missing_skills||[]).map(s=>`<span class="badge orange">${s}</span>`).join('')}
  ${jm}
  <h2>💡 AI Suggestions</h2><ul>${(d.suggestions||[]).map(s=>`<li>${s}</li>`).join('')}</ul>
  <h2>🚀 Enhanced Bullet Points</h2>${(d.enhanced_bullets||[]).map(b=>`<div class="bullet">→ ${b}</div>`).join('')}
  <div class="footer">Generated by ResumeIQ — Open Source AI Resume Analyzer</div>
</body></html>`;

  const win = window.open('', '_blank');
  if (!win) { toast('Allow pop-ups to download the report.', 'error'); return; }
  win.document.write(html); win.document.close();
  setTimeout(() => win.print(), 500);
}

// ══════════════════════════════════════════════════════════════
//  RESUME BUILDER
// ══════════════════════════════════════════════════════════════
let expCount  = 0;
let projCount = 0;

document.addEventListener('DOMContentLoaded', () => {
  // Builder tabs
  document.querySelectorAll('.btab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.btab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.btab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      $(`tab-${tab.dataset.tab}`).classList.add('active');
    });
  });

  // Add experience
  $('add-exp-btn').addEventListener('click', addExperience);
  addExperience(); // start with one entry

  // Add project
  $('add-proj-btn').addEventListener('click', addProject);
  addProject(); // start with one entry

  // Preview
  $('builder-preview-btn').addEventListener('click', () => {
    const html = buildResumeHTML();
    if (!html) return;
    $('resume-preview-content').innerHTML = html;
    $('preview-modal').style.display = 'grid';
  });

  // Close preview
  $('preview-close').addEventListener('click', () => $('preview-modal').style.display = 'none');
  $('preview-modal').addEventListener('click', e => { if (e.target === $('preview-modal')) $('preview-modal').style.display = 'none'; });

  // Generate & Download
  $('builder-generate-btn').addEventListener('click', generateAndDownload);

  // Preview Download
  $('preview-download-btn').addEventListener('click', printResume);
});

function addExperience() {
  expCount++;
  const id = `exp${expCount}`;
  const div = document.createElement('div');
  div.className = 'exp-item';
  div.id = id;
  div.innerHTML = `
    <div class="item-header">
      <h5>Experience #${expCount}</h5>
      <button class="btn-remove" onclick="removeItem('${id}')">✕ Remove</button>
    </div>
    <div class="exp-grid">
      <div class="form-group"><label class="form-label">Job Title</label><input class="text-input" id="${id}-title" placeholder="Web Development Intern" /></div>
      <div class="form-group"><label class="form-label">Company</label><input class="text-input" id="${id}-company" placeholder="Tech Company" /></div>
      <div class="form-group"><label class="form-label">Location</label><input class="text-input" id="${id}-loc" placeholder="Remote / Chennai" /></div>
      <div class="form-group"><label class="form-label">Duration</label><input class="text-input" id="${id}-date" placeholder="Jan 2024 – Mar 2024" /></div>
    </div>
    <div class="form-group">
      <label class="form-label">Responsibilities (one per line)</label>
      <textarea class="text-input" id="${id}-desc" rows="4" placeholder="- Developed responsive web pages using React and Node.js&#10;- Integrated REST APIs for dynamic data rendering&#10;- Reduced load time by 30% through optimization"></textarea>
    </div>`;
  $('exp-list').appendChild(div);
}

function addProject() {
  projCount++;
  const id = `proj${projCount}`;
  const div = document.createElement('div');
  div.className = 'proj-item';
  div.id = id;
  div.innerHTML = `
    <div class="item-header">
      <h5>Project #${projCount}</h5>
      <button class="btn-remove" onclick="removeItem('${id}')">✕ Remove</button>
    </div>
    <div class="exp-grid">
      <div class="form-group"><label class="form-label">Project Name</label><input class="text-input" id="${id}-name" placeholder="Full Stack Web App" /></div>
      <div class="form-group"><label class="form-label">Tech Stack</label><input class="text-input" id="${id}-tech" placeholder="React, Node.js, PostgreSQL" /></div>
    </div>
    <div class="form-group">
      <label class="form-label">Description (one bullet per line)</label>
      <textarea class="text-input" id="${id}-desc" rows="3" placeholder="- Built a task manager with real-time updates&#10;- Deployed on AWS with 99.9% uptime"></textarea>
    </div>`;
  $('proj-list').appendChild(div);
}

function removeItem(id) {
  const el = $(id);
  if (el) el.remove();
}

function getVal(id) { const el = $(id); return el ? el.value.trim() : ''; }

function buildResumeHTML() {
  const name = getVal('b-name');
  if (!name) { toast('Please enter your name in the Personal tab.', 'error'); return null; }

  // Contact line
  const contactParts = [
    getVal('b-email'), getVal('b-phone'), getVal('b-location'),
    getVal('b-linkedin'), getVal('b-github')
  ].filter(Boolean);

  // Skills
  const skillRows = [
    ['Languages',    getVal('b-lang')],
    ['Frontend',     getVal('b-frontend')],
    ['Backend',      getVal('b-backend')],
    ['Database',     getVal('b-db')],
    ['DevOps/Cloud', getVal('b-devops')],
    ['Tools',        getVal('b-tools')],
  ].filter(([, v]) => v);

  // Experience
  const expItems = [...document.querySelectorAll('.exp-item')].map(el => {
    const id = el.id;
    return {
      title:   getVal(`${id}-title`),
      company: getVal(`${id}-company`),
      loc:     getVal(`${id}-loc`),
      date:    getVal(`${id}-date`),
      desc:    getVal(`${id}-desc`),
    };
  }).filter(e => e.title || e.company);

  // Projects
  const projItems = [...document.querySelectorAll('.proj-item')].map(el => {
    const id = el.id;
    return {
      name: getVal(`${id}-name`),
      tech: getVal(`${id}-tech`),
      desc: getVal(`${id}-desc`),
    };
  }).filter(p => p.name);

  const degree  = getVal('b-degree');
  const college = getVal('b-college');
  const year    = getVal('b-year');
  const cgpa    = getVal('b-cgpa');
  const summary = getVal('b-summary');
  const certs   = getVal('b-certs');

  const toList = text => text.split('\n')
    .map(l => l.trim().replace(/^[-•*]\s*/, ''))
    .filter(Boolean)
    .map(l => `<li>${l}</li>`)
    .join('');

  let html = `
    <h1>${name}</h1>
    <div class="rp-contact">${contactParts.join(' &nbsp;|&nbsp; ')}</div>`;

  if (summary) html += `<h2>Objective</h2><p>${summary}</p>`;

  if (skillRows.length) {
    html += `<h2>Skills Summary</h2><div class="rp-skills-table">`;
    skillRows.forEach(([cat, val]) => {
      html += `<div class="rp-skill-row"><span class="rp-skill-cat">${cat}:</span><span>${val}</span></div>`;
    });
    html += `</div>`;
  }

  if (expItems.length) {
    html += `<h2>Experience</h2>`;
    expItems.forEach(e => {
      html += `<h3>${e.title}${e.company ? ` — ${e.company}` : ''}</h3>`;
      html += `<div class="rp-meta">${[e.loc, e.date].filter(Boolean).join(' · ')}</div>`;
      if (e.desc) html += `<ul>${toList(e.desc)}</ul>`;
    });
  }

  if (projItems.length) {
    html += `<h2>Projects</h2>`;
    projItems.forEach(p => {
      html += `<h3>${p.name}${p.tech ? ` <span style="font-weight:400;color:#64748b">| ${p.tech}</span>` : ''}</h3>`;
      if (p.desc) html += `<ul>${toList(p.desc)}</ul>`;
    });
  }

  if (degree || college) {
    html += `<h2>Education</h2>`;
    html += `<h3>${degree}</h3>`;
    html += `<div class="rp-meta">${[college, year, cgpa ? `CGPA: ${cgpa}` : ''].filter(Boolean).join(' · ')}</div>`;
  }

  if (certs) {
    html += `<h2>Certifications</h2><ul>`;
    certs.split('\n').filter(Boolean).forEach(c => { html += `<li>${c.trim()}</li>`; });
    html += `</ul>`;
  }

  return html;
}

function generateAndDownload() {
  const html = buildResumeHTML();
  if (!html) return;

  const name = getVal('b-name') || 'resume';
  const fullHtml = `<!DOCTYPE html><html><head><meta charset="UTF-8">
<title>${name}</title>
<style>
  @page { margin: 0; size: A4; }
  * { box-sizing: border-box; }
  body {
    font-family: Arial, sans-serif;
    max-width: 780px; margin: 0 auto;
    padding: 48px 56px;
    color: #1e293b; font-size: 13px; line-height: 1.65;
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  h1{font-size:1.7rem;font-weight:700;color:#1e293b;margin-bottom:4px}
  .rp-contact{color:#475569;font-size:.8rem;margin-bottom:16px;line-height:1.8}
  h2{font-size:.85rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:#4f46e5;border-bottom:2px solid #e2e8f0;padding-bottom:4px;margin:22px 0 10px}
  h3{font-size:.95rem;font-weight:700;color:#1e293b;margin-bottom:2px}
  .rp-meta{color:#64748b;font-size:.8rem;margin-bottom:6px}
  ul{padding-left:18px;margin:5px 0}
  li{margin-bottom:3px;color:#334155}
  p{color:#334155;margin-bottom:8px}
  .rp-skills-table{display:grid;grid-template-columns:1fr 1fr;gap:4px 16px}
  .rp-skill-row{display:flex;gap:8px;font-size:.8rem}
  .rp-skill-cat{font-weight:700;color:#334155;min-width:90px}
  @media print{
    @page { margin: 0; }
    body { padding: 48px 56px; }
  }
</style></head><body>${html}</body></html>`;

  const win = window.open('', '_blank');
  if (!win) { toast('Allow pop-ups to download the resume.', 'error'); return; }
  win.document.write(fullHtml);
  win.document.close();
  setTimeout(() => {
    win.print();
    toast('💡 In print dialog → More Settings → uncheck "Headers and footers" → Save as PDF', 'info');
  }, 400);
}

function printResume() {
  const content = $('resume-preview-content').innerHTML;
  const win = window.open('', '_blank');
  if (!win) { toast('Allow pop-ups to print.', 'error'); return; }
  const name = getVal('b-name') || 'Resume';
  win.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${name}</title>
<style>
  @page { margin: 0; size: A4; }
  * { box-sizing: border-box; }
  body {
    font-family: Arial, sans-serif;
    max-width: 780px; margin: 0 auto;
    padding: 48px 56px;
    color: #1e293b; font-size: 13px; line-height: 1.65;
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  h1{font-size:1.7rem;font-weight:700;margin-bottom:4px}
  .rp-contact{color:#475569;font-size:.8rem;margin-bottom:16px;line-height:1.8}
  h2{font-size:.85rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:#4f46e5;border-bottom:2px solid #e2e8f0;padding-bottom:4px;margin:22px 0 10px}
  h3{font-size:.95rem;font-weight:700;margin-bottom:2px}
  .rp-meta{color:#64748b;font-size:.8rem;margin-bottom:6px}
  ul{padding-left:18px;margin:5px 0}
  li{margin-bottom:3px;color:#334155}
  p{color:#334155}
  .rp-skills-table{display:grid;grid-template-columns:1fr 1fr;gap:4px 16px}
  .rp-skill-row{display:flex;gap:8px;font-size:.8rem}
  .rp-skill-cat{font-weight:700;min-width:90px}
  @media print { @page { margin: 0; } body { padding: 48px 56px; } }
</style></head><body>${content}</body></html>`);
  win.document.close();
  setTimeout(() => win.print(), 400);
}

