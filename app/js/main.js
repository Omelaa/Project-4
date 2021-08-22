
new Swiper('.info-slider__items',{
  slidesPerView:6,
  // centeredSlides: true,
  loop: true,

   autoplay: {
    // Пауза между прокруткой
		delay: 2000,
		// Закончить на последнем слайде
		stopOnLastSlide: false,
		// Отключить после ручного переключения
		disableOnInteraction: false
	},
  speed: 300,
   breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    414: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    990: {
      slidesPerView: 5,
    }
  },
});


new Swiper('.our__items',{

  navigation:{
     nextEl: ".our__next",
     prevEl: ".our__prev",
   },

  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 20,

   autoplay: {
    // Пауза между прокруткой
		delay: 2000,
		// Закончить на последнем слайде
		stopOnLastSlide: false,
		// Отключить после ручного переключения
		disableOnInteraction: false
	},
  speed: 300,

});



$(function(){
$(".rate").rateYo({
    starWidth: "20px",
    normalFill: "#D0D0D0",
    ratedFill: "#F5BE3D",
    spacing: "5px",
    readOnly: true,
    

    "starSvg": '<svg viewBox="0 0 15.28 15.281"><use xlink:href="images/sprite.svg#star"></use></svg>',
  });


     if ($(window).scrollTop() > 1){
    $('.header').addClass("sticky");
    }

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('.header').addClass("sticky");
    }
    else{
    $('.header').removeClass("sticky");
    }
  });

   $(".menu a, .header__logo, .footer-bottom__logo").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
  
    $('.header__burger, .menu').click(function (){
     $('.header__burger, .menu').toggleClass('active');
     $('body').toggleClass('lock');
   });
  
  var mixer = mixitup('.courses-gallery__items');
          
});