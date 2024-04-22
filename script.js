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

const getImg = document.querySelector("#about img");
new simpleParallax(getImg, {
    orientation:"up right",
    delay: 0.8,
});