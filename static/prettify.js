'use strict';

function activateAnchors() {
  var article = document.querySelector('article');
  if (!article) {
    return;
  }
  document.querySelectorAll('h2').forEach(function (h) {
    var id = h.id;
    if (id) {
      h.innerHTML = '<a href="#' + id + '" class="anchor">' + h.innerHTML + '</a>';
    }
  });
}

activateAnchors();
