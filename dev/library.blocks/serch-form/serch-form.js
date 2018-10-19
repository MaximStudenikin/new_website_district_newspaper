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