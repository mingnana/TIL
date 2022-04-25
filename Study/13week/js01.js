
$(document).ready(function(){
    $(".no2").hide();
    
    $(".left").click(function(){
        $(".no1").show();
        $(".no2").hide();
    })
    $(".right").click(function(){
        $(".no2").show();
        $(".no1").hide();
    })
});