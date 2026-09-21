// ===== Selector de idioma =====
const langToggle = document.getElementById('langToggle');
const langButtons = document.querySelectorAll('[data-lang-btn]');
const i18nElements = document.querySelectorAll('[data-i18n]');
const originalEs = new Map();

i18nElements.forEach(el => originalEs.set(el, el.innerHTML));

let currentLang = 'es';
const cvLinks = document.querySelectorAll('[data-cv-es]');

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  i18nElements.forEach(el => {
    const key = el.dataset.i18n;
    if (lang === 'es') {
      el.innerHTML = originalEs.get(el);
    } else if (translations.en[key]) {
      el.innerHTML = translations.en[key];
    }
  });

  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.langBtn === lang);
  });

  cvLinks.forEach(link => {
    link.setAttribute('href', lang === 'es' ? link.dataset.cvEs : link.dataset.cvEn);
  });
}

langToggle.addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});

// ===== Menú móvil =====
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');

navToggle.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});
