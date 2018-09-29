$('.serch-form__button').on('click', function(){

  $('.serch-form__button').toggleClass('serch-form__button_close');
  $('.serch-form__input').toggleClass('serch-form__input_open');
  $('.serch-form').toggleClass('serch-form_active');
  
  if ($('.serch-form__button').hasClass('serch-form__button_close')) {
    $('.serch-form__input').focus();
  } else {
    $('.serch-form__input').blur();
  }

});