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

// function textChanger(something) {
//   document.querySelector("h1").textContent = something;
// }

// function addNum(num1, num2, callback) {
//   let sum = num1 + num2;
//   callback(sum);
//   return sum;
// }

// console.log(addNum(2, 2, textChanger));

// Synchronous
// Executed line by line
// Blocking

// console.log("hellooo");
// const a = 12;
// console.log(a);
// // alert("how are you");
// prompt("whats your name");
// console.log("I am happy");
// console.log(a + 89);

// Asynchronous
// None Blocking
// console.log("i am mohamad");
// setTimeout(function () {
//   console.log("It is asynchronous");
// }, 5000);
// console.log(12 + 78);
// console.log(12 + 78);
// console.log(12 + 78);
// console.log(12 + 78);
// console.log(12 + 78);

// AJAX (Asynchronous JavaScript And XML)

/*


Browser  -->   Request     --> Server
Browser  <--   Response    <-- Server

API (Application Programming Interface): A piece of software that is used by another piece 
of software in order to applications speak with theirself
Online API: 
JSON: 
AJAX - A set of technologies that allow web applications to send and receive data from a server

Callback Function: First Class Function
Function as an argument or parameter
*/
// function number1(callback) {
//   console.log("This is function1");
//   callback();
// }
// function number2() {
//   console.log("This is function2");
// }

// number1(number2);
// number2();

const request = new XMLHttpRequest();

request.open(
  "GET",
  `https://restcountries.com/v3.1/name/sweden
`
);

request.send();

request.addEventListener("load", function () {
  // console.log(this.responseText);
  const [data] = JSON.parse(this.responseText);
  console.log(data);

  renderCountry(data);

  // console.log(this.languages);
  let neighbor = 0;
  if (!data.borders) {
    return;
  } else {
    for (let neighbor of data.borders) {
      const requestNeighbor = new XMLHttpRequest();

      requestNeighbor.open(
        "GET",
        `https://restcountries.com/v3.1/alpha/${neighbor}
      `
      );
      requestNeighbor.send();

      requestNeighbor.addEventListener("load", function () {
        const [dataNeighbor] = JSON.parse(this.responseText);
        console.log(dataNeighbor);
        renderCountry(dataNeighbor);
      });
    }
  }
});

const renderCountry = (data) => {
  const lang = Object.values(data.languages);
  // console.log(lang);
  const border = Object.values(data.borders);
  // console.log(border);
};

// function doStep1(init, callback) {
//   const result = init + 1;
//   callback(result);
// }

// function doStep2(init, callback) {
//   const result =  init + 2;
//   callback(result)
// }

// function doStep3(init,callback) {
//   const result =  init + 3;
//   callback(result);
// }

// function doOperation() {
//   doStep1(0, function (result1) {
//     doStep2(result1, function (result2) {
//       doStep3(result2, function (result3) {
//         console.log(`result ${result3}`)
//       })
//     })
//   })
// }

// doOperation();
