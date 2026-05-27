/* Inson Dubois Wood — interactions
   - Lenis smooth scroll
   - GSAP ScrollTrigger for parallax + pinning
   - IntersectionObserver for reveal animations (lightweight)
   - Menu overlay + page transitions
*/

(function () {
  'use strict';

  /* ---------- Lenis smooth scroll ---------- */
  let lenis = null;
  if (window.Lenis && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    lenis = new window.Lenis({
      duration: 1.15,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6
    });

    // tie GSAP ScrollTrigger to Lenis if available
    if (window.gsap && window.ScrollTrigger) {
      lenis.on('scroll', window.ScrollTrigger.update);
      window.gsap.ticker.add(function (time) {
        lenis.raf(time * 1000);
      });
      window.gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }

  /* ---------- Split headline into words for reveal ---------- */
  document.querySelectorAll('.split').forEach(function (el) {
    if (el.dataset.split === 'done') return;
    const text = el.textContent.trim();
    el.innerHTML = '';
    const parts = text.split(/(\s+)/);
    parts.forEach(function (p) {
      if (/^\s+$/.test(p)) {
        el.appendChild(document.createTextNode(' '));
      } else {
        const w = document.createElement('span');
        w.className = 'word';
        const inner = document.createElement('span');
        inner.textContent = p;
        w.appendChild(inner);
        el.appendChild(w);
      }
    });
    el.dataset.split = 'done';
  });

  /* ---------- Reveal on scroll (IntersectionObserver) ---------- */
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('.reveal, .reveal-img, .split').forEach(function (el) {
    io.observe(el);
  });

  /* ---------- Hero parallax (GSAP if present, else CSS fallback) ---------- */
  if (window.gsap && window.ScrollTrigger) {
    const heroImg = document.querySelector('.hero-media img');
    if (heroImg) {
      window.gsap.to(heroImg, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }

    // subtle parallax on every project image
    document.querySelectorAll('.proj-img img').forEach(function (img) {
      window.gsap.to(img, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: img.closest('.proj-img'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  }

  /* ---------- Menu toggle ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const body = document.body;
  if (toggle) {
    toggle.addEventListener('click', function () {
      body.classList.toggle('menu-open');
      const open = body.classList.contains('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      const lbl = toggle.querySelector('.lbl');
      if (lbl) lbl.textContent = open ? 'Close' : 'Menu';
      if (lenis) { open ? lenis.stop() : lenis.start(); }
    });
  }
  // close menu when a menu link is clicked (page transitions handle the rest)
  document.querySelectorAll('.menu-list a').forEach(function (a) {
    a.addEventListener('click', function () {
      body.classList.remove('menu-open');
    });
  });

  /* ---------- Page transition (curtain on outbound link) ---------- */
  const sameOrigin = function (href) {
    if (!href) return false;
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return false;
    try {
      const u = new URL(href, location.href);
      return u.origin === location.origin && u.pathname !== location.pathname;
    } catch (e) { return false; }
  };

  document.querySelectorAll('a[href]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return;
      const href = a.getAttribute('href');
      if (!sameOrigin(href)) return;
      e.preventDefault();
      body.classList.add('page-leaving');
      setTimeout(function () { window.location.href = href; }, 650);
    });
  });

  // reveal page on load (curtain slides up)
  window.addEventListener('pageshow', function () {
    body.classList.remove('page-leaving');
  });

  /* ---------- Wire project tile hrefs to project.html?slug=<img-basename> ---------- */
  document.querySelectorAll('a.proj').forEach(function (a) {
    const img = a.querySelector('img');
    if (!img) return;
    const src = img.getAttribute('src') || '';
    const m = src.match(/projects\/([^.\/]+)\./);
    if (m && (a.getAttribute('href') === '#' || a.getAttribute('href') === 'projects.html')) {
      a.setAttribute('href', 'project.html?slug=' + m[1]);
    }
  });

  /* ---------- Header backdrop on scroll ---------- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = function () {
      const y = window.scrollY || window.pageYOffset || 0;
      header.classList.toggle('scrolled', y > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    if (lenis) lenis.on('scroll', onScroll);
    onScroll();
  }

  /* ---------- Update copyright year ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

})();
