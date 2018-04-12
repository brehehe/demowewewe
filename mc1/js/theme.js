/*-----------------------------------------------------------------------------------
  Template Name: Eshop - Minimalist ecommerce HTML5 Template.
  Template URI: https://www.rashadulislam.com/demo/eshop-preview/
  Description: Eshop is a unique website template designed in HTML with a simple & beautiful look. There is an excellent solution for creating clean, wonderful and trending material design corporate, corporate any other purposes websites.
  Author: codexfusion
  Author URI: https://themeforest.net/user/codexfusion
  Version: 1.1
-----------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------

  CSS INDEX
  ===================

    + Add ScrollUp Btn
    + Sticky Header
    + Add Dynamic Header Height On header
    + Search Bar
    + Shopping Cart
    + Hide Offset_menu
    + slicknav Activation
    + imageZoom effect
    + price-slider active
    + SmothScroll
    + Plus Minus Button 
    + Masonary
        + Product Masonry Style One
        + Product Masonry Style Two
    + Owl Carousel
        + Slider Area Activation
        + box_style_slider__two
        + Best Product Slider
        + Single gallery Slider
    + Jquery count down
    + Ajax Contact Form

-----------------------------------------------------------------------------------*/

(function($) {
    "use strict";

    /*-------------------------------------------
       + Add ScrollUp Btn
    --------------------------------------------- */
    $("body").append("<a class='scroll_to_top' href='#top'><span class='ti ti-angle-up'></a>");
    $('body').attr('id', 'top');

    /*-------------------------------------------
       + Sticky Header
    --------------------------------------------- */
    var win = $(window);
    var sticky_id = $("#sticky-header-with-topbar");
    var scroll_to_top = $('.scroll_to_top');
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < $('.header-bottom').height()) {
            sticky_id.removeClass("scroll-header");
        } else {
            sticky_id.addClass("scroll-header");
        }

        if (scroll > 100) {
            scroll_to_top.addClass("active");
        } else {
            scroll_to_top.removeClass("active");
        }
    });

    /*-----------------------------------
     + Add Dynamic Header Height On header
    -------------------------------------- */
    if ($('.header__style_two').length) {
        function logical_header_height() {

            // select you header class
            var header_style_two_wrap = $('.header__style_two');

            var header_style_two_height = header_style_two_wrap.height();
            header_style_two_wrap.parent().css({
                'height': header_style_two_height
            });
        };
        logical_header_height();
    }

    /*------------------------------------    
       + Search Bar
    --------------------------------------*/
    $('.search__open').on('click', function() {
        $('body').addClass('search__show__hide');
        return false;
    });

    $('.search_form_close').on('click', function() {
        $('body').removeClass('search__show__hide');
        return false;
    });


    /*------------------------------------    
       + Shopping Cart
    --------------------------------------*/
    $('.cart__menu').on('click', function() {
        $('.shopping__cart').addClass('sp_cart__show__hide');
        $('.body__overlay').addClass('is_visible');
        return false;
    });

    $('.toogle__menu').on('click', function() {
        $('.offset_menu').addClass('offset__menu__show__hide');
        $('.body__overlay').addClass('is_visible');
        return false;
    });

    $('.filter__btn').on('click', function() {
        $('.offset_filter').addClass('offset_filter__show__hide');
        $('.body__overlay').addClass('is_visible');
        return false;
    });

    // clos all offset sidebar
    $('.offset__close__btn').on('click', function() {
        $('.shopping__cart').removeClass('sp_cart__show__hide');
        $('.offset_menu').removeClass('offset__menu__show__hide');
        $('.offset_filter').removeClass('offset_filter__show__hide');
        $('.body__overlay').removeClass('is_visible');
        return false;
    });

    /*------------------------------------    
       + Hide Offset_menu
    --------------------------------------*/
    $('.body__overlay').on('click', function() {
        $('.shopping__cart').removeClass('sp_cart__show__hide');
        $('.offset_menu').removeClass('offset__menu__show__hide');
        $('.offset_filter').removeClass('offset_filter__show__hide');
        $('.body__overlay').removeClass('is_visible');
        return false;
    });

    /*-------------------------------------------
       + slicknav Activation
    --------------------------------------------- */
    $('#mobile__menu').slicknav({
        'appendTo': '.mobile__menu'
    });

    /*-------------------------------------------
     + imageZoom effect
    --------------------------------------------- */
    $('.product-active .item').zoom();

    /*-------------------------------------------
     + price-slider active
    --------------------------------------------- */
    $("#slider-range").slider({
        range: true,
        min: 12,
        max: 200,
        values: [0, 100],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });

    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
    /*-- price range End --*/

    /*-------------------------------------------
       + SmothScroll
    --------------------------------------------- */
    function smoothScrolling($links, $topGap) {
        var links = $links;
        var topGap = $topGap;

        links.on("click", function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - topGap
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
            return false;
        });
    }

    $(window).on("load", function() {
        smoothScrolling($("a.scroll_to_top[href^='#']"), 70);
    });

    /*-------------------------------
     + Plus Minus Button 
    --------------------------------*/
    $(".cart-plus-minus").append('<div class="dec qtybutton">-</i></div><div class="inc qtybutton">+</div>');

    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    /*-------------------------------------------
       + Product Masonry Style One
    --------------------------------------------- */
    $('.product_area').imagesLoaded(function() {
        // filter items on button click
        $('.product__menu').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        // init Isotope
        var $grid = $('.product_area').isotope({
            itemSelector: '.single__product',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.single__product'
            }
        });
    });

    $('.product__menu button').on('click', function(event) {
        $(this).siblings('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        event.preventDefault();
    });

    /*-------------------------------------------
       + Product Masonry Style Two
    --------------------------------------------- */
    $('.our_product_con__two').imagesLoaded(function() {
        // filter items on button click
        $('.product__menu').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        // init Isotope
        var $grid = $('.product_area_two').isotope({
            itemSelector: '.single__product',
            percentPosition: true,
            transitionDuration: '0.7s',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 2
            }
        });
    });

    /*-----------------------------------------------
       + Slider Area Activation
    -------------------------------------------------*/
    if ($('.slider-area').length) {
        $('.slider-area').owlCarousel({
            loop: true,
            nav: true,
            autoplay: true,
            navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
            autoplayTimeout: 10000,
            items: 1,
            dots: false,
            // animateIn: 'fadeIn',
            // animateOut: 'fadeOut',
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1400: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });
    }

    /*-----------------------------------------------
       + box_style_slider__two
    -------------------------------------------------*/
    if ($('.box_style_slider__two').length) {
        $('.box_style_slider__two').owlCarousel({
            loop: true,
            nav: true,
            margin: 40,
            mouseDrag: false,
            stagePadding: 90,
            autoplay: true,
            navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
            autoplayTimeout: 10000,
            items: 1,
            dots: false,
            // animateIn: 'fadeIn',
            // animateOut: 'fadeOut',
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 0
                },
                600: {
                    items: 1,
                    stagePadding: 0
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1400: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });
    }

    /*-----------------------------------------------
         + Best Product Slider
    -------------------------------------------------*/
    if ($('.best_pro__slider').length) {
        $('.best_pro__slider').owlCarousel({
            loop: false,
            nav: true,
            margin: 20,
            navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
            autoplay: false,
            autoplayTimeout: 10000,
            items: 1,
            dots: false,
            // animateIn: 'fadeIn',
            // animateOut: 'fadeOut',
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 4
                },
                1024: {
                    items: 4
                },
                1200: {
                    items: 4
                },
                1400: {
                    items: 5
                },
                1920: {
                    items: 6
                }
            }
        });
    }

    /*-----------------------------------------------
        + Single gallery Slider
    -------------------------------------------------*/
    function productGallary() {
        if ($('.product-active').length && $('.product-thumbnil-active').length) {

            var $sync1 = $(".product-active"),
                $sync2 = $(".product-thumbnil-active"),
                flag = false,
                duration = 500;

            $sync1
                .owlCarousel({
                    items: 1,
                    margin: 0,
                    nav: false,
                    dots: false
                })
                .on('changed.owl.carousel', function(e) {
                    if (!flag) {
                        flag = true;
                        $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                        flag = false;
                    }
                });

            $sync2
                .owlCarousel({
                    margin: 10,
                    items: 5,
                    nav: true,
                    dots: false,
                    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    center: false,
                    responsive: {
                        0: {
                            items: 2,
                            autoWidth: false
                        },
                        400: {
                            items: 2,
                            autoWidth: false
                        },
                        500: {
                            items: 2,
                            center: false,
                            autoWidth: false
                        },
                        600: {
                            items: 3,
                            autoWidth: false
                        },
                        1200: {
                            items: 3,
                            autoWidth: false
                        }
                    },
                })
                .on('click', '.owl-item', function() {
                    $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

                })
                .on('changed.owl.carousel', function(e) {
                    if (!flag) {
                        flag = true;
                        $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                        flag = false;
                    }
                });

        };
    }
    productGallary();

    /*-------------------------------
      + Jquery count down
    --------------------------------*/
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
        });
    });

    /*---------------------
        + Ajax Contact Form
    --------------------- */

    $('.cf-msg').hide();
    $('form#cf button#submit').on('click', function() {
        var fname = $('#fname').val();
        var subject = $('#subject').val();
        var email = $('#email').val();
        var msg = $('#msg').val();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!regex.test(email)) {
            alert('Please enter valid email');
            return false;
        }

        fname = $.trim(fname);
        subject = $.trim(subject);
        email = $.trim(email);
        msg = $.trim(msg);

        if (fname != '' && email != '' && msg != '') {
            var values = "fname=" + fname + "&subject=" + subject + "&email=" + email + " &msg=" + msg;
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: values,
                success: function() {
                    $('#fname').val('');
                    $('#subject').val('');
                    $('#email').val('');
                    $('#msg').val('');

                    $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
                    setTimeout(function() {
                        $('.cf-msg').fadeOut('slow');
                    }, 4000);
                }
            });
        } else {
            $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
        }
        return false;
    });

}(jQuery));