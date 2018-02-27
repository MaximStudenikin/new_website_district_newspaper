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
                activeSlide(slideNum);
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

        //color active slide

        var activeSlide = (index)=>{
            $('.news')
                .find('.pagination__item')
                .eq(index)
                .addClass('.pagination__link--activ')
                .siblings()
                .removeClass('.pagination__item');
        }

        var faintSliders = (slideNum) =>{

            const   container = $('.news'),
                    reqSlider = container.eq(slideNum);
            for(){
                //...
            }
        }

        faintSliders();
    
        //generation number of slide
    
        var generateNumber = () => {

            let numberSlide = 1;
    
            $('.news__item').each((numberSlide)=>{
                let number = $('<li>',{
                    attr : {
                        class: 'pagination__item'
                    },
                    html : '<a class="pagination__link">'+ numberSlide +'</a>'
                });
                $('.pagination__list').append(number);
            })
        };
    
        generateNumber();

    //click on pugination

   $('body').on('click', '.pagination__item', (event)=>{
    event.preventDefault();
    var $this = $(this),
    container = $this.closest('.news'),
    index = $this.index();

    moveSlide(container, index);
    activeSlide(index);
   });
   
    //Галерея

    $('[data-fancybox]').fancybox({
        toolbar  : true
    });

});