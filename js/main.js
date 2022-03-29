$(function () {

    // Change Header Background If The Window ScrollY Is > 606 px
    $(window).scroll(function () {

        if (this.scrollY > 606) {

            $("header").addClass("color");

            $("header").css("backgroundColor", "black")

        } else {
            $("header").css("backgroundColor", "");
            $("header").removeClass("color");
        }
    })


    // Show Or Hide My Menue When I Click The The Icun Bars
    $(".fa-bars").click(function () {
        $("nav").toggleClass("hidemenu")
    })

    // Make smooth Scrolling
    $("nav ul li a").click(function (e) {

        e.preventDefault();

        $("nav").removeClass("hidemenu")

        $("html, body").animate({
            scrollTop: $('#' + $(this).data("scroll")).offset().top + 1

        });
    })

    // Add Active Class And Remove From Siblings
    $("nav ul li a").click(function () {

        $(this).addClass("active").parent().siblings().find('a').removeClass("active");
    })

    // Sync Navbar Links With My All Sections
    $(window).scroll(function () {

        $("section").each(function () {

            if ($(window).scrollTop() > $(this).offset().top) {


                let sections = $(this).attr('id');

                $("nav ul li a").removeClass("active");

                $('nav ul li a[data-scroll="' + sections + '"]').addClass("active")

            }
        })
    })

    // Show The Arrow-up If Window scrollY Is >= 590
    $(window).scroll(function () {

        if (this.scrollY >= 590) {

            $(".fa-arrow-up").fadeIn("slow")

        } else {
            $(".fa-arrow-up").fadeOut("slow")
        }
    })

    // Click To Go Up
    $(".fa-arrow-up").click(function () {

        $(window).scrollTop(0)
    })
})
