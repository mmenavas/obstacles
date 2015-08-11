(function($) {

  // Get subject
  var element = document.getElementById('subject');
  var o0 = document.getElementById('obstacle-0');
  var o1 = document.getElementById('obstacle-1');
  var o2 = document.getElementById('obstacle-2');
  var o3 = document.getElementById('obstacle-3');

  $.init(element);

  // Randomly move obstacles
  setTimeout(function() {

    setTimeout(function() {

      setTimeout(function() {

        setTimeout(function() {
          o3.setAttribute('class', '');
          o3.classList.add('speed-3');

        }, 500);
        o2.setAttribute('class', '');
        o2.classList.add('speed-2');

      }, 500);

      o1.setAttribute('class', '');
      o1.classList.add('speed-1');

    }, 500);

    o0.setAttribute('class', '');
    o0.classList.add('speed-0');

  }, 500);

  window.addEventListener('keydown', function(data) {
      var row;
      if (data.keyCode === 38) {
        row = $.moveUp();
        if (row !== false) {
          element.setAttribute('class', '');
          element.classList.add('row-' + row);
        }
      }
      if (data.keyCode === 40) {
        row = $.moveDown();
        if (row !== false) {
          element.setAttribute('class', '');
          element.classList.add('row-' + row);
        }
      }
    }
  );

})(Subject);
