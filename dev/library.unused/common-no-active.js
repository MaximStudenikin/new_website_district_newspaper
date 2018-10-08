$(document).ready(function () {

//app global var zon

// var doc = document;
var mobailDetect = new MobileDetect(window.navigator.userAgent);
var isMobail = mobailDetect.mobile();

//Открыть элементы

var visibliBlock = (buttonToShow, blockToShow, buttonToHide) => {

    $(buttonToShow).on('click touchstart', buttonToShow =>
    {

        buttonToShow.preventDefault();

        $(blockToShow).toggleClass('_visually_hidden');

    })

    $(buttonToHide).on('click touchstart', buttonToHide =>
    {

        buttonToHide.preventDefault();

        $(blockToShow).toggleClass('_visually_hidden');

    })
}

visibliBlock('.nav__link_show-feedback-form', '.feedback-form', '.close-batton_close-feedback-form')
// popUpComponents('.h__menu-link', '.h__menu', '.h__menu-close__batton')
visibliBlock('.nav__link_show-categories', '.categories', '.close-batton_close-categories');

//vertical accordion

// $('.categories__trigger').on('click touchstart', event => {
//     event.preventDefault();

//     var $this = $(event.currentTarget);
//     var container = $this.closest('.categories-accordeon');
//     var item = $this.closest('.categories__item');
//     var items = $('.categories__item', container);
//     var content = $('.categories__content', item);
//     var otherContent = $('.categories__content', container);
//     var block = $('.categories__content_inner', item);
//     var reqHeight = block.outerHeight();

//     if (!item.hasClass('categories__item--activ')) {
//         items.removeClass('categories__item--activ')
//         item.addClass('categories__item--activ')

//         otherContent.css({
//             'height': 0
//         })

//         content.css({
//             'height': reqHeight
//         })

//     } else {

//         item.removeClass('categories__item--activ');
//         content.css({
//             'height': 0
//         })
//     }

// })

//slider

//click ruls btn

$('.slider__controls').on('click touchstart', function (event) {
    event.preventDefault();

    var $this = $(event.target),
        cont = $this.closest('.slider__content'),
        items = $('.slider__item', cont),
        activeItem = items.filter('.slider__item_js_active');
    var existedItem,
        edgeItem,
        reqItem;

    if ($this.hasClass('controls__button_next')) {
        existedItem = activeItem.next();
        edgeItem = items.first();
    }

    if ($this.hasClass('controls__button_prev')) {
        existedItem = activeItem.prev();
        edgeItem = items.last();
    }

    reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

    moveSlide(cont, reqItem);

});


//searh number slid and activ slide

var moveSlide = function (cont, slideNum) {

    var items = cont.find('.slider__item'),
        activeSlide = items.filter('.slider__item_js_active'),
        reqItem = items.eq(slideNum),
        reqIndex = reqItem.index(),
        list = cont.find('.slider__list'),
        dur = 500;

    if (reqItem.length) {
        list.animate({
            'left': -reqIndex * 100 + '%'
        }, dur, function () {
            activeSlide.removeClass('slider__item_js_active');
            reqItem.addClass('slider__item_js_active');
        });
    };

};

//generation number of slide

// var generateItems = function (cont, sliderItem, paginationList) {

//     var sliders = $(cont);

//     for (var indexSlider = 0; indexSlider < sliders.length; indexSlider++) {
//         currentSliders = sliders[indexSlider];

//         $(sliderItem, currentSliders).each(function (indexNumber) {

//             var paginationItem = $('<li>', {
//                 attr: {
//                     class: 'pagination__item'
//                 },
//                 html: '<a class="pagination__link">' + (indexNumber + 1) + '</a>'
//             });

//             $(paginationList, currentSliders).append(paginationItem);
//         })
//     }
// };

// generateItems('[data-class="slider__teg"]', '[data-class="slider__item"]', '[data-class="pagination__list"]');

// color active item pagination

// var colorAtiveItem = function (container, index) {

//     $('.pagination__item', container)
//         .eq(index)
//         .addClass('pagination__item--activ')
//         .siblings()
//         .removeClass('pagination__item--activ');
// }

//click on pugination slider

// $('body').on('click touchstart', '.pagination__item', function () {

//     var $this = $(this),
//         container = $this.closest('[data-class="slider__teg"]'),
//         index = $this.index();

//     moveSlide(container, index);
//     colorAtiveItem(container, index);


// });

$(window).swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
        moveSlide(container, index);
        colorAtiveItem(container, index);
    }
})

//imgSlider

function browsingImages(imgSlider,edgeItem, existedItem) 
{

    imgSlider.browsingReview.fadeOut(function ()
    
    {
        imgSlider.preloader.show();
        imgSlider.browsingReview.attr('src', nextPath).on('load', function ()
        
        {
            imgSlider.browsingLink.attr('href', nextPath);
            imgSlider.browsingReview.fadeIn();
            imgSlider.preloader.hide();
        })

    })

    if (!existedItem) 
    {
        edgeItem = imgSlider.items.first();
        edgeItem.addClass(itemActiveClass)
        .siblings().removeClass(itemActiveClass);
        nextPath = $(imgSlider.link, imgSlider.itemActiveClass).attr('href');
    }

}

//imgSlider controls

$('.imgSlider__controls').on('click touchstart', function (event, imgSlider) {
    event.preventDefault();

    var $this = $(event.target),
        imgSlider = {
        thisSlider : $('.imgSlider'),
        items : $('.imgSlider__item', container),
        link : $('.imgSlider__link'),
        itemActiveClass : 'imgSlider__item_activ',
        browsingReview : $('.imgSlider__review', container),
        browsingLink : $('.browsing__link', container),
        preloader : $('.imgSlider__preloader', container)
        },
        container = $this.closest(imgSlider.thisSlider),
        activeItem = imgSlider.items.filter(imgSlider.itemActiveClass),
        existedItem,
        edgeItem,
        reqItems;

    if ($this.hasClass('controls__button_next')) {
        existedItem = activeItem.next();

        existedItem.addClass(imgSlider.itemActiveClass)
        .siblings().removeClass(imgSlider.itemActiveClass);

        nextPath = $(imgSlider.link, imgSlider.itemActiveClass).attr('href');

        browsingImages(imgSlider,edgeItem,existedItem.index());
    } 
    
  

    if ($this.hasClass('controls__button_prev')) 
    {
        existedItem = activeItem.prev();

        existedItem.addClass(imgSlider.itemActiveClass)
        .siblings().removeClass(imgSlider.itemActiveClass);

        prevPath = $(imgSlider.link, imgSlider.itemActiveClass).attr('href');

        browsingImages(imgSlider,edgeItem,existedItem.index());
    } 

    

})

//click on pagination

// $('.slidershow__link').on('click touchstart', function (event) {
//     event.preventDefault();

//     var $this = $(event.currentTarget),
//         container = $this.closest('.slidershow'),
//         targetItem = $this.closest('.slidershow__item'),
//         path = $this.attr('href'),
//         browsingReview = container.find('.slidershow__review'),
//         browsingLink = container.find('.browsing__link'),
//         preloader = $('.slidershow__preloader', container);

//     targetItem.addClass('slidershow__item--activ');
//     targetItem.siblings().removeClass('slidershow__item--activ');

//     browsingReview.fadeOut(function () {
//         preloader.show();
//         browsingReview.attr('src', path).on('load', function () {
//             browsingLink.attr('href', path);
//             browsingReview.fadeIn();
//             preloader.hide();
//         })
//     })
// })


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

$('.serch-form__button').on('click touchstart', function(){

    $('.serch-form__button').toggleClass('serch-form__button_close');
    $('.serch-form__input').toggleClass('serch-form__input_open');
    $('.serch-form').toggleClass('serch-form_active');
    
    if ($('.serch-form__button').hasClass('serch-form__button_close')) {
      $('.serch-form__input').focus();
    } else {
      $('.serch-form__input').blur();
    }

});

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

$('.accordion').accordion({
    transitionSpeed: 300,
    transitionEasing: 'ease',
    controlElement: '[data-control]',
    contentElement: '[data-content]',
    groupElement: '[data-accordion-group]',
    singleOpen: true
});

});

/*!
 * jQuery Accordion 0.0.1
 * (c) 2014 Victor Fernandez <victor@vctrfrnndz.com>
 * MIT Licensed.
 */

;(function ( $, window, document, undefined ) {

    var pluginName = 'accordion',
        defaults = {
            transitionSpeed: 300,
            transitionEasing: 'ease',
            controlElement: '[data-control]',
            contentElement: '[data-content]',
            groupElement: '[data-accordion-group]',
            singleOpen: true
        };

    function Accordion(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Accordion.prototype.init = function () {
        var self = this,
            opts = self.options;

        var $accordion = $(self.element),
            $controls = $accordion.find('> ' + opts.controlElement),
            $content =  $accordion.find('> ' + opts.contentElement);

        var accordionParentsQty = $accordion.parents('[data-accordion]').length,
            accordionHasParent = accordionParentsQty > 0;

        var closedCSS = { 'max-height': 0, 'overflow': 'hidden' };

        var CSStransitions = supportsTransitions();

        function debounce(func, threshold, execAsap) {
            var timeout;

            return function debounced() {
                var obj = this,
                    args = arguments;

                function delayed() {
                    if (!execAsap) func.apply(obj, args);
                    timeout = null;
                };

                if (timeout) clearTimeout(timeout);
                else if (execAsap) func.apply(obj, args);

                timeout = setTimeout(delayed, threshold || 100);
            };
        }

        function supportsTransitions() {
            var b = document.body || document.documentElement,
                s = b.style,
                p = 'transition';

            if (typeof s[p] == 'string') {
                return true;
            }

            var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];

            p = 'Transition';

            for (var i=0; i<v.length; i++) {
                if (typeof s[v[i] + p] == 'string') {
                    return true;
                }
            }

            return false;
        }

        function requestAnimFrame(cb) {
            if(window.requestAnimationFrame){
                requestAnimationFrame(cb);
            } else if (window.webkitRequestAnimationFrame) {
                webkitRequestAnimationFrame(cb);
            } else if (window.mozRequestAnimationFrame) {
                mozRequestAnimationFrame(cb);
            } else {
                setTimeout(cb, 1000 / 60);
            }
        }

        function toggleTransition($el, remove) {
            if(!remove) {
                $content.css({
                    '-webkit-transition': 'max-height ' + opts.transitionSpeed + 'ms ' + opts.transitionEasing,
                    'transition': 'max-height ' + opts.transitionSpeed + 'ms ' + opts.transitionEasing
                });
            } else {
                $content.css({
                    '-webkit-transition': '',
                    'transition': ''
                });
            }
        }

        function calculateHeight($el) {
            var height = 0;

            $el.children().each(function() {
                height = height + $(this).outerHeight(true);
            });

            $el.data('oHeight', height);
        }

        function updateParentHeight($parentAccordion, $currentAccordion, qty, operation) {
            var $content = $parentAccordion.filter('.open').find('> [data-content]'),
                $childs = $content.find('[data-accordion].open > [data-content]'),
                $matched;

            if(!opts.singleOpen) {
                $childs = $childs.not($currentAccordion.siblings('[data-accordion].open').find('> [data-content]'));
            }

            $matched = $content.add($childs);

            if($parentAccordion.hasClass('open')) {
                $matched.each(function() {
                    var currentHeight = $(this).data('oHeight');

                    switch (operation) {
                        case '+':
                            $(this).data('oHeight', currentHeight + qty);
                            break;
                        case '-':
                            $(this).data('oHeight', currentHeight - qty);
                            break;
                        default:
                            throw 'updateParentHeight method needs an operation';
                    }

                    $(this).css('max-height', $(this).data('oHeight'));
                });
            }
        }

        function refreshHeight($accordion) {
            if($accordion.hasClass('open')) {
                var $content = $accordion.find('> [data-content]'),
                    $childs = $content.find('[data-accordion].open > [data-content]'),
                    $matched = $content.add($childs);

                calculateHeight($matched);

                $matched.css('max-height', $matched.data('oHeight'));
            }
        }

        function closeAccordion($accordion, $content) {
            $accordion.trigger('accordion.close');
            
            if(CSStransitions) {
                if(accordionHasParent) {
                    var $parentAccordions = $accordion.parents('[data-accordion]');

                    updateParentHeight($parentAccordions, $accordion, $content.data('oHeight'), '-');
                }

                $content.css(closedCSS);

                $accordion.removeClass('open');
            } else {
                $content.css('max-height', $content.data('oHeight'));

                $content.animate(closedCSS, opts.transitionSpeed);

                $accordion.removeClass('open');
            }
        }

        function openAccordion($accordion, $content) {
            $accordion.trigger('accordion.open');
            if(CSStransitions) {
                toggleTransition($content);

                if(accordionHasParent) {
                    var $parentAccordions = $accordion.parents('[data-accordion]');

                    updateParentHeight($parentAccordions, $accordion, $content.data('oHeight'), '+');
                }

                requestAnimFrame(function() {
                    $content.css('max-height', $content.data('oHeight'));
                });

                $accordion.addClass('open');
            } else {
                $content.animate({
                    'max-height': $content.data('oHeight')
                }, opts.transitionSpeed, function() {
                    $content.css({'max-height': 'none'});
                });

                $accordion.addClass('open');
            }
        }

        function closeSiblingAccordions($accordion) {
            var $accordionGroup = $accordion.closest(opts.groupElement);

            var $siblings = $accordion.siblings('[data-accordion]').filter('.open'),
                $siblingsChildren = $siblings.find('[data-accordion]').filter('.open');

            var $otherAccordions = $siblings.add($siblingsChildren);

            $otherAccordions.each(function() {
                var $accordion = $(this),
                    $content = $accordion.find(opts.contentElement);

                closeAccordion($accordion, $content);
            });

            $otherAccordions.removeClass('open');
        }

        function toggleAccordion() {
            var isAccordionGroup = (opts.singleOpen) ? $accordion.parents(opts.groupElement).length > 0 : false;

            calculateHeight($content);

            if(isAccordionGroup) {
                closeSiblingAccordions($accordion);
            }

            if($accordion.hasClass('open')) {
                closeAccordion($accordion, $content);
            } else {
                openAccordion($accordion, $content);
            }
        }

        function addEventListeners() {
            $controls.on('click', toggleAccordion);
            
            $controls.on('accordion.toggle', function() {
                if(opts.singleOpen && $controls.length > 1) {
                    return false;
                }
                
                toggleAccordion();
            });
            
            $controls.on('accordion.refresh', function() {
                refreshHeight($accordion);
            });

            $(window).on('resize', debounce(function() {
                refreshHeight($accordion);
            }));
        }

        function setup() {
            $content.each(function() {
                var $curr = $(this);

                if($curr.css('max-height') != 0) {
                    if(!$curr.closest('[data-accordion]').hasClass('open')) {
                        $curr.css({ 'max-height': 0, 'overflow': 'hidden' });
                    } else {
                        toggleTransition($curr);
                        calculateHeight($curr);

                        $curr.css('max-height', $curr.data('oHeight'));
                    }
                }
            });


            if(!$accordion.attr('data-accordion')) {
                $accordion.attr('data-accordion', '');
                $accordion.find(opts.controlElement).attr('data-control', '');
                $accordion.find(opts.contentElement).attr('data-content', '');
            }
        }

        setup();
        addEventListeners();
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Accordion( this, options ));
            }
        });
    }

})( jQuery, window, document );