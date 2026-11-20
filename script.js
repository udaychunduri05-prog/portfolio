/**
 * Uday Chunduri - AI & ML Engineer Portfolio
 * Interactive Functionality & Neural Canvas Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initNeuralCanvas();
  initTabNavigation();
  initCopyButtons();
  initStackFilters();
  initSimulators();
  initContactForm();
  initMobileNav();
  initScrollSpy();
  initFooterYear();
});

/* ==================== 1. NEURAL PARTICLE CANVAS ==================== */
function initNeuralCanvas() {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let animationFrameId;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.min(Math.floor((width * height) / 22000), 55);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.6 + 0.8,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(34, 211, 238, ${p.alpha * 0.5})`;
      ctx.fill();

      // Connect nearby particles (neural graph edges)
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const edgeAlpha = (1 - dist / 130) * 0.16;
          ctx.strokeStyle = `rgba(6, 182, 212, ${edgeAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(draw);
  }

  draw();
}

/* ==================== 2. CASE STUDY TAB NAVIGATION ==================== */
function initTabNavigation() {
  const tabButtons = document.querySelectorAll('.tab-btn');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const group = button.getAttribute('data-tab-group');
      const targetId = button.getAttribute('data-target');

      // Deactivate tabs in the same group
      const groupButtons = document.querySelectorAll(`.tab-btn[data-tab-group="${group}"]`);
      groupButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });

      // Activate clicked tab
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      // Hide panels in this case card
      const parentCard = button.closest('.case-card');
      const panels = parentCard.querySelectorAll('.tab-panel');
      panels.forEach(panel => {
        panel.classList.remove('active');
      });

      // Show target panel
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/* ==================== 3. 1-CLICK COPY WITH TOAST ==================== */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.btn-copy');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback for non-https or older environments
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }

        // Button visual feedback
        btn.classList.add('copied');
        const textSpan = btn.querySelector('.copy-text');
        const originalText = textSpan ? textSpan.textContent : 'Copy';
        if (textSpan) textSpan.textContent = 'Copied!';

        showToast(`Copied "${textToCopy}" to clipboard!`);

        setTimeout(() => {
          btn.classList.remove('copied');
          if (textSpan) textSpan.textContent = originalText;
        }, 2200);
      } catch (err) {
        showToast('Unable to copy automatically. Please copy manually.');
      }
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

/* ==================== 4. TECH STACK FILTERING ==================== */
function initStackFilters() {
  const filterPills = document.querySelectorAll('.filter-pill');
  const stackCards = document.querySelectorAll('.stack-group-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      // Toggle active filter pill
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterVal = pill.getAttribute('data-filter');

      stackCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==================== 5. INTERACTIVE RAG SIMULATOR ==================== */
function initSimulators() {
  const runBtn = document.getElementById('doctalk-run-sim');
  const querySelect = document.getElementById('doctalk-query-select');
  const chunkData = document.getElementById('sim-chunk-data');
  const responseData = document.getElementById('sim-response-data');

  if (!runBtn || !querySelect || !chunkData || !responseData) return;

  const dataset = {
    rag1: {
      score: '0.892 (High Relevance)',
      chunk: '"...Section 4.2: Storage clusters utilize multi-region replication guaranteeing 99.995% availability SLA with automatic failover telemetry across active-passive disaster zones..."',
      response: 'Based on Section 4.2 of the indexed document, the recommended SLA for high-availability cloud storage is 99.995%. This reliability target is maintained through multi-region replication and automated failover telemetry.'
    },
    rag2: {
      score: '0.924 (High Relevance)',
      chunk: '"...Section 7.1: Redis in-memory cache layer buffers 85% of read-heavy GET queries, lowering p99 query latency from 180ms to 12ms and shielding downstream PostgreSQL read replicas..."',
      response: 'According to Section 7.1, the caching layer incorporates an in-memory Redis store that buffers 85% of read requests, dramatically reducing p99 query latency from 180ms to 12ms while reducing database query load.'
    },
    rag3: {
      score: '0.941 (High Relevance)',
      chunk: '"...Section 11.4: All object storage buckets and attached NVMe block volumes enforce AES-256 encryption at rest with automated customer-managed KMS key rotation every 90 days..."',
      response: 'As specified in Section 11.4, data at rest is protected with AES-256 encryption across all object storage buckets and NVMe block volumes, supported by 90-day automated customer-managed KMS key rotations.'
    }
  };

  runBtn.addEventListener('click', () => {
    const selectedKey = querySelect.value;
    const item = dataset[selectedKey] || dataset.rag1;

    // Simulation feedback animation
    runBtn.disabled = true;
    runBtn.innerHTML = `
      <svg class="icon icon-sm animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
      <span>Retrieving...</span>
    `;

    chunkData.textContent = 'Executing TF-IDF vectorization & cosine distance calculations...';
    responseData.textContent = 'Awaiting Claude API streaming token completion...';

    setTimeout(() => {
      chunkData.textContent = item.chunk;
      responseData.textContent = item.response;

      runBtn.disabled = false;
      runBtn.innerHTML = `
        <span>Execute Pipeline</span>
        <svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      `;
    }, 450);
  });
}

/* ==================== 6. CONTACT FORM DISPATCH ==================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form || !status) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('sender-name').value.trim();
    const email = document.getElementById('sender-email').value.trim();
    const subject = document.getElementById('sender-subject').value.trim() || 'AI/ML Engineering Inquiry';
    const message = document.getElementById('sender-msg').value.trim();

    if (!name || !email || !message) {
      status.className = 'form-status mono text-xs mt-2 text-red-400';
      status.textContent = '[ERROR]: Please complete all required fields (*).';
      return;
    }

    // Prepare mailto link to immediately provide dispatch access
    const mailtoLink = `mailto:chunduriuday92@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;

    status.className = 'form-status mono text-xs mt-2 text-emerald';
    status.innerHTML = `&gt; Preparing dispatch... <a href="${mailtoLink}" class="underline font-bold text-cyan">Click here to launch email client</a> or message was recorded!`;

    showToast('Inquiry prepared for chunduriuday92@gmail.com');

    // Trigger client draft
    window.location.href = mailtoLink;
  });
}

/* ==================== 7. MOBILE NAVIGATION DRAWER ==================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');
    if (isOpen) {
      menu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      menu.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==================== 8. SCROLL SPY ACTIVE NAV ==================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPosition = window.pageYOffset + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    desktopLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==================== 9. FOOTER YEAR ==================== */
function initFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
