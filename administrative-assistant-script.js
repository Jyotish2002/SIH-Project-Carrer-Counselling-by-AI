document.addEventListener("DOMContentLoaded", function() {
    gsap.from("header", {
        duration: 1.5,
        y: -60,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from(".section", {
        duration: 1.5,
        opacity: 0,
        y: 60,
        stagger: 0.3,
        ease: "power3.out"
    });

    gsap.to("footer", {
        duration: 0.5,
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
            trigger: "footer",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});
