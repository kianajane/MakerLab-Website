function navigation() {
    var x = document.getElementById("navigation");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function(){
    var settings = {
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    }
    if($("#farberCarousel").length) {
        $('#farberCarousel').slick(settings);
    }
    if($("#humanitiesCarousel").length) {
        $('#humanitiesCarousel').slick(settings);
    }
    if($("#makerlabCarousel").length) {
        $('#makerlabCarousel').slick(settings);
    }
});
