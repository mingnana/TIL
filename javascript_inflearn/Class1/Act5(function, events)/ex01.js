// 코드의 재활용 가능        
function callName(name, count){
    for(var i=1; i<=count; i++){
        document.write(i + ". " + name + "<br/>");
    }
}
callName("홍길동", 10);
callName("신사임당", 3);
