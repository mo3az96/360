$(window).on('load', function () {
    $('.preloader').fadeOut("300", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    new WOW().init();
    //////////** fixed header **//////////
    if ($(this).scrollTop() >= 110) {
        $("header").addClass("header-scroll");
    } else {
        $("header").removeClass("header-scroll");
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 110) {
            $("header").addClass("header-scroll");
        } else {
            $("header").removeClass("header-scroll");
        }
    });
    if ($(window).width() <= 991) {
        if ($(this).scrollTop() >= 50) {
            $("header").addClass("header-scroll");
        } else {
            $("header").removeClass("header-scroll");
        }
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) {
                $("header").addClass("header-scroll");
            } else {
                $("header").removeClass("header-scroll");
            }
        });
    }
    //////////** tooltip **//////////
    $('[data-toggle="tooltip"]').tooltip();

    //////////** main slider **//////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-btn-next',
            prevEl: '.main-slider .swiper-btn-prev',
        },
    });
    //////////** Search **//////////
    $('.search-icon').click(function () {
        $(".search-form").slideDown(300);
        $(".search-overlay").show();
        $(this).addClass("active");
    });
    $('.search-overlay').click(function () {
        $(".search-form").slideUp(300);
        $(".search-overlay").hide();
        $('.search-icon').removeClass("active");
    });
    //////////** cats slider **//////////
    if ($(window).width() <= 767) {
        $(".cat-item").unwrap("");
        $(".cat-item").wrap("<div class='cat-circle'></div>");
        $(".cat-circle").wrap("<div class='swiper-slide'></div>");
        $(".cats-slider .swiper-slide").wrapAll("<div class='swiper-wrapper'></div>");

        var catswiper = new Swiper('.cats-slider', {
            spaceBetween: 10,
            loop: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.cats-slider .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 3,
                },
            },
        });
    }
    //////////** Menu **//////////
    if ($(window).width() <= 991) {
        //click on icon
        // $('.has-sub>a>span').click(function (e) {
        //     e.preventDefault()
        //     var item = $(this).parents("a");
        //     $(".has-sub>a").not(item).removeClass("active");
        //     $(item).toggleClass("active");
        //     if ($(item).siblings().css('display') == 'none') {
        //         $(item).siblings().slideDown(300);
        //     } else {
        //         $(item).siblings().slideUp(300);
        //     }
        //     $(".has-sub>a").not(item).siblings().slideUp(300);
        // })
        //click on link
        $('.has-sub>a').click(function (e) {
            e.preventDefault()
            $(".has-sub>a").not(this).removeClass("active");
            $(this).toggleClass("active");
            if ($(this).siblings().css('display') == 'none') {
                $(this).siblings().slideDown(300);
            } else {
                $(this).siblings().slideUp(300);
            }
            $(".has-sub>a").not(this).siblings().slideUp(300);
        })
        $('.menu-btn').click(function () {
            $("nav").addClass("active");
            $(".menu-overlay").fadeIn(300);
            $("body").addClass("overflow");
        })
        $('.menu-overlay,.close-btn').click(function () {
            $("nav").removeClass("active");
            $(".menu-overlay").fadeOut(400);
            $("body").removeClass("overflow");
        })
    }
    //////////** modal **//////////
    $('.log-btn,.user-btn').click(function () {
        $(".reg-modal").hide();
        $(".login-modal").fadeIn(300).scrollTop(0);
        $(".modal-overlay").fadeIn(300);
        $("body").addClass("overflow");
    })
    $('.reg-btn').click(function () {
        $(".login-modal").hide();
        $(".reg-modal").fadeIn(300).scrollTop(0);
        $(".modal-overlay").fadeIn(300);
        $("body").addClass("overflow");
    })
    $('.modal-overlay,.modal-close-btn').click(function () {
        $(".login-modal").fadeOut(300);
        $(".reg-modal").fadeOut(300);
        $(".modal-overlay").fadeOut(300);
        $("body").removeClass("overflow");
    })
    //////////** addition fieldes **//////////
    $('.more-fields').click(function () {
        $(".addition-fieldes").slideToggle(300);
        $(this).toggleClass("active");
    })
    //////////** grid list view **//////////
    $('.view-btn.grid').click(function () {
        $(".services-items-grid").removeClass("services-items-list");
        $(".view-btn.list").removeClass("active");
        $(this).addClass("active");
    })
    $('.view-btn.list').click(function () {
        $(".services-items-grid").addClass("services-items-list");
        $(".view-btn.grid").removeClass("active");
        $(this).addClass("active");
    })
    //////////** select2 **//////////
    if ($(window).width() >= 991) {
        $('.activities-saerch-select').select2();
        $('.plans-saerch-select').select2();
        $('.profile-select').select2({
            dropdownCssClass: "profile-select-dropdown"
        });
        $(".sort-select").select2({
            minimumResultsForSearch: Infinity
        });
    }
    //////////** filter **//////////
    if ($(window).width() <= 991) {
        $('.filters-btn').click(function () {
            $(".activities-saerch").addClass("active");
            $(".plans-saerch").addClass("active");
            $(".filter-overlay").fadeIn(300);
            $("body").addClass("overflow");
        })
        $('.filter-overlay').click(function () {
            $(".activities-saerch").removeClass("active");
            $(".plans-saerch").removeClass("active");
            $(".filter-overlay").fadeOut(300);
            $("body").removeClass("overflow");
        })
    }
    //////////** activity imgs **//////////
    var activityimgswiper = new Swiper('.activity-img .swiper-container', {
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.activity-img .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.activity-img .swiper-btn-next',
            prevEl: '.activity-img .swiper-btn-prev',
        },
    });
    //////////** scroll to section **//////////
    $(document).on("scroll", onScroll);
    $('.sticky-section a[data-href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = $(this).attr("data-href")
        menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 150
        }, 500, 'swing', function () {
            $(document).on("scroll", onScroll);
        });
    });
    $('.reviews-total-btn').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        var target = $(this).attr("data-href")
        menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 150
        }, 500, 'swing', function () {
            $(document).on("scroll", onScroll);
        });
    });
    //////////** rate **//////////
    $('.big-stars>i').click(function () {
        var rateVal = $(this).attr("data-value");
        $(".big-stars>input").prop('checked', false);
        $(".big-stars>i").removeClass("active");
        $(this).parents(".reviews-total").find("strong").html(rateVal + ".0")
        for (var i = 1; i <= rateVal; i++) {
            $(".big-stars>input[value=" + i + "]").prop('checked', true);
            $(".big-stars>i[data-value=" + i + "]").addClass("active");
        }
    })
    //////////** similar slider **//////////
    if ($(window).width() <= 991) {
        $(".similar-slider .service-item").unwrap("");
        $(".similar-slider .service-item").wrap("<div class='swiper-slide'></div>");
        $(".similar-slider .swiper-slide").wrapAll("<div class='swiper-wrapper'></div>");

        var similarswiper = new Swiper('.similar-slider', {
            spaceBetween: 10,
            loop: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.similar-slider .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 2,
                },
            },
        });
    }
    //////////** password **//////////
    $('.form-group .show').click(function () {
        var attr = $(this).siblings(".form-control").attr("type");
        if (attr == "password") {
            $(this).siblings(".form-control").attr("type", "text");
        } else {
            $(this).siblings(".form-control").attr("type", "password");
        }
        $(this).toggleClass("active")
    })
    //////////** del btn **//////////
    $(document).on('click', '.filesPreview>.file-pre>button', function (e) {
        e.preventDefault()
        var el = $(this).parents(".addFile").find("input");
        if (el.attr("multiple")) {
            $(this).parent().remove();
        } else {
            el.wrap('<form>').closest('form').get(0).reset();
            el.unwrap();
            $(this).parent().remove();
        }
    });
    //////////** textarea length **//////////
    $('textarea').on("input", function () {
        var maxlength = $(this).attr("maxlength");
        var currentLength = $(this).val().length;
        var left = maxlength - currentLength;
        $(this).parents(".form-group").find(".hint>span").html(left)
    });
    //////////** caht users **//////////
    $('.chat-window-title').click(function () {
        $(".chat-users-window").slideToggle(300)
        $(this).toggleClass("active")
    })
    //////////** progress bar **//////////
    $(window).scroll(function () {
        var els = $('.progress-bar')
        for (let i = 0; i < els.length; i++) {
            if ($(window).scrollTop() >= ($(els[i]).offset().top) - 700) {
                $(els[i]).css("width", "100%");
            }
        }
    });
});
function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.sticky-section a[data-href^="#"]').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("data-href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.sticky-section ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}
function profileImg(input) {
    $('.user-img-name img')[0].src = (window.URL ? URL : webkitURL).createObjectURL(input.files[0]);
}
function additemFiles(input) {
    var preview = $(input).siblings(".filesPreview");
    var files = input.files;
    preview.html("")
    for (let i = 0; i < files.length; i++) {
        var val = input.files[i];
        var size = (val.size / 1024).toFixed(1) + 'KB';
        var name = val.name;
        var img = (window.URL ? URL : webkitURL).createObjectURL(val);
        if (val.type.split("/")[0] == "image") {
            preview.append("<div class='file-pre'><img src='" + img + "'><div><span>" + name + "</span><span>" + size + "</span></div><button>??????</button></div>")
        } else if (val.type == "application/pdf") {
            preview.append("<div class='file-pre'><i class='fas fa-file-pdf'></i><div><span>" + name + "</span><span>" + size + "</span></div><button>??????</button></div>")
        } else {
            preview.append("<div class='file-pre'><i class='fas fa-file-alt'></i><div><span>" + name + "</span><span>" + size + "</span></div><button>??????</button></div>")
        }
        console.log(val.type);
    }
}


$(document).ready(function () {
    $('[data-toggle="tooltip"]').on('focus', function () {
        $(this).tooltip('hide');
    });
});