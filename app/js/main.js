$(function() {
	/* carousel-top */

	$('.js-carousel-top').slick({
		infinite: true,
		dots: true,
		arrows: false,
		fade: true,
	  cssEase: 'linear'
	});

	/* mobil menu*/

	$('.m-menu').on('click', function(){
		$(this).toggleClass('active').next('.menu').toggleClass('active');
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
	/* MAP yandex */
	if ($('#map').length){
		var myMap;
		ymaps.ready(function () {
	        myMap = new ymaps.Map("map", {
	            center: [55.0231,82.9406],
	            zoom: 17
	        });
					var myPlacemark = new ymaps.Placemark(
					// Координаты метки
					[55.0231,82.9406]
					);
					// Добавление метки на карту
				myMap.geoObjects.add(myPlacemark);
				});
	}
	if ($('#map2').length){
		var myMap2;
		ymaps.ready(function () {
	        myMap2 = new ymaps.Map("map2", {
	            center: [55.0231,82.9406],
	            zoom: 17
	        });
					var myPlacemark2 = new ymaps.Placemark(
					// Координаты метки
					[55.0231,82.9406]
					);
					// Добавление метки на карту
				myMap2.geoObjects.add(myPlacemark2);
				});
	}



}); /*end $*/
