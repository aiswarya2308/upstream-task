function openFunction(){
    document.getElementById("menu").style.width="100%";

}
function closeFunction(){
    document.getElementById("menu").style.width="0px";
    document.getElementById("mainbox").innerHTML="&#9776; Menu"
}


jQuery(document).ready(function($) {
    $('#product-slider').owlCarousel({
        items: 3,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        fade: true,
        cssEase: 'linear'
    });
});