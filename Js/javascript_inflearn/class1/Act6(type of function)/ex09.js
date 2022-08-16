$(document).ready(function(){
            // 함수를 시작과 동시에 호출을 하고 있다.
            checkCount();
        });      
        
        function checkCount(){
            var count = 0;
            $("#btnStart").click(function(){
                count++;
                if(count >= 5){
                    alert("완료되었습니다.");
                }
            });
        }