var mySwiper = new Swiper('.swiper-container', {
    pagination: '.pagination',
    paginationClickable: true,
    autoplay: 3000,
    speed: 1,
    loop:true,

    onInit: function(swiper) {
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper) {
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
})