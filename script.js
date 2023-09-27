const WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function updateTime() {
  var now = new Date();

  document.getElementById("time").innerHTML =
    zeroPadding(now.getHours(), 2) +
    ":" +
    zeroPadding(now.getMinutes(), 2) +
    ":" +
    zeroPadding(now.getSeconds(), 2);

  document.getElementById("date").innerHTML =
    now.getFullYear() +
    "-" +
    zeroPadding(now.getMonth() + 1, 2) +
    "-" +
    zeroPadding(now.getDate(), 2) +
    " " +
    WEEK[now.getDay()];
}

updateTime();
setInterval(updateTime, 1000);

function zeroPadding(num, digit) {
  var zero = "";
  for (var i = 0; i < digit; i++) {
    zero += "0";
  }
  return (zero + num).slice(-digit);
}
