const burgerSlider = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav')

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active')
    })
}

burgerSlider()

console.log("here");

var vid_section = document.querySelector('.video');
var video = document.querySelector('video');


var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    duration: 7000, 
    triggerElement: vid_section,
    triggerHook: 0
})
.setPin(vid_section)
.addTo(controller);

var delay_percent = 0.1
var delay = 0;
var scrollpos = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos/1000;
})

setInterval(()=>{
    delay += (scrollpos-delay) * delay_percent;
    video.currentTime = scrollpos;
}, 41)