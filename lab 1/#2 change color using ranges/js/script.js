function changeColorr() {
  var redDegree = document.getElementById("red").value;
  var greenDegree = document.getElementById("green").value;
  var blueDegree = document.getElementById("blue").value;
  document.querySelector(
    ".card p"
  ).style.color = `rgb(${redDegree} ${greenDegree} ${blueDegree})`;
}
