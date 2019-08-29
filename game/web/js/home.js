window.onload = function(){
    /*H5二维码的显示与隐藏*/
    var proPlays = document.getElementsByClassName("pro_play");
    for(var i=0;i<proPlays.length;i++){
        proPlays[i].onmouseover =  function(){
            this.getElementsByClassName("pro_code")[0].style.display = 'block';
        };
        proPlays[i].onmouseout =  function(){
            this.getElementsByClassName("pro_code")[0].style.display = 'none';
        };
    }

    /*最新产品的动态特效展示*/
    document.getElementById("proOperaIcon").onclick = function(){
        var proLatest = document.getElementById("proLatest");
        var aProLatests = proLatest.getElementsByClassName("pro_latest");
        var proLatest_1 = aProLatests[0];
        var proLatest_2 = aProLatests[1];

        if(proLatest_2.getElementsByTagName("*").length){
            if(proLatest_2.style.display == "none"){
                for(var i =0;i<aProLatests.length;i++){
                    aProLatests[i].style.display = "none";
                }
                proLatest_2.style.display = "block";
            }else {
                for(var j =0;j<aProLatests.length;j++){
                    aProLatests[j].style.display = "none";
                }
                proLatest_1.style.display = "block";
            }
        }

    }

    /*热门游戏的动态特效*/
    var proPopGames = document.getElementsByClassName("pro_pop_item");
    for(var j=0;j<proPopGames.length;j++){
        proPopGames[j].onmouseover = function(){
            for(var h=0;h<proPopGames.length;h++){
                proPopGames[h].style.width = "232px";
                proPopGames[h].getElementsByClassName("pro_pop_add")[0].style.display = "none";
            }
            this.style.width = "474px";
            this.getElementsByClassName("pro_pop_add")[0].style.display = "block";
        }
    }

    /*热门游戏-大图两个来回切换*/
    var oProFeat = document.getElementById("proPopFeat");
    var aProTurnGames = oProFeat.getElementsByClassName("pro_pop_turn");

    var oProSwitchImg = oProFeat.getElementsByClassName("pro_pop_switch_img")[0];
    var aProSwitchImgs = oProSwitchImg.getElementsByTagName("li");

    var oProPopSwitchIcon = oProFeat.getElementsByClassName("pro_pop_switch_icon_bar")[0];
    var aProPopSwitchSpan = oProPopSwitchIcon.getElementsByTagName("span");

    /*热门游戏定时器*/
    function popSwitch(){
        for(var n=0; n<aProPopSwitchSpan.length;n++) {
            aProPopSwitchSpan[n].index = n;
            if(aProPopSwitchSpan[n].classList.contains("current")){
                aProPopSwitchSpan[n].classList.remove("current");
                aProSwitchImgs[aProPopSwitchSpan[n].index].classList.remove("active");
                aProTurnGames[aProPopSwitchSpan[n].index].style.display = "none";
            }
            else {
                aProPopSwitchSpan[n].classList.add("current");
                aProSwitchImgs[aProPopSwitchSpan[n].index].classList.add("active");
                aProTurnGames[aProPopSwitchSpan[n].index].style.display = "block";
            }
        }
    }

    timer = setInterval(popSwitch,3000);

    oProFeat.onmouseover = function(){
        clearInterval(timer);
    }
    oProFeat.onmouseout = function(){
        timer = setInterval(popSwitch,3000);
    }


    for(var k=0;k<aProSwitchImgs.length;k++) {
        aProSwitchImgs[k].index = k;
        aProSwitchImgs[k].onmouseover = function(){
            if(this.classList.contains("active")){

            }
            else {
                for(var m=0;m<aProSwitchImgs.length;m++){
                    aProSwitchImgs[m].classList.remove("active");
                    aProPopSwitchSpan[m].classList.remove("current");
                    aProTurnGames[m].style.display = "none";
                }
                this.classList.add("active");
                aProPopSwitchSpan[this.index].classList.add("current");
                aProTurnGames[this.index].style.display = "block";
            }

        }
    }
    /*热门游戏-大图两个来回切换结束*/

}

