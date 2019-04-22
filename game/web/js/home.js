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
}