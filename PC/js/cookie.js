function setCookie(name,value)
{
	var Days = 7;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie =name+"="+ escape (value)+ ";path=/;expires=" + exp.toGMTString();
	
	var storage = window.localStorage;
	if(storage){
		storage[name] = value;
	}
}

function getCookie(name)
{
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg)){
		return unescape(arr[2]);
	}
	else{
		var storage = window.localStorage;
		if(storage){
			return storage[name];
		}
		else{
			return "";
		}
	}
}

function delCookie(name)
{
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null){
		document.cookie= name + "="+cval+";expires="+exp.toGMTString();
	}
}