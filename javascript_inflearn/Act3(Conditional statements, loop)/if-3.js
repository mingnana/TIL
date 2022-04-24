
// 2와 3의 공배수를 검사하는 프로그램
var value = window.prompt("숫자를 입력해주세요.");
// prompt()에서 받은 value 값은 string 타입이기때문에
// parseInt()를 통해서 string타입을 강제로 정수타입으로 바꾸고 있음 (강제 형변환)

value = parseInt(value);

// &&는 논리 연산자로싸 두개의 조건이 true 이면 true를 리턴함
// ||는 논리 연산자로써 둘 중 하나의 조건만 true이면 true를 리턴함

// if( (value % 2 == 0) && (value % 3 == 0)){
//     alert("2와 3의 공배수입니다.");
// } else{
//     alert("2와 3의 공배수가 아닙니다.")
// }

if( (value % 2 == 0) || (value % 3 == 0)){
    alert("2이거나 3의 공배수입니다.");
} else{
    alert("2이거나 3의 공배수가 아닙니다.")
}