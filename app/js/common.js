(function ($) {
	$(document).ready(function () {
		$(function() {
			$('#main-menu').smartmenus();
		});
		$(window).scroll(function() {
			var scrolled = $(window).scrollTop() + $(window).height();
			var heightscreen = $(window).height();
			var heightscreen2 = $(window).scrollTop();
			if ( scrolled > heightscreen) {
				$("#main-menu").css("display", "none");
			}

			if ( scrolled > 50) {
				$("#main-menu-state").trigger( "click" );
			}
			console.log(heightscreen2);
		});
		document.querySelector(".main-menu-btn").onclick = function(){
			$("#main-menu").css("display", "block");
		};
	});
})(jQuery);