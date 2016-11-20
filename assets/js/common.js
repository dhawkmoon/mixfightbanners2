jQuery(document).ready(function(){
	function sliderInit(){
		var slider   = $('.slider');
		
		var wrapper  = slider.find('.wrapper');
		var slides   = slider.find('.slide');
		
		console.log(slider);
		
		wrapper.height( slider.height() );
		slides.height( slider.height() );
		var i = 0;
		$(slides[i]).fadeIn();
		i++;
		setInterval(function(){
			if( i >= slides.length ){
				i = 0;
			}
			//console.log(i);
			$(slides).fadeOut(100);
			$(slides[i]).fadeIn(100);
			i++;
			
		
			
		}, 5000);
	}
	
	sliderInit();
});