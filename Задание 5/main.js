window.onload = function () {
  let list = document.querySelectorAll("li");
  let input = document.getElementById("input");

  console.log(list);

  input.oninput = function () {
    switch (input.value) {
      case "1":
        list[0].classList.add("toggle");
        break;
      case "2":
        list[1].classList.add("toggle");
        break;
      case "3":
        list[2].classList.add("toggle");
        break;
      default:
        list.forEach((e) => {
          e.classList.remove("toggle");
        });
    }
  };
};
