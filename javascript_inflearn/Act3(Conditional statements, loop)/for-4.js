// string 배열을 선언과 동시에 초기화
// 배열은 인덱스로 관리를 해서 값을 수정할때도 인덱스를 사용해야 함
// 배열의 인덱스는 0부터 시작함

// 사용자로부터 입력받는 부분
var data = prompt("어디까지 숫자를 출력할까요?", "숫자입력");
// string -> number
data = parseInt(data);

for(var i=0; i<=data; i++){
    document.write(i +"<br/>");
}