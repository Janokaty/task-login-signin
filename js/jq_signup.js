
$(function(){
    $(".btn-signup").click(function(){
        var username = $("#username").val();//取值
        var phone = $("#phone").val();
        var email = $("#email").val();
        var company = $("#company").val();
        var password = $("#password").val();
        if(!username){
            alert("用户名必填!");
            return ;
        }
        if(!password){
            alert("密码必填!");
            return ;
        }
        var data = {
            "username":username,
            "password":password,
             "phone":phone,
             "email":email,
             "company":company,
        };

        $.ajax({
            type: "POST",

            url: "http://testapi.deepdrug.cn/ordinary/users",

            data: data,

            success: function (dataB) {
                console.log("success方法执行了，服务器回复的数据为：" + dataB);

            },

            error: function (dataB) {
                console.log("error方法执行了，失败的信息为：" + dataB);
                console.log("aaaa");
            }
        });

    });
});
