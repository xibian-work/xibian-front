
layui.use('layer');
var layer = layui.layer;

var xibian = {
    "URL": {
        // "ADMIN_SIGN_URL": 'http://127.0.0.1/admin/business/api/customer/sign'
        // "ADMIN_SIGN_URL": '/admin/business/api/customer/sign'
        "ADMIN_SIGN_URL": 'http://www.51yujianni.com/business/api/customer/sign'

    },
    validateForm:function(id,fun){
        $(id).validate({
            rules: {
                phone:{
                    required : true,
                    isMobile : true
                },
                password: {
                    required: true,
                    minlength: 6
                },
                confirm_password: {
                    required: true,
                    minlength: 6,
                    equalTo: "#password"
                },
            },
            messages: {
                phone : {
                    required : "请输入手机号",
                    isMobile : "请正确填写手机号码"
                },
                password: {
                    required: "请输入密码",
                    minlength: "密码长度不能小于6个字母"
                },
                confirm_password: {
                    required: "请输入密码",
                    minlength: "密码长度不能小于6个字母",
                    equalTo: "两次密码输入不一致"
                },
            },
            submitHandler: function(form)
            {
                fun();//用于提交ajax表单的函数
            }
        });
        //手机号码验证
        jQuery.validator.addMethod("isMobile", function(value, element) {
            var length = value.length;
            var mobile = /^1[3|4|5|6|7|8][0-9]\d{4,8}$/;
            return this.optional(element) || (length == 11 && mobile.test(value));
        }, "请正确填写手机号码");
    },

};


