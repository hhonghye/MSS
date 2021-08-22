/*----- DOM Caching -----*/



/*----- function -----*/


/*----- event -----*/


/*----- function definition -----*/







/* swiper연결 */
var swiper = new Swiper('#visual', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false, //스와이프 후 자동재생
    // }
});
var swiper = new Swiper('.sub-banner', {
    spaceBetween: 15,
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false, //스와이프 후 자동재생
    // }
  });