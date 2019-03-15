/*关于GWGC机遇与挑战的轮切*/
window.onload = function(){
    var oList =  document.getElementById('meetTurn');
    var aLi = oList.getElementsByTagName('li');
    for(var i=0;i<aLi.length;i++){
        aLi[i].onmouseover = function(){
            for(var i=0;i<aLi.length;i++){
                aLi[i].className = " ";
            }
            this.className = 'active';
        }
    }
}