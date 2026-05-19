/* UniFlow shared layout + utilities. All data is stubbed. */
(function () {
  const ROLE = localStorage.getItem('uniflow.role') || 'Student';
  const USER = { name: 'Aysel Quliyeva', initials: 'AQ', role: ROLE };

  const NAV = {
    Student: [
      { section: 'Me' },
      { href: '/static-mockups/student/profile.html', label: 'My Profile', ic: '🎓' },
      { section: 'Learn' },
      { href: '/static-mockups/student/schedule.html', label: 'My Schedule', ic: '📅' },
      { href: '/static-mockups/student/homework.html', label: 'Homework', ic: '📚' },
      { href: '/static-mockups/homework/index.html', label: 'Homework Hub', ic: '📝' },
      { href: '/static-mockups/exams/index.html', label: 'Exams', ic: '🧪' },
      { href: '/static-mockups/assignments/ai-review.html', label: 'AI Assignment Review', ic: '🤖' },
      { href: '/static-mockups/ai-tutor/index.html', label: 'AI Tutor', ic: '💬' },
      { section: 'Campus' },
      { href: '/static-mockups/student/attendance.html', label: 'Attendance', ic: '✅' },
      { href: '/static-mockups/student/payments.html', label: 'Tuition & Payments', ic: '💳' },
      { href: '/static-mockups/news/index.html', label: 'News', ic: '📰' },
      { href: '/static-mockups/events/index.html', label: 'Events', ic: '🎟️' },
      { href: '/static-mockups/mobile-app/index.html', label: 'Mobile App', ic: '📱' },
    ],
    Teacher: [
      { section: 'Me' },
      { href: '/static-mockups/teacher/profile.html', label: 'My Profile', ic: '👨‍🏫' },
      { section: 'Teach' },
      { href: '/static-mockups/student/schedule.html', label: 'My Schedule', ic: '📅' },
      { href: '/static-mockups/homework/index.html', label: 'Homework', ic: '📝' },
      { href: '/static-mockups/exams/index.html', label: 'Exams', ic: '🧪' },
      { href: '/static-mockups/admin/attendance.html', label: 'Class Attendance', ic: '✅' },
      { href: '/static-mockups/assignments/ai-review.html', label: 'AI Grading', ic: '🤖' },
      { section: 'Other' },
      { href: '/static-mockups/news/index.html', label: 'News', ic: '📰' },
      { href: '/static-mockups/events/index.html', label: 'Events', ic: '🎟️' },
    ],
    Admin: [
      { section: 'Admin' },
      { href: '/static-mockups/admin/finance.html', label: 'Finance', ic: '💰' },
      { href: '/static-mockups/admin/hr.html', label: 'HR', ic: '👥' },
      { href: '/static-mockups/admin/attendance.html', label: 'Attendance', ic: '✅' },
      { href: '/static-mockups/news/index.html', label: 'News & CMS', ic: '📰' },
      { href: '/static-mockups/events/index.html', label: 'Events', ic: '🎟️' },
      { section: 'Academic' },
      { href: '/static-mockups/exams/index.html', label: 'Exams', ic: '🧪' },
      { href: '/static-mockups/homework/index.html', label: 'Homework', ic: '📝' },
    ],
    Finance: [
      { section: 'Finance' },
      { href: '/static-mockups/admin/finance.html', label: 'Revenue Dashboard', ic: '💰' },
      { href: '/static-mockups/student/payments.html', label: 'Payments', ic: '💳' },
    ],
    HR: [
      { section: 'HR' },
      { href: '/static-mockups/admin/hr.html', label: 'Employees', ic: '👥' },
    ],
  };

  function renderShell(opts) {
    opts = opts || {};
    const title = opts.title || 'UniFlow';
    const items = NAV[ROLE] || NAV.Student;
    const path = location.pathname;
    const navHtml = items.map(it => {
      if (it.section) return `<div class="nav-section">${it.section}</div>`;
      const active = path.endsWith(it.href.split('/').pop()) ? 'active' : '';
      return `<a href="${it.href}" class="${active}"><span class="ic">${it.ic}</span>${it.label}</a>`;
    }).join('');

    const shellHtml = `
      <aside class="sidebar">
        <div class="brand"><div class="brand-mark">U</div> UniFlow</div>
        <nav class="nav">${navHtml}</nav>
        <div class="nav-section" style="margin-top:24px">Switch Role (demo)</div>
        <div style="padding:0 8px">
          <select id="role-switch" class="role-switch" style="width:100%;padding:6px 8px;border:1px solid var(--border);border-radius:8px;background:var(--bg);font:inherit">
            ${['Student','Teacher','Admin','Finance','HR'].map(r => `<option ${r===ROLE?'selected':''}>${r}</option>`).join('')}
          </select>
        </div>
      </aside>
      <main class="main">
        <header class="topbar">
          <h1>${title}</h1>
          <div class="search"><input type="search" placeholder="Search students, courses, transactions..."></div>
          <div class="actions">
            <span class="role-pill">${ROLE}</span>
            <div class="avatar" title="${USER.name}">${USER.initials}</div>
          </div>
        </header>
        <div class="content" id="content"></div>
      </main>
    `;
    const app = document.createElement('div');
    app.className = 'app';
    app.innerHTML = shellHtml;
    document.body.appendChild(app);

    document.getElementById('role-switch').addEventListener('change', (e) => {
      localStorage.setItem('uniflow.role', e.target.value);
      location.reload();
    });

    // Mount chat widget on student-facing pages
    if (ROLE === 'Student' && !opts.hideChat) mountChat();
    if (opts.pwaBanner !== false) mountPwaBanner();
  }

  function setContent(html) {
    document.getElementById('content').innerHTML = html;
  }

  function mountChat() {
    const fab = document.createElement('button');
    fab.className = 'chat-fab';
    fab.innerHTML = '💬';
    fab.title = 'AI Tutor';
    const panel = document.createElement('div');
    panel.className = 'chat-panel';
    panel.innerHTML = `
      <header>
        <strong>AI Tutor</strong>
        <button class="btn btn-sm ghost" id="chat-close">✕</button>
      </header>
      <div class="msgs" id="chat-msgs">
        <div class="msg bot">Hi! I'm your AI tutor. Ask me to explain a concept or walk you through a problem step-by-step. I won't just hand you graded-homework answers.</div>
      </div>
      <form id="chat-form">
        <input id="chat-input" type="text" placeholder="Ask anything..." autocomplete="off">
        <button class="btn primary" type="submit">Send</button>
      </form>
    `;
    document.body.appendChild(fab);
    document.body.appendChild(panel);
    fab.addEventListener('click', () => panel.classList.toggle('open'));
    panel.querySelector('#chat-close').addEventListener('click', () => panel.classList.remove('open'));
    panel.querySelector('#chat-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const input = panel.querySelector('#chat-input');
      const msgs = panel.querySelector('#chat-msgs');
      const text = input.value.trim();
      if (!text) return;
      const u = document.createElement('div'); u.className = 'msg user'; u.textContent = text; msgs.appendChild(u);
      input.value = '';
      msgs.scrollTop = msgs.scrollHeight;
      setTimeout(() => {
        const b = document.createElement('div'); b.className = 'msg bot';
        b.textContent = stubTutorReply(text);
        msgs.appendChild(b);
        msgs.scrollTop = msgs.scrollHeight;
      }, 600);
    });
  }

  function stubTutorReply(q) {
    const lower = q.toLowerCase();
    if (lower.includes('answer') && (lower.includes('homework') || lower.includes('assignment'))) {
      return "I can't just give graded-homework answers — but I can walk you through the concept. What part is tripping you up?";
    }
    const samples = [
      "Great question. Let's break it down step by step: first, identify what's given. Second, decide which formula applies. Want me to continue with a worked example?",
      "Here's the core idea — then I'll give you a small exercise to check understanding. Ready?",
      "Think of it as a three-step process. I'll outline each step; tell me where to dive deeper.",
    ];
    return samples[Math.floor(Math.random() * samples.length)];
  }

  function mountPwaBanner() {
    if (sessionStorage.getItem('uniflow.pwa.dismiss')) return;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) return;
    const b = document.createElement('div');
    b.className = 'pwa-banner show';
    b.innerHTML = `<span>Install UniFlow for offline access</span><div><button class="btn btn-sm" id="pwa-install">Install</button> <button class="btn btn-sm ghost" id="pwa-dismiss" style="color:#fff">✕</button></div>`;
    document.body.appendChild(b);
    document.getElementById('pwa-dismiss').addEventListener('click', () => { b.remove(); sessionStorage.setItem('uniflow.pwa.dismiss', '1'); });
    document.getElementById('pwa-install').addEventListener('click', () => { alert('In a real PWA this would trigger beforeinstallprompt.'); });
  }

  // Format helpers
  const fmt = {
    money: (n) => '₼' + (Math.round(n)).toLocaleString(),
    date: (d) => new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
    dateTime: (d) => new Date(d).toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }),
    daysUntil: (d) => Math.ceil((new Date(d) - Date.now()) / (1000 * 60 * 60 * 24)),
  };

  window.UniFlow = { renderShell, setContent, fmt, ROLE, USER };
})();
