console.log("portfolo 로드");

/*썸네일 스크롤*/

var thumb_area = document.querySelector(".thumb_area");
var thumb_img = document.querySelectorAll(".thumb_img");
thumb_img = Array.prototype.slice.call(thumb_img);
var port = document.querySelectorAll(".port");
port = Array.prototype.slice.call(port);

var state_els = document.querySelectorAll(".state_con > li");
state_els = Array.prototype.slice.call(state_els);

reset();
function reset(){
    for(var i=0;i < thumb_img.length;i++){
        thumb_img[i].style.opacity = "0.2";
        thumb_img[0].style.opacity = "1";
        port[i].style.opacity = "0";
        port[0].style.opacity = "1";
        port[i].style.display = "none";
    }
    port[0].style.display = "flex";
}


window.addEventListener("mousewheel", onScrollThis);
// window.addEventListener("keydown", onScrollThis);

var pos = 0;
var posPl = 23;
var limit = 0;
var index = 0;
var _isAni = false;

function onScrollThis(e){
    if(_isAni) return;
    if(e.wheelDelta == -120 && limit < 3){
        pos -= posPl;
        
        console.log("아래스크롤");
        limit++;
        
        // portvisible();
        // thumbVisible();
    }
    else if(e.wheelDelta == 120 && limit > 0){
        pos += posPl;
        // scrolling();
        console.log("위스크롤");
        limit--;
    }
    for(var i = 0;i < state_els.length;i++){
        state_els[i].style.flexBasis = "10px";
        state_els[i].style.backgroundColor = "#ECECEC";
    }
    state_els[limit].style.flexBasis = "30px";
    state_els[limit].style.backgroundColor = "#0F78F4";
    scrolling();
    portvisible();
    thumbVisible();
}
function scrolling(){
    _isAni = true;
    thumb_area.style.transform =  "translateY("+ pos + "%)";
    thumb_area.style.transition = "all 1s ease-in-out";
    
}
function thumbVisible(){
    _isAni = true;
    for(var i=0;i < thumb_img.length;i++){
        thumb_img[i].style.opacity="0.2";
        thumb_img[i].style.transition = "all 1s ease-in-out"; 
    }
    thumb_img[limit].style.opacity="1";
}
function portvisible(){
    _isAni = true;
    console.log(limit);
    for(var i=0;i < port.length;i++){
        port[i].style.opacity = 0;
        port[i].style.transition = "";
        port[i].style.display = "none";
    }
    if(limit == 0){
        port[limit].style.display = "flex";
    }else{
        port[limit].style.display = "block";
    }
    setTimeout(function(){
        port[limit].style.opacity = 1;
        port[limit].style.transition = "all 1s ease-in-out";
        
    },100)
    setTimeout(function(){
        _isAni = false;
    },1200);
    
}

var card_area = document.querySelector(".card_area");
var card_Con = document.querySelector(".card_con");
var poscd = 0;
var poscdl = 7;
var limitcard = 0;
function onScrollCard(e){
    e.preventDefault();
    e.stopPropagation();
    if(e.wheelDelta == -120 && limitcard < 12){
        poscd -= poscdl;
        
        console.log("아래스크롤");
        limitcard++;
        
        // portvisible();
        // thumbVisible();
    }
    else if(e.wheelDelta == 120 && limitcard > 0){
        poscd += poscdl;
        // scrolling();
        console.log("위스크롤");
        limitcard--;
    }
    scrollingcard()
}
function scrollingcard(){
    card_area.style.transform =  "translateX("+ poscd + "%)";
    card_area.style.transition = "all 1s ease-in-out";
    
}

card_Con.addEventListener("mousewheel", onScrollCard);

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
