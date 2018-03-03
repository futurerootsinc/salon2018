jQuery(document).ready(function($) {
	$.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() == b ? a : b);
    }
});

	$('.icon-plus').on('click', function() {

		if ($(this).parent().hasClass('open')) {
			$('.music-person').removeClass('open').addClass('close');
			$(this).html('+');
		} else {
			$('.music-person').removeClass('open').addClass('close');
			$('.icon-plus').html('+');

			$(this).parent().removeClass('close').addClass('open');
			$(this).html('-');
		}

	});

	// Initiate AOS animatin library
	AOS.init({
		disable: function () {
			// disable for mobile
			var maxWidth = 1024;
			return window.innerWidth < maxWidth;
		}
	});

	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		// On-page links
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function() {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(':focus')) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	});

});
