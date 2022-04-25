"use strict";

//start the visor
const visor = document.querySelector(".result");
visor.textContent = 0;

//clear the visor
document.querySelector(".clear.grey").addEventListener("click", function () {
  visor.textContent = 0;
});

//insert the number in textview
function insert(num) {
  if (Number(visor.textContent) === 0 && Number.isInteger(Number(num))) {
    visor.textContent = num;
  } else {
    visor.textContent += num;
  }
}

//return the result based on passed values
function equal() {
  var exp = visor.textContent;
  exp = exp.replace("x", "*");
  exp = exp.replace(",", ".");
  if (exp) {
    let result = eval(exp);
    if (String(result) === "Infinity") {
      visor.textContent = "Not a number";
    } else {
      result = String(result).replace(".", ",");
      visor.textContent = result;
    }
  }
}
