// DISPLAY CLOCK //

const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".mins-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// DIGITAL CLOCK //

function currentTime() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";
  m = checkTime(m);
  s = checkTime(s);

  document.getElementById("digitalclock").innerHTML =
    h + ":" + m + ":" + s + " " + "MYT";
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

// Getting the clock to increment once a second
setInterval(setDate, 1000);
setInterval(currentTime, 1000);
