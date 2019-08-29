function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null) return  unescape(r[2]);
    return null;
}

// 调用方法
//alert(GetQueryString("参数名1"));
//alert(GetQueryString("参数名2"));
//alert(GetQueryString("参数名3"));

//判断我们请求的参数是否为空，首先把值赋给一个变量：
/*
var myurl=GetQueryString("url");
if(myurl !=null && myurl.toString().length>1)
{
    alert(GetQueryString("url"));
}
*/

var curPage = 1;
var type = GetQueryString("type");
if(type==null){
    type = 0;
}

function changeNav(index){
    curPage=1;
    var mask = $(".pow-con-new-nav");
    mask.children("li").removeClass("pow-con-new-cur");
    mask.children("li:eq("+index+")").addClass("pow-con-new-cur");
    type = index;
    $("#powConNewsList").empty();
    morenews();
}

function morenews(){
    var loadLayer = layer.load(1,{type:3,icon:2,time:30000/*,shadeClose:true*/});
    //alert(type);
    //alert(curPage);
    htmlobj = $.ajax({
        //url:"https://api.mguwp.net/csd/bbs/list?app_key=71A47C2518&language=zh&position=2&num=1&page=1",
        //url:"https://api.mguwp.net/csd/bbs/list?app_key=71A47C2518&language=zh&position=2&type=2",
        //url:"https://api.mguwp.net/csd/bbs/list?app_key=71A47C2518&language=zh&position=2&type="+type+"page="+curPage,
        url:"https://api.mguwp.net/csd/bbs/list?app_key=71A47C2518&language=zh&position=2&num=1&type="+type+"&page="+curPage,
        async:false,
        type:"GET"
    });

    var data = JSON.parse(htmlobj.responseText);
    for(var i=0;i<data.length;i++){
        var news = data[i];
        var newsTypeContent = labNewsTypeContent[news.newsType];

        var href = "javascript:void(0)";

        //var href="newsdetail?type="+type+"&id="+news.id+urlParam;
        var newsHtml='<div class="pow-con-news-item">';
        newsHtml=newsHtml+'<a class="pow-con-news-img" href='+ href + '>';
        newsHtml=newsHtml+'<img src=' + news.newsIcon + '>';
        newsHtml=newsHtml+'</a>';
        newsHtml=newsHtml+'<div class="pow-con-news-detail">';
        newsHtml=newsHtml+'<a class="pow-con-news-detail-sig" href='+ href +'>';
        newsHtml=newsHtml+'<span class="pow-con-news-detail-cla">[ '+newsTypeContent+' ] </span>';
        newsHtml=newsHtml+'<span>'+news.newsTitle+'</span>';
        newsHtml=newsHtml+'</a>';
        newsHtml=newsHtml+'<p class="pow-con-news-detail-date">'+news.updateShortTime+'</p>';
        newsHtml=newsHtml+'</div>';
        newsHtml=newsHtml+'<a class="pow-con-news-read" onclick="eject('+news.id+')">'+labDetail+'</a>';
        newsHtml=newsHtml+'</div>';
        $("#powConNewsList").append($(newsHtml));
    }
    if(data.length<1){
        $("#powConMoreBtn").hide();
        $("#powConNewsList").append(labNoCon);
    }
    else{
        $("#powConMoreBtn").show();
    }

    curPage = curPage + 1;
    layer.close(loadLayer);
}

/*点击跳转到新闻详情页面开始*/
function eject(newsId){
    layer.open({
        type: 2,
        title: labDetailtitle,
        maxmin: true,
        shadeClose: true, //点击遮罩关闭层
        area : ['800px' , '520px'],
        content: 'game-news-detail.html?newsId='+newsId
    });
}


changeNav(type);

























