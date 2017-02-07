$(function(){
   $(':input').focus(function(){
       $(this).addClass('foucs').val($(this).val() == this.defaultValue ?'':$(this).val());

   }).blur(function(){
       $(this).removeClass('foucs').val($(this).val() == ""?this.defaultValue:$(this).val());

   })
});