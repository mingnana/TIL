
var inputString = null;
alert("메시지를 입력하세요");
alert("프로그램을 종료하려면 q를 입력하세요.");

do{
    inputString = prompt("메시지를 입력하세요.");
    document.write(inputString + "<br/>");
} while(!(inputString == "q")); 
//q를 입력하면 trune가 되어 루프를 계쏙 진행하기 때문에 논리부정연산자를 사용하여 false로 바꾸고있다

document.wrtie("프로그램 종료!");
