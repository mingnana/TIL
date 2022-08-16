// 2의 배수를 제외하고 다 출력하게끔 하는 코드
for(var i=1; i<=100; i++){
    // 2의 배수인지 확인하는 코드
    if( i % 2 == 0){
        continue;   // contiune를 실행하게 되면 continue 아래에 있는 실행코드를 무시하고 증감식으로 이동함
    } 
    document.write(i+"<br/>");
}
