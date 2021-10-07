function getTime() {
  const time = new Date();
  const seconds = time.getSeconds();
  const secondHand = document.querySelector(".second-hand");
  const secondDeg = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;

  const minHhand = document.querySelector(".min-hand");
  const minutes = time.getMinutes();
  const minutesDeg = (minutes / 60) * 360 + 90;
  minHhand.style.transform = `rotate(${minutesDeg}deg)`;

  const hours = time.getHours();
  const hourHand = document.querySelector(".hour-hand");
  const hourDeg = (hours / 12) * 360 + 90;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(getTime, 1000);
