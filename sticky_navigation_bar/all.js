window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
    var h2 = document.querySelector('h2');
    h2.classList.toggle('fadeInRight',window.scrollY > 100);
})

// 漢堡選單
function butFun() {
    var menu = document.getElementById('myMenu');
    menu.classList.toggle("navStyle");
}
function butFun1(){
    var con =document.getElementById('all');
    con.classList.toggle("conStyle")  }