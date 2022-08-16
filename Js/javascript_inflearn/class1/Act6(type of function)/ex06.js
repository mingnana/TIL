        function gugudna_print(){
            for(var i=2; i<=9; i++){
                document.write(i+"단 출력" + "<br/>")
                for(var j=1; j<=9; j++){
                    document.write(i + " * " + j + " = " + (i*j)+"<br/>")
                }
                document.write("<br/>")
            }
        }