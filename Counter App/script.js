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

//ADDING SPAN

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

/////////////////////////////////

///////////////////////////////// responding to keys

window.addEventListener(
  "keydown",
  function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    switch (event.key) {
      case "ArrowDown":
        // code for "down arrow" key press.
        valueD();
        valueDown();
        break;
      case "ArrowUp":
        // code for "up arrow" key press.
        valueU();
        valueUp();
        break;
      case "ArrowLeft":
        // code for "left arrow" key press.
        valueD();
        valueDown();
        break;
      case "ArrowRight":
        // code for "right arrow" key press.
        valueU();
        valueUp();
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  },
  true
);
