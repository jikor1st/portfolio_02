console.log("인트로 로드");

var in01 = document.querySelector(".in01"),
    in02 = document.querySelector(".in02"),
    in03 = document.querySelector(".in03"),
    in04 = document.querySelector(".in04"),
    in05 = document.querySelector(".in05"),
    in06 = document.querySelector(".in06");

var in01_h3 = document.querySelector(".in01 > h3");
var in02_h3 = document.querySelector(".in02 > h3");
var in03_h3 = document.querySelector(".in03 > h3");
var in04_h3 = document.querySelector(".in04 > h3");
var in05_h3 = document.querySelector(".in05 > h3");
var in06_h3 = document.querySelector(".in06 > h3");

var in01_in01 = document.querySelector(".in01 > .inin01");
var in01_in02 = document.querySelector(".in01 > .inin02");
var in01_in03 = document.querySelector(".in01 > .inin03");

var in02_in01 = document.querySelector(".in02 > .inin01");
var in02_in02 = document.querySelector(".in02 > .inin02");

var in03_in01 = document.querySelector(".in03 > .inin01");
var in03_in02 = document.querySelector(".in03 > .inin02");
var in03_in03 = document.querySelector(".in03 > .inin03");
var in03_in04 = document.querySelector(".in03 > .inin04");
var in03_in05 = document.querySelector(".in03 > .inin05");
var in03_in06 = document.querySelector(".in03 > .inin06");

var in04_in01 = document.querySelector(".in04 > .inin01");

var in05_in01 = document.querySelector(".in05 > .inin01");
var in05_in02 = document.querySelector(".in05 > .inin02");

var in06_pro01 = document.querySelector(".in06 > .pro01");
var in06_pro02 = document.querySelector(".in06 > .pro02");
var in06_pro03 = document.querySelector(".in06 > .pro03");
var in06_pro04 = document.querySelector(".in06 > .pro04");
var in06_pro05 = document.querySelector(".in06 > .pro05");

var intro_main_logo = document.querySelector(".intro_main_logo");

reset();
function reset(){
    /*연결*/
    in01_in01.style.transform = "translateX(0) translateY(0)";
    in01_in01.style.opacity = "0";
    in01_in02.style.transform = "translateX(0) translateY(0)";
    in01_in02.style.opacity = "0";
    in01_in03.style.transform = "translateX(0) translateY(0)";
    in01_in03.style.opacity = "0";

    /*학교*/
    in02_in01.style.transform = "translateX(0) translateY(0)";
    in02_in01.style.opacity = "0";
    in02_in02.style.transform = "translateX(0) translateY(0)";
    in02_in02.style.opacity = "0";

    /*언어*/
    in03_in01.style.transform = "translateX(0) translateY(0)";
    in03_in01.style.opacity = "0";
    in03_in02.style.transform = "translateX(0) translateY(0)";
    in03_in02.style.opacity = "0";
    in03_in03.style.transform = "translateX(0) translateY(0)";
    in03_in03.style.opacity = "0";
    in03_in04.style.transform = "translateX(0) translateY(0)";
    in03_in04.style.opacity = "0";
    in03_in05.style.transform = "translateX(0) translateY(0)";
    in03_in05.style.opacity = "0";

    /*이름*/
    in04_in01.style.transform = "translateX(0) translateY(0)";
    in04_in01.style.opacity = "0";

    /*나이*/
    in05_in01.style.transform = "translateX(0) translateY(0)";
    in05_in01.style.opacity = "0";
    in05_in02.style.transform = "translateX(0) translateY(0)";
    in05_in02.style.opacity = "0";

    /*프로그램*/
    in06_pro01.style.transform = "translateX(0) translateY(0)";
    in06_pro01.style.opacity = "0";
    in06_pro02.style.transform = "translateX(0) translateY(0)";
    in06_pro02.style.opacity = "0";
    in06_pro03.style.transform = "translateX(0) translateY(0)";
    in06_pro03.style.opacity = "0";
    in06_pro04.style.transform = "translateX(0) translateY(0)";
    in06_pro04.style.opacity = "0";
    in06_pro05.style.transform = "translateX(0) translateY(0)";
    in06_pro05.style.opacity = "0";
    
}
/*연결*/
function onin01(e){
    if(e.type=="mouseenter"){
        in01_h3.style.color = "#0F78F4";
        in01_h3.style.opacity = "1";
        in01_in01.style.transform = "translateX(-150px) translateY(-40px)";
        in01_in01.style.opacity = "1";

        in01_in02.style.transform = "translateX(130px) translateY(15px)";
        in01_in02.style.opacity = "1";

        in01_in03.style.transform = "translateX(-5px) translateY(60px)";
        in01_in03.style.opacity = "1";
    }
    else if(e.type=="mouseleave"){
        in01_h3.style.color = "#D6D6D6";
        in01_h3.style.opacity = "0.8";
        in01_in01.style.transform = "translateX(0) translateY(0)";
        in01_in01.style.opacity = "0";

        in01_in02.style.transform = "translateX(0) translateY(0)";
        in01_in02.style.opacity = "0";

        in01_in03.style.transform = "translateX(0) translateY(0)";
        in01_in03.style.opacity = "0";
    }
}

in01.addEventListener("mouseenter", onin01);
in01.addEventListener("mouseleave", onin01);

/*학교*/
function onin02(e){
    if(e.type=="mouseenter"){
        in02_h3.style.color = "#0F78F4";
        in02_h3.style.opacity = "1";

        in02_in01.style.transform = "translateX(-35px) translateY(-35px)";
        in02_in01.style.opacity = "1";

        in02_in02.style.transform = "translateX(-35px) translateY(70px)";
        in02_in02.style.opacity = "1";

    }
    else if(e.type=="mouseleave"){
        in02_h3.style.color = "#D6D6D6";
        in02_h3.style.opacity = "0.8";

        in02_in01.style.transform = "translateX(0) translateY(0)";
        in02_in01.style.opacity = "0";


        in02_in02.style.transform = "translateX(0) translateY(0)";
        in02_in02.style.opacity = "0";
    }
}


in02.addEventListener("mouseenter", onin02);
in02.addEventListener("mouseleave", onin02);

/*언어*/
function onin03(e){
    if(e.type=="mouseenter"){
        in03_h3.style.color = "#0F78F4";
        in03_h3.style.opacity = "1";

        in03_in01.style.transform = "translateX(-50px) translateY(-35px)";
        in03_in01.style.opacity = "1";
        in03_in02.style.transform = "translateX(170px) translateY(0px)";
        in03_in02.style.opacity = "1";
        in03_in03.style.transform = "translateX(120px) translateY(80px)";
        in03_in03.style.opacity = "1";
        in03_in04.style.transform = "translateX(-25px) translateY(90px)";
        in03_in04.style.opacity = "1";
        in03_in05.style.transform = "translateX(-120px) translateY(35px)";
        in03_in05.style.opacity = "1";

    }
    else if(e.type=="mouseleave"){
        in03_h3.style.color = "#D6D6D6";
        in03_h3.style.opacity = "0.8";

        in03_in01.style.transform = "translateX(0) translateY(0)";
        in03_in01.style.opacity = "0";
        in03_in02.style.transform = "translateX(0) translateY(0)";
        in03_in02.style.opacity = "0";
        in03_in03.style.transform = "translateX(0) translateY(0)";
        in03_in03.style.opacity = "0";
        in03_in04.style.transform = "translateX(0) translateY(0)";
        in03_in04.style.opacity = "0";
        in03_in05.style.transform = "translateX(0) translateY(0)";
        in03_in05.style.opacity = "0";
    }
}

in03.addEventListener("mouseenter", onin03);
in03.addEventListener("mouseleave", onin03);


/*언어*/
function onin04(e){
    if(e.type=="mouseenter"){
        in04_h3.style.color = "#0F78F4";
        in04_h3.style.opacity = "1";

        in04_in01.style.transform = "translateX(-20px) translateY(90px)";
        in04_in01.style.opacity = "1";

    }
    else if(e.type=="mouseleave"){
        in04_h3.style.color = "#D6D6D6";
        in04_h3.style.opacity = "0.8";

        in04_in01.style.transform = "translateX(0) translateY(0)";
        in04_in01.style.opacity = "0";
    }
}

in04.addEventListener("mouseenter", onin04);
in04.addEventListener("mouseleave", onin04);


/*나이*/
function onin05(e){
    if(e.type=="mouseenter"){
        in05_h3.style.color = "#0F78F4";
        in05_h3.style.opacity = "1";

        in05_in01.style.transform = "translateX(-35px) translateY(-35px)";
        in05_in01.style.opacity = "1";
        in05_in02.style.transform = "translateX(20px) translateY(60px)";
        in05_in02.style.opacity = "1";

    }
    else if(e.type=="mouseleave"){
        in05_h3.style.color = "#D6D6D6";
        in05_h3.style.opacity = "0.8";

        in05_in01.style.transform = "translateX(0) translateY(0)";
        in05_in01.style.opacity = "0";
        in05_in02.style.transform = "translateX(0) translateY(0)";
        in05_in02.style.opacity = "0";
    }
}

in05.addEventListener("mouseenter", onin05);
in05.addEventListener("mouseleave", onin05);

/*프로그램*/
function onin06(e){
    if(e.type=="mouseenter"){
        in06_h3.style.color = "#0F78F4";
        in06_h3.style.opacity = "1";

        in06_pro01.style.transform = "translateX(-130px) translateY(-30px)";
        in06_pro01.style.opacity = "1";
        in06_pro02.style.transform = "translateX(0px) translateY(-120px)";
        in06_pro02.style.opacity = "1";
        in06_pro03.style.transform = "translateX(190px) translateY(-10px)";
        in06_pro03.style.opacity = "1";
        in06_pro04.style.transform = "translateX(70px) translateY(105px)";
        in06_pro04.style.opacity = "1";
        in06_pro05.style.transform = "translateX(-60px) translateY(90px)";
        in06_pro05.style.opacity = "1";

    }
    else if(e.type=="mouseleave"){
        in06_h3.style.color = "#D6D6D6";
        in06_h3.style.opacity = "0.8";

        in06_pro01.style.transform = "translateX(0) translateY(0)";
        in06_pro01.style.opacity = "0";
        in06_pro02.style.transform = "translateX(0) translateY(0)";
        in06_pro02.style.opacity = "0";
        in06_pro03.style.transform = "translateX(0) translateY(0)";
        in06_pro03.style.opacity = "0";
        in06_pro04.style.transform = "translateX(0) translateY(0)";
        in06_pro04.style.opacity = "0";
        in06_pro05.style.transform = "translateX(0) translateY(0)";
        in06_pro05.style.opacity = "0";
    }
}

in06.addEventListener("mouseenter", onin06);
in06.addEventListener("mouseleave", onin06);

var logo = document.querySelector("header a");
function onClickLogo(e){
    e.preventDefault();
    sectiona01.style.opacity = "1";
    sectiona01.style.animationName = "unLoadPage";
    sectiona02.style.opacity = "1";
    sectiona02.style.animationName = "unLoadPage";
    setTimeout(function(){
        location.href ="./main.html";
    },1100);
}
logo.addEventListener("click", onClickLogo);
var sectiona01 = document.querySelector(".section_area01");
var sectiona02 = document.querySelector(".section_area02");