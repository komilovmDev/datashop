
(function($) {
	"use strict";

    $(window).load(function() {
        $('.preloader-area').fadeOut('.1');
     });



	 
	document.addEventListener('lazybeforeunveil', function(e){
		var bg = e.target.getAttribute('data-bg');
		if(bg){
			e.target.style.backgroundImage = 'url(' + bg + ')';
		}
	});



	document.addEventListener( 'DOMContentLoaded', function () {

		
		/*
			gsap start
		*/
		
		$('.brator-app-area').each(function(){

			var gsapTimeline = new TimelineMax();
			var controller = new ScrollMagic.Controller(
				{
					loglevel: 0
				}
			);

			var bgImg = $(this).find(".brator-app-content-area");
			 var tween2 = TweenMax.fromTo(
				bgImg,
				1,
				{
					css:{
						backgroundPosition:'45% -25px'
					},
					ease: Linear.easeNone
				},
				{
					css:{
						backgroundPosition:'55% -25px'
					},
					ease: Linear.easeNone
				}
			);
			gsapTimeline
					.add(tween2);
			var sectionBg = new ScrollMagic.Scene({
				tweenChanges: true,
				triggerElement: this,
				offset: 0,
				duration: "60%",
				triggerHook: 'onCenter', /// onEnter // onLeave
				loglevel: 2	
			})
			.addTo(controller)
			.setTween(
				gsapTimeline
			)
		});

		/*
			gsap end
		*/

		/*
			scroll start
		*/



		function headerStyle() {
			if($('.scroll-top').length){
				var windowpos = $(window).scrollTop();
				var scrollLink = $('.scroll-top');
				if (windowpos >= 270) {
					scrollLink.addClass('open');
				} else {
					scrollLink.removeClass('open');
				}
			}
		}

		if($('.scroll-to-target').length){
			$(".scroll-to-target").on('click', function() {
				var target = $(this).attr('data-target');
			   // animate
			   $('html, body').animate({
				   scrollTop: $(target).offset().top
				 }, 1000);
		
			});
		}


		function scrollMenuStyle() {
			if($('.scroll-menu').length){
				var windowpos = $(window).scrollTop();
				var scrollLink = $('.scroll-menu');
				if (windowpos >= 270) {
					scrollLink.addClass('open');
				} else {
					scrollLink.removeClass('open');
				}
			}
		}

		$(window).on('scroll', function() {
			headerStyle();
			scrollMenuStyle();
		});

		/*
			scroll end
		*/

		/*
			counter start
		*/
			if($('.brator-our-story-count').length){
				$('.brator-our-story-count p span').counterUp({
					delay: 10,
					time: 1000
				});
			}
		/*
			counter end
		*/

		/*
			splide start
		*/



		let elms = document.getElementsByClassName( 'splide' );
		if(elms.length > 0 ){
			for ( let i = 0, len = elms.length; i < len; i++ ) {
				new Splide( elms[ i ] ).mount();
			}
		}
		var productSliderPrice = document.getElementById('brator-rang-item-slider-nou');
		if( productSliderPrice != null ){
			noUiSlider.create(productSliderPrice, {
				start: [20, 80],
				connect: true,
				range: {
					'min': 0,
					'max': 100
				}
			});
		}


		let reviewSyncAuthore = document.getElementsByClassName( 'brator-client-review-author' );
		let reviewSyncReview = document.getElementsByClassName( 'brator-client-review' );

		if(reviewSyncAuthore.length > 0 ){
			// reviewSliderCount
			var reviewSlider = new Splide( '.brator-client-review', {
				type       : 'fade',
				cover      : true,
				rewind     : true,
				pagination : false
			} );
			var reviewSliderAuthor = new Splide( '.brator-client-review-author', {
				// rewind     : true,
				focus : 1,
				pagination : false,
				arrows : false,
				perPage : 3,
				perMove : 1,
				breakpoints : {
					1026: {
						perPage: 2
					},
					767: {
						perPage: 1
					}
				}
			  } );
			reviewSlider.sync(reviewSliderAuthor);
			reviewSlider.mount();
			reviewSliderAuthor.mount();
		}

		/*
			splide end
		*/

		/*
			tab start
		*/
        let productInfoTab = document.getElementsByClassName('js-tabs');
        if (productInfoTab.length > 0) {
            var tabProductItem = new Tabs({
                elem: "tabs-product-content",
                open: 0
            });
            tabProductItem.open(0);
        }

		
		if ($('#tabs-product-img').length) {
			if(productInfoTab.length > 0 ){
				var tabProductImgItem = new Tabs({
					elem: "tabs-product-img",
					open: 0
				});	
				tabProductImgItem.open(0);
			}
		}



        if ($('.brator-slide-menu-area .mega-menu-li').length) {
            $('.brator-slide-menu-area .mega-menu-li').append('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg>')
        }

        if ($('.brator-slide-menu-area .mega-menu-li').length) {
            $('.brator-slide-menu-area .mega-menu-li svg').on('click', function(e) {

                $(this).toggleClass('open');

                $(this).closest('.mega-menu-li').children('.mega-menu-area').slideToggle(500);

            })
        }

        if ($('.brator-slide-menu-area .down-menu').length) {
            $('.brator-slide-menu-area .down-menu').append('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg>')
        }


        if ($('.brator-slide-menu-area .down-menu').length) {
            $('.brator-slide-menu-area .down-menu svg').on('click', function(e) {
                $(this).toggleClass('open');
                $(this).closest('.down-menu').children('ul').slideToggle(500);
            })
        }


		/*
			tab end
		*/




	} );






	/*
		cart start
	*/
	if($('.brator-cart-link').length){
		$('.brator-cart-link a').on('click', function(e) {
			$('.brator-cart-item-list').addClass('mini-cart-open');
		});
	}

	$('.brator-cart-close').on('click', function(e) {
		$('.brator-cart-item-list').removeClass('mini-cart-open');
	});

    if ($('.brator-icon-link-text').length) {
        $('.brator-icon-link-text a').on('click', function(e) {
            $('.vehicle-list-wapper').toggleClass('open');
        });
    }

    if ($('.brator-infobox__btn').length) {
        $('.brator-infobox__btn').on('click', function(e) {
            $('.h-infobox__wrapper').toggleClass('open');
        });
    }


	if($('.brator-cart-link').length){
		$('.brator-cart-link a').on('click', function(e) {
			$('body').addClass('rtl');
		});
	}

	$('.brator-cart-close').on('click', function(e) {
		$('.brator-cart-item-list').removeClass('mini-cart-open');
	});



	/*
		cart end
	*/

	/*
		menu start
	*/

	
	var getLogo = $('.brator-header-area .brator-logo').html();
	var getMenu = $('.brator-header-menu-area .brator-header-menu').html();
	
	


	if($('.brator-logo button').length){
		$('.brator-logo button').on('click', function() {
			$('body').addClass('mobile-menu-open');
		});

		$('.brator-slide-menu-bg').on('click', function() {
			$('body').removeClass('mobile-menu-open');
		});
		$('.brator-slide-menu-close').on('click', function() {
			$('body').removeClass('mobile-menu-open');
		});

		if($('.brator-slide-logo-items').length){
			$('.brator-slide-logo-items').append(getLogo);
		}
		if($('.brator-slide-menu-items').length){
			$('.brator-slide-menu-items').append(getMenu);
		}

	}

	/*
		menu end
	*/



	/*
		filtter start
	*/

	if($('.filter-enable').length){
		$('.filter-enable').on('click', function() {
			$('body').addClass('shop-filter-open');
		});
	}

	if($('.brator-sidebar-area.design-one .close-fillter').length){
		$('.brator-sidebar-area.design-one .close-fillter').on('click', function() {
			$('body').removeClass('shop-filter-open');
		});
	}


	/*
		filtter end
	*/

	/*
		mega menu  start
	*/


	$(".brator-header-menu li.mega-menu-li").click(function(){
		$(".brator-header-menu li").removeClass('active');
		$(this).addClass('active');
		$('body').addClass('brator-header-menu-bg');
		let docHeight = $(document).height() + 'px'
		$('.close-menu-bg').css("height", docHeight);
		
	});

	$(".close-menu-bg" ).click(function(){
		$(".brator-header-menu li").removeClass('active');
		$('body').removeClass('brator-header-menu-bg');
		let docHeight = 'auto'
		$('.close-menu-bg').css("height", docHeight);
	});

	$(".brator-mega-menu-close").click(function(){
		console.log('w');
		$(".brator-header-menu li").removeClass('active');
		$('body').removeClass('brator-header-menu-bg');
		let docHeight = 'auto'
		$('.close-menu-bg').css("height", docHeight);
	});

	/*
		mega menu end
	*/

	/*
		filter  start
	*/

	if($('.brator-filter-item-area').length){
		$('.brator-filter-item-title').on("click", function(){
			if($(this).hasClass('current')){
				$(this).removeClass('current');
				let elHeight = $(this)[0].nextElementSibling.scrollHeight
				$(this).next().css("maxHeight", `${0}px`)
				$(this).next().css("height", `${0}px`)
			}else{
				$(this).addClass('current');
				let elHeight = $(this)[0].nextElementSibling.scrollHeight
				$(this).next().css("maxHeight", `${elHeight}px`)
				$(this).next().css("height", `${elHeight}px`)
			}
		});
	}
	
	if($('.rest-all-checkbox').length){
		$('.rest-all-checkbox').on("click", function(){
			$('.shop-sidebar-content input:checkbox').removeAttr('checked');
		});
	}

	if($('.sub-cat').length){
		$('.sub-cat').on("click", function(){
			
			if($(this).hasClass('current')){
				$(this).removeClass('current');
			}else{
				$(this).addClass('current');
			}
		});
	}


	/*
		filter end
	*/

	/*
		view more text  start
	*/

	if($('.brator-makes-list-view-more button').length){
		$('.brator-makes-list-view-more button').on("click", function(){
			if($('.brator-makes-list-single.disable').hasClass('current')){
				$('.brator-makes-list-single.disable').removeClass('current');
				$('.brator-makes-list-view-more button span b ').text('view more');
				$('.brator-makes-list-view-more button').removeClass('current');
			}else{
				$('.brator-makes-list-single.disable').addClass('current');
				$('.brator-makes-list-view-more button span b ').text('view less');
				$('.brator-makes-list-view-more button').addClass('current');
			}
		});
	}

	if($('.brator-more-text-view-more').length){
		$('.brator-more-text-view-more').on("click", function(){
			if($('.brator-more-text-view-more').hasClass('current')){
				$('.brator-more-text-view-more').removeClass('current');
				$('.brator-more-text-content .disable').removeClass('current');
				$('.brator-more-text-view-more button span').text('view more');
			}else{
				$('.brator-more-text-content .disable').addClass('current');
				$('.brator-more-text-view-more').addClass('current');
				$('.brator-more-text-view-more button span').text('view less');
			}
		});
	}


	/*
		view more text end
	*/

	/*
		input start
	*/


		
	let priceMin = $(".brator-rang-item-input-single input[name='min']").attr('value');
	if(priceMin != ''){
		$(".brator-rang-item-input-single input[name='min']").addClass('current')
	}
		
	let priceMax = $(".brator-rang-item-input-single input[name='max']").attr('value');
	if(priceMax != ''){
		$(".brator-rang-item-input-single input[name='max']").addClass('current')
	}

	$(".brator-rang-item-input-single input[name='min']").change( e => {
		let priceMinUpdate = e.target.value;
		if(priceMinUpdate != ''){
			$(".brator-rang-item-input-single input[name='min']").addClass('current-yaps')
		}else{
			$(".brator-rang-item-input-single input[name='min']").removeClass('current-yaps')
		}
	})

	$(".brator-rang-item-input-single input[name='max']").change( e => {
		let priceMaxUpdate = e.target.value;
		if(priceMaxUpdate != ''){
			$(".brator-rang-item-input-single input[name='max']").addClass('current-yaps')
		}else{
			$(".brator-rang-item-input-single input[name='max']").removeClass('current-yaps')
		}
	})

	/*
		input end
	*/

	/*
		coming soon start
	*/

	if($('.brator-coming-soon-counter').length){
		(function () {
			const second = 1000,
				minute = second * 60,
				hour = minute * 60,
				day = hour * 24;
			let today = new Date(),
				dd = String(today.getDate()).padStart(2, "0"),
				mm = String(today.getMonth() + 1).padStart(2, "0"),
				yyyy = today.getFullYear(),
				nextYear = yyyy + 1,
				dayMonth = "01/01/",
				birthday = dayMonth + yyyy;
			
			today = mm + "/" + dd + "/" + yyyy;
			if (today > birthday) {
			birthday = dayMonth + nextYear;
			}
			//end
			
			const countDown = new Date(birthday).getTime(),
				x = setInterval(function() {    
		
				const now = new Date().getTime(),
						distance = countDown - now;
		
				document.getElementById("days").innerText = Math.floor(distance / (day)),
					document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
					document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
					document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
		
				//do something later when date is reached
				if (distance < 0) {
					document.getElementById("headline").innerText = "It's my birthday!";
					document.getElementById("countdown").style.display = "none";
					document.getElementById("content").style.display = "block";
					clearInterval(x);
				}
				//seconds
				}, 0)
		}());
	}

	/*
		coming soon end
	*/

	/*
		SELECT 2 START
	*/

	$(document).ready(function() {
		$('.brator-select-active').select2();
	});

	/*
		SELECT 2 end
	*/

	// page direction
	function directionswitch() {
		if ($('.page_direction').length) {

		  $('.direction_switch button').on('click', function() {
			 $('.boxed_wrapper').toggleClass(function(){
				return $(this).is('.rtl, .ltr') ? 'rtl ltr' : 'rtl';
			})
		  });
		};
  	}

	directionswitch()





})(window.jQuery);	