console.log("메인 로드");

var main_logo = document.querySelector(".main_logo");

setTimeout(function(){
    main_logo.style.opacity="1";
    main_logo.style.animationName = "MovingMainLogo";
    main_logo.style.animationIterationCount = "infinite";
    main_logo.style.animationDuration = "10s";
    main_logo.style.animationTimingFunction = "linear";
    main_logo.style.animationFillMode = "forwards";
},1400);

var left_btn = document.querySelector(".left_btn > a");
var left_txt = document.querySelector(".left_btn > p");

var right_btn = document.querySelector(".right_btn > a");
var right_txt = document.querySelector(".right_btn > p");

reset();
function reset(){
    left_txt.innerText = "합니다.";
    right_txt.innerText = "드립니다.";
}

function onLeft(e){
    if(e.type=="mouseenter"){
        left_txt.style.opacity = "0";
        left_txt.style.transition = "all 0.6s ease"; 
        setTimeout(function(){
            left_txt.innerText = "소개합니다.";
            left_txt.style.opacity = "1";
            left_txt.style.transition = "all 0.6s ease"; 
        },600);
    }
    else if(e.type=="mouseleave"){
        left_txt.style.opacity = "0";
        left_txt.style.transition = "all 0.6s ease"; 
        setTimeout(function(){
            left_txt.innerText = "합니다.";
            left_txt.style.opacity = "1";
            left_txt.style.transition = "all 0.6s ease"; 
        },600);
    }
}

function onRight(e){
    if(e.type=="mouseenter"){
        right_txt.style.opacity = "0";
        right_txt.style.transition = "all 0.6s ease"; 
        setTimeout(function(){
            right_txt.innerText = "보여드립니다.";
            right_txt.style.opacity = "1";
            right_txt.style.transition = "all 0.6s ease"; 
        },600);
    }
    else if(e.type=="mouseleave"){
        right_txt.style.opacity = "0";
        right_txt.style.transition = "all 0.6s ease"; 
        setTimeout(function(){
            right_txt.innerText = "드립니다.";
            right_txt.style.opacity = "1";
            right_txt.style.transition = "all 0.6s ease"; 
        },600);
    }
}

left_btn.addEventListener("mouseenter", onLeft);
left_btn.addEventListener("mouseleave", onLeft);
right_btn.addEventListener("mouseenter", onRight);
right_btn.addEventListener("mouseleave", onRight);

var logo = document.querySelector("header a");
function onClickLogo(e){
    e.preventDefault();
    sectiona.style.opacity = "1";
    sectiona.style.animationName = "unLoadPage";
    setTimeout(function(){
        location.href ="./main.html";
    },1100);
}
logo.addEventListener("click", onClickLogo);
var sectiona = document.querySelector(".section_area");
function onclickLeft(e){
    e.preventDefault();
    sectiona.style.opacity = "1";
    sectiona.style.animationName = "unLoadPage";
    setTimeout(function(){
        location.href ="./introduce.html";
    },1100);
}
function onclickRight(e){
    e.preventDefault();
    sectiona.style.opacity = "1";
    sectiona.style.animationName = "unLoadPage";
    setTimeout(function(){
        location.href ="./portfolio.html";
    },1100);
}

left_btn.addEventListener("click", onclickLeft);
right_btn.addEventListener("click", onclickRight);