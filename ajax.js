// Asynchronous JavaScript

// const heading = document.querySelector("h1");

// function textChanger() {
//   heading.textContent = "I  Love You";
//   console.log("Success");
// }

// setTimeout(textChanger, 3000);
// console.log("hi, i am in the top level code");

// function getmsg() {
//   console.log("This is a message");
// }

// getmsg();

function textChanger(something) {
  document.querySelector("h1").textContent = something;
}

function addNum(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
  return sum;
}

console.log(addNum(2, 2, textChanger));
