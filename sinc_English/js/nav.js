/*头部nav简单特效*/

/*SDK服务*/
var sdkItem = document.getElementById("nav-item-SDK");
/*关于我们*/
var aboutUs = document.getElementById("nav-item-aboutUs");
/*包含sdk服务-子页面的小盒子*/
var sdkContent = document.getElementById("nav-item-SDK-Content");
/*包含关于我们-子页面的小盒子*/
var aboutContent = document.getElementById("nav-item-aboutUs-Content");
/*关于我们的点击事件*/
aboutUs.onclick = function(){
    sdkContent.style.display = "none";
    aboutContent.style.display = "block";
}

/*sdk服务的点击事件*/
sdkItem.onclick = function(){
    aboutContent.style.display = "none";
    sdkContent.style.display = "block";
}





