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