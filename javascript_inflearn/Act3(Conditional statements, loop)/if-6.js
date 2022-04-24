
// 사용자로부터 입력받는 부분
var score = window.prompt("점수를 입력하세요")

// 문자를 숫자로 강제 변환
score = parseInt(score);
// 값 비교
// CPU의 참조를 가장 적게 받으려고 한다면, if~else if~ else 구문을 사용하는 것이 좋다.
if(score >= 90 && score <= 100){
    document.write(score + "점은? A 학점입니다.")
}
else if(score >= 80 && score <= 89){
    document.write(score + "점은? B 학점입니다.")
}
else if(score >= 70 && score <= 79){
    document.write(score + "점은? D 학점입니다.")
}
else{
    document.write(score + "점은? F 학점입니다.")
}
