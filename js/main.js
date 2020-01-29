$(document).ready(function() {
    var windowWidth = $(window).width();
    if (windowWidth > 600) {
        var swiper = new Swiper('.swiper-container', {
            init: true,
            speed: 1000,
            spaceBetween: 20,
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            // direction: 'vertical',
            // loop: true,
            slidesPerView: 1,
            mousewheel: {
                invert: false,
                sensitivity: 1,
                releaseOnEdges: true,
                eventsTarged: 'container',
            },
            mousewheel: true,
            // pagination: {
            //   el: '.swiper-pagination',
            //   clickable: true,
            //   releaseOnEdges: true,
            // },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            preloadImages: false,
            on: {

                // transitionStart: function () {
                //   swiped = true;
                //   // TODO back this
                //   var activeSlide = this.activeIndex;
                //   // console.log(activeSlide);

                //   if (activeSlide == 0) {

                //   } else if (activeSlide == 1) {
                //   } else if (activeSlide == 2) {
                //   }
                // },
                transitionEnd: function() {
                    var activeSlide = this.activeIndex;
                    if (activeSlide == 1) {
                        $(".swiper-slide-active").find('.two-slide-left-block-select').each(function(i, el) {
                            var delay = i * 100;
                            console.log(i, el);

                            setTimeout(function() {
                                $(el).addClass('go-block');
                            }, delay);
                        });
                    }
                    $("#order1").click(function(event) {
                        document.getElementById('prise').innerHTML = '1000грн';
                        document.getElementById('menejer').innerHTML = 'Буду рад ответить';
                        swiper.slideTo(2, 1000);
                    });

                    $("#order2").click(function(event) {
                        document.getElementById('prise').innerHTML = '2000грн';
                        document.getElementById('menejer').innerHTML = 'Буду рад ответить';
                        swiper.slideTo(2, 1000);
                    });
                    $("#order3").click(function(event) {
                        document.getElementById('prise').innerHTML = '3000грн';
                        document.getElementById('menejer').innerHTML = 'Буду рад ответить';
                        swiper.slideTo(2, 1000);
                    });
                    $("#order4").click(function(event) {
                        document.getElementById('prise').innerHTML = '4000грн';
                        document.getElementById('menejer').innerHTML = 'Буду рад ответить';
                        swiper.slideTo(2, 1000);
                    });
                    $("#order5").click(function(event) {
                        document.getElementById('prise').innerHTML = '5000грн';
                        document.getElementById('menejer').innerHTML = 'Буду рад ответить';
                        swiper.slideTo(2, 1000);
                    });
                    $("#order6").click(function(event) {
                        document.getElementById('prise').innerHTML = '6000грн';
                        document.getElementById('menejer').innerHTML = 'Буду рад ответить';
                        swiper.slideTo(2, 1000);
                    });
                },
            },
        });

    } else {
        $("#order1").click(function(event) {
            document.getElementById('prise').innerHTML = '1000грн';
            swiper.slideTo(2, 1000);
        });

        $("#order2").click(function(event) {
            document.getElementById('prise').innerHTML = '2000грн';
            swiper.slideTo(2, 1000);
        });
        $("#order3").click(function(event) {
            document.getElementById('prise').innerHTML = '3000грн';
            swiper.slideTo(2, 1000);
        });
        $("#order4").click(function(event) {
            document.getElementById('prise').innerHTML = '4000грн';
            swiper.slideTo(2, 1000);
        });
        $("#order5").click(function(event) {
            document.getElementById('prise').innerHTML = '5000грн';
            swiper.slideTo(2, 1000);
        });
        $("#order6").click(function(event) {
            document.getElementById('prise').innerHTML = '6000грн';
            swiper.slideTo(2, 1000);
        });
    };


    $("#send").click(function(event) {
        if (true) { alert('Замовлення успішно відправлено') }
        window.location = document.referrer;
    });

});