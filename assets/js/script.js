$(document).ready( function(){
    
    $(window).scroll(function(){
        if ($(document).scrollTop() > 1100){
            $(".aff").css("display","block");
            $(".aff2").css("display","block");
        }else{
            $(".aff").css("display","none");
            $(".aff2").css("display","none");
        }
    })

    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap4'
    });
});