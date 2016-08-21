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


// BIG IMAGE POP UP 

var imgNode = document.getElementsByClassName("item");

for(var i = 0; i < imgNode.length; i += 1){
  
  imgNode[i].addEventListener('click', function(e) {

    //  check if img is clicked
    if(e.target.tagName == "IMG"){
      e.preventDefault();

      // creating overlay

      var overlay = document.createElement("div");
      overlay.id  = "overlay";
      document.body.appendChild(overlay);

      // styles overlay
      overlay.style.position = "absolute";
      overlay.style.top = 0;
      overlay.style.backgroundColor = "rgba(0,0,0,.7)";
      overlay.style.cursor = "pointer";
      overlay.style.zIndex = 10002;

      // resize and position overlay
      overlay.style.width = window.innerWidth + "px";
      overlay.style.height = window.innerHeight + "px";
      overlay.style.top = window.pageYOffset + "px";
      overlay.style.left = window.pageXOffset + "px";

      // Create Large Img Element
      var imgSrc = e.target.src,
          largeImg = document.createElement('img');
          largeImg.id = "largeImg";
          largeImg.src = imgSrc.substr(0, imgSrc.length - 7) + ".jpg";
          largeImg.style.position = "absolute";
          largeImg.style.display = "block";

          //  wait till img has loaded
      largeImg.addEventListener('load', function(){
        //  Resize if img is taller
        if(this.height > window.innerHeight){
          this.ratio = window.innerHeight / this.height;
          this.height = this.height * this.ratio;
          this.width = this.width * this.ratio;
        }

        //  Resize if img is taller
        if(this.width > window.innerWidth){
          this.ratio = window.innerWidth / this.width;
          this.height = this.height * this.ratio;
          this.width = this.width * this.ratio;
        }

        centerImg(this);
        overlay.appendChild(largeImg);
      }); // img has loaded


      // closes large img on click on overlay or img itself
      overlay.addEventListener('click', function(){
        if(this){
          window.removeEventListener('resize', window, false);
          window.removeEventListener('scroll', window, false);
          overlay.parentNode.removeChild(overlay);
        }
      }, false);

      // if large img is active and user scroll
      window.addEventListener('scroll', function(){
        if(overlay){
          overlay.style.top = window.pageYOffset + 'px';
          overlay.style.left = window.pageXOffset + 'px';
        }
      }, false);


      // if large img is active and user resize the window
      window.addEventListener('resize', function(){
        if(overlay){
          overlay.style.top = window.pageYOffset + 'px';
          overlay.style.left = window.pageXOffset + 'px';
          overlay.style.width = window.innerWidth + 'px';
          overlay.style.height = window.innerHeight + 'px';
          centerImg(largeImg);
        }
      }, false);


    }

  }, false);

  function centerImg(theImg) {
     var myY = (window.innerHeight - theImg.height) / 2;
     var myX = (window.innerWidth - theImg.width) / 2;

     theImg.style.top = myY + "px";
     theImg.style.left = myX + "px";

     return theImg;
  }


}


}());







