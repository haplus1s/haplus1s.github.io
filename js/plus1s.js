var n = 0;

function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function extend(event) {
  n++;
  var onesec = document.createElement("img");
  setAttributes(onesec, {
    "id": "sec" + n,
    "class": "seconds",
    "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAALCAMAAACj4OZyAAAAXVBMVEUAAAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAAHHvfOAAAAHnRSTlMA9uD83ZruPemHWjQX1NLCsoJoYCUNBPfFrKd2HxFL21rZAAAAa0lEQVQY023PiQqAIAwGYHVmdp/avfd/zMzAIxsI7mOMf8RVz3nnu8BHyiKoZPF+Pp5jFrpqhRBT6mN7XjsjAIAIUDo/Mm2H6IJAqfea4Vr97Cd6klCkXivzxJOTRTmbbZ4HGQZu7L0DN1Xe5zYEOudtMvoAAAAASUVORK5CYII=",
    "style": "left:" + event.pageX + "px" + ";top:" + event.pageY + "px" + ";"
  });
  documenild(onesec);
}

function display(e) {
  var n = document.getElementsByClassName("seconds");
  switch (e.keyCode) {
    case 69:
      for (i = 0; i < n.length; i++) {
        n[i].style.opacity = 1;
      };
      break;
    case 53:
      for (i = 0; i < n.length; i++) {
        n[i].style.opacity = 0;
      };
      ;
      for (i = 0; i < n.length; i++) {
        n[i].style.opacity = 1;
      };
      alert("You had prolonged " + n.length + "s for the Elder.");
      break;
  }
  return n.length;
}

document.addEventListener("keydown", display, false);
document.addEventListener("mousedown", extend);
