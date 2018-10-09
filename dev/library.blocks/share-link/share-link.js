var shareLink = {
  linkLocation: window.location.href,
  addVal: function () {
    document.getElementById('shareLinkInput').value = this.linkLocation;
  },
  copy: function () {
    document.getElementById('shareLinkButton').addEventListener('click', function () {
      var target = document.getElementById('shareLinkInput');
      var rng, sel;
      if (document.createRange) {
        rng = document.createRange();
        rng.selectNode(target)
        sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(rng);
        document.execCommand('copy');
      } else {
        var rng = document.body.createTextRange();
        rng.moveToElementText(target);
        rng.select();
        document.execCommand('copy');
      }
      window.getSelection().removeAllRanges();
      document.selection.empty();
    });
  }
}