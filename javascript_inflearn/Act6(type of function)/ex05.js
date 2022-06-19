        var count = 0;
        var $container = null;

        $(document).ready(function(){
            $container = $("#container");
            
            $container.append("<p>"+count+"안녕하세요. 반갑습니다.");
            count++;

            // 버튼이 클릭이 되면 익명함수를 실행하여 지소적으로 극자를 부텽서 출력하게 된다.
            $("#btnStart").click(function(){
                $container.append("<p>"+count+"안녕하세요. 반갑습니다.");
                    count++;
            });
        });