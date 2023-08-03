document.querySelectorAll("a").forEach((e) => {
  e.onclick = (ele) => {
    ele.preventDefault();
  };
});

var audio = document.getElementById("audio");

document.getElementById("muteSound").onclick = function () {
  audio.muted = !audio.muted;
};

function stopMusic() {
  audio.load();
  audio.pause();
}
document.getElementById("stopSound").onclick = stopMusic;

document.getElementById("startSound").onclick = function () {
  audio.play();
};

document.getElementById("pauseSound").onclick = function () {
  audio.pause();
};

var timeRange = document.getElementById("soundCurrentTime");
timeRange.oninput = function () {
  audio.currentTime = timeRange.value;
};

window.addEventListener("load", () => {
  timeRange.max = audio.duration;
});

audio.ontimeupdate = () => {
  timeRange.value = audio.currentTime;
};

function song1() {
  audio.querySelectorAll("source")[0].src = "./music/1.mp3";
  audio.querySelectorAll("source")[1].src = "./music/1.wav";
  document.querySelector("#songImage").src = "./images/legend never die.jpg";
  document.querySelector(".info h1").innerHTML="legend never die";
  stopMusic();
}

function song2() {
    audio.querySelectorAll("source")[0].src = "./music/2.mp3";
    audio.querySelectorAll("source")[1].src = "./music/2.wav";
    document.querySelector("#songImage").src = "./images/iceTower.png";
    stopMusic();
    document.querySelector(".info h1").innerHTML="Ice Tower Remix";
}
