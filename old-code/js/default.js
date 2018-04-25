/*Алгоритм мимизации: YUI Compressor Version 2.4.8pre*/

(function (d) {
  var e, a;
  var g = {
    activeClass: "submenu-is-shown",
    showTime: 300
  };
  var f = function () {
    var h = d(".flyout-nav li");
    h.on("mouseenter", function () {
      b(d(this))
    });
    h.on("mouseleave", function () {
      c(d(this))
    });
    h.on("click", function () {
      var j = d(this),
        i = j.hasClass(g.activeClass);
      if (i) {
        c(j)
      } else {
        b(j)
      }
    })
  };
  var b = function (i) {
    var h = i.hasClass(g.activeClass);
    if (h) {
      clearTimeout(a)
    } else {
      e = setTimeout(function () {
        i.addClass(g.activeClass)
      }, g.showTime)
    }
  };
  var c = function (i) {
    var h = i.hasClass(g.activeClass);
    if (!h) {
      clearTimeout(e)
    } else {
      a = setTimeout(function () {
        i.removeClass(g.activeClass)
      }, g.showTime)
    }
  };
  d(document).ready(function () {
    f()
  })
})(jQuery);
var MatchMedia = function (c) {
  var b = window.matchMedia,
    a = (typeof b === "function");
  if (a && c) {
    return b(c).matches
  } else {
    return false
  }
};
$(document).ready(function () {
  if ($("#logo").length) {
    $(window).load(function () {
      var c = $("#logo").height();
      var b = Math.round((c - 25) / 2);
      $("#header-container").css("padding-top", b + "px");
      $("#logo").css("margin-top", "-" + b + "px")
    })
  }
  if ($(".slidemenu").length) {
    var a = "Back";
    if ($(".slidemenu").attr("data-back-lbl")) {
      a = $(".slidemenu").attr("data-back-lbl")
    }
    $(".slidemenu").waSlideMenu({
      slideSpeed: 300,
      loadContainer: "#page-content",
      backLinkContent: a,
      excludeUri: ["/", "#"],
      loadOnlyLatest: false,
      setTitle: true,
      scrollToTopSpeed: 200,
      backOnTop: false,
      beforeLoad: function () {
        $("h1.category-name").append(' <i class="icon24 loading"></i>')
      }
    })
  }
  $("#mobile-nav-toggle").click(function () {
    if (!$(".nav-negative").length) {
      $("body").prepend($("header .apps").clone().removeClass("apps").addClass("nav-negative"));
      $("body").prepend($("header .auth").clone().addClass("nav-negative"));
      $("body").prepend($("header .search").clone().addClass("nav-negative"));
      $("body").prepend($("header .offline").clone().addClass("nav-negative"));
      $(".nav-negative").hide().slideToggle(200)
    } else {
      $(".nav-negative").slideToggle(200)
    }
    $("html, body").animate({
      scrollTop: 0
    }, 200);
    return false
  });
  $("#mailer-subscribe-form input.charset").val(document.charset || document.characterSet);
  $("#mailer-subscribe-form").submit(function () {
    var c = $(this);
    var b = c.find('input[name="email"]');
    var d = c.find('input[type="submit"]');
    if (!b.val()) {
      b.addClass("error");
      return false
    } else {
      b.removeClass("error")
    }
    d.hide();
    b.after('<i class="icon16 loading"></i>');
    $("#mailer-subscribe-iframe").load(function () {
      $("#mailer-subscribe-form").hide();
      $("#mailer-subscribe-iframe").hide();
      $("#mailer-subscribe-thankyou").show()
    })
  });
  if (!(MatchMedia("only screen and (max-width: 760px)"))) {
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 110 && !$("#cart").hasClass("fixed") && !$("#cart").hasClass("empty") && !($(".cart-summary-page")).length) {
        $("#cart").hide();
        $("#cart").addClass("fixed");
        if ($("#cart-flyer").length) {
          var b = $("#cart-flyer").width() + 50;
          var c = $(window).width() - $("#cart-flyer").offset().left - b;
          $("#cart").css({
            right: c + "px",
            width: b + "px"
          })
        }
        $("#cart").slideToggle(200)
      } else {
        if ($(this).scrollTop() < 100 && $("#cart").hasClass("fixed")) {
          $("#cart").removeClass("fixed");
          $("#cart").css({
            width: "auto"
          })
        }
      }
    })
  }
});