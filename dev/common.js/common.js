// var shareLink = {
//     linkLocation: window.location.href,
//     inputVal: document.getElementById('#shareLinkInput'),
//     button: document.getElementById('#shareLinkButton'),
//     addVal: function () {
//         var inputVal =  document.getElementById('#shareLinkInput');
//         var linkLocation = window.location.href;
//         inputVal.value = linkLocation;
//     },
//     copy: function () {
//       this.button.addEventListener('click', function (event) {
//         this.input.select();
//         document.execCommand('copy');
//       });
//     }
//   }

  function addVal() {
    var inputVal =  document.getElementById('shareLinkInput');
    var linkLocation = window.location.href;
    console.log(inputVal);
    // inputVal.value = linkLocation;
    
}


addVal()

console.log(document.getElementById('shareLinkInput'));