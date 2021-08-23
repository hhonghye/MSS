/*----- DOM Caching -----*/
var $main_tab__menu = $(".main-tab__menu").children("ul").children("li");
var $main_tab__content = $(".main-tab__content").children("div");
let isDone = true;

/*----- function -----*/


/*----- event -----*/
$main_tab__menu.on("click", function(e){
    e.preventDefault();

    var hasTarget = $(this).hasClass("target");
    if(hasTarget) return;

    if(isDone){
        isDone = false; 
        var i = $(this).index();

        mainTabActivation(i, $main_tab__menu);
        mainTabActivation(i, $main_tab__content);
    }

})


/*----- function definition -----*/
function mainTabActivation(index, item){
	item.removeClass("target"); 
    item.eq(index).addClass("target"); 
    isDone = true;
}






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