/*刷新*/
function reloadPage()
{
    window.location.reload()
}

window.onload=function(){
    /*颈部四个选项的切换*/
    var oRec = document.getElementById('recRank');
    var aRecLi = oRec.getElementsByTagName('li');
    var oRecBox = document.getElementById('recBox');
    var aRecCon = oRecBox.getElementsByClassName('recCon');

    for(var i=0;i<aRecLi.length;i++){
        aRecLi[i].index=i;
        aRecLi[i].onclick=function(){
            for(var i=0;i<aRecLi.length;i++){
                aRecLi[i].classList.remove("active");
                aRecCon[i].style.display='none';
            }
            this.classList.add("active");
            aRecCon[this.index].style.display='block';
        }
    }

    /*主体内容左右内容的切换*/

    /*左侧选项-设备分布列表的点击事件*/
    var oUlFac = document.getElementById("recFacility");
    var aLiFac = oUlFac.getElementsByTagName("li");
    for(var i=0;i<aLiFac.length;i++){
        aLiFac[i].onclick = function(){
            for(var j=0;j<aLiFac.length;j++){
                aLiFac[j].className = "";
            }
            this.className = "current";
        }
    }
    /*左侧选项-用户画像列表的点击事件*/
    var oUlSex = document.getElementById("recSex");
    var aLiSex = oUlSex.getElementsByTagName("li");
    for(var i=0;i<aLiSex.length;i++){
        aLiSex[i].onclick = function(){
            for(var j=0;j<aLiSex.length;j++){
                aLiSex[j].className = "";
            }
            this.className = "current";
        }
    }
    /*左侧选项-应用行情列表的点击事件*/
    var oUlApply = document.getElementById("recApply");
    var aUlApply = oUlApply.getElementsByTagName("li");
    for(var i=0;i<aUlApply.length;i++){
        aUlApply[i].onclick = function(){
            for(var j=0;j<aUlApply.length;j++){
                aUlApply[j].className = "";
            }
            this.className = "current";
        }
    }
    /*左侧选项-win10行业报告列表的点击事件*/
    var oUlReport = document.getElementById("recReport");
    var aUlReport = oUlReport.getElementsByTagName("li");
    for(var i=0;i<aUlReport.length;i++){
        aUlReport[i].onclick = function(){
            for(var j=0;j<aUlReport.length;j++){
                aUlReport[j].className = "";
            }
            this.className = "current";
        }
    }
}