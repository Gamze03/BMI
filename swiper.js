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

const TrainersSwiper = new Swiper(".trainers-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {

        1024: {
            slidesPerView: 4,
            spaceBetween: 40,

        },
    }
    }
);


const NewsSwiper = new Swiper(".news-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {

        1024: {
            slidesPerView: 3,
            spaceBetween: 40,

        },
    }
    }
);


const ClientsSwiper = new Swiper(".clients-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {

        1024: {
            slidesPerView: 6,
            spaceBetween: 40,

        },
    },
    
    }
);

const PartnersSwiper = new Swiper(".partners-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2000,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {

        1024: {
            slidesPerView: 8,
            spaceBetween: 40,

        },
    },
  
    }
);


const TrainingsSwiper = new Swiper(".trainings-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    // autoplay: {
    //     delay: 2000,
    // },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    }
);