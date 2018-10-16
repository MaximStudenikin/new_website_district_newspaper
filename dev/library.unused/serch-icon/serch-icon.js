$('.serch-icon__button').on('click', function(){

  $('.serch-icon__button').toggleClass('serch-icon__button_close');
  $('.serch-icon__input').toggleClass('serch-icon__input_open');
  $('.serch-icon').toggleClass('serch-icon_active');
  
  if ($('.serch-icon__button').hasClass('serch-icon__button_close')) {
    $('.serch-icon__input').focus();
  } else {
    $('.serch-icon__input').blur();
  }

});