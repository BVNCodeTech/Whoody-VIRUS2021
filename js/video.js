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
    duration: 80000, 
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
}, 41.16)

var mobile = document.querySelector('.mobile');
var main = document.querySelector('.main');

if(window.innerWidth/window.innerHeight<1.765){
    mobile.classList.add("active");
    main.classList.add("unactive");
}
else{
    mobile.classList.remove("active");
    main.classList.remove("unactive");
}

window.addEventListener("resize", function(){
    console.log(window.innerWidth/window.innerHeight);
    if(window.innerWidth/window.innerHeight<1.5){
        console.log("add");
        document.querySelector('.mobile').classList.add("active");
        main.classList.add("unactive");
    }
    else{
        console.log("remove");
        document.querySelector('.mobile').classList.remove("active");
        main.classList.remove("unactive");
    }
    console.log("resized");
})

document.addEventListener('scroll', function(){
    document.querySelector('.scroll-down').style.opacity = 0;
});