$(function () {
	$(".nav-bar").click(function () {
		$(".open-menu").slideToggle();
		$(this).toggleClass('active');
	});
	$('.slider-client').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});
	wow = new WOW(
		{
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: true,
			live: true
		}
	)
	wow.init();
});
mybutton = document.getElementById("btn-top");
$(document).ready(function() {
	$(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    });
	$('#btn-top').click(function(){
        $('html, body').animate({scrollTop : 0}, 0);
        return false;
    });
	$(".triangle-up").click(function(event){       
        event.preventDefault();
        $([document.documentElement, document.body]).animate({
			scrollTop: $(".about-us").offset().top}, 0);
    });
});