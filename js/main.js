var main = function () {
    var customerId;
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
        var obj = {};
        obj.phone = $("#phone").val();
        obj.studentName = $("#userName").val();
        if (customerId) {
            obj.customerId = customerId;
        }
        $.ajax({
            type :"post",
            url : xibian.URL.ADMIN_SIGN_URL,
            data :obj,
            dataType :'json',
            success :function(r){
                layer.closeAll('loading');
                if(data.code == 200){
                    layer.msg(data.msg);
                }else {
                    layer.msg(data.msg);
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