document.addEventListener("DOMContentLoaded", function() {
    gsap.from("header", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from(".section", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
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
