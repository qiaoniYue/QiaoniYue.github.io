/*头部nav简单特效*/
var sdkItem = document.getElementById("nav-item-SDK");
var sdkContent = document.getElementById("nav-item-SDK-Content");
sdkItem.onmouseover = function(){
    sdkContent.style.display = "block";
}
sdkItem.onmouseout = function () {
    sdkContent.style.display = "none";
}