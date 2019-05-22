var main = function () {
    var customerId;
	var init = function () {
        //携带用户Id
        customerId = getQueryString("customerId");

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
            success :function(data){
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

    /**
     * 提取url?号后面的参数
     */
    var getQueryString = function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    };

	init();

}();