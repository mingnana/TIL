
    // setInterval은 시간에 따라 반복적으로 돌아가도록 하는 함수
    // setTimeout은 duration 밀리초 후 단한번만 실행이 되는 함수
    $(document).ready(function(){
       var $contents = $("#contents");

        // 익명함수 풀이
        // setTimeout(function(){
        //     $contents.text("안녕하세요! 자바스크립트 언어!")
        //     // 텍스트를 표시하는 함수
        //     // text()를 이용하여 div 영역에 출력하고 있다.
        // }, 3000)    // 단위가 밀리초이므로 현재는 1초다.

        // 일반함수풀이
        function displayText(){
            $contents.text("안녕하세요! 자바스크립트 언어!");
        }
        setTimeout(displayText, 3000);
    })
