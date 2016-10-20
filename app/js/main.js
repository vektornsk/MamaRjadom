$(function() {
	/* carousel-top */

	$('.js-carousel-top').slick({
		infinite: true,
		dots: true,
		arrows: false,
		fade: true,
	  cssEase: 'linear'
	});

	/* long txt */
	function cutLongString(element, count_lit){
		element.each(function(i, elem){
			if ($(elem).html().length > count_lit){
				new_text = $(elem).html().substr(0, (count_lit - 3)) + '...';
				// заменяем текст в блоке
				$(elem).html(new_text);
			}
		});
	}


}); /*end $*/