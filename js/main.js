gsap.from('.left-overlay', {x:"-100%", duration:1, ease: "ease-out", delay:1})
gsap.from('.right-overlay', {x:"100%", duration:1, ease: "ease-out", delay:1})
gsap.fromTo('.nav', {x:"-100px", opacity: 0}, {x:'0px', opacity:1,  duration:0.5, delay:2})

gsap.fromTo('.socials', {y:"100px", opacity: 0}, {opacity:1, y:"0", duration:1, delay:2})
gsap.fromTo('.slider', {y:"100px", opacity: 0}, {opacity:1, y:"0", duration:1, delay:2.5})

gsap.fromTo('.sizes', {opacity:0, x:"100px"}, {opacity:1, x:0, duration:0.5, delay:3})
gsap.fromTo('.upper-line', {opacity:0, y:"100px"}, {opacity:1, y:0, duration:0.5, delay:3})

gsap.fromTo('.banner', {opacity:0, y:"100px"}, {opacity:1, y:0, duration:2, delay:3.5})