// const btn = document.querySelector(".submit-btn");

// // ==================================
// // FIRST CLASS FUNCTION
// // Function Expression
// const writeName = function (parameter) {
//   return `my name is ${parameter}`;
// };

// console.log(writeName("argument"));

// // Function as an argument
// btn.addEventListener("click", function () {
//   console.log("clicked");
// });

// Retruning a function from function
// TEST function is Higherorder function
// const test = function () {
//   return function () {
//     console.log("I am happy with JS");
//   };
// };

// //1. variable
// const callTest = test();
// callTest();

// //2. ()()
// test()();

// const employeeChar = function (name, exprience) {
//   console.log(`You are ${name} with ${exprience} years exprience`);
// };

// const exprienceYear = function () {
//   return 2023 - 2016;
// };

// const getName = () => {
//   const input = prompt("Enter your name:");
//   return input;
// };
// employeeChar(getName(), exprienceYear());

// function sayHello() {
//   return `Hi, how are you`;
// }

// function greeting(hellomsg, name) {
//   console.log(`${hellomsg()}  ${name}`);
//   //   console.log("hi" + hellomsg);
// }
// greeting(sayHello, `hussain`);

// Mehtod
// const obj = { number: 123, text: "book" };
// const arr = [1, 4, "Mohammad"];

// const kamAir = {
//   airline: "kamAir",
//   iattaCode: "KM",
//   bookings: [],
//   book(name, flightNum) {
//     console.log(
//       `${name} booked a seat on
//       ${this.airline} with
//       ${this.iattaCode}${flightNum}`
//     );
//     this.bookings.push({
//       flight: `${this.iattaCode}${flightNum}`,
//       firstName: name,
//     });
//   },
// };

// // kamAir.book("mohamad", 203);
// // console.log(kamAir.bookings);

// //

// const bookvar = kamAir.book;

// // Call
// bookvar.call(kamAir, "mahdi", 901);

// const Ariana = {
//   airline: "Ariana",
//   iattaCode: "AR",
//   bookings: [],
// };
// const flyEmirates = {
//   airline: "Fly Emirates",
//   iattaCode: "FE",
//   bookings: [],
// };

// bookvar.call(Ariana, "Setara", 1002);
// console.log(Ariana.bookings);
// console.log(kamAir.bookings);

// // Apply
// const passengerInfo = ["Hasan", 2009];
// bookvar.apply(flyEmirates, passengerInfo);
// bookvar.call(flyEmirates, ...passengerInfo);
// console.log(passengerInfo);
// console.log(...passengerInfo);

// // Bind
// const bookKA = bookvar.bind(flyEmirates);
// bookKA("mahmood", 210);
// const bookAR = bookvar.bind(Ariana);
// bookAR("mahdi", 980);

// ==============================================
//  IIFE  (Immediately Invoked Function Expression)
// ============================================
const runOnce = function () {
  const private = 290;
  console.log("This runs once");
  console.log(private);
};
runOnce();

(function () {
  console.log(`This will never  run again`);
})();

(function () {
  console.log(`this is an IIFE Function`);
})();

{
  const public = "public";
  let age = 78;
  var notPrivate = true;
}

console.log(notPrivate);
console.log(public);
console.log(age);
