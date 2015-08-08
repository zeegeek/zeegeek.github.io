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


}());







