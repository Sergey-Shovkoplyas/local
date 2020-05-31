$(document).ready(function () {

	$('.header__search-btn').on('click', function () {
		$('.header__search-form').fadeToggle();
	});

	// if ( $( window ).width() <= 1300) {
	// 	$('body').on('click', function(e){
	// 		console.log(e.target);
	// 		if( !$(e.target).is('.header__search-form') ){
	// 			$('.header__search-form').fadeOut();
	// 		}
	// 	});
	// }



	// -------------------- header__nav toggle ---------------------

	$('.header__nav-btn').on('click', function () {
		$('.header__nav-btn .nav-btn').toggleClass('active');
		$('.header').toggleClass('header--scroll');
		$('.roll-wrap').slideToggle();
	});

	// -------------------- footer show sublist ---------------------

	$('.footer__item-title.sublist').on('click', function () {
		$(this).next('.footer__item-list').slideToggle();
		$(this).toggleClass('active');
	});

	// -------------------- quantity --------------------------

	$('.quantity__bnt--minus').on('click', function () {
		let $input = $(this).next('.quantity__input');
		let inputValue = $input.val();
		if (inputValue > 0) {
			inputValue--;
			$input.val(inputValue)
		}
	});

	$('.quantity__bnt--plus').on('click', function () {
		let $input = $(this).prev('.quantity__input');
		let inputValue = $input.val();
		inputValue++;
		$input.val(inputValue);

	});

	// -------------------- filter --------------------------
	$('.filter__btn').on('click', function () {
		$(this).toggleClass('active');
		$(this).next('.filter__sublist').slideToggle();
	});

	$('.filter__category-btn').on('click', function () {
		$(this).toggleClass('active');
		$(this).next('.filter__category-sublist').slideToggle();
	});

	$('.filter__category-sublist-btn').on('click', function () {
		$(this).toggleClass('active');
		$(this).next('.filter__category-sublist-sublist').slideToggle();
	});

	// -------------------- filter-range --------------------------

	let $priceRange = $('.filter__price-range');
	$priceRange.ionRangeSlider({
		skin: "round",
		type: "double",
		min: 1,
		max: 5000,
		from: 1,
		to: 5000,
		step: 1
	});

	let $priceFromArea = $('.filter__price-item.from span');
	let $priceToArea = $('.filter__price-item.to span');


	$priceRange.on('change', function () {
		let $inp = $(this);
		let priceFrom = $inp.data("from");
		let priceTo = $inp.data("to");

		$priceFromArea.html(priceFrom);
		$priceToArea.html(priceTo);
	});

	// -------------------- filter-toggle on mobile --------------------------

	$('.category__filter-toggle').on('click', function () {
		$(this).toggleClass('active');
		$('.category__left').slideToggle();
	});

	// -------------------- roll (catalog list) --------------------------

	$('.header__catalog-btn').on('click', function () {
		$(this).toggleClass('active');
		$('.roll-wrap').slideToggle();
	});

	$('.roll__item').on('click', function () {
		let $sublist = $(this).next('.roll__list--sublist');
		let $parrentList = $(this).parent().parent('.roll__list');
		if ($sublist.length) {
			$(this).toggleClass('active');
			$sublist.slideToggle();
			$parrentList.find('.roll__list').not($sublist).slideUp(0);
			$parrentList.find('.active').not(this).removeClass('active');
		}
	});

	// -------------------- popular__slider initialize ---------------------

	$('.popular__slider').slick({
		infinite: true,
		slidesToShow: 5,
		responsive: [
			{
				breakpoint: 1700,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	// -------------------- press__slider initialize ---------------------

	var $slider = $('.press__slider-row');
	var $progressBar = $('.press__slider-bar');

	$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;
		$progressBar.css('background-size', calc + '% 100%');
	});

	$slider.slick({
		dots: true,
		appendDots: $('.press__slider-controls'),
		prevArrow: $('.press__slider-arrov.prev'),
		nextArrow: $('.press__slider-arrov.next'),
	});

	// -------------------- shops__address hide/open ---------------------

	$('.shops__address-drag').on('click', function () {
		$(this).toggleClass('active');
		$('.shops__address').toggleClass('active');
	});

	// -------------------- news-tabs ---------------------

	$('.news__sort a').on('click', function () {
		$(this).addClass('active');
		$('.news__sort a').not($(this)).removeClass('active');
		let num = +$(this).attr('data-num') - 1;
		let text = $('.news__tab-item')[num];
		$('.news__tab-item').not(text).removeClass('active');
		$(text).addClass('active');
	});

});