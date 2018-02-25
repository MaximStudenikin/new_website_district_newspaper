$(document).ready(function() {

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

   
    //Галерея

    $('[data-fancybox]').fancybox({
        toolbar  : true
    });

});