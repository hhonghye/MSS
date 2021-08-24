/*----- DOM Caching -----*/
const $main_tab__menu = $(".main-tab__menu").children("ul").children("li");
const $main_tab__content = $(".main-tab__content").children("div");
const $sub_tab = $(".sub-tab");
const $sub_tab__menu = $sub_tab.children("ul").children("li");
const rankingTarget = $("#main-tab__menu__ranking .ranking__goods-list ul");
const resultRankingList = callRankingList();
let isDone = true;

/*----- function -----*/
//ranking
createRankingList(rankingTarget, resultRankingList);




/*----- event -----*/
//main tab menu
$main_tab__menu.on("click", function(e){
    e.preventDefault();

    var hasTarget = $(this).hasClass("target");
    if(hasTarget) return;

    if(isDone){
        isDone = false; 
        var i = $(this).index();

        tabActivation(i, $main_tab__menu);
        tabActivation(i, $main_tab__content);
    }

})

//sub tab menu
$sub_tab__menu.on("click", function(e){
    e.preventDefault();

    var hasTarget = $(this).hasClass("target");
    if(hasTarget) return;

    var i = $(this).index();

    tabActivation(i, $sub_tab__menu);

    // var posX = $(this).offset().left;

    
})

/*----- function definition -----*/
function tabActivation(index, item){
	item.removeClass("target"); 
    item.eq(index).addClass("target"); 
    isDone = true;
}

//랭킹 리스트 ajax 호출
function callRankingList(){
    let result;
    $.ajax({
        url : "data/ranking.json",
        data : "json",
        async : false
    })
    .success(function(data){
        result = data.ranking;
    })
    .error(function(err){
        console.log(err);
    });
    return result;
}
//랭킹 리스트 동적 생성
function createRankingList(target, data){
    for(var i=0 ; i<data.length ; i++){
        target.append(
            $("<li>").append(
                $("<img>").attr({
                    src: data[i].imgSrc,
                    alt: data[i].imgAlt
                }),
                $("<p class='goods-list__store'>").text(data[i].store),
                $("<p class='goods-list__price'>")
                    .text(data[i].price)
                    .append(
                        $("<span class='coupon'>").text(data[i].coupon),
                        $("<span class='discount'>").text(data[i].discount)
                    )
            )
        )
    }
    

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