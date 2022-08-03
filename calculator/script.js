const input = document.getElementById("input");
const result = document.getElementById("result");

const add = document.querySelector(".add");

add.addEventListener("click", () => {
  let output = input.value;
  console.log(output);
  result.textContent = output;
});
