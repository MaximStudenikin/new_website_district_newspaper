$(document).ready(function(){

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

    //click ruls btn

    $('.slider__controls').on('click', event => {
        event.preventDefault();

        const $this = $( event.target),
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

        //listing slid

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
                    // activeSlide(slideNum);
                });
            }
            
    
        };

     //generation number of slide

     var generatePagination = () => {

        const sliders = $('.slider__teg'),
            reqslider = sliders.eq(sliderNum),
            reqIndex = reqslider.index(sliderIndex);


                $('.slider__item').each(() =>{
                    let paginationItem = $('<li>',{
                        attr : {
                            class: 'pagination__item'
                        },
                        html : '<a class="pagination__link">0</a>'
                    });
                    
                    $('.pagination__list').eq(sliderIndex).append(paginationItem);
                })
            
    };

    generatePagination();

    //click on pugination

   $('body').on('click', '.pagination__item', event => {
    event.preventDefault();

    var $this = $(this),
    container = $this.closest('.slider__teg'),
    index = $this.index();

    moveSlide(container, index);
    activeSlide(index);
   });

    //color active slide

    var activeSlide = (index)=>{
        $('.slider__teg')
        .find('.pagination__item')
        .eq(index)
        .addClass('.pagination__link--activ')
        .siblings()
        .removeClass('.pagination__link--activ');
    }
   
    //Галерея

    $('[data-fancybox]').fancybox({
        toolbar  : true
    });

});