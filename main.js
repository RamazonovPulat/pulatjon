
function openNav() {
 document.getElementById("myNav")
 .style.width = "80%";
}

function closeNav() {
 document.getElementById("myNav")
 .style.width = "0%";
}


  var elem = document.getElementById
  ("myBar");

  var width = 10;

  var id = setInterval(frame, 10);
  function frame() {

    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("label")
      .innerHTML = width * 1  + '%';

    }
  }

