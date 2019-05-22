
$(function(){
    $(".loginBtn").click(function(){
        var username = $("#username").val();//取值
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
            "password":password
        };
        //console.log(data);
        $.ajax({
            type: "POST",

            url: "http://testapi.deepdrug.cn/ordinary/authorizations",
            // data:"name=John&location=Boston",

            data: data,

            success: function (dataB) {
                console.log("success方法执行了，服务器回复的数据为：" + dataB);

            },

            error: function (dataB) {
                console.log("error方法执行了，失败的信息为：" + dataB);
            },

        });

    });
});
