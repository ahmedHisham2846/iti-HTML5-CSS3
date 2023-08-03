var canvasContext = document.getElementsByTagName("canvas")[0].getContext("2d");

document.getElementById("color").oninput = (e) => {
  canvasContext.strokeStyle = e.target.value;
  canvasContext.clearRect(0, 0, 900, 500);
  for (var i = 0; i < 100; i++) {
    canvasContext.beginPath();
    var x = parseInt(Math.random() * 900);
    var y = parseInt(Math.random() * 500);
    canvasContext.arc(x, y, 30, 0, Math.PI * 2);
    canvasContext.stroke();
  }
};
