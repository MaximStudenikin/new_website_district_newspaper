$(document).ready(function () {

  //Кнопи разделов в новостном топе
		 
var URL_host = 'http://gazetauzao.ru/category/',
main_section = ['http://gazetauzao.ru/category/novosti-goroda/',
        'http://gazetauzao.ru/category/uzao-news/',
        'http://gazetauzao.ru/category/stati-iz-gazety/'],
second_section = ['http://gazetauzao.ru/category/zhkx/',
          'http://gazetauzao.ru/category/bezopasnost/',
          'http://gazetauzao.ru/category/socsfera/',
          'http://gazetauzao.ru/category/sluzhu-otechestvu/',
          'http://gazetauzao.ru/category/obshchyestvo/',
          'http://gazetauzao.ru/category/aktivnyj-grazhdanin/',
          'http://gazetauzao.ru/category/kolumnistika/',
          'http://gazetauzao.ru/category/mck/',
          'http://gazetauzao.ru/category/letnij-otdyh/',
          'http://gazetauzao.ru/category/ekonomika/',
          'http://gazetauzao.ru/category/vlast/',
          'http://gazetauzao.ru/category/zvanyy-gost/'],
when = window.location.href;

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
};

(when == URL_host + 'novosti-goroda/' || when == URL_host + 'novosti-goroda/?page='  +  getUrlVars().page) ? $('#tabs').html('<div class="labels"><ul><li class="labels__item"><a class="labels__link" href="' + main_section[1] + '">Новости ЮЗАО</a></li>' + 
'<li class="labels__item"><a class="labels__link"> href="' + main_section[2] + '">Статьи</a></li></ul></div>') :
(when == URL_host + 'uzao-news/' || when == URL_host + 'uzao-news/?page='  +  getUrlVars().page) ? $('#tabs').html('<div class="labels"><ul><li class="labels__item"><a class="labels__link" href="' + main_section[0] + '">Все новости</a></li>' + 
'<li class="labels__item"><a href="' + main_section[2] + '">Статьи</a></li></ul></div>') :
(when !=  URL_host + 'novosti-goroda/' || when != URL_host + 'novosti-goroda/?page='  +  getUrlVars().page) ? $('#tabs').html('<div class="labels"><ul><li class="labels__item"><a class="labels__link" href="' + main_section[0] + '">Все новости</a></li>' +
'<li class="labels__item"><a class="labels__link" href="' + main_section[1] + '">Новости ЮЗАО</a></li>'+
'<li class="labels__item"><a class="labels__link" href="' + second_section[0] + '">ЖКХ</a></li>' +
'<li class="labels__item"><a class="labels__link" href="' + second_section[1] + '">Безопасность</a></li>' +
'<li class="labels__item"><a class="labels__link" href="' + second_section[2] + '">Соцсфера</a></li>' +
'<li class="labels__item"><a class="labels__link" href="' + second_section[3] + '">Служу Отечеству</a></li>' +
'<li class="labels__item"><a class="labels__link" href="' + second_section[4] + '">Общество</a></li>' + 
'<li class="labels__item"><a class="labels__link" href="' + second_section[5] + '">Активный гражданин</a></li>' +
'<li class="labels__item"><a class="labels__link" href="' + second_section[6] + '">Колумнистика</a></li>' +
'<li class="labels__item"><a class="labels__link" href="' + second_section[7] + '">МЦК</a></li>' +
'<li class="labels__item"><a class="labels__link" href="' + second_section[8] + '">Летний отдых</a></li>' +
'<li class="labels__item"><a class="labels__link" href="' + second_section[9] + '">Экономика</a></li>' +
'<li class="labels__item"><a class="labels__link" href="' + second_section[10] + '">Власть</a></li>' + 
'<li class="labels__item"><a class="labels__link" href="' + second_section[11] + '">Званый гость</a></li></ul></div>'):
$('#tabs').remove();

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
  
  popUpComponents('.open__form', '.form-feedback', '.close__batton-feedback')
  popUpComponents('.h__menu-link', '.h__menu', '.h__menu-close__batton')
  popUpComponents('.categories--open', '.categories', '.categories--close')
  
  //vertical accordion
  
  $('.categories__trigger').on('click touchstart', event => {
      event.preventDefault();
  
      var $this = $(event.currentTarget);
      var container = $this.closest('.categories-accordeon');
      var item = $this.closest('.categories__item');
      var items = $('.categories__item', container);
      var content = $('.categories__content', item);
      var otherContent = $('.categories__content', container);
      var block = $('.categories__content_inner', item);
      var reqHeight = block.outerHeight();
  
      if (!item.hasClass('categories__item--activ')) {
          items.removeClass('categories__item--activ')
          item.addClass('categories__item--activ')
  
          otherContent.css({
              'height': 0
          })
  
          content.css({
              'height': reqHeight
          })
  
      } else {
  
          item.removeClass('categories__item--activ');
          content.css({
              'height': 0
          })
      }
  
  })
  
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
  
  //owl-carousel
  
  $('.owl-carousel').owlCarousel({
      loop: true,
      dots: true,
      margin: 5,
      autoplay: true,
      autoplayTimeout: 5000,
      responsiveClass:true,
      responsive: {
          0: {
              items: 3
          },
          800: {
              items: 3
          },
          1800: {
              items: 3
          }
      }
  })
  
  $('.owl-btn-next').click(function (event) {
      event.preventDefault();
      $('.owl-carousel').trigger('next.owl.carousel');
  })
  
  $('.owl-btn-prev').click(function (event) {
      event.preventDefault();
      $('.owl-carousel').trigger('prev.owl.carousel');
  })
  
  //Search form
  $('.search__btn').on('click touchstart', function(){
  
      $(".search__btn").toggleClass("serch-form--close");
      $(".serch__input").toggleClass("serch__input--active");
      $(".serch-form").toggleClass("serch-form--active");
      
      if ($('.search__btn').hasClass('serch-form--close')) {
        $('.serch__input').focus();
      } else {
        $('.serch__input').blur();
      }
  
  })
  
  //feedback form
  
      $('#message-subject').on('click touchstart', function(event){
          
            $('#message-subject').focus();
          
      })
      $('#user-name').on('click touchstart', function(event){
          
            $('#user-name').focus();
          
      })
      $('#user-email').on('click touchstart', function(event){
          
            $('#user-email').focus();
          
      })
      $('#user-message').on('click touchstart', function(event){
          
            $('#user-message').focus();
          
      })
  
  });