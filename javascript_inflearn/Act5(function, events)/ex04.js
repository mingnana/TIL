
// 전역변수 : 프로그램 어디에서도 사용가능하며, 아울러 프로그램이 종료시에 같이 사라짐
// 지역변수 : 함수나 {} 안에 선언되어 있으며 범위는 {} 안에서만 허용이 되며, 
// 또한 함수나 {} 내용이 종료되면 사라지게 됨.
var name = "global";    // 전역변수 선언과 동시에 초기화

function func1(){
    var name = "local1";  // 지역변수 선언과 동시에 초기화
    document.write("name = "+name+"<br/>")
}

function func2(){
    var name = "local2";  // 지역변수 선언과 동시에 초기화
    document.write("name = "+name+"<br/>")
}

function func3(){
    var name = "local3";  // 지역변수 선언과 동시에 초기화
    document.write("name = "+name+"<br/>")
}

// 함수의 {}밖에서 변수를 출력하고 있으니 당연히 전역변수가 출력됨

document.write("name = "+name+"<br/>")  
func1();
func2();
func3();

document.write("name = "+name+"<br/>")  
