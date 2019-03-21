/*中英文切换*/
document.writeln("<div class=\'switchBox\'>");
document.writeln("    <a href=\'\' class=\'\'>中文</a>");
document.writeln("    <a href=\'\' class=\'\'>English</a>");
document.writeln("</div>");

var switchBox = document.getElementsByClassName("switchBox")[0];
var switchCh = switchBox.getElementsByTagName("a")[0];
var switchEn = switchBox.getElementsByTagName("a")[1];
var pageUrl = window.location.href;
var pagePro = window.location.protocol;
var pageHost = window.location.host;
/*
中文地址：
http://www.mguwp.net/index.html
https://www.mguwp.net/index.html
http://www.mguwp.com/index.html
https://www.mguwp.com/index.html
英文地址：
http://www.mguwp.net/en/index.html
https://www.mguwp.net/en/index.html
http://www.mguwp.com/en/index.html
https://www.mguwp.com/en/index.html
*/
var pageUrlWords = pageUrl.split("/en");
var pageUrlValue = "";
if(pageUrlWords.length == 1) {
    /*在url地址不包含字符串"/en"的时候，则pageUrlWords只有一个值*/
    var pageUrlWordsLast1 = pageUrlWords[0].replace(pagePro,"");
    /**/
    var pageUrlWordsLast2 = pageUrlWordsLast1.slice(2).replace(pageHost,"");
    /*  pageUrlWordsLast2  是 "/index.html" */
    pageUrlValue = pagePro + "//" + pageHost + "/en" + pageUrlWordsLast2;
}
else{
    /*在url地址包含字符串"/en"的时候，则pageUrlWords只有两个值*/
    pageUrlValue = pagePro + "//" + pageHost + pageUrlWords[1];
}
if(pageUrl.indexOf("/en") >= 0){
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