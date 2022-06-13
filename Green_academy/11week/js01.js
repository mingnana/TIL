 $(function(){
            $(".title_a").click(function(){
                $(".desc_a").css("display","block");
            });
            /*
                대상 : .title_a
                이벤트 : click
                이벤트 핸들러 : .desc_a
            */
            $(".title_s").click(function(){
                $(".desc_s").css("display","block");
            });
            /*
                대상 : .title_s
                이벤트 : click
                이벤트 핸들러 : .desc_s
            */
            $(".title_l").click(function(){
                $(".desc_l").css("display","block");
            })
            /*
                대상 : .title_l
                이벤트 : click
                이벤트 핸들러 : .desc_l
            */
        })