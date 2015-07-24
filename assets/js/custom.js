var topH = $('#top').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= topH) {

    $('.alt').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.alt p').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    $('#top footer').css({
      'transform' : 'translate(0px, '+ wScroll /100 +'%)'
    });

  }


  // Landing Elements
 /* if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

    $('.clothes-pics figure').each(function(i){

      setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });

  }*/


  // Promoscope
/*  if(wScroll > $('.large-window').offset().top - $(window).height()){

    $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

    $('.window-tint').css({'opacity': opacity});

  }
*/

  // Floating Elements
/*
  if(wScroll > $('.blog-posts').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }*/
});



jQuery(function () {
	"use strict";
    
    /*global jQuery $*/ 
	//Slider 
	$(document).ready(function(){
		
		jQuery('.skillbar').each(function() {
			jQuery(this).appear(function() {
				jQuery(this).find('.count-bar').animate({
					width:jQuery(this).attr('data-percent')
				},3000);
				var percent = jQuery(this).attr('data-percent');
				jQuery(this).find('.count').html('<span>' + percent + '</span>');
			});
		});	
	});

  var delay = 1,
  duration = $("#scroll .item").length * delay;

  $("#scroll .item").each(function(n) {
    $(this).css("transform", "translateY(-"+(n*100)+"%)");
    $(this).css("animation", "scrollanim "+duration+"s linear -"+(delay*n)+"s infinite");
  });

  $( 'a' ).imageLightbox();

// var $instance = $( selector ).imageLightbox();
 
// $instance.switchImageLightbox( index );
// // switches to the other image; accepts integer argument (an index of the desired image)
 
// $instance.quitImageLightbox();
// // quits the lightbox

//   $( selector ).imageLightbox(
//   {
//       selector:       'id="imagelightbox"',   // string;
//       allowedTypes:   'png|jpg|jpeg|gif',     // string;
//       animationSpeed: 250,                    // integer;
//       preloadNext:    true,                   // bool;            silently preload the next image
//       enableKeyboard: true,                   // bool;            enable keyboard shortcuts (arrows Left/Right and Esc)
//       quitOnEnd:      false,                  // bool;            quit after viewing the last image
//       quitOnImgClick: false,                  // bool;            quit when the viewed image is clicked
//       quitOnDocClick: true,                   // bool;            quit when anything but the viewed image is clicked
//       onStart:        false,                  // function/bool;   calls function when the lightbox starts
//       onEnd:          false,                  // function/bool;   calls function when the lightbox quits
//       onLoadStart:    false,                  // function/bool;   calls function when the image load begins
//       onLoadEnd:      false                   // function/bool;   calls function when the image finishes loading
//   });
	
}());







