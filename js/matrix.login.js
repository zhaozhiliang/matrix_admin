

function keydown(e)
{
    var e = e||event;
    var currKey = e.keyCode||e.which||e.charCode;
    if(currKey == 13)
    {
        checkLogin();
    }
}

function checkLogin(){
	alert(11);
    var username = $("input[name=username]").val();
    var password = $("input[name=password]").val();

    if ($.trim(username) == "" ||　$.trim(password) == "") {
        return false;
    }

    $.ajax({    
        url:'?act=admin.login',
        data: {
            username : username,
            password : password
        },
        type:'post',   
        success:function(data) {
            if (data == 1) {
                window.location.href="?act=index.main";
            }else if(data == -1){
                showDialog("登陆信息","<span style='color:red;'>抱歉，账号和密码错误，登录失败！</span>");
            }else{
                showDialog("登陆信息","<span style='color:red;'>抱歉，你的账号非园长或管理员，不能登录！</span>");
            }
        },    
        error : function() {}    
    });
}


$(document).ready(function(){


    
    if($.browser.msie == true && $.browser.version.slice(0,3) < 10) {
        $('input[placeholder]').each(function(){ 
	        var input = $(this);       
	       
	        $(input).val(input.attr('placeholder'));
	               
	        $(input).focus(function(){
	             if (input.val() == input.attr('placeholder')) {
	                 input.val('');
	             }
	        });
	       
	        $(input).blur(function(){
	            if (input.val() == '' || input.val() == input.attr('placeholder')) {
	                input.val(input.attr('placeholder'));
	            }
	        });
	    });    
    }
    
});