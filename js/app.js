$(document).ready(function () {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".sticky").addClass("stickyadd")
        } else {
            $(".sticky").removeClass("stickyadd")
        }
    })

    var typed = new Typed(".element", {
        strings: ["Scarlett Johansson", "an Avenger", "a Problem Solver", "a Fixer"],
        smartBackSpace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });

    //Progress Bars.
    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function () {
            var p = document.querySelectorAll('.progress-bar');
            p[0].setAttribute("style", "width:95%; tarnsition:1s all");
            p[1].setAttribute("style", "width:81%; tarnsition:2s all");
            p[2].setAttribute("style", "width:63%; tarnsition:4s all");
            p[3].setAttribute("style", "width:54%; tarnsition:1s all");
            p[4].setAttribute("style", "width:70%; tarnsition:3s all");
        },
        offset:'90%'
    })



})