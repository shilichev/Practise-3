window.onload = function () {
  let timer = document.getElementById("timer");
  let timerId = 0;
  timer.onblur = function () {
    timerId = setInterval(function () {
      timer.value--;
      if (timer.value == 0) {
        clearInterval(timerId);
      }
    }, 1000);
  };
};
