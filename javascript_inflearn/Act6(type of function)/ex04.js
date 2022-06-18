// setInterval()는 window전역객체에 존재하며 타이머 함수의 일종이다.
// 주어진 시간동안 지연하다가 주어진 함수를 실행한다.
setInterval(function(){
    document.write("안녕하세요.<br/>");
}, 1000);