AOS.init();
$('.header__carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 1,
    navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
})
$('.project__carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    },
    navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
})
