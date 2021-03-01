AOS.init({
	duration: 800,
	easing: 'slide',
	once: true
});

$(document).ready(() => {
	$(".menu-toggle").click(() => {
		$(".mobile-menu").toggleClass("motion-in");
	  });
})
