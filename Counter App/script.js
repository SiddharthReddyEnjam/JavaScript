const buttondown = document.getElementById("button-down");
const buttonup = document.getElementById("button-up");

const input = document.getElementById("input");

const valueDown = () => {
  let n = input.value;
  if (n > 1) input.value = n - 1;
};

const valueUp = () => {
  let n = parseInt(input.value);
  input.value = n + 1;
};

buttondown.addEventListener("click", valueDown);
buttonup.addEventListener("click", valueUp);
