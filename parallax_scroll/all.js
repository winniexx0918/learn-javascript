let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');
let text = document.getElementById('text');
let all = document.getElementById('all')

window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    let topscroll = document.documentElement.scrollTop;
    // moon.style.left = -value * 0.5 + 'px';
    bg.style.top = value * 0.5 + 'px';
    mountain.style.top = -value * 0.1 + 'px';
    road.style.top = value * 0.2 + 'px';
    text.style.top = value * 0.4 + 'px';
    // bg.style.top = value * 0 + 'px';
    // mountain.style.top = -value * 0.1 + 'px';
    // road.style.top = value * 0.1 + 'px';
    // text.style.top = value * 0.3 + 'px';
    if(topscroll>=0 && topscroll<130){
        moon.style.left = -value * 1 + 'px';
        moon.style.top = value * 0.1 + 'px';
        // all.style.position = 'fixed';
    }else if(topscroll>=130 && topscroll<350){
        moon.style.left = -value * 1.8 + 'px';
        moon.style.top = value * 0.3 + 'px';
    }else if(topscroll>=350 && topscroll<450){
        moon.style.left = -value * 2 + 'px';
        moon.style.top = value * 0.6 + 'px';
    }else{
        moon.style.left = -value * 2.2 + 'px';
        moon.style.top = value * 0.5 + 'px';

    }
    console.log(topscroll)
})

// window.addEventListener("scroll", function() {
// var top = document.documentElement.scrollTop || document.body.scrollTop;
// console.log(top);
// });
