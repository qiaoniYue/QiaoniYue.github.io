/*游戏产品单页的动态特效*/
/*弹出二维码*/

var oPowCode = document.getElementById("powCode");
var oPowCodePopLayer = document.getElementById("powCodePopLayer");
var oPowCodePopBox = document.getElementById("powCodePopBox");
var oPowCodeClose = document.getElementById("powCodeClose");

if(oPowCode){
    oPowCode.onclick = function(){
        oPowCodePopLayer.style.display = "block";
        oPowCodePopBox.style.display = "block";
    };
}

if(oPowCodeClose){
    oPowCodeClose.onclick = function(){
        oPowCodePopLayer.style.display = "none";
        oPowCodePopBox.style.display = "none";
    }
}



/*语言弹出框-非常重要的*/
/*

var oPowItemMore = document.getElementById("powItemMore");
var oPowLanguageBox = document.getElementById("powLanguageBox");
var oPowLanguageClose = document.getElementById("powLanguageClose");

oPowItemMore.onclick = function(){
    oPowCodePopLayer.style.display = "block";
    oPowLanguageBox.style.display = "block";
};


oPowLanguageClose.onclick = function(){
    oPowCodePopLayer.style.display = "none";
    oPowLanguageBox.style.display = "none";
};

*/

/*游戏产品单页内容部分选项卡的切换*/
var oPowFunNav = document.getElementById("powFunNav");
var aPowFunNav = oPowFunNav.getElementsByTagName("li");

var oPowFunCon = document.getElementById("powFunCon");
var aPowFunCon = oPowFunCon.getElementsByClassName("pow-con-list-item");

for(var i=0;i<aPowFunNav.length;i++){
    aPowFunNav[i].index = i;
    aPowFunNav[i].onclick = function(){
        for(var j=0;j<aPowFunNav.length;j++){
            aPowFunNav[j].className = " ";
            aPowFunCon[j].className = "pow-con-list-item";
        }
        this.className = "current";
        aPowFunCon[this.index].className = "pow-con-list-item active";

    }
}

/*弹出的视频以及图片展示*/
/*
var oPowScrList = document.getElementById("powScrList");
var aPowScrLi = oPowScrList.getElementsByTagName("li");*/

/*评论弹出二维码*/
var oPowRevCom = document.getElementById("powRevCom");

var oPowCommentCtn = document.getElementById("powCommentCtn");
var oPowCommentAnswer = document.getElementById("powCommentAnswer");

var oPowCommentBox = document.getElementById("powCommentBox");
var oPowCommentClose = document.getElementById("powCommentClose");
var oPowCommentCancel = document.getElementById("powCommentCancel");
var oPowCommentAnswerBtn = document.getElementById("powCommentAnswerBtn");
var oPowCommentSubmit = document.getElementById("powCommentSubmit");

if(oPowRevCom){
    oPowRevCom.onclick = function(){
        oPowCodePopLayer.style.display = "block";
        oPowCommentBox.style.display = "block";
    };
}

if(oPowCommentClose){
    oPowCommentClose.onclick = oPowCommentCancel.onclick = oPowCommentAnswerBtn.onclick = function(){
        oPowCodePopLayer.style.display = "none";
        oPowCommentBox.style.display = "none";
        oPowCommentCtn.style.display = "block";
        oPowCommentAnswer.style.display = "none";
    }
}

if(oPowCommentSubmit){
    oPowCommentSubmit.onclick = function(){
        oPowCommentCtn.style.display = "none";
        oPowCommentAnswer.style.display = "block";
    }
}

































