var roof = document.getElementById("roof");
var contextRoof = roof.getContext("2d");

contextRoof.beginPath();
contextRoof.moveTo(1000, 500);

contextRoof.lineTo(0, 500);
contextRoof.lineTo(500, 0);

contextRoof.closePath();

contextRoof.fillStyle = "brown" ;
contextRoof.strokeStyle = "black ";
contextRoof.stroke();
contextRoof.fill();
