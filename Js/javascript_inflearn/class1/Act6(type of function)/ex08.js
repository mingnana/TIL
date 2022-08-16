        var a = 100;
        var b = 200;
        var c = 300;

        function outter(){
            // outter() 함수의 지역변수
            var a = 1000;
            var b = 2000;
            var c = 3000;

            // 중첩함수 선언과 구현
            function inner(){
                var c = 30000;
                document.write("1.a = "+a+"<br/>");
                document.write("2.b = "+b+"<br/>");
                document.write("3.c = "+c+"<br/>");
            }
            inner();    // 중첩함수를 호출하고 있음
        }
        outter();   // 