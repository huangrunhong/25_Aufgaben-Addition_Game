const inputNumber1 = document.body.querySelector("#inputNumber1");
const inputNumber2 = document.body.querySelector("#inputNumber2");
const result = document.body.querySelector("#result");

const summeInput = document.body.querySelector("#summeInput");
const number1 = Math.floor(Math.random() * 100);
const number2 = Math.floor(Math.random() * 100);

inputNumber1.textContent = number1;
inputNumber2.textContent = number2;

const checkSumme = () => {
  if (Number(summeInput.value) === number1 + number2) {
    result.textContent = `Das stimmt.`;
    result.style.color = "green";
  } else {
    result.textContent = `Das ist leider falsch.`;
    result.style.color = "red";
  }
};
