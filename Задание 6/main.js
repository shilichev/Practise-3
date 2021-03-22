let country = document.getElementsByTagName("ul");
// console.log(country);
function myFunction(e) {
  console.log(e.children);
  let list = e.children;
  for (i = 0; i < list.length; i++) {
    list[i].classList.toggle("sity");
  }
}
