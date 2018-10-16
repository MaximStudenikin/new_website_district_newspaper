var serchForm = {
  block: function () {
    var form = document.getElementsByClassName('serch-form')

    return form[0];
  },
  button: function () {
    var button = this.block().children;

    return button[1];
  },
  input: function () {
    var input = this.block().children;

    return input[0];
  },
  open: function () {
    if (!serchForm.input().classList.contains('serch-form__input_open')) {
      serchForm.button().classList.add('serch-form__button_close');
      serchForm.input().classList.add('serch-form__input_open');
      serchForm.input().focus();
    } else {
      serchForm.input().classList.remove('serch-form__input_open');
      serchForm.button().classList.remove('serch-form__button_close');
      serchForm.input().blur();
    }
  },
  start: function () {
    this.button().addEventListener('click', function () {
      serchForm.open();
    });
  },
}