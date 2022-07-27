const buttondown = document.getElementById("button-down");
const buttonup = document.getElementById("button-up");

const input = document.getElementById("input");

const valueDown = () => {
  let n = parseInt(input.value);
  if (n > 0 || n <= -1) input.value = n - 1;
  if (n <= 0 && n > -1) {
    if (confirm("want negative value?")) {
      input.value = n - 1;
    }
  }
};

const valueUp = () => {
  let n = parseInt(input.value);
  input.value = n + 1;
};

buttondown.addEventListener("click", valueDown);
buttonup.addEventListener("click", valueUp);

buttondown.addEventListener("click", valueD);
buttonup.addEventListener("click", valueU);

function valueD() {
  const span = document.getElementById("up_down");
  let n = parseInt(span.textContent);
  span.textContent = n - 1;
}
function valueU() {
  const span = document.getElementById("up_down");
  let n = parseInt(span.textContent);
  span.textContent = n + 1;
}
