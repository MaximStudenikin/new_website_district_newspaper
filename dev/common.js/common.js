document.addEventListener('DOMContentLoaded', function () {

  var serchForm = {
    block: function () {
      var form = document.getElementsByClassName('serch-form')
  
      return form[0];
    },
    icon: function () {
      var button = this.block().children;
  
      return button[0];
    },
    input: function () {
      var input = this.block().children;
  
      return input[1];
    },
    open: function () {
      if (!serchForm.input().classList.contains('serch-form__input_open')) {
        serchForm.icon().classList.add('serch-form__icon_active');
        serchForm.input().classList.add('serch-form__input_open');
        serchForm.input().focus();
      } else {
        serchForm.input().classList.remove('serch-form__input_open');
        serchForm.icon().classList.remove('serch-form__icon_active');
        serchForm.input().blur();
      }
    },
    start: function () {
      this.icon().addEventListener('click', function () {
        serchForm.open();
      });
    },
  }

  serchForm.start();

  var sitemap = {
    block: function () {
      var block = document.getElementsByClassName('sitemap');
  
      return block[0];
    },
    test: function () {
      this.block().classList.add('sitemap_active');
      document.querySelector('.page').style.overflow = 'hidden';
    },
    show: function () {
      if (!this.block().classList.contains('sitemap_active')) {
        this.block().classList.add('sitemap_active');
        document.querySelector('.page').style.overflow = 'hidden';
      } else {
        document.querySelector('.page').style.overflow = 'inherit';
        this.block().classList.remove('sitemap_active');
      }
    },
    activeBtn: function (btnName) {
      document.querySelector(btnName).addEventListener('click', function () {
        event.preventDefault();
  
        sitemap.show();
      });
    }
  }


});