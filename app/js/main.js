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
	/* MAP yandex
	========================
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
*/

/*map 2gis
====================*/
if ($('#map').length){
	var map;
	var myIcon;
    DG.then(function () {
        map = DG.map('map', {
            center: [55.087674, 82.667844],
            zoom: 16
        });
				myIcon = DG.icon({
					iconUrl: '/images/map-marker.png',
          iconSize: [41, 81],
					iconAnchor: [25, 64]
				});
				DG.marker([55.087674, 82.667844], {icon: myIcon}).addTo(map).bindPopup('МамаРядом!');

    });
}
if ($('#map2').length){
	var map2;
	var myIcon2;

    DG.then(function () {
        map2 = DG.map('map2', {
            center: [55.087674, 82.667844],
            zoom: 16
        });
				myIcon2 = DG.icon({
					iconUrl: '/images/map-marker.png',
          iconSize: [41, 81],
					iconAnchor: [25, 64]
				});
				DG.marker([55.087674, 82.667844], {icon: myIcon2}).addTo(map2).bindPopup('МамаРядом!');
    });
}

/* float number */

$('.plus-btn').on('click', function(){
	var inputSize = $(this).parent().find('.product__size').val();
	inputSize++;
	$(this).parent().find('.product__size').val(inputSize);
	var price = $(this).parent().prev().find('.price');
	var inputPrice = $(this).parent().prev().find('.price').text();

	$(price).animate({num: inputPrice }, {
		duration: 1000,
		step: function(num){
			this.innerHTML = (num + 450 ).toFixed(0);
		}
	});
});
$('.minus-btn').on('click', function(){
	var inputSize = $(this).parent().find('.product__size').val();
	inputSize--;
	var price = $(this).parent().prev().find('.price');
	var inputPrice = $(this).parent().prev().find('.price').text();

	if (inputSize <= 0) {
		inputSize = 1;
		$(this).parent().find('.product__size').val(inputSize);
		return;
	}
	$(this).parent().find('.product__size').val(inputSize);

	$(price).animate({num: inputPrice}, {
		duration: 1000,
		step: function(num){
			this.innerHTML = (num - 450).toFixed(0);
		}
	});
});

/* add cart btn */

$('.product__add-cart').on('click', function(){
	$(this).toggleClass('active');
});

// /* header fixed*/
// $(window).scroll(function() {
// if ($(this).scrollTop() > 1){
//     $('.header').addClass("header_fixed");
//   }
//   else{
//     $('.header').removeClass("header_fixed");
//   }
// });

/* img product-sl*/

$('.product-img').on('click', function(e){
	e.preventDefault();
	$('.product-img').removeClass('active');
	$(this).addClass('active');
	var link = $(this).children().attr('href');
	var img = $(this).children().children().attr('src');
	$('.product-img-big').children().attr('href', link);
	$('.product-img-big').children().children().eq(0).attr('src', img);
});



}); /*end $*/
