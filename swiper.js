const BannerSwiper = new Swiper(".banner-swiper", {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    // },
    // breakpoints: {

    //     1024: {
    //         slidesPerView: 1,
    //         spaceBetween: 40,

    //     },
    // }
    }
});