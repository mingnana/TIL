// string 배열을 선언과 동시에 초기화
// 배열은 인덱스로 관리를 해서 값을 수정할때도 인덱스를 사용해야 함
// 배열의 인덱스는 0부터 시작함

// 사용자로부터 입력받는 부분
var dan = prompt("몇단을 출력할까요?");
// string -> number
dan = parseInt(dan);

for(var i=1; i<=9; i++){
    document.write(dan +"*"+ i+ "="+ (dan*i)+"<br/>");
}