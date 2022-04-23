        $(document).ready(function(){
            $("span").hide();
            $(".tooltip").hide();
            $("div").mouseover(function(){
               $("span").stop().slideDown(300, "swing");
               $(".tooltip").stop().fadeIn(100).css({
                   "left":$(this).offset().left + $(this).width() + 20 + "px",
                   "top":$(this).offset().top + 230 + "px"
               })
            }).mouseout(function(){
                $("span").stop().slideUp(300,"swing");
                $(".tooltip").stop().fadeOut(100);
            })
        })