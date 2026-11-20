# Uday Chunduri – AI & Machine Learning Engineer Portfolio

A sleek, modern, responsive AI & Machine Learning Engineer portfolio website engineered for **Uday Chunduri**, a Computer Science graduate (B.Tech in CSE, Cloud Computing specialization, KL University, 2020–2024) based in **Hyderabad, India**.

Designed with a **clean, technical, research-and-engineering aesthetic** (deep slate/charcoal dark mode, crisp cybernetic cyan/emerald/indigo accents, monospace typography with JetBrains Mono for metrics and technical badges, smooth scroll-spying navigation, and interactive project breakdowns).

---

## 🚀 Live Preview & Quick Start

Because this portfolio is built with clean, zero-dependency semantic HTML5, modern CSS3 (with custom properties & responsive grid/flexbox), and vanilla JavaScript:

### Method 1: Instant Local View (No Setup Required)
Simply double-click [`index.html`](index.html) or open it directly in any modern browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

### Method 2: Local Static Server (Python)
Run the following in PowerShell / terminal:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

### Method 3: VS Code Live Server
Right-click [`index.html`](index.html) and click **"Open with Live Server"**.

---

## 📂 File Architecture

```
Portfolio/
├── index.html        # Semantic HTML5 markup, accessible ARIA roles, embedded SVGs
├── style.css         # Deep slate dark mode design system, glassmorphism, responsive grids
├── script.js         # Interactive RAG simulator, tab switcher, 1-click copy toasts, neural canvas
└── README.md         # Documentation & deployment guide
```

---

## 🔬 Featured Engineering Highlights

### 1. Hero Section
- **Name & Title:** Uday Chunduri — AI / ML Engineer | RAG Systems, Deep Learning & Cloud AI
- **Status Indicator:** Live pulsing badge: `OPEN TO AI / ML ROLES • HYDERABAD, INDIA`
- **Interactive Terminal:** Simulated live AI runtime with profile schema inspection and evaluation telemetry.
- **Direct Access CTAs:** Explore AI Projects, Get in Touch, LinkedIn, Email, and Phone.

### 2. Featured AI & ML Case Studies (Interactive Cards)
Interactive tabs allow recruiters and hiring managers to explore each project from four perspectives: **Architecture Flow**, **Problem Statement**, **Verified Results**, and an **Interactive Simulator / Benchmark**.
- **DocTalk – RAG-Based PDF Q&A Web Application**
  - *Stack:* Python, Flask, TF-IDF Vectorization, Claude API, NLP
  - *Pipeline:* PDF text extraction & chunking &rarr; TF-IDF passage matrix &rarr; Cosine similarity top-k retrieval &rarr; Claude API grounded inference.
  - *Results:* Eliminated manual document search; high-relevance domain answers across 10+ page PDFs.
  - *Interactive Demo:* Live interactive RAG query simulator with sample queries, similarity scores, and streaming grounded responses.
- **Gender Detection via Deep Learning (InceptionV3)**
  - *Stack:* Python, TensorFlow, Keras, InceptionV3, OpenCV, Data Augmentation
  - *Pipeline:* OpenCV facial framing &rarr; Dynamic augmentations (rotation, flips, zoom) &rarr; Pre-trained InceptionV3 weights &rarr; GlobalAveragePooling2D + Dropout head fine-tuning.
  - *Results:* 91%+ validation accuracy; outperforming baseline scratch CNN by ~14%.
  - *Interactive Benchmark:* Visual accuracy comparison bar chart vs custom scratch CNNs.

### 3. Technical Stack (Grouped with AI/ML Prioritized First)
Includes interactive category filters (`All Disciplines`, `AI / ML & NLP`, `ML & Data Frameworks`, `Languages & DBs`, `Cloud AI & DevOps`, `Analytics & Automation`):
- **AI / ML & NLP:** RAG, TF-IDF Vectorization, CNN, Classification & Feature Maps, NLP, Transfer Learning
- **ML & Data Frameworks:** TensorFlow/Keras (InceptionV3), Scikit-learn, Pandas, NumPy, OpenCV, Flask
- **Languages & Databases:** Python, SQL, MySQL, SQLite, HTML5, CSS3, JavaScript (basic)
- **Cloud AI & DevOps:** Microsoft Azure (AI-900, AZ-900), Oracle Cloud Infrastructure (OCI 2023 Architect), Git, GitHub, Claude API
- **Analytics & Automation:** Automation Anywhere (Certified), Power BI, Excel (Advanced), Google Data Studio, Web Scraping, REST APIs

### 4. Validated Certifications
- **Microsoft Certified:** Azure AI Fundamentals (AI-900)
- **Microsoft Certified:** Azure Fundamentals (AZ-900)
- **Oracle University:** Oracle Cloud Infrastructure 2023 Certified Architect Associate (OCI-2023)
- **Automation Anywhere:** Certified Essentials Automation Professional

### 5. Engineering Experience & Academic Rigor
- **Frontend Developer Intern** | *Scalify India Private Limited, Hyderabad* (May 2022 – Jun 2022)
  - Delivered responsive UI screens across 3+ shipped client-facing features.
  - Integrated REST API endpoints, reducing frontend-backend integration turnaround time by ~20%.
  - Standardized reusable component hierarchies.
- **B.Tech in Computer Science & Engineering (Cloud Computing)** | *KL University* (Nov 2020 – May 2024)
  - **CGPA:** 7.86 / 10
  - **Core Coursework:** Machine Learning, Data Structures & Algorithms, DBMS, Cloud Architecture & Virtualization.

### 6. Contact & Direct Reach
- **1-Click Copy Buttons:** Instant copy to clipboard for Email (`chunduriuday92@gmail.com`) and Phone (`+91 9032018585`) with tactile animated toast feedback.
- **Direct Connect Links:** One-click links for LinkedIn and direct phone dial.
- **Interactive Message Dispatch Form:** In-page inquiry form with client validation.

---

## 🌐 Instant Free Deployment Options

### GitHub Pages (Recommended)
1. Initialize git in this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI & ML Engineer Portfolio for Uday Chunduri"
   ```
2. Create a repository on GitHub (e.g. `uday-chunduri-portfolio` or `<your-username>.github.io`).
3. Push your repository and go to **Settings &rarr; Pages &rarr; Source: Main branch**.
4. Your site will be live globally in seconds!

### Vercel / Netlify
- Drag and drop this folder directly into [Vercel](https://vercel.com) or [Netlify](https://netlify.com) for instant SSL-secured production deployment.
