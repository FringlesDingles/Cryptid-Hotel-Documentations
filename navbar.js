(function () {
  // ── Styles ──────────────────────────────────────────────────────────────
  const css = `
    .site-nav {
      max-width: 900px;
      margin: 24px auto 0;
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 0 4px;
      font-family: 'DM Sans', sans-serif;
    }
    .site-nav a.nav-home {
      display: flex;
      align-items: center;
      gap: 9px;
      text-decoration: none;
      color: #7a7068;
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      transition: color 0.15s;
      white-space: nowrap;
    }
    .site-nav a.nav-home:hover { color: #c45c3a; }
    .site-nav a.nav-home:hover .nav-arrow { transform: translateX(-3px); }
    .nav-arrow {
      font-size: 0.85rem;
      transition: transform 0.15s;
      display: inline-block;
    }
    .nav-divider {
      flex: 1;
      height: 1px;
      background: #c8bfaf;
      opacity: 0.6;
    }
    .nav-breadcrumb {
      font-size: 0.68rem;
      color: #c8bfaf;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: 500;
      white-space: nowrap;
    }
  `;

  // ── Inject styles ────────────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // ── Determine breadcrumb from page <title> ───────────────────────────────
  const breadcrumb = document.title ? document.title.replace('Cryptid Hotel — ', '') : '';

  // ── Build navbar HTML ────────────────────────────────────────────────────
  const nav = document.createElement('nav');
  nav.className = 'site-nav';
  nav.innerHTML = `
    <a href="index.html" class="nav-home">
      <span class="nav-arrow">←</span>
      Home
    </a>
    <div class="nav-divider"></div>
    ${breadcrumb ? `<span class="nav-breadcrumb">${breadcrumb}</span>` : ''}
  `;

  // ── Insert before the first element in <body> ────────────────────────────
  document.body.insertBefore(nav, document.body.firstChild);
})();
