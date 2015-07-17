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



$(function () {
	"use strict";
    
    /*global $ $*/ 
	//Slider 
	$(document).ready(function(){
		
		$('.skillbar').each(function() {
			$(this).appear(function() {
				$(this).find('.count-bar').animate({
					width:$(this).attr('data-percent')
				},3000);
				var percent = $(this).attr('data-percent');
				$(this).find('.count').html('<span>' + percent + '</span>');
			});
		});	
	});
	
}());
