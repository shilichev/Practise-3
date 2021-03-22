let i = 0;
$("#main").click(function (e) {
  var parentOffset = $(this).parent().offset();
  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  i++;
  $("#main").append(
    `<div class="number" style="left: ${relX}px; top: ${relY}px"><b> ${i}</div>`
  );
});
