var main = function () {

	var init = function () {

        xibian.validateForm("#led_class",formAjaxFun);

        $(".i_teacher li").hover(
            function () {
                $(this).find(".desc").slideDown();
            },
            function () {
                $(this).find(".desc").slideUp();
            }
        )

    };

    var formAjaxFun = function(){
        var index = layer.load();
        var obj = {

        }
        $.ajax({
            type :"post",
            url :'/DataSetApi/sign',
            data :obj,
            dataType :'json',
            success :function(r){
                layer.closeAll('loading');
                if(r.status==1){
                    layer.msg(r.res);
                }else {
                    layer.msg(r.res);
                }
            },
            error:function(){
                layer.msg('系统繁忙，请稍后再试');
                layer.closeAll('loading');
            }
        });
    };

	init();

}();