const targetDate = new Date("August 3,2023 01:00:00").getTime();

const remTime = setInterval(function () {
  let currentDate = new Date().getTime();
  let rem = targetDate - currentDate;

  let days = Math.floor(rem / (1000 * 60 * 60 * 24));
  let hours = Math.floor((rem % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((rem % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((rem % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".mins").innerHTML = mins;
  document.querySelector(".secs").innerHTML = secs;

  if (rem < 0) {
    clearInterval(remTime);
    document.querySelector(".timer").innerHTML = "💥SALE ENDS💥";
    document.querySelector(".timer").style.color = "red";
  }
}, 1000);
