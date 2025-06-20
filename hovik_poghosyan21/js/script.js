AOS.init();


$('.logos__carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        900:{
            items:6
        }
    },
    navText: ["<i class=\"fa-solid fa-chevron-left\"></i>","<i class=\"fa-solid fa-chevron-right\"></i>"],
})

$('.clients__carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1.6
        }
    },
    navText: ["<i class=\"fa-solid fa-chevron-left\"></i>","<i class=\"fa-solid fa-chevron-right\"></i>"],
})