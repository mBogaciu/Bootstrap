



// automatically ad current year to copyright
var today = new Date();
var year = today.getFullYear();
$('#copy').html('&copy; '+ year)


$('.navbar li').click(function() {
    $('.navbar li.active').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }

});

//Carousel heighr = 25% of width
$(function() {
    var div = $('.item');
    var width = div.width()/4;
    if (width < 175) {
    	width = 175;
    }
    div.css('height', width);
});

  $(document).ready(function() {  
  		 $("#carousel-example-generic").swiperight(function() {  
    		  $(this).carousel('prev');  
	    		});  
		   $("#carousel-example-generic").swipeleft(function() {  
		      $(this).carousel('next');  
	   });  
	}); 

