/*中英文切换*/
document.writeln("<div class=\'switchBox\'>");
document.writeln("    <a href=\'\' class=\'\'>中文</a>");
document.writeln("    <a href=\'\' class=\'\'>English</a>");
document.writeln("</div>");

var switchBox = document.getElementsByClassName("switchBox")[0];
var switchCh = switchBox.getElementsByTagName("a")[0];
var switchEn = switchBox.getElementsByTagName("a")[1];
var pageUrl = window.location.href;

var pageUrlDefault = "https://qiaoniyue.github.io/PC/";
var pageUrlWords = pageUrl.split("en/");
var pageUrlValue = "";
if(pageUrlWords.length == 1) {
    /*在url地址不包含字符串"en/"的时候，则pageUrlWords只有一个值*/
    var pageUrlWordsLast = pageUrlWords[0].replace(pageUrlDefault,"");
    pageUrlValue = pageUrlDefault + "en/" + pageUrlWordsLast;
}
else{
    /*在url地址包含字符串"en/"的时候，则pageUrlWords只有两个值*/
    pageUrlValue = pageUrlDefault + pageUrlWords[1];
}
if(pageUrl.indexOf("en/") >= 0){
    switchCh.className = "switchable";
    switchCh.href = pageUrlValue;
    switchEn.className = "";
    switchEn.href = "javascript:void(0)";
}
else {
    switchCh.className = "";
    switchCh.href = "javascript:void(0)";
    switchEn.className = "switchable";
    switchEn.href = pageUrlValue;
}