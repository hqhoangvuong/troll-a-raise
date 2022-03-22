const screenWidth = screen.width;
const screenHeight = screen.height;

function mouseOverBtnOk() {
  const btnOk = document.getElementById("btnOk");
  const px = Math.floor(Math.random() * (screenWidth - btnOk.offsetWidth * 4));
  const py = Math.floor(
    Math.random() * (screenHeight - btnOk.offsetHeight * 4)
  );
  positionElement(btnOk, px, py);
}

function positionElement(el, x, y) {
  el.style.position = "absolute";
  el.style.left = x + "px";
  el.style.top = y + "px";
}
