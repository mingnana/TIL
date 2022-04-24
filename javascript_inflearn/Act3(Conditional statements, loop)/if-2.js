// 짝수 검사하는 프로그램
var value = window.prompt("숫자를 입력해주세요.");
// prompt()에서 받은 value 값은 string 타입이기때문에
// parseInt()를 통해서 string타입을 강제로 정수타입으로 바꾸고 있음 (강제 형변환)

value = parseInt(value);

if(value % 2 == 0){
    alert("짝수입니다.");
} else{
    alert("홀수입니다.")
}
