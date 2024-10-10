$(document).ready(function(){

    $(".chat").click(function(){
        $(".chat_view").stop().fadeToggle();
        $(".chat").toggleClass("chat_on");
        $(".chat>h2").toggleClass("chat_on");
    });

    
    let i = 0;
    let count = $(".main_indi>li").length;
    
    setInterval(function(){
        if(i == count-1){
            i=0;
        }else{ i++;}
        $(".main_bn>li").stop().fadeOut();
        $(".main_bn>li").eq(i).stop().fadeIn();
        $(".main_indi>li").removeClass("indi_on");
        $(".main_indi>li").eq(i).addClass("indi_on");
    }, 3000);

    $(".main_indi>li").click(function(){
        let i = $(this).index();
        $(".main_indi>li").removeClass("indi_on");
        $(".main_indi>li").eq(i).addClass("indi_on");
        $(".main_bn>li").stop().fadeOut();
        $(".main_bn>li").eq(i).stop().fadeIn();
    });

    $(".prev").click(function(){
        $(".ice_gr_mob").stop().animate({"margin-left":"0%"},function(){
            $(".ice_gr_mob>li:last-child").prependTo(".ice_gr_mob");
            $(".ice_gr_mob").css({"margin-left":"-50%"});
        });
    });

    $(".next").click(function(){
        $(".ice_gr_mob").stop().animate({"margin-left":"-100%"},function(){
            $(".ice_gr_mob>li:first-child").appendTo(".ice_gr_mob");
            $(".ice_gr_mob").css({"margin-left":"-50%"});
        });
    });

    $(".tab_btn>li").click(function(){
        let i = $(this).index();
        $(".menu_img>li").removeClass("img_on");
        $(".menu_img>li").eq(i).addClass("img_on");
        $(".tab_btn>li").removeClass("tab_on");
        $(".tab_btn>li").eq(i).addClass("tab_on");
        $(".btn").removeClass("btn_on");
        $(".btn").eq(i).addClass("btn_on");
        $(".menu_bn>li").removeClass("menu_on");
        $(".menu_bn>li").eq(i).addClass("menu_on");
    });


    $(window).on("scroll", function(){
        let scroll = $(this).scrollTop();
        let down = $(".energy").offset().top - 750;
        // let wheel = e.originalEvent.deltaY;
        if(scroll > down){
            $(".energy_left").css({"margin-left":"15.5%"});
            $(".energy_right").css({"margin-right":"10%"});
        }
        // else{
        //     $(".energy_left").stop().animate({"margin-left":"-50%"});
        //     $(".energy_right").stop().animate({"margin-right":"-60%"});
        // }
    });

    $(".store_list>li").click(function(){
        let i = $(this).index();
        $(".acco_view").removeClass("hide")
        $(".acco_view").eq(i).addClass("hide")
        $(".acco").removeClass("acco_on")
        $(".acco").eq(i).addClass("acco_on")
    });

    $(".list_mob_btn>li").click(function(){
        let i = $(this).index();
        $(".list_mob_btn>li").removeClass("mob_btn_on");
        $(".list_mob_btn>li").eq(i).addClass("mob_btn_on");
        $(".bn_list").removeClass("mob_bn_on");
        $(".bn_list").eq(i).addClass("mob_bn_on");
    });

    $(".hamburger").click(function(){
        $(".hamburger_menu").stop().animate({"right":"0%"}, 700);
    });

    $(".close").click(function(){
        $(".hamburger_menu").stop().animate({"right":"-100%"}, 700);
    });
});