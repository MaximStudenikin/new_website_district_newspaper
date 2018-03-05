$(document).ready(function () {

    //app global var zon

    var doc = document;

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

    $('.slider__controls').on('click', function (event) {
        event.preventDefault();

        var $this = $(event.target),
            cont = $this.closest('.slider__teg'),
            items = $('.slider__item', cont),
            activeItem = items.filter('.active__slide');
        var existedItem,
            edgeItem,
            reqItem;

        if ($this.hasClass('controls__btn__next')) {
            existedItem = activeItem.next();
            edgeItem = items.first();
        }

        if ($this.hasClass('controls__btn__prev')) {
            existedItem = activeItem.prev();
            edgeItem = items.last();
        }

        reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

        moveSlide(cont, reqItem);

    });

    //searh number slid and activ slide

    var moveSlide = function (cont, slideNum) {

        var items = cont.find('.slider__item'),
            activeSlide = items.filter('.active__slide'),
            reqItem = items.eq(slideNum),
            reqIndex = reqItem.index(),
            list = cont.find('.slider__list'),
            dur = 500;

        if (reqItem.length) {
            list.animate({
                'left': -reqIndex * 100 + '%'
            }, dur, function () {
                activeSlide.removeClass('active__slide');
                reqItem.addClass('active__slide');
                colorAtiveItem(cont, slideNum);
            });
        }

    };

    //generation number of slide

    var generateItems = function (sliderContainer, sliderItem, paginationList) {

        var sliders = $(sliderContainer);

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

    // color active item pagination

    var colorAtiveItem = function (container, index) {

        $('.pagination__item', container)
            .eq(index)
            .addClass('pagination__item--activ')
            .siblings()
            .removeClass('pagination__item--activ');
    }

    //click on pugination slider

    $('body').on('click', '.pagination__item', function () {

        var $this = $(this),
            container = $this.closest('.news'),
            index = $this.index();

        movePuginationSlide(container, index);
        colorAtiveItem(container, index);
    });


    // news sliders

    //searh number slid and activ news

    var movePuginationSlide = function (newsContainer, newsNum) {

        var 
            items = newsContainer.find('.news__item'),
            activeNews = items.filter('.active__news'),
            reqItem = items.eq(newsNum),
            reqIndex = reqItem.index(),
            list = newsContainer.find('.news__list'),
            dur = 500;

        if (reqItem.length) {
            list.animate({
                'left': -reqIndex * 100 + '%'
            }, dur, function () {
                activeNews.removeClass('active__news');
                reqItem.addClass('active__news');
                colorAtiveItem(newsContainer, newsNum);
            });
        }

    };

    //generation number of news

    generateItems('.news', '.news__item', '.pagination__list');

    // color active item news pagination

    var colorAtiveItem = function (newsContainer, index) {

        $('.pagination__item', newsContainer)
            .eq(index)
            .addClass('pagination__item--activ')
            .siblings()
            .removeClass('pagination__item--activ');
    }

    //click on pugination news

    $('body').on('click', '.pagination__item', function () {

        var $this = $(this),
            newsContainer = $this.closest('.news'),
            index = $this.index();

        movePuginationSlide(newsContainer, index);
        colorAtiveItem(newsContainer, index);
    });


    //gallery

    $('[data-fancybox]').fancybox({
        toolbar: true
    });

});