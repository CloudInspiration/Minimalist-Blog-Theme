$(document).ready(function() {
	$('.b-article__load-button').on('click', function(e) {
		e.preventDefault();
		$(this).text('Sorry, not posts to show :(');
	});
	$('.b-top__button').on('click', function(e) {
		e.preventDefault();
		$('body, html').animate({
			scrollTop: 0
		}, 400);
	});
	new WOW().init();
});