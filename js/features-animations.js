gsap.from('.navbar', {x:-100, opacity:0, duration:1, delay:1})
gsap.from('.social-links', {x:100, opacity:0, duration:1, delay:1})
gsap.from('.hero', {y:100, opacity:0, duration:1, delay:1.5})
gsap.from('.interactive', {scrollTrigger:'.interactive', y:50, opacity:0, duration:1});

gsap.from(".hoodie-images img", {
    scrollTrigger: {
        trigger: ".hoodie-images", 
        ease: "power2.in"
    },
    y: -100,
    opacity:0,
    duration:1
});