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
    });
})();
