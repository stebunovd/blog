'use strict';

function activateAnchors() {
  var article = document.querySelector('article');
  if (!article) {
    return;
  }
  var headings = document.querySelectorAll('h2').forEach(function (h) {
    var id = h.id;
    if (id) {
      var a = document.createElement('a');
      a.href = '#' + id;
      a.className = 'anchor';
      a.text = h.innerHTML;
      h.innerHTML = a.outerHTML;
    }
  });
}

activateAnchors();
