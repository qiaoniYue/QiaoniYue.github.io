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
    function popSwitch(){
        var oProPopSwitchIcon = document.getElementsByClassName("pro_pop_switch_icon")[0];
        var aProPopSwitchSpan = oProPopSwitchIcon.getElementsByTagName("span");
        for(var k=0; k<aProPopSwitchSpan.length;k++) {

            if(aProPopSwitchSpan[k].classList.contains("current")){
                aProPopSwitchSpan[k].classList.remove("current");
            }
            else {
                aProPopSwitchSpan[k].classList.add("current");
            }
        }
    }

    var timer = setInterval(function(){
        popSwitch();
    },1000);


}

