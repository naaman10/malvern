$(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 60) {
	    $(".fixed-top").css("background" , "#fff");
	  }
	  else{
      $(".fixed-top").css("background" , "transparent");
	  }
  });
  $('.counter').counterUp({
      delay: 40,
      time: 2000
  });
