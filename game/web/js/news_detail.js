var thisURL = document.URL;
var getval = thisURL.split('?')[1];
var showval = getval.split("=")[1];

function newsDetail(curNewsId){
    $.ajax({
        type:"GET",
        url:"https://api.mguwp.net/csd/bbs/get?id="+curNewsId,
        async:false,
        dataType:"json",
        success: function(data){
            //alert(data.newsType);
            //alert(data['newsType']);
            //alert(data["newsTitle"]);
            //alert(data['newsSource']);
            //alert(data["updateTime"]);
            //alert(data["newsBody"]);

            $("#cMain").empty();

            var newsHtml='<div class="c-ne-display">';
            newsHtml=newsHtml+'<h2>';
            newsHtml=newsHtml+'<span class="c-ne-label-1">'+labNewsTypeContent[data.newsType]+'</span>';
            newsHtml=newsHtml+'<span class="c-ne-name-span">'+data.newsTitle+'</span>';
            newsHtml=newsHtml+'</h2>';
            newsHtml=newsHtml+'<div class="c-ne-sour">';
            newsHtml=newsHtml+'<div class="c-ne-sour-bar">';
            newsHtml=newsHtml+'<span class="c-ne-sour-icon">';
            newsHtml=newsHtml+'<img src="images/news-source.png">';
            newsHtml=newsHtml+'</span>';
            newsHtml=newsHtml+'<span class="c-ne-sour-txt">Source:'+data.newsSource+'</span>';
            newsHtml=newsHtml+'<span class="c-ne-sour-icon">';
            newsHtml=newsHtml+'<img src="images/news-time.png">';
            newsHtml=newsHtml+'</span>';
            newsHtml=newsHtml+'<span class="c-ne-sour-txt">Release Time:'+data.updateTime+'</span>';
            newsHtml=newsHtml+'</div>';
            newsHtml=newsHtml+'</div>';
            newsHtml=newsHtml+'<div class="c-ne-dec"></div>';
            newsHtml=newsHtml+'<div class="c-ne-paper">';
            newsHtml=newsHtml+ data.newsBody;
            newsHtml=newsHtml+'</div>';
            newsHtml=newsHtml+'<div class="c-ne-dec"></div>';
            newsHtml=newsHtml+'</div>';

            $("#cMain").append($(newsHtml));

        },
        error: function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    });
}

newsDetail(showval);