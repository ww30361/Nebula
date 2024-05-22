$(document).ready(function() {
    $(".navbar a").click(function(event){
        event.preventDefault();

        var targetId = $(this).attr("href");

        if (targetId && $(targetId).length) {
            $("html, body").animate({
            scrollTop:$(targetId).offset().top - 75
            }, 1000, "swing");
        }
    });
});



  


     
