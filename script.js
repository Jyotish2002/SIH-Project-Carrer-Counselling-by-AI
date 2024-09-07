// GSAP Animations for the sections
gsap.from(".navbar", { duration: 1.5, y: -100, ease: "bounce" });
gsap.from(".nav-links a", {
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    ease: "power2.inOut",
});

gsap.from("#career-choice", { duration: 1, x: -200, opacity: 0, ease: "power3.out", scrollTrigger: "#career-choice" });
gsap.from("#mentor-support", { duration: 1, x: 200, opacity: 0, ease: "power3.out", scrollTrigger: "#mentor-support" });
gsap.from("#career-library", { duration: 1, x: -200, opacity: 0, ease: "power3.out", scrollTrigger: "#career-library" });
gsap.from("#feedback", { duration: 1, x: 200, opacity: 0, ease: "power3.out", scrollTrigger: "#feedback" });
gsap.from("#help", { duration: 1, y: 100, opacity: 0, ease: "power3.out", scrollTrigger: "#help" });


gsap.registerPlugin(ScrollTrigger);

// Animate the career cards
gsap.from(".card", {
    scrollTrigger: {
        trigger: ".career-cards",
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: false, // Set to true if you want to see the scroll markers
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
});