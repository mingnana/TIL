
// 사용자로부터 입력받는 부분
var userID = window.prompt("아이디를 입력하세요.");
var userPW = window.prompt("패스워드를 입력하세요.");

// 값 비교
// CPU의 참조를 가장 적게 받으려고 한다면, if~else if~ else 구문을 사용하는 것이 좋다.
if(userID == "Shin" && userPW == "1111"){
    alert(userID + "님 반갑습니다")
} 
else if(userID == "Shin"){
    alert("패스워드가 잘못되었습니다.")
} else{
    alert("아이디가 잘못되었습니다.")
} 
