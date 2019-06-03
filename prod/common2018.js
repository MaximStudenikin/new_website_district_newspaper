$(document).ready(function () {

  //лечение бага с картинками

  var articleImages = $('.text').find('img');

  articleImages.css('height', 'auto');

  $('article div.text a[href^="http://"] , div.text a[href^="https://"]').before('<i class="fa fa-link" aria-hidden="true"></i>'), $('article div.tags a[href^="http://"]').before('<i class="fa fa-tag" aria-hidden="true"></i>');
  var t = "http://gazetauzao.ru/category/",
      e = ["http://gazetauzao.ru/category/novosti-goroda/", "http://gazetauzao.ru/category/uzao-news/", "http://gazetauzao.ru/category/stati-iz-gazety/"],
      a = ["http://gazetauzao.ru/category/zhkx/", "http://gazetauzao.ru/category/bezopasnost/", "http://gazetauzao.ru/category/socsfera/", "http://gazetauzao.ru/category/sluzhu-otechestvu/", "http://gazetauzao.ru/category/obshchyestvo/", "http://gazetauzao.ru/category/aktivnyj-grazhdanin/", "http://gazetauzao.ru/category/kolumnistika/", "http://gazetauzao.ru/category/mck/", "http://gazetauzao.ru/category/letnij-otdyh/", "http://gazetauzao.ru/category/ekonomika/", "http://gazetauzao.ru/category/vlast/", "http://gazetauzao.ru/category/zvanyy-gost/"],
      s = window.location.href;

  function i() {
      var t = {};
      return window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (e, a, s) {
          t[a] = s
      }), t
  }

  s == t + "novosti-goroda/" || s == t + "novosti-goroda/?page=" + i().page ? $("#tabs").html('<div class="labels"><ul class="labels__list"><li class="labels__item"><a class="labels__link" href="' + e[1] + '">Новости ЮЗАО</a></li><li class="labels__item"><a class="labels__link" href="' + e[2] + '">Статьи</a></li></ul></div>') : s == t + "uzao-news/" || s == t + "uzao-news/?page=" + i().page ? $("#tabs").html('<div class="labels"><ul class="labels__list"><li class="labels__item"><a class="labels__link" href="' + e[0] + '">Все новости</a></li><li class="labels__item"><a class="labels__link" href="' + e[2] + '">Статьи</a></li></ul></div>') : s != t + "novosti-goroda/" || s != t + "novosti-goroda/?page=" + i().page ? $("#tabs").html('<div class="labels"><ul class="labels__list"><li class="labels__item"><a class="labels__link" href="' + e[0] + '">Все новости</a></li><li class="labels__item"><a class="labels__link" href="' + e[1] + '">Новости ЮЗАО</a></li><li class="labels__item"><a class="labels__link" href="' + a[0] + '">ЖКХ</a></li><li class="labels__item"><a class="labels__link" href="' + a[1] + '">Безопасность</a></li><li class="labels__item"><a class="labels__link" href="' + a[2] + '">Соцсфера</a></li><li class="labels__item"><a class="labels__link" href="' + a[3] + '">Служу Отечеству</a></li><li class="labels__item"><a class="labels__link" href="' + a[4] + '">Общество</a></li><li class="labels__item"><a class="labels__link" href="' + a[5] + '">Активный гражданин</a></li><li class="labels__item"><a class="labels__link" href="' + a[6] + '">Колумнистика</a></li><li class="labels__item"><a class="labels__link" href="' + a[7] + '">МЦК</a></li><li class="labels__item"><a class="labels__link" href="' + a[8] + '">Летний отдых</a></li><li class="labels__item"><a class="labels__link" href="' + a[9] + '">Экономика</a></li><li class="labels__item"><a class="labels__link" href="' + a[10] + '">Власть</a></li><li class="labels__item"><a class="labels__link" href="' + a[11] + '">Званый гость</a></li></ul></div>') : $("#tabs").remove(), document;
  var n = function (t, e, a, d) {
      $(t).click(function (t) {
          t.preventDefault(), $(e).toggleClass("visuallyhidden")
          $('body').css('position', 'fixed')
      }), $(a).click(function (t) {
          t.preventDefault(), $(e).toggleClass("visuallyhidden")
          $('body').css('position', 'relative')
      })
  };

  var showMenuMobail = function (showBtn, firstElem, hideBtn, twoElem, threeElem) {

      $(showBtn).click(function (showBtn) {
          showBtn.preventDefault(),
              $(threeElem).css("display", "none"),
              $(firstElem).css("display", "none")
          $(twoElem).css("display", "block")
      }), $(hideBtn).click(function (hideBtn) {
          hideBtn.preventDefault(),
              $(firstElem).css("display", "block"),
              $(twoElem).css("display", "none"),
              $(threeElem).css("display", "block")
      })
  };

  n(".open__form", ".form-feedback", ".close__batton-feedback"), 
  n(".h__menu-link", ".categories", "categories--close"), 
  n(".categories--open", ".categories", ".categories--close"), 
  showMenuMobail(".categories-mobail", ".categories-nav__list", ".categories-back-btn", ".categories__accordion"), 
  showMenuMobail(".open-serch-form", ".categories-nav__list", ".categories-back-btn", ".categories__serch-form"), 
  
  $(".categories__trigger").on("click touchstart", function (t) {
      t.preventDefault();
      var e = $(t.currentTarget), a = e.closest(".categories-accordeon"), s = e.closest(".categories__item"),
          i = $(".categories__item", a), n = $(".categories__content", s), o = $(".categories__content", a),
          l = $(".categories__content_inner", s).outerHeight();
      s.hasClass("categories__item--activ") ? (s.removeClass("categories__item--activ"), 
      n.css({ height: 0 })) : (i.removeClass("categories__item--activ"), s.addClass("categories__item--activ"), 
      o.css({ height: 0 }), n.css({ height: l }))
  }), $('[data-class="slider__controls"]').on("click touchstart", function (t) {
      t.preventDefault();
      var e, a, s, i = $(t.target), n = i.closest('[data-class="slider__teg"]'),
          l = $('[data-class="slider__item"]', n), r = l.filter(".active__slide");
      i.hasClass("controls__btn_next") && (e = r.next(), a = l.first()), 
      i.hasClass("controls__btn_prev") && (e = r.prev(), a = l.last()), 
      s = e.length ? e.index() : a.index(), 
      o(n, s)
  });
  var o = function (t, e) {
      var a = t.find('[data-class="slider__item"]'), 
          s = a.filter(".active__slide"), 
          i = a.eq(e), 
          n = i.index(),
          o = t.find('[data-class="slider__list"]');
          a.eq(0).addClass("active__slide");
      i.length && o.animate({ left: 100 * -n + "%" }, 500, function () {
          s.removeClass("active__slide"), 
          i.addClass("active__slide"), 
          l(t, e)
      })
  };

  !function (t, e, a) {
      for (var s = $('[data-class="slider__teg"]'), i = 0; i < s.length; i++) currentSliders = s[i], 
      $('[data-class="slider__item"]', currentSliders).each(function (t) {
          var e = $("<li>", {
              attr: { class: "pagination__item" },
              html: '<a class="pagination__link">' + (t + 1) + "</a>"
          });
          $('[data-class="pagination__list"]', currentSliders).append(e).find('.pagination__item').eq(0).addClass("pagination__item--activ")
      })
  }();

  var l = function (t, e) {
      $(".pagination__item", t).eq(e).addClass("pagination__item--activ").siblings().removeClass("pagination__item--activ")
  };
  $("body").on("click touchstart", ".pagination__item", function () {
      var t = $(this), e = t.closest('[data-class="slider__teg"]'), 
      a = t.index();
      o(e, a), l(e, a)
  })

  $(".slidershow__controls").on("click touchstart", function (t) {
      t.preventDefault();
      var e, a, s = $(t.target), i = s.closest(".slidershow"), n = $(".slidershow__item", i),
          o = n.filter(".slidershow__item--activ"), l = $(".slidershow__review", i), r = $(".browsing__link", i),
          c = $(".slidershow__preloader", i);
      if (s.hasClass("controls__btn_next")) {
          (e = o.next()).addClass("slidershow__item--activ"), e.siblings().removeClass("slidershow__item--activ"), nextPath = $(".slidershow__link", ".slidershow__item--activ").attr("href"), l.fadeOut(function () {
              c.show(), l.attr("src", nextPath).on("load", function () {
                  r.attr("href", nextPath), l.fadeIn(), c.hide()
              })
          });
          var d = e.index()
      }
      -1 == d && ((a = n.first()).addClass("slidershow__item--activ"), a.siblings().removeClass("slidershow__item--activ"), 
      nextPath = $(".slidershow__link", ".slidershow__item--activ").attr("href")), 
      s.hasClass("controls__btn_prev") && ((e = o.prev()).addClass("slidershow__item--activ"), e.siblings().removeClass("slidershow__item--activ"), 
      prevPath = $(".slidershow__link", ".slidershow__item--activ").attr("href"), l.fadeOut(function () {
          c.show(), l.attr("src", prevPath).on("load", function () {
              r.attr("href", prevPath), l.fadeIn(), c.hide()
          })
      }), prevIndex = e.index()), -1 == prevIndex && ((a = n.last()).addClass("slidershow__item--activ"), a.siblings().removeClass("slidershow__item--activ"), prevPath = $(".slidershow__link", ".slidershow__item--activ").attr("href"))
  }), $(".slidershow__link").on("click touchstart", function (t) {
      t.preventDefault();
      var e = $(t.currentTarget), a = e.closest(".slidershow"), s = e.closest(".slidershow__item"),
          i = e.attr("href"), n = a.find(".slidershow__review"), o = a.find(".browsing__link"),
          l = $(".slidershow__preloader", a);
      s.addClass("slidershow__item--activ"), s.siblings().removeClass("slidershow__item--activ"), n.fadeOut(function () {
          l.show(), n.attr("src", i).on("load", function () {
              o.attr("href", i), n.fadeIn(), l.hide()
          })
      })
  }), $("[data-fancybox]").fancybox({ toolbar: !0 }), $(".owl-carousel").owlCarousel({
      loop: !0,
      dots: !0,
      margin: 5,
      autoplay: !0,
      autoplayTimeout: 5e3,
      responsiveClass: !0,
      responsive: { 0: { items: 1 }, 800: { items: 3 }, 1800: { items: 3 } }
  }), $(".owl-btn-next").click(function (t) {
      t.preventDefault(), $(".owl-carousel").trigger("next.owl.carousel")
  }), $(".owl-btn-prev").click(function (t) {
      t.preventDefault(), $(".owl-carousel").trigger("prev.owl.carousel")
  }), $(".search__btn").on("click touchstart", function () {
      $(".search__btn").toggleClass("serch-form--close"), $(".serch__input").toggleClass("serch__input--active"), $(".serch-form").toggleClass("serch-form--active"), $(".search__btn").hasClass("serch-form--close") ? $(".serch__input").focus() : $(".serch__input").blur()
  }), $("#message-subject").on("click touchstart", function (t) {
      $("#message-subject").focus()
  }), $("#user-name").on("click touchstart", function (t) {
      $("#user-name").focus()
  }), $("#user-email").on("click touchstart", function (t) {
      $("#user-email").focus()
  }), $("#user-message").on("click touchstart", function (t) {
      $("#user-message").focus()
  }), $(".accordion").accordion({
      transitionSpeed: 300,
      transitionEasing: "ease",
      controlElement: "[data-control]",
      contentElement: "[data-content]",
      groupElement: "[data-accordion-group]",
      singleOpen: !0
  })
}), function (t, e, a, s) {
  var i = "accordion", n = {
      transitionSpeed: 300,
      transitionEasing: "ease",
      controlElement: "[data-control]",
      contentElement: "[data-content]",
      groupElement: "[data-accordion-group]",
      singleOpen: !1
  };

  function o(e, a) {
      this.element = e, this.options = t.extend({}, n, a), this._defaults = n, this._name = i, this.init()
  }

  o.prototype.init = function () {
      var s, i, n, o, l = this.options, r = t(this.element), c = r.find("> " + l.controlElement),
          d = r.find("> " + l.contentElement), _ = r.parents("[data-accordion]").length > 0,
          h = { "max-height": 0, overflow: "hidden", overflowY: "scroll" }, u = function () {
              var t = (a.body || a.documentElement).style, e = "transition";
              if ("string" == typeof t[e]) return !0;
              var s = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
              e = "Transition";
              for (var i = 0; i < s.length; i++) if ("string" == typeof t[s[i] + e]) return !0;
              return !1
          }();

      function g(t, e) {
          e ? d.css({
              "-webkit-transition": "",
              transition: ""
          }) : d.css({
              "-webkit-transition": "max-height " + l.transitionSpeed + "ms " + l.transitionEasing,
              transition: "max-height " + l.transitionSpeed + "ms " + l.transitionEasing
          })
      }

      function f(e) {
          var a = 0;
          var maxHeight = 125;
          e.children().each(function () {
              a += t(this).outerHeight(!0)
          });

          if (a > maxHeight) {
              a = maxHeight + 'px';
          }

          e.data("oHeight", a)
      }

      function m(e, a, s, i) {
          var n, o = e.filter(".open").find("> [data-content]"), r = o.find("[data-accordion].open > [data-content]");
          l.singleOpen || (r = r.not(a.siblings("[data-accordion].open").find("> [data-content]"))), n = o.add(r), e.hasClass("open") && n.each(function () {
              var e = t(this).data("oHeight");
              switch (i) {
                  case "+":
                      t(this).data("oHeight", e + s);
                      break;
                  case "-":
                      t(this).data("oHeight", e - s);
                      break;
                  default:
                      throw "updateParentHeight method needs an operation"
              }
              t(this).css("max-height", t(this).data("oHeight"))
          })
      }

      function p(t) {
          if (t.hasClass("open")) {
              var e = t.find("> [data-content]"), a = e.find("[data-accordion].open > [data-content]"), s = e.add(a);
              f(s), s.css("max-height", s.data("oHeight"))
          }
      }

      function v(t, e) {
          if (t.trigger("accordion.close"), u) {
              if (_) m(t.parents("[data-accordion]"), t, e.data("oHeight"), "-");
              e.css(h), t.removeClass("open")
          } else e.css("max-height", e.data("oHeight")), e.animate(h, l.transitionSpeed), t.removeClass("open")
      }

      function b(t, a) {
          if (t.trigger("accordion.open"), u) {
              if (g(), _) m(t.parents("[data-accordion]"), t, a.data("oHeight"), "+");
              s = function () {
                  a.css("max-height", a.data("oHeight"))
              }, e.requestAnimationFrame ? requestAnimationFrame(s) : e.webkitRequestAnimationFrame ? webkitRequestAnimationFrame(s) : e.mozRequestAnimationFrame ? mozRequestAnimationFrame(s) : setTimeout(s, 1e3 / 60), t.addClass("open")
          } else a.animate({ "max-height": a.data("oHeight") }, l.transitionSpeed, function () {
              a.css({ "max-height": "none" })
          }), t.addClass("open");
          var s
      }

      function w() {
          var e = !!l.singleOpen && r.parents(l.groupElement).length > 0;
          f(d), e && function (e) {
              e.closest(l.groupElement);
              var a = e.siblings("[data-accordion]").filter(".open"), s = a.find("[data-accordion]").filter(".open"),
                  i = a.add(s);
              i.each(function () {
                  var e = t(this);
                  v(e, e.find(l.contentElement))
              }), i.removeClass("open")
          }(r), r.hasClass("open") ? v(r, d) : b(r, d)
      }

      d.each(function () {
          var e = t(this);
          0 != e.css("max-height") && (e.closest("[data-accordion]").hasClass("open") ? (g(), f(e), e.css("max-height", e.data("oHeight"))) : e.css({
              "max-height": 0,
              overflow: "hidden",
              overflowY: "scroll"
          }))
      }), r.attr("data-accordion") || (r.attr("data-accordion", ""), r.find(l.controlElement).attr("data-control", ""), r.find(l.contentElement).attr("data-content", "")), c.on("click", w), c.on("accordion.toggle", function () {
          if (l.singleOpen && c.length > 1) return !1;
          w()
      }), c.on("accordion.refresh", function () {
          p(r)
      }), t(e).on("resize", (s = function () {
          p(r)
      }, function () {
          var t = this, e = arguments;
          o ? clearTimeout(o) : n && s.apply(t, e), o = setTimeout(function () {
              n || s.apply(t, e), o = null
          }, i || 100)
      }))
  }, t.fn[i] = function (e) {
      return this.each(function () {
          t.data(this, "plugin_" + i) || t.data(this, "plugin_" + i, new o(this, e))
      })
  }
}(jQuery, window, document);