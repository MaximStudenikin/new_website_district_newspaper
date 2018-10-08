var el = document.getElementById('share-count-value');
var share = document.getElementsByClassName('share');

Array.prototype.forEach.call(share, function(elem) {
  elem.addEventListener("click", function() {
    el.innerHTML = Number(el.innerHTML) + 1;
  });
});