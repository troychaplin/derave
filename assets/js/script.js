// :::SECTION:Header Scroll Effect:::
const header = document.querySelector('.hero-header');

if (header) {
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.pageYOffset > 100) {
          header.classList.add('is-scrolled');
        } else {
          header.classList.remove('is-scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// :::SECTION:Smooth Scrolling:::
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// :::SECTION:Scroll Animations:::
const animatedElements = document.querySelectorAll('.animate-on-scroll');

if (animatedElements.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

// :::SECTION:Active Nav Highlighting:::
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.hero-nav a');

if (sections.length > 0 && navLinks.length > 0) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.borderBottomColor = 'transparent';
          link.style.color = '';
          if (link.getAttribute('href') === `#${id}`) {
            link.style.borderBottomColor = '#FF005C';
            link.style.color = '#FF005C';
          }
        });
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '-80px 0px -50% 0px'
  });

  sections.forEach(section => navObserver.observe(section));
}

// :::SECTION:Ticker Tag Rotation:::
const tickerTags = document.querySelectorAll('.hero-ticker-tag');

if (tickerTags.length > 0) {
  let activeIndex = 0;

  setInterval(() => {
    tickerTags[activeIndex].classList.remove('hero-ticker-tag--active');
    activeIndex = (activeIndex + 1) % tickerTags.length;
    tickerTags[activeIndex].classList.add('hero-ticker-tag--active');
  }, 2000);
}

// :::SECTION:Contact Form Handler:::
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.contact-submit');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'TRANSMISSION SENT ⚡';
    submitBtn.style.background = '#C6FF00';
    submitBtn.style.color = '#0B0B0F';
    submitBtn.style.boxShadow = '2px 2px 0 #0B0B0F';
    
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.background = '';
      submitBtn.style.color = '';
      submitBtn.style.boxShadow = '';
      contactForm.reset();
    }, 3000);
  });
}

// :::SECTION:Skill Tag Shuffle:::
const skillTags = document.querySelectorAll('.about-skill');

skillTags.forEach(tag => {
  tag.addEventListener('mouseenter', () => {
    const rotations = [-2, -1, 0, 1, 2, 3];
    const randomRot = rotations[Math.floor(Math.random() * rotations.length)];
    tag.style.transform = `translate(-1px, -1px) rotate(${randomRot}deg)`;
  });

  tag.addEventListener('mouseleave', () => {
    tag.style.transform = '';
  });
});