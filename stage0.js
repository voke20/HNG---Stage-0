const timeElement = document.getElementById("time");

function updateTime() {
  timeElement.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000); // updates every second
