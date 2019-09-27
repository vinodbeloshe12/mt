/*

    Template Name: Colora - Responsive Bootstrap 4 eCommerce Template;
    Template URI: http://hastech.company/
    Description: This is Bootstrap4 html5 template
    Author: HasTech
    Author URI: http://hastech.company/
    Version: 1.0

*/

/*---------------------------------
    1. Mean Menu Active
-----------------------------------*/
jQuery('.header-menu-area > nav').meanmenu({
  meanMenuContainer: '.mobile-menu',
  meanScreenWidth: "991"
});
/*---------------------------- 
   3. Sidebar Search Active
-----------------------------*/
function sidebarSearch() {
  var searchTrigger = $('.sidebar-trigger-search'),
    endTriggersearch = $('button.search-close'),
    container = $('.main-search-active');

  searchTrigger.on('click', function () {
    container.addClass('inside');
  });

  endTriggersearch.on('click', function () {
    container.removeClass('inside');
  });

};
sidebarSearch();
/*----------------------------
    Hero Slider Active
------------------------------*/
$('.hero-slider').owlCarousel({
  smartSpeed: 1000,
  nav: false,
  loop: true,
  dots: true,
  dotsData: true,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  autoplay: false,
  navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true
    },
    768: {
      items: 1,
      nav: false,
      dots: true
    },
    991: {
      items: 1,
    }
  }
})
/*-------------------------------- 
    Product Slider Active 
----------------------------------*/
$('.product-slider')
  .on('changed.owl.carousel initialized.owl.carousel', function (event) {
    $(event.target)
      .find('.owl-item').removeClass('last')
      .eq(event.item.index + event.page.size - 1).addClass('last');
  }).owlCarousel({
    smartSpeed: 1000,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      450: {
        items: 2
      },
      768: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  })
/*------- 
    Product Slider Active 
----------------------------------*/
$('.product-tab-slider')
  .on('changed.owl.carousel initialized.owl.carousel', function (event) {
    $(event.target)
      .find('.owl-item').removeClass('last')
      .eq(event.item.index + event.page.size - 1).addClass('last');
  }).owlCarousel({
    smartSpeed: 1000,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      450: {
        items: 2
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  })
/*------- 
    Product Slider Active 
----------------------------------*/
$('.product-slider-2')
  .on('changed.owl.carousel initialized.owl.carousel', function (event) {
    $(event.target)
      .find('.owl-item').removeClass('last')
      .eq(event.item.index + event.page.size - 1).addClass('last');
  }).owlCarousel({
    smartSpeed: 1000,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      450: {
        items: 2
      },
      768: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 2
      }
    }
  })
/*------- 
    Blog Slider Active 
----------------------------------*/
$('.single-blog-slider').owlCarousel({
  smartSpeed: 1000,
  nav: true,
  navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    450: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 1
    },
    1200: {
      items: 2
    }
  }
})

// alert("innn");
/*------- 
    Blog List Slider Active 
----------------------------------*/
$('.single-blog-list-slider').owlCarousel({
  smartSpeed: 1000,
  nav: true,
  navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    450: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 2
    },
    1200: {
      items: 2
    }
  }
})
/*------- 
    Blog List Slider Active 
----------------------------------*/
$('.blog-style-3').owlCarousel({
  smartSpeed: 1000,
  nav: true,
  navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    450: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 3
    }
  }
})
/*------- 
    Blog Gallery Post Active 
----------------------------------*/
$('.post-gallery').owlCarousel({
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    450: {
      items: 1
    },
    768: {
      items: 1
    },
    1000: {
      items: 1
    },
    1200: {
      items: 1
    }
  }
})
/*------- 
    Testimonial Slider Active 
----------------------------------*/
$('.testimonial-slider').owlCarousel({
  smartSpeed: 1000,
  nav: false,
  navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    450: {
      items: 1
    },
    768: {
      items: 1
    },
    1000: {
      items: 1
    },
    1200: {
      items: 1
    }
  }
})
/*----------------------------------
	 Instafeed active 
------------------------------------*/
if ($('#Instafeed').length) {
  var feed = new Instafeed({
    get: 'user',
    userId: 6665768655,
    accessToken: '6665768655.1677ed0.313e6c96807c45d8900b4f680650dee5',
    target: 'Instafeed',
    resolution: 'thumbnail',
    limit: 6,
    template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /></a></li>',
  });
  feed.run();
}
/*----------------------------------
	 Time Circles active 
------------------------------------*/
if ($(".countdown-sale").length) {
  $(".countdown-sale").TimeCircles({
    animation_interval: "smooth",
    bg_width: 1,
    fg_width: 0.01,
    circle_bg_color: "#fff",
    time: {
      Days: {
        "text": "Days",
        "color": "#6c8e01",
        "show": true
      },
      Hours: {
        text: "Hours",
        color: "#6c8e01",
        show: true
      },
      Minutes: {
        "text": "Minutes",
        "color": "#6c8e01",
        "show": true
      },
      Seconds: {
        "text": "Seconds",
        "color": "#6c8e01",
        "show": true
      }
    }

  });
}
$(window).on('resize', function () {
  $('.countdown-sale').TimeCircles().rebuild();
});
/*----------------------------------
    ScrollUp Active
-----------------------------------*/
$.scrollUp({
  scrollText: '<i class="fa fa-angle-up"></i>',
  easingType: 'linear',
  scrollSpeed: 900,
  animation: 'fade'
});
/*--------------------------------
    Price Slider Active
-------------------------------- */
var sliderrange = $('#slider-range');
var amountprice = $('#amount');
$(function () {
  sliderrange.slider({
    range: true,
    min: 20,
    max: 100,
    values: [0, 100],
    slide: function (event, ui) {
      amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
    }
  });
  amountprice.val("$" + sliderrange.slider("values", 0) +
    " - $" + sliderrange.slider("values", 1));
});
/*------------------------------ 
    Nice Select Active
---------------------------------*/
$('select').niceSelect();
/*----------------------------------- 
    Single Product Slide Menu Active 
--------------------------------------*/
$('.single-product-tab-menu').slick({
  prevArrow: '<i class="fa fa-angle-left"></i>',
  nextArrow: '<i class="fa fa-angle-right slick-next-btn"></i>',
  slidesToShow: 4,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]
});
$('.single-product-tab-menu a').on('click', function (e) {
  e.preventDefault();

  var $href = $(this).attr('href');

  $('.product-tab-menu a').removeClass('active');
  $(this).addClass('active');

  $('.single-product-img .tab-pane').removeClass('active show');
  $('.single-product-img ' + $href).addClass('active show');

})
/*------- 
     Single Slide Menu Active 
----------------------------------*/
$('.single-slide-menu').owlCarousel({
  smartSpeed: 1000,
  nav: false,
  responsive: {
    0: {
      items: 3
    },
    450: {
      items: 3
    },
    768: {
      items: 4
    },
    1000: {
      items: 4
    },
    1200: {
      items: 4
    }
  }
});
$('.modal').on('shown.bs.modal', function (e) {
  $('.single-slide-menu').resize();
})

$('.single-slide-menu a').on('click', function (e) {
  e.preventDefault();

  var $href = $(this).attr('href');

  $('.single-slide-menu a').removeClass('active');
  $(this).addClass('active');

  $('.product-details-large .tab-pane').removeClass('active show');
  $('.product-details-large ' + $href).addClass('active show');

})
/*----------------------------------
    EasyZoom Active       
------------------------------------*/
var $easyzoom = $('.easyzoom').easyZoom();
/*------------------------------ 
    Toggle Function Active
---------------------------------*/
/*--- showlogin toggle function ----*/
$('#showlogin').on('click', function () {
  $('#checkout-login').slideToggle(900);
});

/*--- showlogin toggle function ----*/
$('#showcoupon').on('click', function () {
  $('#checkout_coupon').slideToggle(900);
});
/*--- showlogin toggle function ----*/
$('#cbox').on('click', function () {
  $('#cbox-info').slideToggle(900);
});

/*--- showlogin toggle function ----*/
$('#ship-box').on('click', function () {
  $('#ship-box-info').slideToggle(1000);
});
/*--------------------------
    Counter Up
---------------------------- */
$('.counter').counterUp({
  delay: 70,
  time: 5000
});
/* --------------------------------------------------------
    FAQ Accordion Active
* -------------------------------------------------------*/
$('.card-header a').on('click', function () {
  $('.card').removeClass('actives');
  $(this).parents('.card').addClass('actives');
});
/*--------------------------
    Isotope Active
---------------------------- */
$('.protfolio-active').imagesLoaded(function () {
  // images have loaded
  // init Isotope
  var $grid = $('.protfolio-active').isotope({
    // options
  });
  // filter items on button click
  $('.protfolio-menu-active').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });

    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });
});
/* --------------------------------------------------------
    Venobox Active
* -------------------------------------------------------*/
$('.venobox').venobox({
  border: '10px',
  titleattr: 'data-title',
  numeratio: true,
  infinigall: true
});
