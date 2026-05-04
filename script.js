/* ============================================
   MSU Saxena Stewardship Impact Report
   script.js
   ============================================ */

/* -------------------------------------------------------
   TIMELINE DATA ARRAY
   -------------------------------------------------------
   Non-technical staff: Edit entries below to update the
   timeline. Each entry has:
     - year: Display text (e.g. "2025", "1960s")
     - sortOrder: Numeric value for ordering (higher = more recent)
     - category: "saxena" | "msu" | "impact" | "global"
     - title: Short headline
     - description: Summary paragraph
     - details: (optional) Array of bullet points shown on expand
   ------------------------------------------------------- */
const timelineData = [
  {
    year: "September 2026",
    sortOrder: 2026.9,
    category: "msu",
    title: "Leinweber Center for Engineering and Digital Innovation — Groundbreaking",
    description: "The Leinweber Center for Engineering and Digital Innovation will be a convergence of education, research and career preparedness. It will serve as a dynamic nexus, setting the stage for countless career opportunities.",
    details: [
      "Fields include engineering, advanced manufacturing, semiconductors, data science, artificial intelligence, and communications",
      "A transformational facility for the College of Engineering and the university",
      "Part of the 'Futures Built' ambition of the Uncommon Will. Far Better World. campaign"
    ]
  },
  {
    year: "2025",
    sortOrder: 2025,
    category: "impact",
    title: "Saxena Gift Powers MSU Entrepreneurship & Innovation",
    description: "The Saxena family makes their first gift to Michigan State University supporting entrepreneurship and innovation — fueling the DeepTech Lab and the next generation of Spartan innovators.",
    details: [
      "Supports 5 full-time Ph.D. and postdoctoral researchers",
      "Funds 4 part-time M.S. and Ph.D. students",
      "Enables 4 undergraduate researchers to gain real-world experience",
      "Advances AI-driven diagnostics, autonomous vehicles, and edge computing",
      "Accelerates commercialization of deep technology research"
    ]
  },
  {
    year: "2019",
    sortOrder: 2019,
    category: "msu",
    title: "Professor Josh Siegel Recruited from MIT to Launch DeepTech Lab",
    description: "Dr. Josh Siegel joins MSU faculty from MIT to establish the DeepTech Lab, developing technologies that are transformative, technically challenging, and societally impactful.",
    details: [
      "Recipient of Lemelson-MIT 'Drive It' Prize and MassIT Government Innovation Award",
      "Leads development and global delivery of MIT's DeepTech, IoT, and Innovation Bootcamps",
      "Current projects span autonomous vehicles, resource-efficient AI, secure edge computing, and novel human-machine interfaces",
      "Emphasis on hands-on learning, entrepreneurship, and equitable technology adoption"
    ]
  },
  {
    year: "2018",
    sortOrder: 2018,
    category: "msu",
    title: "Burgess Institute for Entrepreneurship & Innovation",
    description: "MSU's Institute for Entrepreneurship and Innovation endowed by philanthropist and 1966 MSU Packaging alum Bob Burgess.",
    details: [
      "Ranked #8 Worldwide in Undergraduate Entrepreneurship by The Princeton Review",
      "Takes an education-first approach to helping students lead lives of impact",
      "Built on the belief that skills for successful entrepreneurs also make for successful humans",
      "A nationally recognized leader in entrepreneurship education"
    ]
  },
  {
    year: "2010",
    sortOrder: 2010,
    category: "saxena",
    title: "IBM Acquires Netezza",
    description: "Jit Saxena leads Netezza's initial public offering and its acquisition by IBM — solidifying his legacy as a titan of American industry and a global tech leader.",
    details: [
      "From IIT Bombay to MSU to IBM: a quintessential Spartan story",
      "Netezza revolutionized enterprise data analytics and warehousing",
      "The acquisition validated the engineering excellence and entrepreneurial spirit cultivated at MSU"
    ]
  },
  {
    year: "2008",
    sortOrder: 2008,
    category: "msu",
    title: "Facility for Rare Isotope Beams (FRIB) Announced",
    description: "The US Department of Energy announced the selection of Michigan State University to design and establish the Facility for Rare Isotope Beams (FRIB) — a $730 million investment in MSU's research excellence."
  },
  {
    year: "2005",
    sortOrder: 2005,
    category: "msu",
    title: "Top Research University Recognition",
    description: "MSU is officially recognized as one of the top research universities in the world, specializing in the very fields Jit championed: data analytics, monitoring, and systems engineering."
  },
  {
    year: "Early 2000s",
    sortOrder: 2001,
    category: "saxena",
    title: "Netezza Corporation Founded",
    description: "Jit Saxena founds Netezza Corporation, pioneering data warehousing appliances that revolutionize how organizations process and analyze massive datasets.",
    details: [
      "Netezza became the leading provider of data analytics and monitoring appliances",
      "Pioneered purpose-built data warehouse appliance architecture",
      "Applied engineering and analytical foundations laid at MSU to enterprise-scale problems"
    ]
  },
  {
    year: "1994",
    sortOrder: 1994,
    category: "saxena",
    title: "The Applix IPO",
    description: "Jit Saxena takes Applix public. As a leader in analytical CRM software, Applix helps define the modern era of business intelligence.",
    details: [
      "A direct application of the engineering and analytical foundations laid at MSU",
      "Applix became a publicly traded company on NASDAQ",
      "Pioneered analytical CRM and business intelligence solutions"
    ]
  },
  {
    year: "1985",
    sortOrder: 1985,
    category: "msu",
    title: "MSU Leads in STEM Diversity",
    description: "MSU's medical school becomes the first in the nation where women comprise over 50% of the entering class — pioneering STEM diversity before it was a national conversation."
  },
  {
    year: "1981",
    sortOrder: 1981,
    category: "msu",
    title: "World's First Superconducting Cyclotron",
    description: "The National Superconducting Cyclotron Laboratory launches the K-500, the world's first superconducting cyclotron, cementing MSU's status as a leader in nuclear physics research."
  },
  {
    year: "1970s",
    sortOrder: 1975,
    category: "saxena",
    title: "Jit Builds His Early Career",
    description: "Jit Saxena earns his MBA from Boston University (1973) and begins building his career in the technology sector on the Route 128 tech corridor near Boston.",
    details: [
      "Combined MSU engineering rigor with MBA business acumen",
      "Route 128 was America's original technology corridor",
      "Laid the foundation for future ventures in data and analytics"
    ]
  },
  {
    year: "1968",
    sortOrder: 1968,
    category: "saxena",
    title: "Jit Earns His MS from Michigan State University",
    description: "Jitendra S. Saxena completes his Master of Science in Electrical Engineering from Michigan State University, carrying the 'Spartan Engineer' mindset of problem-solving into a career that would revolutionize the global data industry."
  },
  {
    year: "1966",
    sortOrder: 1966,
    category: "saxena",
    title: "Jit Graduates IIT Bombay — Admitted to MSU",
    description: "Jit Saxena graduates from IIT Bombay with a B.Tech in Electrical Engineering. He joins the 'Pioneer Wave' of Indian tech brilliance coming to the U.S. and chooses MSU for his Master's.",
    details: [
      "Part of the global intellectual migration that would eventually build Silicon Valley",
      "Chose MSU for its world-class Electrical Engineering program",
      "Joined a growing community of international scholars at MSU"
    ]
  },
  {
    year: "1962",
    sortOrder: 1962,
    category: "msu",
    title: "College of Engineering Expands",
    description: "MSU's College of Engineering expands into modern research labs. Influenced by JFK's Space Race challenge, enrollment surges and curriculum shifts toward high-level EE and Systems Design."
  },
  {
    year: "Early 1960s",
    sortOrder: 1961,
    category: "saxena",
    title: "Jit Enters IIT Bombay",
    description: "Jit Saxena enters one of the most competitive engineering programs in the world — the Indian Institute of Technology Bombay — to study Electrical Engineering."
  },
  {
    year: "Mid-1950s",
    sortOrder: 1956.5,
    category: "msu",
    title: "MISTIC Computer Built at MSU",
    description: "MSU builds MISTIC (Michigan State Integral Computer), one of the earliest university computers. The culture of 'computing as a tool for engineering' is baked into the department's DNA."
  },
  {
    year: "1956",
    sortOrder: 1956,
    category: "msu",
    title: "First Office of International Programs in the Nation",
    description: "MSU establishes the first Dean of International Programs in the nation — the critical infrastructure that makes it possible for students like Jit to feel 'at home' in East Lansing."
  },
  {
    year: "1950s",
    sortOrder: 1953,
    category: "global",
    title: "India's IITs Are Established",
    description: "India establishes the Indian Institutes of Technology to create a class of 'super-engineers' who could build a newly independent nation."
  },
  {
    year: "1950",
    sortOrder: 1950,
    category: "msu",
    title: "Michigan State Joins the Big Ten Conference",
    description: "Michigan State College officially joins the Big Ten Conference, elevating its national profile in both athletics and academics."
  },
  {
    year: "1945–1950",
    sortOrder: 1947,
    category: "msu",
    title: "The GI Bill Surge",
    description: "Following WWII, MSU enrollment skyrockets from 6,000 to 15,000. MSU becomes a national pioneer in 'living-learning' units.",
    details: [
      "Massive residence halls like Shaw and Snyder-Phillips are built to handle the explosion of talent",
      "MSU transforms from a regional college into a national university",
      "Sets the stage for MSU's future as a top research institution"
    ]
  },
  {
    year: "December 1945",
    sortOrder: 1945,
    category: "saxena",
    title: "Jitendra Saxena Is Born",
    description: "Jitendra 'Jit' Saxena is born in India — the beginning of a journey that would span continents and transform the global technology landscape."
  }
];

/* -------------------------------------------------------
   DOM READY
   ------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initParticles();
  initTimeline();
  initFilters();
  initScrollAnimations();
  initCounters();
  initMobileNav();
});

/* -------------------------------------------------------
   NAVBAR scroll behavior
   ------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  });
}

/* -------------------------------------------------------
   PARTICLES (Hero canvas)
   ------------------------------------------------------- */
function initParticles() {
  const canvas = document.getElementById("hero-particles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  const PARTICLE_COUNT = 60;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.radius = Math.random() * 2 + 0.5;
      this.opacity = Math.random() * 0.35 + 0.08;
      this.gold = Math.random() > 0.7;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.gold
        ? `rgba(197, 165, 81, ${this.opacity})`
        : `rgba(255, 255, 255, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(197, 165, 81, ${0.06 * (1 - dist / 140)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(animate);
  }
  animate();
}

/* -------------------------------------------------------
   BUILD TIMELINE
   ------------------------------------------------------- */
function initTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  // Sort by sortOrder descending (reverse chronological)
  const sorted = [...timelineData].sort((a, b) => b.sortOrder - a.sortOrder);

  sorted.forEach((item, idx) => {
    const el = document.createElement("div");
    el.className = "timeline-item";
    el.dataset.category = item.category;
    el.style.transitionDelay = `${idx * 0.05}s`;

    const categoryLabels = {
      saxena: "Saxena Journey",
      msu: "MSU Milestone",
      impact: "Gift Impact",
      global: "Global Context"
    };

    let detailsHTML = "";
    if (item.details && item.details.length) {
      detailsHTML = `
        <div class="timeline-expand-content">
          <div class="timeline-expand-inner">
            <ul>${item.details.map(d => `<li>${d}</li>`).join("")}</ul>
          </div>
        </div>
        <div class="timeline-expand-toggle">
          <span>Details</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>`;
    }

    el.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card" ${item.details ? 'data-expandable="true"' : ''}>
        <div class="timeline-year">${item.year}</div>
        <span class="timeline-category-tag">${categoryLabels[item.category]}</span>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-desc">${item.description}</p>
        ${detailsHTML}
      </div>`;

    container.appendChild(el);
  });

  // Expand/collapse
  container.addEventListener("click", (e) => {
    const card = e.target.closest('.timeline-card[data-expandable="true"]');
    if (card) card.classList.toggle("expanded");
  });
}

/* -------------------------------------------------------
   FILTER BAR
   ------------------------------------------------------- */
function initFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.filter;
      const items = document.querySelectorAll(".timeline-item");
      items.forEach(item => {
        if (cat === "all" || item.dataset.category === cat) {
          item.classList.remove("hidden");
          // Re-trigger visibility animation
          item.classList.remove("visible");
          requestAnimationFrame(() => {
            requestAnimationFrame(() => item.classList.add("visible"));
          });
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}

/* -------------------------------------------------------
   SCROLL ANIMATIONS (Intersection Observer)
   ------------------------------------------------------- */
function initScrollAnimations() {
  const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -40px 0px" };

  // Generic fade-in
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  document.querySelectorAll(".fade-in").forEach(el => fadeObserver.observe(el));

  // Timeline items
  const tlObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        tlObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });
  document.querySelectorAll(".timeline-item").forEach(el => tlObserver.observe(el));
}

/* -------------------------------------------------------
   ANIMATED COUNTERS
   ------------------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));
}

function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || "";
  const prefix = el.dataset.prefix || "";
  const duration = 1800;
  const start = performance.now();
  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = prefix + Math.round(target * ease) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* -------------------------------------------------------
   MOBILE NAV TOGGLE
   ------------------------------------------------------- */
function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });
  // Close on link click
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });
}
