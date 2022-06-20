// heaing이라는 변수를 선언하고, 변수에다가 h1 태그를 저장한 꼴이 됨
var heading = document.querySelector("#heading");

//h1태그를 온클릭 했을때 글자색깔을 red로 변경되는 기능 실행 
heading.onclick = function(){
    heading.style.color = "#f00";  
};