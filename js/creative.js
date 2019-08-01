/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();
	
	$('#form1').submit(function(evnt){
		var email=$('[name=email]').val($.trim($('[name=email]').val())).val(),
		message=$('[name=message]').val($.trim($('[name=message]').val())).val(),
		reg=new RegExp('^[^\s@]+@[^\s@]+\.[^\s@]+$'),rtrn=true;
		if(email.replace(/ /g,'')==''){alert('Your E-mail address is empty.');rtrn=false;
		} else if(!reg.test(email)){alert('Your E-mail address is invalid.');rtrn=false;}
		if(message.replace(/ /g,'')==''){alert('Your message is empty.');rtrn=false;
		} else if(!(new RegExp('[^\s@]+').test(message))){alert('Your message is invalid.');rtrn=false
		} else if(message.length<10){alert('Your message is too short.');rtrn=false;}
		return rtrn;
	})

})(jQuery); // End of use strict
