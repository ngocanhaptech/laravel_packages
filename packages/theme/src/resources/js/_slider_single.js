$(function() {
    $('.slider_single').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});