var SocialShares = {
  fb: (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v3.1';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk')),
  vk: function() {
    document.write(VK.Share.button(false,{type: "custom", text: "<img src=\"https://vk.com/images/share_32.png\" width=\"32\" height=\"32\" />"}))
  },
  tw: {
    url: "https://cdn.api.twitter.com/1/urls/count.json?url=",
    callback: function (data) {
      console.log("tw", data);
      if (data && data.count) {
        this.count = data.count;
      } else {
        this.count = 0;
      }
    },
    share: "https://twitter.com/intent/tweet?url="
  },
  ln: {
    url: "https://www.linkedin.com/countserv/count/share?format=jsonp&url=",
    callback: function (data) {
			console.log("ln", data);
      if (data && data.count) {
        this.count = data.count;
      } else {
        this.count = 0;
      }
    },
    share: "https://www.linkedin.com/cws/share?url="
  },
  pt: {
    url: "https://api.pinterest.com/v1/urls/count.json?url=",
    callback: function (data) {
			console.log("pt", data);
      if (data && data.count) {
        this.count = data.count;
      } else {
        this.count = 0;
      }
    },
    // Have some trouble with this
    share: "https://www.pinterest.com/pin/create/bookmarklet/?description=Vasiliy Lazarev&url="
  },
  
};

/**
* VK.com doesn't support callback parameter for JSONP
* VK.com wanna call VK.Share.count()
*/
var VK = VK || {};
VK.Share = VK.Share || {};
VK.Share.count = function (index, count) {
  console.log("vk", count);
  SocialShares.vk.count = count;
}

$(function () {
  $('[data-social]').each(function () {
    var $this = $(this),
      social = $this.data('social'),
      oSocial;

    if (SocialShares.hasOwnProperty(social)) {
      oSocial = SocialShares[social];

      if (oSocial.url) {
        $.getScript(
          oSocial.url + shareUrl + "&callback=SocialShares." + social + ".callback",
          function(data, textStatus, jqxhr) {
            $this.attr("data-count", oSocial.count);
          }
        );
      }
      
      if (oSocial.share) {
        $this.on("click", function () {
          window.open(
            oSocial.share + shareUrl, 
            '', 
            'menubar=no,toolbar=no,resizable=yes' + 
            ',scrollbars=yes' +
            ',height=300,width=600'
          );
		    });
      }
    }
  });
});