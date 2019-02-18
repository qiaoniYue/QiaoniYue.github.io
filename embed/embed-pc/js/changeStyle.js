//左右选项卡高度一致
window.onload = function(){
    var gifLeft = document.getElementById("gifLeft");
    var gifRight = document.getElementById("gifRight");
    var hh = document.documentElement.clientHeight;
    gifLeft.style.height = "auto";

    if(gifLeft.offsetHeight < gifRight.offsetHeight){
        if(gifRight.offsetHeight < hh){
            gifLeft.style.height = gifRight.offsetHeight + "px";
        }
        else {
            gifLeft.style.height = hh +"px"
        }
    }
}
//当浏览器窗口大小改变时，设置显示内容的高度,左右选项卡高度一致

window.onresize=function() {
    var gifLeft = document.getElementById("gifLeft");
    var gifRight = document.getElementById("gifRight");
    var hh = document.documentElement.clientHeight-214;
    gifLeft.style.height = "auto";

    if(gifLeft.offsetHeight < gifRight.offsetHeight){
        if(gifRight.offsetHeight < hh){
            gifLeft.style.height = gifRight.offsetHeight + "px";
        }
        else {
            gifLeft.style.height = hh  +"px"
        }
    }
}


/*礼包页面选项卡的切换*/
var gifNav = document.getElementById("gifNav");
var gifDo = document.getElementById("gifDo");
var aGifNav = gifNav.getElementsByTagName("li");
var aGifDo = gifDo.getElementsByTagName("li");
for(var i=0;i<aGifNav.length;i++){
    aGifNav[i].index = i;
    aGifNav[i].onclick = function(){
        for(var j=0;j<aGifNav.length;j++){
            aGifNav[j].className = "";
            aGifDo[j].className = "";
        }
        this.className = "current";
        aGifDo[this.index].className = "act";
    }
}




























