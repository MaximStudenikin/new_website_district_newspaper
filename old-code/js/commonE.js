$(document).ready(function () {

  // del old banner 
  $("a[href^='http://pg.er.ru/']").remove();

  //иконка рядом с сылкой
  $('article div.text a[href^="http://"] , div.text a[href^="https://"]').before('<i class="fa fa-link" aria-hidden="true"></i>')
  $('article div.tags a[href^="http://"]').before('<i class="fa fa-tag" aria-hidden="true"></i>')

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
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  };

  (when == URL_host + 'novosti-goroda/' || when == URL_host + 'novosti-goroda/?page=' + getUrlVars().page) ? $('#tabs').html('<ul><li class="btn btn-default"><a href="' + main_section[1] + '">Новости ЮЗАО</a></li>' +
    '<li class="btn btn-default"><a href="' + main_section[2] + '">Статьи</a></li></ul>') :
    (when == URL_host + 'uzao-news/' || when == URL_host + 'uzao-news/?page=' + getUrlVars().page) ? $('#tabs').html('<ul><li class="btn btn-default"><a href="' + main_section[0] + '">Все новости</a></li>' +
      '<li class="btn btn-default"><a href="' + main_section[2] + '">Статьи</a></li></ul>') :
      (when != URL_host + 'novosti-goroda/' || when != URL_host + 'novosti-goroda/?page=' + getUrlVars().page) ? $('#tabs').html('<ul><li class="btn btn-default"><a href="' + main_section[0] + '">Все новости</a></li>' +
        '<li class="btn btn-default"><a href="' + main_section[1] + '">Новости ЮЗАО</a></li>' +
        '<li class="btn btn-default"><a href="' + second_section[0] + '">ЖКХ</a></li>' +
        '<li class="btn btn-default"><a href="' + second_section[1] + '">Безопасность</a></li>' +
        '<li class="btn btn-default"><a href="' + second_section[2] + '">Соцсфера</a></li>' +
        '<li class="btn btn-default"><a href="' + second_section[3] + '">Служу Отечеству</a></li>' +
        '<li class="btn btn-default"><a href="' + second_section[4] + '">Общество</a></li>' +
        '<li class="btn btn-default"><a href="' + second_section[5] + '">Активный гражданин</a></li>' +
        '<li class="btn btn-default"><a href="' + second_section[6] + '">Колумнистика</a></li>' +
        '<li class="btn btn-default"><a href="' + second_section[7] + '">МЦК</a></li>' +
        '<li class="btn btn-default"><a href="' + second_section[8] + '">Летний отдых</a></li>' +
        '<li class="btn btn-default"><a href="' + second_section[9] + '">Экономика</a></li>' +
        '<li class="btn btn-default"><a href="' + second_section[10] + '">Власть</a></li>' +
        '<li class="btn btn-default"><a href="' + second_section[11] + '">Званый гость</a></li></ul>') :
        $('#tabs').remove();

  // mail

  var submitForm = function (ev) {
    ev.preventDefault();

    var form = $(ev.target);

    var request = ajaxForm(form);

    request.done(function (msg) {
      var mes = msg.mes,
        status = msg.status;
      if (status === 'OK') {
        alert('Сообщение отправлино');
      } else {
        alert('Сообщение не отправлино');
      }
    });

    request.fail(function (jqXHR, textStatus) {
      console.log("Request failed: " + textStatus);
      alert('Проблема с сервером');
    });

    request.always(function () {
      document.getElementById("callBackForm").reset();
    });
  }

  var ajaxForm = function (form) {

    var url = form.attr('action'),
      data = form.serialize();

    return $.ajax({
      type: 'post',
      url: url,
      data: data,
      dataType: 'json'
    });

  }

  $('#callBackForm').on('submit', submitForm);

});