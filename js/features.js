var moveBy = 5;
var movespeed = 25;
var moved = 0;
var lower = document.querySelector('.lower');
var upper = document.querySelector('.upper');

document.onkeydown = function (e) {
    console.log(e.keyCode);
    // console.log(moveBy);

    switch (e.keyCode) {
        case 68:
            lower.style.transform = "translateX(-" + (moved + moveBy) + 'px' + ")";
            upper.style.transform = "translateX(-" + (moved + moveBy) + 'px' + ")";
            moved += moveBy;
            break;
        case 65:
            lower.style.transform = "translateX(-" + (moved - moveBy) + 'px' + ")";
            upper.style.transform = "translateX(-" + (moved - moveBy) + 'px' + ")";
            if (moved > 0) {
                moved -= moveBy;
            }
            break;
        case 87:
            lower.style.transform = "translateX(-" + (moved + movespeed) + 'px' + ")";
            upper.style.transform = "translateX(-" + (moved + movespeed) + 'px' + ")";
            moved += movespeed;
            break;
        case 83:
            lower.style.transform = "translateX(-" + (moved - movespeed) + 'px' + ")";
            upper.style.transform = "translateX(-" + (moved - movespeed) + 'px' + ")";
            if (moved > 0) {
                moved -= movespeed;
            }
            break;
    }
};


gsap.to('.block div', {duration:1, x:'-100%', stagger:0.2})
gsap.from('.upper .text', {opacity:0, duration: 0.4, y:'-100px', delay:1})
gsap.from('.car', {x:'-20vw', duration:2, delay:1.5})
gsap.from('.feature', {scrollTrigger:'.feature', opacity:0, duration: 0.4, y:'-100px', delay:1})

