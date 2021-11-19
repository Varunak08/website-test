$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });

    var typed = new Typed(".typing",{
        strings: ["Creative", "Exclusive", "High Quality", "Exotic"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    // owl carousel

    $('.carousel').owlCarousel({
        loop: true,
        responsive:{
            
    }

    });
});