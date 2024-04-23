$(".menu-toggle").click(function() {
    $(".navbar-nav").toggleClass("active");  
});

$(window).scroll(function(){
    if($(this).scrollTop() > 0)  {
       $(".navbar"). addClass("scrolled");
    } else {
        $(".navbar"). removeClass("scrolled");

    }
});

// create parallax image on about section
const getImg = document.querySelector("#about img");
getImg.style.borderRadius = "20px"; // Set image border radius
new simpleParallax(getImg, {
    orientation:"up right",
    delay: 0.8,
});

// create automation typing text
const textElement = document.querySelector(".content h1");
textElement.style.fontStyle = "200";
let typed = new Typed(textElement, {
    strings: [textElement.innerText],
    typeSpeed: 65,
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
    startDelay: 20,
    endDelay: 60,
    showCursor: false,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 400,
});