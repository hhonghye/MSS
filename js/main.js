/*----- DOM Caching -----*/
const $main_tab__menu = $(".main-tab__menu").children("ul").children("li");
const $main_tab__content = $(".main-tab__content").children("div");
const $sub_tab = $(".sub-tab");
const $sub_tab__menu = $sub_tab.children("ul").children("li");
const $ranking_sub_tab_menu = $(".ranking__sub-tab").find("li");
const $coordi_sub_tab_brand_menu = $(".coordi__sub-tab--brand").find("li");
const $coordi_sub_tab_style_menu = $(".coordi__sub-tab--style").find("li");
const $update_sub_tab_menu = $(".update__sub-tab").find("li");

const rankingTarget = $(".ranking__goods-list ul");
const updateTarget = $(".update-news__list.birkenstock ul");
const resultRankingList = callRankingList();
const resultUpdateList = callUpdateList();
let isDone = true;

/*----- function -----*/
//ranking list
createRankingList(rankingTarget, resultRankingList);
//update list
createUpdateNewsList(updateTarget, resultUpdateList);


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
$ranking_sub_tab_menu.on("click", function(e){
    e.preventDefault();

    var hasTarget = $(this).hasClass("target");
    if(hasTarget) return;

    var i = $(this).index();

    tabActivation(i, $ranking_sub_tab_menu);
})
$coordi_sub_tab_brand_menu.on("click", function(e){
    e.preventDefault();

    var hasTarget = $(this).hasClass("target");
    if(hasTarget) return;

    var i = $(this).index();

    tabActivation(i, $coordi_sub_tab_brand_menu);
})
$coordi_sub_tab_style_menu.on("click", function(e){
    e.preventDefault();

    var hasTarget = $(this).hasClass("target");
    if(hasTarget) return;

    var i = $(this).index();

    tabActivation(i, $coordi_sub_tab_style_menu);
})
$update_sub_tab_menu.on("click", function(e){
    e.preventDefault();

    var hasTarget = $(this).hasClass("target");
    if(hasTarget) return;

    var i = $(this).index();

    tabActivation(i, $update_sub_tab_menu);
})
// var posX = $(this).offset().left;





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
//업데이트 리스트 ajax 호출
function callUpdateList(){
    let result;
    $.ajax({
        url : "data/update.json",
        data : "json",
        async : false
    })
    .success(function(data){
        result = data.update_birkenstock;
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
//코디 리스트 동적 생성
function createCoordiList(target, data){
    for(let i=0 ; i<data.length ; i++){
        target.append(
            $("<li>").append(
                $("<a class='coordi__coordi-link'>").append(
                    $("<img>").attr({
                        src: data[i].imgSrc,
                        alt: data[i].imgAlt
                    })
                )
            )
        )
    }
}
//업데이트 소식 리스트 동적 생성
function createUpdateNewsList(target, data){
    for(let i=0 ; i<7 ; i++){
        target.append(
            $("<li>").append(
                $("<a>")
                    .attr({href : data[i].aHref})
                    .append(
                        $("<img>")
                            .attr({
                                src: data[i].imgSrc,
                                alt: data[i].imgAlt
                            })
                    )
            )
        )
    }
    target.append(
        $("<li class='update-news__list__showall'>").append(
            $("<div class='update-news__list__showall__txt'>").append(
                $("<p>")
                    .prepend(
                        $("<span>").text(data[7].product)
                    )
                    .text("개 상품"),
                    $("<a>").text("전체보기")
            )
        )
    )

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
    // autop
  });