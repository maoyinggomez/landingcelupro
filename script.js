gsap.registerPlugin(ScrollTrigger);

gsap.set(".hero-copy .reveal-up", {
  opacity: 0,
  y: 40,
});

gsap.set(".reveal-up", {
  opacity: 0,
  y: 42,
});

gsap.set(".reveal-left", {
  opacity: 0,
  x: -56,
  y: 20,
});

gsap.set(".reveal-right", {
  opacity: 0,
  x: 56,
  y: 20,
});

gsap.set(".product-card", {
  opacity: 0,
  y: 28,
  scale: 0.9,
});

gsap.to(".hero-copy .reveal-up", {
  opacity: 1,
  y: 0,
  duration: 1.05,
  stagger: 0.12,
  ease: "power3.out",
});

const heroTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "+=50%",
    scrub: 0.5,
    pin: ".hero-pin",
    anticipatePin: 1,
  },
});

heroTimeline.to(".hero-copy", {
  y: -18,
  ease: "none",
});

gsap.utils.toArray(".reveal-up").forEach((element) => {
  if (element.classList.contains("product-card")) return;
  gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top 88%",
      end: "top 68%",
      toggleActions: "play none none reverse",
    },
  }).to(element, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: "power3.out",
  });
});

gsap.utils.toArray(".reveal-left").forEach((element) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top 88%",
      end: "top 68%",
      toggleActions: "play none none reverse",
    },
  }).to(element, {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 0.72,
    ease: "power3.out",
  });
});

gsap.to(".product-card", {
  opacity: 1,
  y: 0,
  scale: 1,
  duration: 0.78,
  ease: "power3.out",
  stagger: 0.14,
  scrollTrigger: {
    trigger: ".product-grid",
    start: "top 82%",
    toggleActions: "play none none reverse",
  },
});

gsap.utils.toArray(".reveal-right").forEach((element) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top 88%",
      end: "top 68%",
      toggleActions: "play none none reverse",
    },
  }).to(element, {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 0.72,
    ease: "power3.out",
  });
});

const tiltCards = document.querySelectorAll(".product-tilt");

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateX = ((y / bounds.height) - 0.5) * -10;
    const rotateY = ((x / bounds.width) - 0.5) * 12;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  });
});
