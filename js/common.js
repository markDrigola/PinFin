'use strict'
;(function () {
    $(document).on('ready', function () {
        $('.slider1').slick({
            dots: true,
            infinite: true,
            speed: 300,
            arrow: true,
            slidesToShow: 1
        });

        $('.sliderCards').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.sliderCardsMin'
        });
        $('.sliderCardsMin').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            asNavFor: '.sliderCards',
            dots: false,
            focusOnSelect: true
        });

        
        //SliderPopap
        $('.sliderCardsPop').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.sliderCardsMinPop'
        });
        $('.sliderCardsMinPop').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.sliderCardsPop',
            dots: false,
            focusOnSelect: true
        });

        //Cards List
        $('.cartButton ').on('click', function () {
            $('.cratsListAddedAll').slideToggle();
        });

        //City modal
        $('.modalCityList').on('click','li > a', function (event) {
            event.preventDefault();
            $('.modalCityList').find('li').find('a').removeClass('activeCity');
            $(this).addClass('activeCity');
            $('#myModal1').modal('hide');
            $('.cityPosition').text($(this).text());
        });

        //Filters accordion
        $('.titleAccord').on('click', function () {
            if($(this).parent().parent().find('div').hasClass('accordToggleSlide')) {
                if($(this).parent().hasClass('notActiveAccords')) {
                    $(this).parent().removeClass('notActiveAccords');
                } else {
                    $(this).parent().addClass('notActiveAccords');
                }

                $(this).parent().parent().find('.accordToggleSlide').slideToggle();
            }
        });

        //Link scrollTop
        $('.linkTopClick').on('click', function (event) {
            event.preventDefault();
            $('body,html').animate({scrollTop: 0}, 800);
        })


        //tab - size
        $('.sizeNav').on('click','li', function () {
            var blockTabs = $('.tabsContent');
            var navIndex = $(this).index();

            $('.sizeNav').find('li').removeClass('active');
            $(this).addClass('active');
            blockTabs.css({
                "display":"none"
            });
            blockTabs.eq(navIndex).fadeIn();
        });

        var startCountInpot = $('.inputCount').val();
        $('.leftCountBlock').on('click', function () {
            startCountInpot--;
            if(startCountInpot === 0 || startCountInpot === -1 || startCountInpot < -1) {
                startCountInpot = 0;
                $('.inputCount').val(0);
                return;
            } else {
                $('.inputCount').val(startCountInpot);
            }

        });

        $('.rightCountBlock').on('click', function () {
            startCountInpot++;
            $('.inputCount').val(startCountInpot);
        });

        $('.zoom').zoomy();

        $(".reviewsInfoBlock").customScrollbar();
        
        //burgerMenu
        $('.burgerBlock').on('click','i', function () {
            $('.navsAll').slideToggle();
        })

        $('.openModalCard').on('click', function () {
            $('.modal5').modal('show');
            $('.sliderCardsMinPop').find('.slick-next').trigger('click');
            $('.sliderCardsPop').find('.slick-next').trigger('click');
        })
    });
})();
