/**
 * Created by DELL on 2017/2/23.
 */
$(function () {
    var $container = $('#container');
    var $imgshow = $('#img-show');
    var iNow = 0;
    for(var i = 0;i<24;i++){
        $container.append('<li><img src="imags/'+(i+1)+'.jpg"></li>')
    }
    var liwiddth = ($(document.body).width()-6)/4
    $('li').css({
        width:liwiddth,
        height:liwiddth
    }).on('tap',function (e) {
        var index = $(this).index();
        iNow = index
        $('#container').hide();
        $imgshow.css({
            background:'url(imags/'+(index+1)+'.jpg) no-repeat center',
            backgroundSize:'contain'
        }).show()
        e.preventDefault();

    });
    $imgshow.on('tap',function (e) {
        $container.show();
        $(this).hide();
        e.preventDefault();
    }).on('swipeleft',function () {
        // console.log(111);
        iNow++;
        if(iNow == 24){
            return
        }
        $imgshow.css({
            background:'url(imags/'+(iNow+1)+'.jpg) no-repeat center',
            backgroundSize:'contain'
        })
    }).on('swiperight',function () {
        iNow--;
        if(iNow == 24){
            return
        }
        $imgshow.css({
            background:'url(imags/'+(iNow+1)+'.jpg) no-repeat center',
            backgroundSize:'contain'
        })
    })

});
