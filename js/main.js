 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {

	"use strict";

	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	
	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 4
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    pauseOnHover: false,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top
      }, 600, 'easeInOutCirc', function(){
        window.location.hash = hash;
      });

    });
  };
  OnePageNavigation();

  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
  siteScroll();

  $('#shopSelectModal').modal('show');

  $("select[name='shop']").change(function(){
      var selectedShop = $("select[name='shop'] option:selected").val();
      toggleShop(selectedShop);
      localStorage.setItem("selectedShop", selectedShop);
  });

  var toggleShop = function(selectedShop){
      var unselectedShop = 'wc';
      if(selectedShop=='wc'){
          unselectedShop = 'mascot';
      }
      console.log(selectedShop);
      $('*[data-shop="'+unselectedShop+'"]').hide();
      $('*[data-shop="'+selectedShop+'"]').show();
  };

  if(localStorage.getItem("selectedShop")){
      toggleShop(localStorage.getItem("selectedShop"));
      $("select[name='shop']").val(localStorage.getItem("selectedShop"));
  };


	var openingTimeMascot = {
		1: [0,1,2,3,4,5,12,13,14,15,16,17,18,19,20,21,22,23],
		2: [0,1,2,3,4,5,12,13,14,15,16,17,18,19,20,21,22,23],
		3: [0,1,2,3,4,5,12,13,14,15,16,17,18,19,20,21,22,23],
		4: [0,1,2,3,4,5,12,13,14,15,16,17,18,19,20,21,22,23],
		5: [0,1,2,3,4,5,12,13,14,15,16,17,18,19,20,21,22,23],
		6: [0,1,2,3,4,5,11,12,13,14,15,16,17,18,19,20,21,22,23],
		7: [0,1,2,3,4,5,11,12,13,14,15,16,17,18,19,20,21,22,23]
	};
    var openingTimeWC = {
        1: [0,12,13,14,15,16,17,18,19,20,21,22,23],
        2: [0,12,13,14,15,16,17,18,19,20,21,22,23],
        3: [0,12,13,14,15,16,17,18,19,20,21,22,23],
        4: [0,12,13,14,15,16,17,18,19,20,21,22,23],
        5: [0,12,13,14,15,16,17,18,19,20,21,22,23],
        6: [0,1,2,3,4,12,13,14,15,16,17,18,19,20,21,22,23],
        7: [0,1,2,3,4,12,13,14,15,16,17,18,19,20,21,22,23]
    };
	var checkOpeningTime = function(){
		var d = new Date();
		var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
		var offsetSydney = 10;
		var sydneyDate = new Date(utc + (3600000*offsetSydney));
		var day = sydneyDate.getDay();
		var hours = sydneyDate.getHours();
		var openMascot = openingTimeMascot[day].includes(hours);
		var openWC = openingTimeWC[day].includes(hours);
		console.log('Mascot open:'+ openMascot);
        console.log('WolliCreek open:'+ openWC);

        $('.open-message-timetable, .closed-message-timetable').hide();
		if(openMascot){
			$('#mascot-open-message').show();
            $('#mascot-closed-message').hide();
            $('.timetable-mascot .row:nth-child('+day+') .open-message-timetable').css('display', 'inline-block');
		}else{
            $('#mascot-open-message').hide();
            $('#mascot-closed-message').show();
            $('.timetable-mascot .row:nth-child('+day+') .closed-message-timetable').css('display', 'inline-block');
		}
        if(openWC){
            $('#wc-open-message').show();
            $('#wc-closed-message').hide();
            $('.timetable-wc .row:nth-child('+day+') .open-message-timetable').css('display', 'inline-block');
        }else{
            $('#wc-open-message').hide();
            $('#wc-closed-message').show();
            $('.timetable-wc .row:nth-child('+day+') .closed-message-timetable').css('display', 'inline-block');
        }
	};
    checkOpeningTime();
    setInterval(checkOpeningTime, 10000);


    $('[data-toggle="tooltip"]').tooltip();


});