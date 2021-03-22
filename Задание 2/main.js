window.onload = function () {
  let image = document.getElementById("image");
  let click = false;
  image.onclick = function () {
    if (click) {
      this.style.zoom = +this.style.zoom / 2;
      click = false;
    } else {
      this.style.zoom = +this.style.zoom * 2;
      click = true;
    }
  };
};
