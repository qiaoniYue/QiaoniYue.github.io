document.writeln("<div id=\'roof\' class=\'roof\'>");
document.writeln("    <div class=\'roof-box\'>");
document.writeln("        <div class=\'roof-bar\'>");
document.writeln("            <div class=\'roof-logo\'>");
document.writeln("                <a href=\'principal.html\' class=\'roof-logo-link\'>");
document.writeln("                    <img src=\'images/roof-logo.png\'>");
document.writeln("                </a>");
document.writeln("            </div>");
document.writeln("            <div class=\'roof-switch\'>");
document.writeln("                <a href=\'\' class=\'\'>中文</a>");
document.writeln("                <a href=\'\' class=\'\'>English</a>");
document.writeln("            </div>");
document.writeln("            <div class=\'roof-sign\'>");
document.writeln("                <div class=\'roof-sign-bar\'>");
document.writeln("                    <a class=\'roof-register\' href=\'https://dev.mguwp.net/main/registerIndex\' target=\'_blank\'>注册</a>");
document.writeln("                    <a class=\'roof-login\' href=\'https://dev.mguwp.net\' target=\'_blank\'>登录</a>");
document.writeln("                </div>");
document.writeln("            </div>");
document.writeln("            <div class=\'roof-nav\'>");
document.writeln("                <ul class=\'roof-nav-bar\' id=\'roof-nav-bar\'>");
document.writeln("                    <li class=\'roof-nav-sort\'>");
document.writeln("                        <a href=\'principal.html\' class=\'roof-nav-content\'>");
document.writeln("                            首页");
document.writeln("                            <span>&nbsp;</span>");
document.writeln("                        </a>");
document.writeln("                    </li>");
document.writeln("                    <li class=\'roof-nav-sort\'>");
document.writeln("                        <a href=\'advertisers.html\' class=\'roof-nav-content\'>");
document.writeln("                            广告主");
document.writeln("                            <span>&nbsp;</span>");
document.writeln("                        </a>");
document.writeln("                    </li>");
document.writeln("                    <li class=\'roof-nav-sort\'>");
document.writeln("                        <a href=\'developers.html\' class=\'roof-nav-content\'>");
document.writeln("                            开发者");
document.writeln("                            <span>&nbsp;</span>");
document.writeln("                        </a>");
document.writeln("                    </li>");
document.writeln("                    <li class=\'roof-nav-sort\'>");
document.writeln("                        <a href=\'receive.html\' class=\'roof-nav-content\'>");
document.writeln("                            广告SDK");
document.writeln("                            <span>&nbsp;</span>");
document.writeln("                        </a>");
document.writeln("                    </li>");
document.writeln("                    <li class=\'roof-nav-sort\'>");
document.writeln("                        <a href=\'platform.html\' class=\'roof-nav-content\'>");
document.writeln("                            数据管理");
document.writeln("                            <span>&nbsp;</span>");
document.writeln("                        </a>");
document.writeln("                    </li>");
document.writeln("                    <li class=\'roof-nav-sort\'>");
document.writeln("                        <a href=\'javascript:void(0)\' class=\'roof-nav-content\' id=\'roof-nav-cursor\'>");
document.writeln("                            关于我们");
document.writeln("                            <span>&nbsp;</span>");
document.writeln("                        </a>");
document.writeln("                        <ul class=\'roof-nav-sub-item\'>");
document.writeln("                            <li>");
document.writeln("                                <a href=\'https://www.mguwp.net/introduce.html\' target=\'_blank\'>关于MG</a>");
document.writeln("                            </li>");
document.writeln("                            <li>");
document.writeln("                                <a href=\'https://www.mguwp.net/join.html\' target=\'_blank\'>招贤纳士</a>");
document.writeln("                            </li>");
document.writeln("                            <li>");
document.writeln("                                <a href=\'https://www.mguwp.net/contact.html\' target=\'_blank\'>联系我们</a>");
document.writeln("                            </li>");
document.writeln("                        </ul>");
document.writeln("                    </li>");
document.writeln("                </ul>");
document.writeln("            </div>");
document.writeln("        </div>");
document.writeln("    </div>");
document.writeln("</div>");


var switchBox = document.getElementsByClassName("roof-switch")[0];
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
    switchCh.className = "roof-switchable";
    switchCh.href = pageUrlValue;
    switchEn.className = "";
    switchEn.href = "javascript:void(0)";
}
else {
    switchCh.className = "";
    switchCh.href = "javascript:void(0)";
    switchEn.className = "roof-switchable";
    switchEn.href = pageUrlValue;
}


















