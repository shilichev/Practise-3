function sum() {
  let sum = 0;
  let a = document.getElementsByClassName(".num");
  for (i = 0; i < a.length; i++) {
    sum += +a[i].value;
  }

  let p = document.getElementById("result");
  p.innerHTML = `${sum}`;
}
