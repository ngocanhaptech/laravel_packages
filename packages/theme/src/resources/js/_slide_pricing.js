$(function() {
    $('.slide_pricing').owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        dots:false,
        items: 1,
        responsive:{
            0:{
                items:1,
                margin: 0
            },
            600:{
                items:2
            },
            1000:{
                items:3,
                center: true
            }
        }
    })
});