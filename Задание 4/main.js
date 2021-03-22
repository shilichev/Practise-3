let input = document.getElementById("input");
console.log(input);
function change() {
  if (input.getAttribute("type") == "password") {
    input.removeAttribute("type");
  } else {
    input.setAttribute("type", "password");
  }
}
