window.addEventListener("load", function(event) {
    red_div = document.getElementsByClassName("red")[0];
    myMove(red_div);
  });

  function myMove(elem) {
      var pos = 0;
      var id= setInterval(frame, 5);
      function frame() {
          if (pos == 350) {
              clearInterval(id);
          } else {
              pos++;
              elem.style.top = pos + 'px';
              elem.style.left = pos + 'px';
          }
      }
  }

