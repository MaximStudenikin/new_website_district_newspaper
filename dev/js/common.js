$(document).ready(function () {

    //app global var zon

    var doc = document;
    var mobailDetect = new MobileDetect(window.navigator.userAgent);
    var isMobail = mobailDetect.mobile();

    //Открыть элементы
    var popUpComponents = (buttonToShow, needComponents, buttonToHide) => {



        $(buttonToShow).click(function (buttonToShow) {

            buttonToShow.preventDefault();

            $(needComponents).toggleClass('visuallyhidden');

        })

        $(buttonToHide).click(function (buttonToHide) {

            buttonToHide.preventDefault();

            $(needComponents).toggleClass('visuallyhidden');

        })
    }
    popUpComponents('.open__form', '.form__feedback', '.close__batton-feedback')
    popUpComponents('.h__menu-link', '.h__menu', '.h__menu-close__batton')

    //slider

    //click ruls btn

    $('[data-class="slider__controls"]').on('click touchstart', function (event) {
        event.preventDefault();

        var $this = $(event.target),
            cont = $this.closest('[data-class="slider__teg"]'),
            items = $('[data-class="slider__item"]', cont),
            activeItem = items.filter('.active__slide');
        var existedItem,
            edgeItem,
            reqItem;

        if ($this.hasClass('controls__btn_next')) {
            existedItem = activeItem.next();
            edgeItem = items.first();
        }

        if ($this.hasClass('controls__btn_prev')) {
            existedItem = activeItem.prev();
            edgeItem = items.last();
        }
        
        reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

        moveSlide(cont, reqItem);  

    });


    //searh number slid and activ slide

    var moveSlide = function (cont, slideNum) {

        var items = cont.find('[data-class="slider__item"]'),
            activeSlide = items.filter('.active__slide'),
            reqItem = items.eq(slideNum),
            reqIndex = reqItem.index(),
            list = cont.find('[data-class="slider__list"]'),
            dur = 500;

        if (reqItem.length) {
            list.animate({
                'left': -reqIndex * 100 + '%'
            }, dur, function () {
                activeSlide.removeClass('active__slide');
                reqItem.addClass('active__slide');
                colorAtiveItem(cont, slideNum);
            });
    };

    };

    //generation number of slide

    var generateItems = function (cont, sliderItem, paginationList) {

        var sliders = $(cont);

        for (var indexSlider = 0; indexSlider < sliders.length; indexSlider++) {
            currentSliders = sliders[indexSlider];

            $(sliderItem, currentSliders).each(function (indexNumber) {

                var paginationItem = $('<li>', {
                    attr: {
                        class: 'pagination__item'
                    },
                    html: '<a class="pagination__link">' + (indexNumber + 1) + '</a>'
                });

                $(paginationList, currentSliders).append(paginationItem);
            })
        }
    };

    generateItems('[data-class="slider__teg"]', '[data-class="slider__item"]', '[data-class="pagination__list"]');

    // color active item pagination

    var colorAtiveItem = function (container, index) {

        $('.pagination__item', container)
            .eq(index)
            .addClass('pagination__item--activ')
            .siblings()
            .removeClass('pagination__item--activ');
    }

    //click on pugination slider

    $('body').on('click touchstart', '.pagination__item', function () {

        var $this = $(this),
            container = $this.closest('[data-class="slider__teg"]'),
            index = $this.index();

        moveSlide(container, index);
        colorAtiveItem(container, index);


    });

    $(window).swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            moveSlide(container, index);
        colorAtiveItem(container, index);
        }
    })

    //slidershow

    //slidershow controls

    $('.slidershow__controls').on('click touchstart', function (event) {
        event.preventDefault();

        var $this = $(event.target),
            container = $this.closest('.slidershow'),
            items = $('.slidershow__item', container),
            activeItem = items.filter('.slidershow__item--activ'),
            browsingReview = $('.slidershow__review', container),
            browsingLink = $('.browsing__link', container),
            preloader = $('.slidershow__preloader', container),
            existedItem,
            edgeItem,
            reqItems;

        if ($this.hasClass('controls__btn_next')) {
            existedItem = activeItem.next();
            existedItem.addClass('slidershow__item--activ');
            existedItem.siblings().removeClass('slidershow__item--activ');
            nextPath = $('.slidershow__link', '.slidershow__item--activ').attr('href');

            browsingReview.fadeOut(function () {
                preloader.show();
                browsingReview.attr('src', nextPath).on('load', function () {
                    browsingLink.attr('href', nextPath);
                    browsingReview.fadeIn();
                    preloader.hide();
                })
            })
            var nextIndex = existedItem.index();
        }
        if (nextIndex == -1) {
            edgeItem = items.first();
            edgeItem.addClass('slidershow__item--activ');
            edgeItem.siblings().removeClass('slidershow__item--activ');
            nextPath = $('.slidershow__link', '.slidershow__item--activ').attr('href');
        }
        if ($this.hasClass('controls__btn_prev')) {
            existedItem = activeItem.prev();
            existedItem.addClass('slidershow__item--activ');
            existedItem.siblings().removeClass('slidershow__item--activ');
            prevPath = $('.slidershow__link', '.slidershow__item--activ').attr('href');

            browsingReview.fadeOut(function () {
                preloader.show();
                browsingReview.attr('src', prevPath).on('load', function () {
                    browsingLink.attr('href', prevPath);
                    browsingReview.fadeIn();
                    preloader.hide();
                })
            })
            prevIndex = existedItem.index();
        }
        if (prevIndex == -1) {
            edgeItem = items.last();
            edgeItem.addClass('slidershow__item--activ');
            edgeItem.siblings().removeClass('slidershow__item--activ');
            prevPath = $('.slidershow__link', '.slidershow__item--activ').attr('href');
        }

    })

    //click on pagination

    $('.slidershow__link').on('click touchstart', function (event) {
        event.preventDefault();

        var $this = $(event.currentTarget),
            container = $this.closest('.slidershow'),
            targetItem = $this.closest('.slidershow__item'),
            path = $this.attr('href'),
            browsingReview = container.find('.slidershow__review'),
            browsingLink = container.find('.browsing__link'),
            preloader = $('.slidershow__preloader', container);

        targetItem.addClass('slidershow__item--activ');
        targetItem.siblings().removeClass('slidershow__item--activ');

        browsingReview.fadeOut(function () {
            preloader.show();
            browsingReview.attr('src', path).on('load', function () {
                browsingLink.attr('href', path);
                browsingReview.fadeIn();
                preloader.hide();
            })
        })
    })


    //gallery

    $('[data-fancybox]').fancybox({
        toolbar: true
    });

});