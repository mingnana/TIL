    // 사용자로부터 입력받는 부분
    var value = window.prompt("행운의 번호를 고르세요")

    // 값 비교
    // CPU의 참조를 가장 적게 받으려고 한다면, if~else if~ else 구문을 사용하는 것이 좋다.
    if(value == "1"){
        document.write("당첨! TV")
    }
    else if(value == "2"){
        document.write("당첨! 선풍기")
    }
    else if(value == "3"){
        document.write("당첨! 세탁기")
    }
    else{
        document.write("꽝!")
    }
