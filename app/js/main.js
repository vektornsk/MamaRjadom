$(function() {
	/* carousel-top */

	$('.js-carousel-top').slick({
		infinite: true,
		dots: true,
		arrows: false,
		fade: true,
	  cssEase: 'linear'
	});

	/* fancybox*/

	$('.fancybox-img').fancybox({

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

/* price number animate */

$('.plus-btn').off().on('click', function(){

	var inputSize = $(this).parent().find('.product__size').val();
	inputSize++;
	$(this).parent().find('.product__size').val(inputSize);

	var price = $(this).parent().prev().find('.price').data('price');
	var priceText = $(this).parent().prev().find('.price');

	numAnimate(price, priceText, 1);

});
$('.minus-btn').off().on('click', function(){

	var inputSize = $(this).parent().find('.product__size').val();
	inputSize--;

	if (inputSize < 1) {
		inputSize = 1;
		$(this).parent().find('.product__size').val(inputSize);
		return;
	}
	$(this).parent().find('.product__size').val(inputSize);

	var price = $(this).parent().prev().find('.price').data('price');
	var priceText = $(this).parent().prev().find('.price');

	numAnimate(price, priceText, 0);

});

function numAnimate(numberFix, numberElem, value) {
	$(numberElem).animate({num: parseInt($(numberElem).text())}, {
		duration: 100,
		easing: 'swing',
		step: function(num){
			if(value === 1) {
				$(numberElem).text((num + parseInt(numberFix)).toFixed(0));
				return;
			}
			if(value === 0) {
				$(numberElem).text((num - parseInt(numberFix)).toFixed(0));
				return;
			}
		}
	});
}

/* add cart btn */

$('.product__add-cart').on('click', function(){
	var elem = $(this);
	var btnPosition = $(this).offset();
	if(!$(this).hasClass('active')) {
		createImgDrag(elem, btnPosition);
	}

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

/* filter adaptive*/

$('.m-filter').on('click', function(){
	$(this).toggleClass('active');
});

if ($(window).width() < 767) {
	$(window).scroll(function() {
	if ($(this).scrollTop() > 200){
	    $('.filter-wrap').addClass("fixed");
	  }
	  else{
	    $('.filter-wrap').removeClass("fixed");
	  }
	});
}

/*cart*/

$('.cart').on('click', function(e){
	e.preventDefault();
	$('.overlay').show();
	$('body').css('overflow-y', 'hidden');
	$('.cart-box').toggleClass('active');
});

$('.cart-box__del').on('click', function(){
	$('.overlay').hide();
	$('body').css('overflow-y', 'auto');
	$('.cart-box').toggleClass('active');
});

/* animation add cart */

var cartPosition = $('.cart').offset();

$(window).scroll(function () {
	cartPosition = $('.cart').offset();
});
$(window).resize(function () {
	cartPosition = $('.cart').offset();
});

function createImgDrag(elem, position) {
	var imgDrag = $(elem).find('.img-drag');
	var imgFragClone = imgDrag.clone();
	imgFragClone.offset({'top': position.top, 'left': position.left + 100 })
				 .css({'display':'block','opacity': 1, 'position': 'absolute', 'z-index': 10})
				 .appendTo('body')
				 .animate({
					 'top': cartPosition.top + 20,
					 'left': cartPosition.left + 20
				 }, 500)
				 .fadeOut('fast', function(){
						 $(this).detach();
				 });
}






}); /*end $*/
