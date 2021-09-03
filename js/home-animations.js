gsap.from('.left-overlay', {x:"-100%", duration:1, ease: "ease-out", delay:1, ease: "power2.in"})
gsap.from('.right-overlay', {x:"100%", duration:1, ease: "ease-out", delay:1, ease: "power2.in"})
gsap.fromTo('.nav', {x:"-100px", opacity: 0}, {x:'0px', opacity:1,  duration:0.5, delay:2})

gsap.fromTo('.socials', {y:"100px", opacity: 0}, {opacity:1, y:"0", duration:1, delay:2})
gsap.fromTo('.slider', {y:"100px", opacity: 0}, {opacity:1, y:"0", duration:1, delay:2.5})

gsap.fromTo('.sizes', {opacity:0, x:"100px"}, {opacity:1, x:0, duration:0.5, delay:3})
gsap.fromTo('.upper-line', {opacity:0, y:"100px"}, {opacity:1, y:0, duration:0.5, delay:3})

gsap.fromTo('.banner', {opacity:0, y:"100px"}, {opacity:1, y:0, duration:2, delay:3.5})

gsap.from(".about-us", {
    scrollTrigger: {
        trigger: ".about-us", 
        start: "top center"
    },
    y: 100,
    opacity:0,
    duration:0.5
});

gsap.from(".video", {
    scrollTrigger: {
        trigger: ".video", 
        start: "top center"
    },
    x: "-100%",
    opacity:0,
    duration:0.5
});

gsap.from(".features", {
    scrollTrigger: {
        trigger: ".features", 
        start: "top center"
    },
    y: 100,
    opacity:0,
    duration:0.5
});

gsap.from(".hoodie-images img", {
    scrollTrigger: {
        trigger: ".hoodie-images", 
        ease: "power2.in"
    },
    y: -100,
    opacity:0,
    duration:1
});
