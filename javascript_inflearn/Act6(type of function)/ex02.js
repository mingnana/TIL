
// 아래 h1(), h2()는 일반적 함수이다.
function hi1(){
    alert("안녕하세요!");
}
function hi2(){
    alert("반갑습니다.")
}
// exec()함수는 매개변수 값으로 함수를 받고 있다.
function exec(a){
    a(); // 매개변수로 받은 함수를 호출하고 있다
}
exec(hi1);
exec(hi2);
