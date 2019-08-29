function changeLanguage(language){
    AjaxGet("setlanguage?language="+language, function(data) {
        if (data == "1") {
            window.location.reload();
        }
    });
}

/* 语言切换的动态特效-begin */
var ohLangVis2 = document.getElementById("hLangVis2");
var ohLangPack2 = document.getElementById("hLangPack2");
var timer = null;
ohLangPack2.onmouseover = ohLangVis2.onmouseover = function(){
    clearTimeout(timer);
    ohLangPack2.style.display = "block";
}
ohLangPack2.onmouseout = ohLangVis2.onmouseout = function(){
    timer = setTimeout(function(){
        ohLangPack2.style.display = "none";
    },800)
}
/* 语言切换的动态特效-end */
