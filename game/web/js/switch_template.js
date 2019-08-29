/*截图自动滚动*/
/*

var oPowScrList = document.getElementById("powScrList");
var aPowScrLi = oPowScrList.getElementsByTagName("li");
var speed = -540;
oPowScrList.innerHTML = oPowScrList.innerHTML + oPowScrList.innerHTML;
oPowScrList.style.width = aPowScrLi[0].offsetWidth * aPowScrLi.length + "px";
function move(){
    if(oPowScrList.offsetLeft<-oPowScrList.offsetWidth/2){
        oPowScrList.style.left = '0';
    }
    if(oPowScrList.offsetLeft>0){
        oPowScrList.style.left=-oPowScrList.offsetWidth/2+'px';
    }
    oPowScrList.style.left = oPowScrList.offsetLeft + speed+'px';
}

timer = setInterval(move,10000);

oPowScrList.onmouseover = function(){
    clearInterval(timer);
};
oPowScrList.onmouseout = function(){
    timer = setInterval(move,10000);
};

*/
/*得到截图list的宽度*/
/*

var oPowScrList = document.getElementById("powScrList");
var aPowScrLi = oPowScrList.getElementsByTagName("li");
if(oPowScrList){
    oPowScrList.innerHTML = oPowScrList.innerHTML + oPowScrList.innerHTML;
    oPowScrList.style.width = aPowScrLi[0].offsetWidth * aPowScrLi.length + "px";
}

*/

/*截图的左右切换*/

$("#powTwoScrFlash #powButScrNext a").click(function(){
    $self = $('#powScrList');
    $self.stop().animate({"margin-right" : -540 +"px"},200 , function(){
        $self.css({"margin-right":"0px"}).find("li:first").appendTo($self);
    });
});

$("#powTwoScrFlash #powButScrPrev a").click(function(){
    $self = $('#powScrList');
    $self.css({"margin-right" : -540 +"px"}).find("li:last").prependTo($self);
    $self.stop().animate({"margin-right" : "0px"},200 , function(){});
});

/*你可能喜欢的左右切换*/
$("#powFiveFlash #powButNext a").click(function(){
    $self = $('#powAlsoList');
    $self.stop().animate({"margin-right" : -242 +"px"},200 , function(){
        $self.css({"margin-right":"0px"}).find("li:first").appendTo($self);
    });
});

$("#powFiveFlash #powButPrev a").click(function(){
    $self = $('#powAlsoList');
    $self.css({"margin-right" : -242 +"px"}).find("li:last").prependTo($self);
    $self.stop().animate({"margin-right" : "0px"},200 , function(){});
});

