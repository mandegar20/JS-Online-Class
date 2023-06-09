// Programming Language

// High level        JavaScript , Python , Java
// Medium
// Machine Language    010001111000100

// Two
// Interpreter  line by line    JavaScript  Python
// Compiler     whole           Java

// ==========================================================================================
//                                JS Fundamentals
// ==================================================================================
// console.log("Hello World");
// // =========================== Data
// // "Mohammad"
// // 17
// // 0727283812
// // true
// // false
// // undefined
// // null

// console.log("Hussain");
// console.log(17);
// // =========================== Variable
// let student = "MOhammad";
// console.log(student);
// let schoolStudentAge = 18;
// console.log(schoolStudentAge);
// student = "Ahmad";
// console.log(student);
// // =========================== let, const, var
// var age = 19;
// age = 21;
// console.log(age);

// let height = 1.8;
// height = 1.85;
// console.log(height);

// const firstName = "Mujib";
// console.log(firstName);

// // =========================== Data Type
// // 7 Data Types
// /*
// 1. String   "Mohammad" "Car " "D" "282828" "true"
// 2. Number    89 90 45  83  23.4  58.9  3.141515
// 3. Boolean   true  false   false   false   false
// 4. Undefined  undefined
// 5. Null      null
// 6. Big Int
// 7. Symbol

// */
// let lastName;
// console.log(typeof firstName);
// console.log(typeof "23");
// console.log(typeof 23);
// console.log(typeof lastName);
// console.log(typeof null);

// // =========================== Operator

// // =========================== Arthmetic Operator
// console.log(10 + 20);
// console.log(10 - 20);
// console.log(10 * 20);
// console.log(10 / 20);
// console.log(10 % 20);
// console.log(10 ** 20);

// console.log(20 % 6);
// console.log(2 ** 3);

// // =========================== Assignment operator
// let add = 10;
// add = add + 20;
// console.log(add);
// add += 20;
// console.log(add);
// add = add - 10;
// add -= 10;
// add = add * 2;
// add *= 2;
// add = add / 3;
// add /= 3;
// // =============================
// console.log(23 + 4 / 2 > 21 - 3 * 6);
// console.log(23 + 2 > 21 - 18);
// console.log(25 > 3);

// ===================================== Equality Operator

// Equal in value and datatype ==  loose
// console.log(22 == 22);
// console.log(22 == "22");

// // Equale in value ===            strict  (Use more...)
// console.log(22 === "22");

// // ================================== Conditional statemnet
// // Two type :
// // if /else
// // switch case

// // if else
// const birthYear = 2005;
// if (2023 - birthYear >= 18) {
//   console.log("You can drive!!");
// } else {
//   console.log("You can dirve");
// }

// // switch case
// const day = "fri";
// switch (day) {
//   case "mon":
//     console.log("Swim");
//     break;
//   case "tue":
//     console.log("Run");
//     break;
//   default:
//     console.log("You are free");
// }

// // ============================== String, template literal
// const model = "BMW";
// const color = "Red";
// // i have  a car, its model is bmw and color is red
// console.log("i have a car, its model is " + model + " and color is " + color);
// console.log(`i have a car, its model is ${model} and color is ${color}`);

// ============================ Type Conversion

// let birthYear = prompt("when were you born2??");
// console.log(typeof birthYear);
// let eighteen = String(18) + Number(birthYear);

// console.log(eighteen);
// console.log(typeof birthYear);

// =========================== Type Coercion
// Type coercion is the automatic conversion of the data type
// const math = 18 - "7";
// console.log(typeof math);
// console.log(18 / "2");

// ============================ Logical operator
// Logical operator : && , || , !
// && And
// || Or
// !  Not

/*
1.  Exprience && Education

                     Exprience
                  True      False
           True   true     false
Education  False  false     false 


2.  Exprience || Education
                     Exprience
                  True      False
           True   true       true
Education  False  true       false


3.  !true == false
4.  !false == true
5. !true && true == false
6. !false && !false ==true
7. !false || !true == true
8. false || !true == false



 */

//============================= statement expression
// expression
// let age = 25;
// console.log(age);

// // statement
// if (age > 18) console.log("You are adult");
// console.log();

// ============================ Functions
// block of code -- specific action --  reuse code

//  function nameoffunction (parameter)
// function juicer(fruit) {
//   // block of code
//   // console.log("enjoy your ${fruit} juice");
//   const msg = `enjoy your ${fruit} juice `;
//   return msg;
// }
// console.log(juicer("apple"));

// // ============================ Functions Declaration
// console.log(calcAge(1997, 2023));
// function calcAge(birthYear, currentYear) {
//   currentYear = 2023;

//   const age = currentYear - birthYear;
//   return age;
// }

// // ============================ Functions Expression

// let calcAgeExp = function (firstName, lastName) {
//   const introduce = firstName + lastName;
//   return `I am ${introduce}`;
// };
// console.log(calcAgeExp("John", "Doe"));
// calcAgeExp("mohammad", "hussaini");
// // ============================ Arrow Function
// // idnetifer (const, let) name  = parameter => return;
// const calcAgeArrow = (birthYear) => {
//   const age = 2023 - birthYear;
//   return age;
// };
// console.log(calcAgeArrow(2000));

// ============================ function inside function

// function getFruitPieces(amount1) {
//   const fruitPieces = amount1 * 4;
//   return fruitPieces;
// }

// const juicer = function (fruit1, fruit2) {
//   const firstFruitPieces = getFruitPieces(fruit1);
//   const secondFruitPieces = getFruitPieces(fruit2);
//   const msg = `enjoy your juice with ${firstFruitPieces} pieces of apple and ${secondFruitPieces} peices of oranges`;
//   return msg;
// };

// const juice = juicer(1, 2);

// ============================= Array

// const studentsName = ["mohammad", "ahmad", "huusain", "hassan"];
// console.log(studentsName);

// const emplyeeInfo = ["Hamed", 32, 45000, true, false, undefined];
// console.log(emplyeeInfo);

// // ========================== Arrays Method
// // push - add item to the end of the array
// // pop - remove item from the end of the array
// // unshift - add item to the start of the array
// // shift - remove item from the start of the array
// // splice - add item to the start of the array
// // slice - return a section of the array

// emplyeeInfo.push("Mohammadi");

// console.log(emplyeeInfo);
// emplyeeInfo.pop();
// console.log(emplyeeInfo);
// emplyeeInfo.unshift("0045");
// console.log(emplyeeInfo);
// emplyeeInfo.shift();
// console.log(emplyeeInfo);

// // ========================== Object

// // Object - Collection of Key Value Pairs
// // (key, value)  = (car : "BMW")
// const studentsInfo = {
//   firstName: "Hussain",
//   lastName: "Sharifi",
//   age: 34,
//   1: "076782317",
//   isPassed: true,
// };

// // Dot notation
// console.log(studentsInfo.firstName);
// // Square baracket
// console.log(studentsInfo[0 + 1]);

// ========================== Object Method
// const workerInfo = {
//   FirstName: "Mohammad",
//   lastName: "Ahmadi",
//   currentYear: 2023,
//   age: function (birthYear) {
//     return this.currentYear - birthYear;
//   },
// };
// console.log(workerInfo.age(2000));
// ========================== For loop
// console.log("You lifted 1");
// console.log("You lifted 2");
// console.log("You lifted 3");
// console.log("You lifted 4");
// console.log("You lifted 5");

// for (let i = 0; i < 5; i++) console.log(`You lifted ${i}`);
// let sum = 0;

// for (let j = 0; j <= 10; j++) {
//   sum = sum + j;
//   console.log(sum, j);
// }
// console.log(sum);

// ========================== While loop
// let counter = 0;
// while (counter < 10) {
//   console.log(`you lifted ${counter}`);
//   counter++;
// }
//
// ==========================================================
//           DOM (Document Object Model)
// ===========================================================
// // Document Object Model (DOM) is a programming interface that
//allows us to work with HTML and XML documents.
// DOM allows JS to select and manipulate HTML Element.

// // Selecting HTML Element
// console.log(document.querySelector("h1"));
// document.querySelector("h1");
// document.getElementsByTagName("h1");
// document.getElementById("first");
// document.getElementsByClassName("heading");
// document.querySelector(".heading");
// document.querySelector("#first");

// Select:
// const heading = document.querySelector("h1");
// const input = document.querySelector("#name");
// const body = document.querySelector("body");
// const submitBtn = document.querySelector(".submit-btn");
// const box = document.querySelector(".box");

// document.querySelector("h1").textContent = "JS Advance";
// heading.textContent = "JS FUnd";
// input.value = "hussain";
// console.dir(input);

// heading.style.color = "#1098ad";
// input.style.padding = "10px";
// body.style.backgroundColor = "#568fe6";

// heading.classList.remove("heading");
// heading.classList.add("first-title");
// console.log(heading.classList.contains("second-title"));

// // Event handler

// submitBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("clicked!!!");
//   const name = input.value;
//   box.classList.remove("active");
//   box.textContent = `Your name is ${name}`;
//   console.log(name);
// });

// document.addEventListener("keydown", function (event) {
//   console.log(event);
//   if (event.key === "Escape") {
//     box.classList.add("active");
//   }

//   console.log("one key pressed");
// });

// const number = Math.trunc(Math.random() * 20 + 1);
// console.log(number);

// Data Structure  Array, object, map, set, string
// Modern OPerator   Rest, spread,   nullish, optional chaining, logical

// const emplyeeInfo = ["Mohammad", 21, true, false];
// // Destructuring Array
// console.log(emplyeeInfo[0]);
// // const name = emplyeeInfo[0];
// // const age = emplyeeInfo[1];

// const [name, age, married, retired] = emplyeeInfo;

// console.log(married);
