// NAVBAR-HEADER //


$(window).scroll(function(){
    if($(window).scrollTop()){
        $("header").addClass("black");
    }
    else{
        $("header").removeClass("black");
    }
});
