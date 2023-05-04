let nameInput = document.querySelector("#name-input");
let greeting = document.querySelector("#greeting");

let letterButtons = document.querySelectorAll(".letterButtons");
let resultArea = document.querySelector("#resultArea");
let spacebar = document.querySelector(".spacebar");

for (let x of letterButtons) {
  x.addEventListener("click", function () {
    resultArea.innerHTML += x.innerHTML;
  });
}

spacebar.addEventListener("click", function () {
  resultArea.innerHTML += "&nbsp;";
});
