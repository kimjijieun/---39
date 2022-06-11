$(document).ready(function(){


    $('.menu_right, .pan').hover(function(){
        $('.pan').stop(true).slideDown(500);
        $('.sub_menu').stop(true).slideDown(500);
        
    }, function(){
        $('.pan').stop(true).slideUp(500)
        $('.sub_menu').stop(true).slideUp(500);
    })

});