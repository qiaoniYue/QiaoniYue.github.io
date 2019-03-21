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
document.writeln("                    <a class=\'roof-register\' href=\'https://dev.mguwp.net/main/registerIndex\' target=\'_blank\'>Register</a>");
document.writeln("                    <a class=\'roof-login\' href=\'https://dev.mguwp.net\' target=\'_blank\'>Login</a>");
document.writeln("                </div>");
document.writeln("            </div>");
document.writeln("            <div class=\'roof-nav\'>");
document.writeln("                <ul class=\'roof-nav-bar\' id=\'roof-nav-bar\'>");
document.writeln("                    <li class=\'roof-nav-sort\'>");
document.writeln("                        <a href=\'principal.html\' class=\'roof-nav-content\'>");
document.writeln("                            Home");
document.writeln("                            <span>&nbsp;</span>");
document.writeln("                        </a>");
document.writeln("                    </li>");
document.writeln("                    <li class=\'roof-nav-sort\'>");
document.writeln("                        <a href=\'advertisers.html\' class=\'roof-nav-content\'>");
document.writeln("                            Advertiser");
document.writeln("                            <span>&nbsp;</span>");
document.writeln("                        </a>");
document.writeln("                    </li>");
document.writeln("                    <li class=\'roof-nav-sort\'>");
document.writeln("                        <a href=\'developers.html\' class=\'roof-nav-content\'>");
document.writeln("                            Developers");
document.writeln("                            <span>&nbsp;</span>");
document.writeln("                        </a>");
document.writeln("                    </li>");
document.writeln("                    <li class=\'roof-nav-sort\'>");
document.writeln("                        <a href=\'receive.html\' class=\'roof-nav-content\'>");
document.writeln("                            Advertising SDK");
document.writeln("                            <span>&nbsp;</span>");
document.writeln("                        </a>");
document.writeln("                    </li>");
document.writeln("                    <li class=\'roof-nav-sort\'>");
document.writeln("                        <a href=\'platform.html\' class=\'roof-nav-content\'>");
document.writeln("                            Data Management");
document.writeln("                            <span>&nbsp;</span>");
document.writeln("                        </a>");
document.writeln("                    </li>");
document.writeln("                    <li class=\'roof-nav-sort\'>");
document.writeln("                        <a href=\'javascript:void(0)\' class=\'roof-nav-content\' id=\'roof-nav-cursor\'>");
document.writeln("                            About Us");
document.writeln("                            <span>&nbsp;</span>");
document.writeln("                        </a>");
document.writeln("                        <ul class=\'roof-nav-sub-item\'>");
document.writeln("                            <li>");
document.writeln("                                <a href=\'https://www.mguwp.net/en/introduce.html\' target=\'_blank\'>About US</a>");
document.writeln("                            </li>");
document.writeln("                            <li>");
document.writeln("                                <a href=\'https://www.mguwp.net/en/join.html\' target=\'_blank\'>Join Us</a>");
document.writeln("                            </li>");
document.writeln("                            <li>");
document.writeln("                                <a href=\'https://www.mguwp.net/en/contact.html\' target=\'_blank\'>Contact Us</a>");
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
var pagePro = window.location.protocol;
var pageHost = window.location.host;
/*
中文网址：
http://ad.mguwp.net/
https://ad.mguwp.net/
https://ad.mguwp.net/principal.html
英文网址：
http://www.mguwp.net/en/adcenter/principal.html
https://www.mguwp.net/en/adcenter/principal.html
http://www.mguwp.com/en/adcenter/principal.html
https://www.mguwp.com/en/adcenter/principal.html
*/

var pageUrlWords = pageUrl.split("/en");
var pageUrlValue = "";
if(pageUrlWords.length == 1) {
    /*在url地址不包含字符串"/en"的时候，则pageUrlWords只有一个值*/
    /*var pageUrlWordsLast = pageUrlWords[0].replace("https://ad.mguwp.net/.net/","");*/
    var pageUrlWordsLast1 = pageUrlWords[0].replace(pagePro,"");
    var pageUrlWordsLast2 = pageUrlWordsLast1.slice(2).replace(pageHost,"");
    /*
     pageUrlWordsLast2  是 "/"
     pageUrlWordsLast2 或者是  "/principal.html"
    */
    if(pageUrlWordsLast2.length == 1){
        pageUrlWordsLast2 = "/principal.html";
    }
    pageUrlValue = "https://www.mguwp.net/en/adcenter" + pageUrlWordsLast2;
}
else{
    /*
        在url地址包含字符串"/en"的时候，则pageUrlWords只有两个值
        pageUrlWords[1]  是   /adcenter/principal.html
    */
    var pageUrlWordsLast = pageUrlWords[1].replace("/adcenter","");
    /*pageUrlWordsLast   是  "/principal.html" */
    pageUrlValue = "https://ad.mguwp.net" + pageUrlWordsLast;
}
if(pageUrl.indexOf("/en") >= 0){
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

