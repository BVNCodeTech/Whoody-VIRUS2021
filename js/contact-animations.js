gsap.from('.navbar', {x:-100, opacity:0, duration:1, delay:1})
gsap.from('.social-links', {x:100, opacity:0, duration:1, delay:1})
gsap.from('.topcontent', {y:100, opacity:0, duration:1, delay:1.5})
gsap.from(".hoodie-images img", {
    scrollTrigger: {
        trigger: ".hoodie-images", 
        ease: "power2.in"
    },
    y: -100,
    opacity:0,
    duration:1
});
gsap.from(".content", {
    scrollTrigger: {
        trigger: ".content", 
        ease: "power2.in"
    },
    x: -200,
    opacity:0,
    duration:1
});