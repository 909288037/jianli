$(function(){
    $('#dowebok').fullpage({
        loopTop: true,
        loopBottom: true,
        navigation: true,
        autoScrolling: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6','page7'],
        navigationColor: "#f00",
        navigationTooltips: ['个人主页','基本资料','项目经验','专业技能','工作经历','自我评价','联系方式'],
        menu: '.menu',
        slidesNavigation: true,
        controlArrows: false,
        //初始化后的回调函数
        afterRender: function () {
            $('.section').eq(0).addClass('current');
        },
        //    设置某一屏幕之后的调用
        afterLoad:function(link,index){
            $('.section').removeClass("current");
            // 让动画 延迟执行100ms
            setTimeout(function(){
                $('.section').eq(index-1).addClass('current');
            },100);
        },
    });
//    鼠标滚动顶部导航渐变
    $(window).on("scroll",function () {
        var sTop = $(document).scrollTop();
        var opacity = 0;
        if(sTop < 100) {
            opacity = sTop/100*0.85;
            $(".navbar").stop().animate({padding : "20px 0"});
        }else {
            opacity = 0.85;
            $(".navbar").stop().animate({padding : 0});
        }
        $(".navbar-default").css({backgroundColor : "rgba(0,0,0,"+opacity+")"});
    })
    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 5000);

});