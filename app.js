function countdown() {
  const newYear = new Date("January 01, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = newYear - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day h1").innerHTML = textDay;
  document.querySelector(".hour h1").innerHTML = textHour;
  document.querySelector(".minute h1").innerHTML = textMinute;
  document.querySelector(".second h1").innerHTML = textSecond;
}

setInterval(countdown, 1000);
