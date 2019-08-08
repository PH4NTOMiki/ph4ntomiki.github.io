/*Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com) Code licensed under the Apache License v2.0. For details, see http://www.apache.org/licenses/LICENSE-2.0.*/

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
    $('.navbar-collapse a').click(function() {
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
	
	//$('video').on('pause',function(evnt){evnt.target.play();});
	//setTimeout(function(){if($('video').get(0).paused){$('video').get(0).play();}},5000);
	$('video').get(0).play();
	
	$('#form1').submit(function(evnt){
		var name=$('[name=name]').val($.trim($('[name=name]').val())).val(),
		email=$('[name=email]').val($.trim($('[name=email]').val())).val(),
		message=$('[name=message]').val($.trim($('[name=message]').val())).val(),
		reg=new RegExp('^[^\s@]+@[^\s@]+\.[^\s@]+$'),textReg=new RegExp('[^\s@]+'),rtrn=true;
		
		if(name.replace(/ /g,'') == ''){alert('Name field is empty.');rtrn=false;
		} else if(!textReg.test(name)){alert('Your Name doesn\'t seem right.');rtrn=false;
		} else if(name.length<3){alert('Your Name seems too short.');rtrn=false;}
		
		if(email.replace(/ /g,'') == ''){alert('E-mail address field is empty.');rtrn=false;
		} else if(!reg.test(email)){alert('E-mail address format is invalid.');rtrn=false;}
		
		if(message.replace(/ /g,'') == ''){alert('Message field is empty.');rtrn=false;
		} else if(!textReg.test(message)){alert('Your Message doesn\'t seem right.');rtrn=false;
		} else if(message.length<10){alert('Your Message is too short.');rtrn=false;}
		return rtrn;
	});

})(jQuery); // End of use strict
