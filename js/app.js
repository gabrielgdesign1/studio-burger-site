/* ============================================================
   STUDIO BURGER — interações e renderização do cardápio
   ============================================================ */

const imgUrl = (hash, w) => IMG_BASE.replace('{w}', 'w_' + w) + hash;
const fmtPrice = (p) => 'R$ ' + p;

const CAT_ICONS = {
  'Destaques': '⭐',
  'Copa do Mundo': '⚽',
  'Pratos Almoço': '🍛',
  'Happy Hour': '🍻',
  'Entradas': '🍟',
  'Burgers': '🍔',
  'Bebidas': '🥤',
  'Bebidas Alcoólicas': '🍺',
  'Drinks': '🍹',
  'Sobremesas': '🍰',
};

/* ---------- Destaques (carrossel horizontal) ---------- */
const highlightsEl = document.getElementById('highlights');
(MENU['Destaques'] || []).forEach((item) => {
  const card = document.createElement('article');
  card.className = 'hl-card';
  card.innerHTML = `
    <img src="${imgUrl(item.img, 600)}" alt="${item.name}" loading="lazy" />
    <div class="hl-body">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <span class="hl-price">${fmtPrice(item.price)}</span>
    </div>`;
  highlightsEl.appendChild(card);
});

/* ---------- Cardápio: tabs + busca ---------- */
const tabsEl = document.getElementById('menuTabs');
const gridEl = document.getElementById('menuGrid');
const countEl = document.getElementById('menuCount');
const searchEl = document.getElementById('menuSearch');

// categorias na ordem do cardápio oficial (sem repetir Destaques)
const CATEGORIES = Object.keys(MENU).filter((c) => c !== 'Destaques');
let activeCat = 'Burgers';

CATEGORIES.forEach((cat) => {
  const btn = document.createElement('button');
  btn.className = 'tab' + (cat === activeCat ? ' active' : '');
  btn.innerHTML = `<span>${CAT_ICONS[cat] || ''}</span>${cat}`;
  btn.addEventListener('click', () => {
    activeCat = cat;
    searchEl.value = '';
    document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
    btn.classList.add('active');
    renderMenu();
  });
  tabsEl.appendChild(btn);
});

const norm = (s) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

function renderMenu() {
  const q = norm(searchEl.value.trim());
  gridEl.innerHTML = '';
  let items = [];

  if (q) {
    // busca global em todas as categorias
    CATEGORIES.forEach((cat) => {
      MENU[cat].forEach((item) => {
        if (norm(item.name + ' ' + item.desc).includes(q)) {
          items.push({ ...item, cat });
        }
      });
    });
  } else {
    items = MENU[activeCat].map((i) => ({ ...i, cat: null }));
  }

  countEl.textContent = q
    ? `${items.length} resultado${items.length === 1 ? '' : 's'} para "${searchEl.value.trim()}"`
    : `${items.length} itens em ${activeCat}`;

  if (!items.length) {
    gridEl.innerHTML = `<p class="menu-empty">Nenhum item encontrado. 😢<br/>Tente buscar por outro termo!</p>`;
    return;
  }

  items.forEach((item, i) => {
    const card = document.createElement('article');
    card.className = 'menu-card';
    card.style.animationDelay = Math.min(i * 40, 400) + 'ms';
    card.innerHTML = `
      <div class="menu-card-img">
        <img src="${imgUrl(item.img, 600)}" alt="${item.name}" loading="lazy" />
        ${item.cat ? `<span class="menu-card-cat">${item.cat}</span>` : ''}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-head">
          <h3>${item.name}</h3>
          <span class="menu-price">${fmtPrice(item.price)}</span>
        </div>
        ${item.desc ? `<p class="menu-desc">${item.desc}</p>` : ''}
      </div>`;
    gridEl.appendChild(card);
  });
}

let searchTimer;
searchEl.addEventListener('input', () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    if (searchEl.value.trim()) {
      document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
    } else {
      document.querySelectorAll('.tab').forEach((t, idx) => {
        t.classList.toggle('active', CATEGORIES[idx] === activeCat);
      });
    }
    renderMenu();
  }, 200);
});

renderMenu();

/* ---------- Header scroll ---------- */
const header = document.getElementById('header');
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
  backTop.classList.toggle('show', window.scrollY > 700);
}, { passive: true });

/* ---------- Menu mobile ---------- */
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  navToggle.classList.toggle('open');
});
nav.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.classList.remove('open');
  })
);

/* ---------- Reveal on scroll ---------- */
const observer = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

/* ---------- Ano no footer ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
