(function ($) {
	$(document).ready(function () {
		$(function() {
			$('#main-menu').smartmenus();
		});
		
		$(window).scroll(function() {
			var scrolled = $(window).scrollTop() + $(window).height();
			if ( scrolled > 50) {
				if ( $('#main-menu-state').prop('checked') ) {
					$("#clicks").trigger( "click" );
				}
			}
		});
	});
})(jQuery);