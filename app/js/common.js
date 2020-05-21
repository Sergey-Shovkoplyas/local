$( document ).ready(function() {

	$('.header__search-btn').on('click', function(){
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
		// $('.header__nav').slideToggle();
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


});