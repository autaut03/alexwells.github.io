$(document).ready(function() {
    localizeWholeSite(Cookies.get('lang') || 'ru');
	
	$('.switch-lang').click(function(event) {
		let lang = $(this).attr('data-lang');
		console.log('Language changed', lang);
		localizeWholeSite(lang);
		Cookies.set('lang', lang, { expires: 365 });
		event.preventDefault();
	});
	
	// jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) { // "this" is critical over here.
        let $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
		}, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(() => { 
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });
	
	$('body').addClass('loaded');
});

function localizeWholeSite(language = 'ru') {
	$('[data-localize]').localize('../assets/translations/main', { language });
}