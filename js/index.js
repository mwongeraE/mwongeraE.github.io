$(document).ready(function(){
    $(".begin").on("click",function(){
        $(".sec-A").addClass("showing");
        $(".head").hide();
    });
    $(".down").on("click",function(){
        $(".head").addClass("head-hide");
    });
    $(".home").on("click",function(){
        $(".side").removeClass("showing");
    });
    $(".code-btn").on("click",function(){
        $(".sec-B").addClass("showing");
    });
    $(".back-btn").on("click",function(){
        $(".sec-B").removeClass("showing");
    });
});

$(document).ready(function (){
    var zindex = 10;

    $(".grid-item").click(function (){
        var clickedElement = $(this);

        $(".grid-item").find("> .info").removeClass(".show-info");
        $(".grid-item").find("> .info").addClass("hide-info");
        $(".grid-item").find("> .info button").css("visibility", "collapse");

        if (clickedElement.find("> .info").hasClass("hide-info")){
            clickedElement.find("> .info").removeClass("hide-info");
            clickedElement.find("> .info").addClass("show-info");
            clickedElement.find("> .info button").css("visibility", "visible");
        }
    });
});
