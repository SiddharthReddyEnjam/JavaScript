const colors = document.querySelector(".container");
const rainbow = document.querySelector(".rainbowc");
const randomcolor = document.getElementById("color-random");
const rainbowcolor = document.getElementById("color-rainbow");

rainbow.addEventListener("click", () => {
  colors.style.display = "block";
  rainbow.style.display = "none";
  let color = Math.floor(Math.random() * 16777215).toString(16);
  colors.style.backgroundColor = "#" + color;
});

colors.addEventListener("click", () => {
  colors.style.display = "block";
  rainbow.style.display = "none";
  let color = Math.floor(Math.random() * 16777215).toString(16);
  colors.style.backgroundColor = "#" + color;
});

randomcolor.addEventListener("click", () => {
  colors.style.display = "block";
  rainbow.style.display = "none";
  let color = Math.floor(Math.random() * 16777215).toString(16);
  colors.style.backgroundColor = "#" + color;
});

rainbowcolor.addEventListener("click", () => {
  colors.style.display = "none";
  rainbow.style.display = "block";
});
