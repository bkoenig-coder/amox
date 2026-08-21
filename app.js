document.addEventListener('DOMContentLoaded', () => {
  // 1. Navbar & Mobile Drawer Controller
  initNavbarAndDrawer();

  // 2. Hero Slideshow on Homepage
  initCokeHeroSlider();

  // 3. AIESEC-Inspired Target Audience Segment Switcher
  initAudienceTabs();

  // 4. Interactive Pathway Chooser (1-Click Finder)
  initPathwayChooser();

  // 5. Live Impact Milestone Numbers Counter
  initMilestoneCounters();

  // 6. Scroll Reveal Animations (AIESEC-style smooth entry)
  initScrollReveal();

  // 7. Hero Opportunity Quick Finder
  initHeroOpportunityFinder();

  // 8. Theme (Dark/Light) & Font Scaling
  initThemeAndFontControls();

  // 9. Checklist State Management (LocalStorage)
  initChecklist();

  // 10. ScrollSpy for Sticky Table of Contents (TOC)
  initScrollSpyTOC();

  // 11. Guide Hub Category Filtering & Live Search
  initGuideSearchAndFilter();

  // 12. Interactive Dormitory Filter
  initDormFilter();

  // 13. MA35 German Appointment Email Generator
  initMA35EmailGenerator();

  // 14. Student Budget & Income Calculator
  initBudgetCalculator();

  // 15. Quick Topic Jump Badges & Admission Stepper
  initQuickJumpAndTimeline();

  // 16. Sun Festival Team Registration Form
  initFestivalRegistration();

  // 17. Mentor Request Form
  initMentorForm();

  // 18. Sun Festival History Carousel on About Page
  initFestivalHistoryCarousel();

  // 19. Back to Top
  initScrollFeatures();

  // 20. Global Keyboard Shortcuts (Ctrl+K)
  initKeyboardShortcuts();
});

/* -------------------------------------------------------------
 * COCA-COLA HERO SLIDER CONTROLLER
 * ------------------------------------------------------------- */
function initCokeHeroSlider() {
  const container = document.getElementById('cokeSlidesContainer');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('cokeSliderPrev');
  const nextBtn = document.getElementById('cokeSliderNext');
  const slides = document.querySelectorAll('.coke-slide');

  if (!container || !slides.length) return;

  let currentSlide = 0;
  const totalSlides = slides.length;
  let autoplayTimer = null;

  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentSlide = index;

    container.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlide);
    });
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5500);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      stopAutoplay();
      goToSlide(currentSlide - 1);
      startAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stopAutoplay();
      goToSlide(currentSlide + 1);
      startAutoplay();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      stopAutoplay();
      const slideIndex = parseInt(dot.getAttribute('data-slide') || '0', 10);
      goToSlide(slideIndex);
      startAutoplay();
    });
  });

  const sliderWrapper = document.querySelector('.coke-hero-slider');
  if (sliderWrapper) {
    sliderWrapper.addEventListener('mouseenter', stopAutoplay);
    sliderWrapper.addEventListener('mouseleave', startAutoplay);
  }

  goToSlide(0);
  startAutoplay();
}
function initNavbarAndDrawer() {
  const navbar = document.getElementById('navbar');
  const toggleBtn = document.getElementById('navToggleBtn');
  const drawer = document.getElementById('mobileNavDrawer');
  const searchShortcutBtn = document.getElementById('searchShortcutBtn');

  // Sticky Navbar Shrink Effect on Scroll (AIESEC Style)
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      toggleBtn.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggleBtn.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  if (searchShortcutBtn) {
    searchShortcutBtn.addEventListener('click', () => {
      if (window.location.pathname.includes('guide.html')) {
        const searchInput = document.getElementById('heroSearchInput');
        if (searchInput) {
          searchInput.focus();
          searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        window.location.href = 'guide.html';
      }
    });
  }
}

/* -------------------------------------------------------------
 * 2. THEME & FONT SCALING
 * ------------------------------------------------------------- */
function initThemeAndFontControls() {
  const themeToggleBtns = [
    document.getElementById('themeToggleBtn'),
    document.getElementById('navThemeToggleBtn'),
    document.getElementById('mobileThemeToggleBtn')
  ];
  const printGuideBtn = document.getElementById('printGuideBtn');
  const fontButtons = document.querySelectorAll('.font-btn');

  // Theme Persistence across pages
  const savedTheme = localStorage.getItem('amox_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);

  themeToggleBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('amox_theme', newTheme);
        updateThemeIcons(newTheme);
      });
    }
  });

  function updateThemeIcons(theme) {
    themeToggleBtns.forEach(btn => {
      if (btn) {
        btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      }
    });
  }

  // Font Scaling
  fontButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      fontButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const size = btn.getAttribute('data-size');
      if (size === 'sm') document.documentElement.style.setProperty('--base-font-size', '14.5px');
      if (size === 'md') document.documentElement.style.setProperty('--base-font-size', '16px');
      if (size === 'lg') document.documentElement.style.setProperty('--base-font-size', '17.5px');
    });
  });

  // Print Handler
  if (printGuideBtn) {
    printGuideBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* -------------------------------------------------------------
 * 3. ARRIVAL CHECKLIST
 * ------------------------------------------------------------- */
function initChecklist() {
  const checkboxes = document.querySelectorAll('#arrivalChecklist input[type="checkbox"]');
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  const progressPercent = document.getElementById('progressPercent');

  if (!checkboxes.length) return;

  const savedState = JSON.parse(localStorage.getItem('amox_checklist_state') || '{}');

  checkboxes.forEach((cb) => {
    if (savedState[cb.id]) {
      cb.checked = true;
    }
    cb.addEventListener('change', () => {
      savedState[cb.id] = cb.checked;
      localStorage.setItem('amox_checklist_state', JSON.stringify(savedState));
      updateProgress();
    });
  });

  function updateProgress() {
    let checkedCount = 0;
    checkboxes.forEach(cb => {
      if (cb.checked) checkedCount++;
    });
    const total = checkboxes.length;
    const percentage = Math.round((checkedCount / total) * 100);

    if (progressFill) progressFill.style.width = `${percentage}%`;
    if (progressText) progressText.textContent = `${checkedCount} / ${total} алхам`;
    if (progressPercent) progressPercent.textContent = `${percentage}%`;
  }

  updateProgress();
}

/* -------------------------------------------------------------
 * 4. SCROLLSPY FOR TABLE OF CONTENTS (TOC)
 * ------------------------------------------------------------- */
function initScrollSpyTOC() {
  const tocLinks = document.querySelectorAll('.toc-link');
  const chapters = document.querySelectorAll('.guide-card');
  const readingProgress = document.getElementById('tocReadingProgress');

  if (!chapters.length || !tocLinks.length) return;

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 140;

    chapters.forEach(chapter => {
      const top = chapter.offsetTop;
      const height = chapter.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = chapter.getAttribute('id');
      }
    });

    if (current) {
      tocLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-target') === current) {
          link.classList.add('active');
        }
      });
    }

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(100, Math.max(0, Math.round((window.scrollY / docHeight) * 100)));
    if (readingProgress) readingProgress.textContent = `${progress}% уншсан`;
  });
}

/* -------------------------------------------------------------
 * 5. GUIDE SEARCH & CATEGORY FILTER
 * ------------------------------------------------------------- */
function initGuideSearchAndFilter() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const guideCards = document.querySelectorAll('.guide-card');
  const searchInput = document.getElementById('heroSearchInput');
  const searchBtn = document.getElementById('heroSearchBtn');
  const searchStats = document.getElementById('searchStats');
  const searchDropdown = document.getElementById('searchDropdown');

  let activeCategory = 'all';
  let searchTerm = '';

  const quickSearchItems = [
    { title: "MA35 Виз цаг авах & сунгах", chap: "chap-1", cat: "visa" },
    { title: "Meldezettel 72 цагийн хаягийн бүртгэл", chap: "chap-1", cat: "visa" },
    { title: "VWU Герман хэлний бэлтгэл (€600-700)", chap: "chap-2", cat: "language" },
    { title: "EPD / ÖSD C1 Хэлний шалгалт", chap: "chap-2", cat: "language" },
    { title: "Оюутны 20 цаг ажиллах эрх & AMS", chap: "chap-3", cat: "work" },
    { title: "Geringfügig (~€518) vs Teilzeit", chap: "chap-3", cat: "work" },
    { title: "E-Card Эрүүл мэндийн даатгал (€73.48/сар)", chap: "chap-4", cat: "insurance" },
    { title: "AmberMed / Barmherzige Brüder (Үнэгүй эмчилгээ)", chap: "chap-4", cat: "insurance" },
    { title: "ÖJAB & STUWO Оюутны дотуур байр", chap: "chap-5", cat: "housing" },
    { title: "WG болон Willhaben байрны түрээс", chap: "chap-6", cat: "housing" },
    { title: "НҮБ-ын дадлага & 42 Vienna код бичих сургууль", chap: "chap-7", cat: "opportunities" },
    { title: "Uni Wien & FH сургалтын төлбөр (€726.72)", chap: "chap-8", cat: "admission" },
    { title: "Монгол гэрчилгээг дүйцүүлэх & Элсэлтийн хугацаа", chap: "chap-9", cat: "admission" }
  ];

  if (!guideCards.length && !searchInput) return;

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-category');
      applyFilter();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      applyFilter();
      updateSearchDropdown(searchTerm);
    });

    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        searchTerm = searchInput.value.toLowerCase().trim();
        applyFilter();
        const hub = document.getElementById('guide-hub');
        if (hub) hub.scrollIntoView({ behavior: 'smooth' });
        if (searchDropdown) searchDropdown.style.display = 'none';
      });
    }
  }

  function updateSearchDropdown(term) {
    if (!searchDropdown) return;
    if (!term || term.length < 2) {
      searchDropdown.style.display = 'none';
      return;
    }

    const matches = quickSearchItems.filter(item => item.title.toLowerCase().includes(term));
    if (matches.length === 0) {
      searchDropdown.style.display = 'none';
      return;
    }

    searchDropdown.innerHTML = matches.map(m => `
      <div class="search-dropdown-item" data-chap="${m.chap}" data-cat="${m.cat}">
        <span>🔍 ${m.title}</span>
        <span class="cat-pill">${m.cat}</span>
      </div>
    `).join('');

    searchDropdown.style.display = 'block';

    searchDropdown.querySelectorAll('.search-dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
        const targetChap = item.getAttribute('data-chap');
        const targetCat = item.getAttribute('data-cat');

        filterTabs.forEach(t => {
          if (t.getAttribute('data-category') === targetCat) t.click();
        });

        const targetElement = document.getElementById(targetChap);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          targetElement.style.boxShadow = '0 0 0 3px #0F172A';
          setTimeout(() => targetElement.style.boxShadow = '', 2000);
        }
        searchDropdown.style.display = 'none';
      });
    });
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.hero-search-wrapper') && searchDropdown) {
      searchDropdown.style.display = 'none';
    }
  });

  function applyFilter() {
    let visibleCount = 0;

    guideCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardText = card.innerText.toLowerCase();

      const matchesCategory = (activeCategory === 'all' || cardCategory === activeCategory);
      const matchesSearch = (!searchTerm || cardText.includes(searchTerm));

      if (matchesCategory && matchesSearch) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (searchStats) {
      if (searchTerm || activeCategory !== 'all') {
        searchStats.style.display = 'block';
        searchStats.innerHTML = `🔍 <strong>${visibleCount} бүлэг</strong> олдлоо ${searchTerm ? `("${searchTerm}" хайлтаар)` : ''}`;
      } else {
        searchStats.style.display = 'none';
      }
    }
  }
}

/* -------------------------------------------------------------
 * 6. INTERACTIVE DORMITORY FILTER
 * ------------------------------------------------------------- */
function initDormFilter() {
  const dormList = [
    { name: "WIHAST Tendlergasse", org: "wihast", bezirk: "1090", price: 319, type: "Einzelzimmer (Оюутны хямд байр)", link: "https://www.wihast.at" },
    { name: "Home4Students Schäffergasse", org: "home4students", bezirk: "1040", price: 314, type: "Zweibettzimmer", link: "https://www.home4students.at" },
    { name: "Home4Students Boltzmanngasse", org: "home4students", bezirk: "1090", price: 299, type: "Zweibettzimmer (Uni Wien ойр)", link: "https://www.home4students.at" },
    { name: "Akademikerhilfe Jacquingasse", org: "akademikerhilfe", bezirk: "1030", price: 388, type: "Einzelzimmer in WG", link: "https://www.akademikerhilfe.at" },
    { name: "Home4Students PopUp Seestadt", org: "home4students", bezirk: "1220", price: 439, type: "WG Zimmer in 4er WG", link: "https://www.home4students.at" },
    { name: "ÖJAB Haus Wien", org: "oejab", bezirk: "1020", price: 395, type: "All-inclusive, high-speed WiFi", link: "https://www.oejab.at" },
    { name: "Akademikerhilfe Canisiushaus", org: "akademikerhilfe", bezirk: "1090", price: 487, type: "Einzelzimmer", link: "https://www.akademikerhilfe.at" },
    { name: "Akademikerhilfe Michaelerstraße", org: "akademikerhilfe", bezirk: "1080", price: 514, type: "Einzelzimmer", link: "https://www.akademikerhilfe.at" },
    { name: "STUWO Vorgartenstraße", org: "stuwo", bezirk: "1020", price: 540, type: "All-inclusive, Fitness & Sauna", link: "https://www.stuwo.at" },
    { name: "STUWO Seestadt", org: "stuwo", bezirk: "1220", price: 530, type: "All-inclusive, rooftop terrace", link: "https://www.stuwo.at" }
  ];

  const orgSelect = document.getElementById('dormOrgSelect');
  const bezirkSelect = document.getElementById('dormBezirkSelect');
  const priceSelect = document.getElementById('dormPriceSelect');
  const resultsGrid = document.getElementById('dormResultsGrid');

  if (!resultsGrid) return;

  function renderDorms() {
    const selectedOrg = orgSelect ? orgSelect.value : 'all';
    const selectedBezirk = bezirkSelect ? bezirkSelect.value : 'all';
    const selectedPrice = priceSelect ? priceSelect.value : 'all';

    const filtered = dormList.filter(dorm => {
      const matchOrg = (selectedOrg === 'all' || dorm.org === selectedOrg);
      const matchBezirk = (selectedBezirk === 'all' || dorm.bezirk === selectedBezirk);
      const matchPrice = (selectedPrice === 'all' || dorm.price <= parseInt(selectedPrice));
      return matchOrg && matchBezirk && matchPrice;
    });

    if (filtered.length === 0) {
      resultsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 30px; color: var(--text-muted);">
        Сонгосон шалгуурт тохирох байр олдсонгүй. Шүүлтүүрээ өөрчилж үзнэ үү.
      </div>`;
      return;
    }

    resultsGrid.innerHTML = filtered.map(d => `
      <div class="dorm-result-card">
        <div class="dorm-result-top">
          <span class="badge badge-accent">${d.bezirk} Wien</span>
          <span class="dorm-price-badge">€${d.price} / сар</span>
        </div>
        <h4 style="font-size:1.05rem; margin-bottom: 6px;">${d.name}</h4>
        <p style="font-size:0.84rem; color:var(--text-muted); flex:1; margin-bottom: 12px;">${d.type}</p>
        <a href="${d.link}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="margin-top:auto; justify-content:space-between;">
          <span>Албан ёсны сайт</span>
          <span>↗</span>
        </a>
      </div>
    `).join('');
  }

  [orgSelect, bezirkSelect, priceSelect].forEach(select => {
    if (select) select.addEventListener('change', renderDorms);
  });

  renderDorms();
}

/* -------------------------------------------------------------
 * 7. MA35 GERMAN APPOINTMENT EMAIL GENERATOR
 * ------------------------------------------------------------- */
function initMA35EmailGenerator() {
  const studentNameInput = document.getElementById('pageStudentName');
  const passportNoInput = document.getElementById('pagePassportNo');
  const visaExpiryInput = document.getElementById('pageVisaExpiry');
  const requestTypeInput = document.getElementById('pageRequestType');

  const emailSubjectPreview = document.getElementById('pageEmailSubjectPreview');
  const emailBodyPreview = document.getElementById('pageEmailBodyPreview');
  const copyBtn = document.getElementById('pageCopyEmailBtn');

  if (!emailBodyPreview) return;

  function updateEmail() {
    const name = studentNameInput ? studentNameInput.value.trim() || 'Bat Erdene' : 'Bat Erdene';
    const passport = passportNoInput ? passportNoInput.value.trim() || 'E12345678' : 'E12345678';
    const expiry = visaExpiryInput ? visaExpiryInput.value || '2025-10-31' : '2025-10-31';
    const type = requestTypeInput ? requestTypeInput.value : 'first';

    const subject = type === 'first' 
      ? `Erstantrag Aufenthaltstitel Student - ${name}`
      : `Verlängerungsantrag Aufenthaltstitel Student - ${name}`;

    const body = `Sehr geehrte Damen und Herren,

mein Name ist ${name} (Passnummer: ${passport}).

Ich bin ordentlich/außerordentlich inskribierte(r) Student(in) in Wien. Mein aktuelles Visum/Aufenthaltstitel ist gültig bis zum ${expiry}.

Hiermit möchte ich höflich um einen Termin zur ${type === 'first' ? 'Erstantragstellung für den Aufenthaltstitel "Student"' : 'Verlängerung meines Aufenthaltstitels "Student"'} bei der MA 35 (Referat 1.2) ersuchen.

Alle erforderlichen Unterlagen (Meldezettel, Studienbestätigung, Krankenversicherungsnachweis der ÖGK, Finanzierungsnachweis) habe ich vollständig vorbereitet.

Für eine Rückmeldung bzgl. eines Termins wäre ich Ihnen sehr dankbar.

Mit freundlichen Grüßen,
${name}
Reisepass-Nr: ${passport}
E-Mail: [Ihre E-Mail-Adresse]
Telefon: [Ihre Telefonnummer in Österreich]`;

    if (emailSubjectPreview) emailSubjectPreview.textContent = subject;
    if (emailBodyPreview) emailBodyPreview.textContent = body;
  }

  [studentNameInput, passportNoInput, visaExpiryInput, requestTypeInput].forEach(inp => {
    if (inp) inp.addEventListener('input', updateEmail);
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = `${emailSubjectPreview.innerText}\n\n${emailBodyPreview.innerText}`;
      navigator.clipboard.writeText(textToCopy).then(() => {
        const origText = copyBtn.innerText;
        copyBtn.innerText = '✅ Амжилттай хуулагдлаа!';
        copyBtn.style.background = '#059669';
        copyBtn.style.color = '#FFFFFF';
        setTimeout(() => {
          copyBtn.innerText = origText;
          copyBtn.style.background = '';
          copyBtn.style.color = '';
        }, 2200);
      });
    });
  }

  updateEmail();
}

/* -------------------------------------------------------------
 * 8. BUDGET CALCULATOR
 * ------------------------------------------------------------- */
function initBudgetCalculator() {
  const rentRange = document.getElementById('rentRange');
  const foodRange = document.getElementById('foodRange');
  const transportRange = document.getElementById('transportRange');
  const miscRange = document.getElementById('miscRange');

  const rentDisplay = document.getElementById('rentDisplay');
  const foodDisplay = document.getElementById('foodDisplay');
  const transportDisplay = document.getElementById('transportDisplay');
  const miscDisplay = document.getElementById('miscDisplay');
  const calcTotal = document.getElementById('calcTotal');

  if (!calcTotal) return;

  const INSURANCE_COST = 73.48;

  function updateBudget() {
    const rent = parseFloat(rentRange ? rentRange.value : 420);
    const food = parseFloat(foodRange ? foodRange.value : 250);
    const transport = parseFloat(transportRange ? transportRange.value : 45);
    const misc = parseFloat(miscRange ? miscRange.value : 100);

    if (rentDisplay) rentDisplay.textContent = `€${rent}`;
    if (foodDisplay) foodDisplay.textContent = `€${food}`;
    if (transportDisplay) transportDisplay.textContent = `€${transport}`;
    if (miscDisplay) miscDisplay.textContent = `€${misc}`;

    const total = rent + INSURANCE_COST + food + transport + misc;
    if (calcTotal) calcTotal.textContent = `€${total.toFixed(2)}`;
  }

  [rentRange, foodRange, transportRange, miscRange].forEach(input => {
    if (input) input.addEventListener('input', updateBudget);
  });

  updateBudget();
}

/* -------------------------------------------------------------
 * 9. QUICK JUMP & ADMISSION STEPPER
 * ------------------------------------------------------------- */
function initQuickJumpAndTimeline() {
  const stepperSteps = document.querySelectorAll('.stepper-step');

  stepperSteps.forEach(step => {
    step.addEventListener('click', () => {
      stepperSteps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');
    });
  });
}

/* -------------------------------------------------------------
 * 10. SUN FESTIVAL REGISTRATION FORM
 * ------------------------------------------------------------- */
function initFestivalRegistration() {
  const form = document.getElementById('sunFestivalForm');
  const successAlert = document.getElementById('regSuccessAlert');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (successAlert) {
      successAlert.style.display = 'block';
      successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
      form.reset();
    }
  });
}

/* -------------------------------------------------------------
 * 11. MENTOR REQUEST FORM
 * ------------------------------------------------------------- */
function initMentorForm() {
  const mentorForm = document.getElementById('mentorForm');
  const mentorAlert = document.getElementById('mentorSuccessAlert');

  if (!mentorForm) return;

  mentorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (mentorAlert) {
      mentorAlert.style.display = 'block';
      mentorAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
      mentorForm.reset();
    }
  });
}

/* -------------------------------------------------------------
 * 12. SUN FESTIVAL HISTORY CAROUSEL ON ABOUT PAGE
 * ------------------------------------------------------------- */
function initFestivalHistoryCarousel() {
  const yearBtns = document.querySelectorAll('.carousel-year-btn');
  const prevBtn = document.getElementById('prevFestivalSlideBtn');
  const nextBtn = document.getElementById('nextFestivalSlideBtn');
  const slideCards = document.querySelectorAll('.carousel-slide-card');

  if (!slideCards.length || !yearBtns.length) return;

  let currentYearIndex = 0;
  const years = Array.from(yearBtns).map(btn => btn.getAttribute('data-year'));

  function showSlide(yearIndex) {
    if (yearIndex < 0) yearIndex = years.length - 1;
    if (yearIndex >= years.length) yearIndex = 0;
    currentYearIndex = yearIndex;

    const targetYear = years[currentYearIndex];

    yearBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-year') === targetYear);
    });

    slideCards.forEach(card => {
      card.style.display = card.getAttribute('data-year') === targetYear ? 'grid' : 'none';
    });
  }

  yearBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      showSlide(idx);
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(currentYearIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(currentYearIndex + 1);
    });
  }

  showSlide(0);
}

/* -------------------------------------------------------------
 * 17. SCROLL & BACK TO TOP
 * ------------------------------------------------------------- */
function initScrollFeatures() {
  const backToTopBtn = document.getElementById('backToTop') || document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      if (backToTopBtn) backToTopBtn.classList.add('visible');
    } else {
      if (backToTopBtn) backToTopBtn.classList.remove('visible');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* -------------------------------------------------------------
 * 18. KEYBOARD SHORTCUTS
 * ------------------------------------------------------------- */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (window.location.pathname.includes('guide.html')) {
        const searchInput = document.getElementById('heroSearchInput');
        if (searchInput) {
          searchInput.focus();
          searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        window.location.href = 'guide.html';
      }
    }
  });
}

/* -------------------------------------------------------------
 * 19. AIESEC-INSPIRED TARGET AUDIENCE TABS
 * ------------------------------------------------------------- */
function initAudienceTabs() {
  const tabBtns = document.querySelectorAll('.audience-tab-btn');
  const panels = document.querySelectorAll('.audience-panel');

  if (!tabBtns.length || !panels.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/* -------------------------------------------------------------
 * 20. INTERACTIVE PATHWAY CHOOSER (1-Click Finder)
 * ------------------------------------------------------------- */
function initPathwayChooser() {
  const pathwayBtns = document.querySelectorAll('.pathway-option-btn');
  const cardTitle = document.getElementById('pathwayCardTitle');
  const cardDesc = document.getElementById('pathwayCardDesc');
  const cardBtn = document.getElementById('pathwayCardBtn');

  if (!pathwayBtns.length || !cardTitle || !cardDesc || !cardBtn) return;

  const pathwayData = {
    visa: {
      title: '🛂 MA35 Визний Өргөдөл & И-мэйл Генератор',
      desc: 'MA35 цагаа баталгаажуулах, дутуу материалаа герман хэл дээр алдаагүй илгээх интерактив и-мэйл үүсгэгчийг ашиглаарай.',
      btnText: 'И-мэйл үүсгэх →',
      btnHref: 'visa-insurance.html#email-generator'
    },
    housing: {
      title: '🏠 Оюутны Дотуур Байр Хайгч & Харьцуулалт',
      desc: 'OeAD, STUWO, WIHAST, Base19 зэрэг 15+ дотуур байрны үнэ, байршил, нөхцөлийг нэг дороос шүүж үзээрэй.',
      btnText: 'Байр хайх →',
      btnHref: 'housing.html'
    },
    admission: {
      title: '🎓 Их Сургуулийн Элсэлт & VWU Германы Курс',
      desc: 'Uni Wien, TU Wien, WU сургуулиудын элсэлтийн алхмууд, баримт бичгийн баталгаажуулалт, VWU хэлний бэлтгэл.',
      btnText: 'Элсэлтийн хөтөч унших →',
      btnHref: 'guide.html#chapter-admission'
    },
    sports: {
      title: '🏆 AMOX Sun Festival 2025 Их Наадам',
      desc: 'Сагсан бөмбөг, волейбол, хөлбөмбөг, шатар, теннисний тэмцээнд багаа бүртгүүлж €3,000+ шагналын төлөө өрсөлдөөрэй.',
      btnText: 'Баг бүртгүүлэх →',
      btnHref: 'sun-festival.html#register'
    }
  };

  pathwayBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pathwayKey = btn.getAttribute('data-pathway');
      const data = pathwayData[pathwayKey];

      if (!data) return;

      pathwayBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      cardTitle.textContent = data.title;
      cardDesc.textContent = data.desc;
      cardBtn.textContent = data.btnText;
      cardBtn.setAttribute('href', data.btnHref);
    });
  });
}

/* -------------------------------------------------------------
 * 21. LIVE IMPACT MILESTONES COUNTER ANIMATION
 * ------------------------------------------------------------- */
function initMilestoneCounters() {
  const counterElements = document.querySelectorAll('.milestone-num');
  if (!counterElements.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counterElements.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-count') || '0', 10);
          const isEuro = counter.textContent.includes('€');
          const hasPlus = counter.textContent.includes('+');
          const duration = 1600;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const easeProgress = 1 - (1 - progress) * (1 - progress);
            const currentCount = Math.floor(easeProgress * target);

            let displayStr = currentCount.toLocaleString();
            if (isEuro) displayStr = '€' + displayStr;
            if (hasPlus) displayStr += '+';

            counter.textContent = displayStr;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            }
          }

          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.2 });

  const milestonesSection = document.querySelector('.milestones-section');
  if (milestonesSection) {
    observer.observe(milestonesSection);
  }
}

/* -------------------------------------------------------------
 * 22. SCROLL REVEAL ON SCROLL (AIESEC Smooth Slide-in)
 * ------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right');
  if (!revealElements.length) return;

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/* -------------------------------------------------------------
 * 23. HERO OPPORTUNITY / CITY QUICK FINDER
 * ------------------------------------------------------------- */
function initHeroOpportunityFinder() {
  const submitBtn = document.getElementById('heroFinderSubmitBtn');
  const opportunitySelect = document.getElementById('heroOpportunitySelect');
  const citySelect = document.getElementById('heroCitySelect');

  if (!submitBtn || !opportunitySelect) return;

  submitBtn.addEventListener('click', () => {
    const targetUrl = opportunitySelect.value;
    const selectedCity = citySelect ? citySelect.value : 'all';

    if (targetUrl.includes('housing.html') && selectedCity !== 'all') {
      window.location.href = `housing.html?city=${selectedCity}`;
    } else {
      window.location.href = targetUrl;
    }
  });
}

