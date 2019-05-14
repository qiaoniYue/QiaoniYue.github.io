$("#powFiveFlash #powButPrev img").click(function(){
    $self = $('#powAlsoList');
    $self.stop().animate({"margin-left" : -242 +"px"},800 , function(){
        $self.css({"margin-left":"0px"}).find("li:first").appendTo($self);
    });
});

$("#powFiveFlash #powButNext img").click(function(){
    $self = $('#powAlsoList');
    $self.css({"margin-left" : -242 +"px"}).find("li:last").prependTo($self);
    $self.stop().animate({"margin-left" : "0px"},800 , function(){});
});