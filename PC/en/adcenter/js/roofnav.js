var roofNavBar = document.getElementById("roof-nav-bar");
var roofNavSort = roofNavBar.getElementsByClassName("roof-nav-sort");
for(var i=0;i<roofNavSort.length;i++){
    /*导航鼠标经过的时候，显示隐藏的二级标题*/
    roofNavSort[i].onmouseover = function(){
        this.getElementsByTagName("a")[0].className = "roof-nav-content active";
        this.getElementsByClassName("roof-nav-sub-item")[0].style.display = "block";
    }
    /*导航鼠标离开的时候，隐藏二级标题*/
    roofNavSort[i].onmouseout = function(){
        this.getElementsByTagName("a")[0].className = "roof-nav-content";
        this.getElementsByClassName("roof-nav-sub-item")[0].style.display = "none";
    }
}