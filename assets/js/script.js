$(document).ready(function(){
   const owl = $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        margin:30,
        nav:false,
        autoplayTimeout: 4000,
        smartSpeed: 750,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:2,
            }
        }
    })

    $('.customPrev').on('click',function(e){
        e.preventDefault();
        owl.trigger('prev.owl.carousel');
    });

    $('.customNext').on('click',function(e){
        e.preventDefault();
        owl.trigger('next.owl.carousel');
    });





});