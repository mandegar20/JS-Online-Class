"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  orderDelivery: function (starterIndex, mainIndex, time, address) {
    console.log(
      `your order is ready, you ordered
       ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time} in ${address}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `You ordered a pasta with these ingredients ${ing1}, ${ing2}, ${ing3}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//================================================
//                          Map
//-=-========================================
const rest = new Map();
rest.set("name", "Classic");
rest.set(1, "PuleSurkh, Kabul");

rest
  .set("open", 12)
  .set("close", 22)
  .set(true, "we are open")
  .set(false, "We are closed");

console.log(rest.get("name"));
console.log(rest.get(true));
rest.delete(1);
console.log(rest);

const worker = { name: "ahmad", Job: "Engineer" };
console.log(typeof worker);
// convert an object to a map
const workerMap = new Map(Object.entries(worker));
console.log(workerMap);
// convert a map to array
console.log([...workerMap]);

const getAge = (age) => {
  if (age > 18) return "You can drive";
  else return `you can not drive`;
};

console.log(getAge(28));

//================================================
//                          Set
//-=-========================================
// Unique Value

// const foods = new Set(["Pizza", "Qabli", "Steak", "Steak", "Qabli"]);
// console.log(foods);
// console.log(foods.size);
// foods.add("Ashak");
// console.log(foods);
// foods.delete("Qabli");
// console.log(foods);

// for (let food of foods) {
//   console.log(food);
// }

// const badSet = new Set("mohammad", "mahdi");
// console.log(badSet);

// // Looping object
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// const value = Object.values(restaurant.openingHours);
// console.log(value);

// const entry = Object.entries(restaurant.openingHours);
// console.log(entry);

// for (const [day, { open, close }] of entry) {
//   console.log(`on ${day} we open at ${open} and close at ${close}`);
// }

// // for of loop
// for (let item of restaurant.starterMenu) {
//   console.log(`Do you want to eat ${item}`);
// }

// // Rest Operator:
// const arr = [1, 2, 34, 5, 9];
// const [one, car, age, ...other] = arr;
// console.log(one, car, age, other);
// const [pizza, meal2, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, meal2, otherFood);
// Spread Operator
// const array1 = [1, 2, 3, 4, 5];
// const array2 = ["abc", "water", ...array1];

// // Join two arrays
// const meals = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(meals);
// console.log(array2);
// Getting from user
// const ingredients = [
//   prompt("what is the first ingredient?"),
//   prompt("what is the second ingredient?"),
//   prompt("what is the third ingredient?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// // Object Destructuring
// restaurant.orderDelivery(0, 1, "4:30", "Kabul");
// const firstName = restaurant["name"];
// // const { openingHours, mainMenu, starterMenu } = restaurant;
// const { openingHours: time1, location: address } = restaurant;
// console.log(time1, address);

// // console.log(openingHours);

// // Array Destructuring
// const food = restaurant.starterMenu[0];
// const food1 = restaurant.starterMenu[1];
// const [meal0, mealone, meal2, meal3, meal4] = restaurant.starterMenu;
// console.log(meal0, mealone, meal2, meal3, meal4);
