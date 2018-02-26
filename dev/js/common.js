$(document).ready(() =>{

    //app global var zon
    
    const doc = document;

    //Открыть элементы
   const popUpComponents = (buttonToShow, needComponents, buttonToHide) => {

   

        $(buttonToShow).click(function(buttonToShow){

            buttonToShow.preventDefault();

            $(needComponents).toggleClass('visuallyhidden');

        })
        
        

        $(buttonToHide).click(function(buttonToHide){

            buttonToHide.preventDefault();

            $(needComponents).toggleClass('visuallyhidden');

        })
    }
    popUpComponents('.open__form', '.form__feedback', '.close__batton-feedback')
    popUpComponents('.h__menu-link', '.h__menu', '.h__menu-close__batton')

    //slider

    const moveSlide = (cont, slideNum) => {

        const items = cont.find('.slider__item'),
            activeSlide = items.filter('.active__slide'),
            reqItem = items.eq(slideNum),
            reqIndex = reqItem.index(),
            list = cont.find('.slider__list'),
            dur = 500;
            

        if (reqItem.length) {
            list.animate({
                'left': -reqIndex * 100 + '%'
            }, dur, () => {
                activeSlide.removeClass('active__slide');
                reqItem.addClass('active__slide');
            });
        }
        

    };

    $('.slider__controls').on('click', event => {
        event.preventDefault();

        const $this = $(event.target),
            cont = $this.closest('.slider__teg'),
            items = $('.slider__item', cont),
            activeItem = items.filter('.active__slide');
        let existedItem,
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
   
    //Галерея

    $('[data-fancybox]').fancybox({
        toolbar  : true
    });

});