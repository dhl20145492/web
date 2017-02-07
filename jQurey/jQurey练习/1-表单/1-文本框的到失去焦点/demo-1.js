$(function(){
    $(':input').focus(function () {
        $(this).addClass('foucs');
    }).blur(function(){
        $(this).removeClass('foucs');
    })
});