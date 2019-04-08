var gifValue1 = document.getElementById("gifValue1");
var gifItemDe_1 = document.getElementById("gif-item-detail-1");
var timerGif = null;


gifItemDe_1.onmouseover = gifValue1.onmouseover = function(){
    clearTimeout(timerGif);
    gifItemDe_1.style.display = "block";
};
gifItemDe_1.onmouseout = gifValue1.onmouseout = function(){
    timerGif = setTimeout(function(){
        gifItemDe_1.style.display = "none";
    },800)
}




