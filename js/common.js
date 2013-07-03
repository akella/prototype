$(document).ready(function() {
	$('.topline__toggleaside,.sidenav__toggle').click(function (e) {
		$('body').toggleClass('is-withsidebar');
	});
	$('.hentry,.read__overlay').click(function (e) {
		$('body').toggleClass('is-reading')
	});
	$('.promoted__toggle').click(function (e) {
		$('.promoted').slideToggle();
	});
});