$(function() {
    $('.slider_partners').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        items: 1,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:5
            },
            1000:{
                items:7
            }
        }
    })
});