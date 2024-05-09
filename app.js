//Modern JavaScript Syntax
//-------------------- Array.prototype.map() --------------------\\
const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
    return currentElement + ' ice cream';
});

// console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']

//Exercise #1:
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const sumOfNums = nums.map((num)=>{
    return num * 2;
})
console.log(sumOfNums);

//-------------------- Array Destructuring --------------------\\
const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

// console.log(firstPet); // 'Rover'
// console.log(secondPet); // 'Snuffles'

// Equivalent in traditional bracket notation:
// console.log(petsArray[0]); // 'Rover'
// console.log(petsArray[1]); // 'Snuffles'

//Exercise #2:
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [firstTopping, secondTopping] = pizzaToppings;
console.log(firstTopping, secondTopping);

//-------------------- Object Destructuring --------------------\\
const person = {
    name: 'Alex',
    role: 'Software Engineer',
    };
    
    // Object destructuring:
    const { name, role } = person;
    
    // console.log(name); // 'Alex'
    // console.log(role); // 'Software Engineer'
    
    // Equivalent in traditional dot notation:
    // console.log(person.name); // 'Alex'
    // console.log(person.role); // 'Software Engineer'

//Exercise #3:
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here
const {make, model} = car;
console.log(make, model);

//-------------------- Applying the Spread Operator on Arrays --------------------\\
const originalArray = [1, 2, 3];
const duplicateArray = [...originalArray];
  
//   console.log(duplicateArray); // [1, 2, 3]

//   const originalArray = [1, 2, 3];
//   const referenceArray = originalArray; // referenceArray is now a reference to originalArray
  
//   referenceArray.push(4); // Modifying referenceArray also modifies originalArray
//   console.log(originalArray); // [1, 2, 3, 4]
    //Merging multiple arrays into one
const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];

const fruitsAndVegetables = [...fruits, ...vegetables];

// console.log(fruitsAndVegetables); // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']

//Exercise #4:
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings2 = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const controversialPizzaToppings = [...pizzaToppings2];
console.log(controversialPizzaToppings);

//-------------------- Applying the Spread Operator on Objects ------------------\\
const originalObject = {
    foo: 'Hello',
    bar: 100,
  };
  
  const clonedObject = { ...originalObject };
  console.log('Clone: ', clonedObject); // { foo: 'Hello', bar: 100 }

//   const originalObject = {
//     foo: 'Hello',
//     bar: 100,
//   };
  
//   const clonedObject = originalObject; //This creates a reference and any changes done to the reference will MUTATE the original as well
//   clonedObject.foo = 'Goodbye'; 
  
//   console.log(originalObject); // { foo: 'Goodbye', bar: 100 }

//Exercise #5:
// Duplicate the following object and spread its values into a new variable `myCar`.

const car2 = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
const myCar = {...car2};
myCar.model = "q7";
console.log("Original:", car2);
console.log("New:", myCar);

//-------------------- Dynamic Keys in Objects -------------------\\
const fruitInventory = {
    apples: 2,
    oranges: 4,
  };
  
  const selectedFruit = 'apples'; // Variable as a dynamic key
  const selectedFruitCount = fruitInventory[selectedFruit]; //Because we are using the variable holding the property name, we need to use square bracket notation 
  
//   console.log(selectedFruitCount); // 2

const fruitType = 'bananas'; // Variable as a dynamic key

const fruitInventory2 = {
    [fruitType]: 5, //Property is created dynamically with square bracket notation 
    };

console.log(fruitInventory2); // { bananas: 5 }

//Exercise #6:
// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const propertyName = "email";
const userProfile = {
    [propertyName]: "learningreact10@gmail.com",
}
console.log(userProfile);

//------------------- Import and Export --------------------\\
//Exercise #7: In exportingFile.js and importingFile.js  

//-------------------- Default Parameters --------------------\\
function addThreeNumbers(numA = 1, numB = 2, numC = 1) { 
    return numA + numB + numC;
  }
  
addThreeNumbers(2); //numA will use the argument is was given, overriding the default parameter

//Exercise #8:
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
function petColor(noun = "cat", adjective = "white"){
    console.log(`The ${noun} is ${adjective}.`);
};
petColor();
petColor("dog", "black");

//-------------------- The ternary operator --------------------\\  
const age = 22;
let access = age > 21 ? 'Yes' : 'No';

// console.log(access); // 'Yes'

//Exercise #9:
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

// Your code here
pizza === "tasty" ? console.log("yum") : console.log("yuck");
let pizzaRating = pizza === "tasty" ? "yum" : "yuck";
console.log(pizzaRating);

//-------------------- Boolean Gates --------------------\\
const myVar = "";
const result1 = 'bar' && 'foo'; // && Operator - looks for FIRST falsy value from left to right
const result2 = false || 243; // || operator - Looks for FIRST truthy value from left to right
const result3 = 42 && false;
const result4 = myVar || 3000;

console.log('result1:', result1);
console.log('result2:', result2);
console.log('result3:', result3);
console.log('result4:', result4);

//Exercise #10:
// Simulated language configuration (change this variable to test)
const localLangConfig = null; // Change to 'es', 'fr', etc., or keep it null

// Create a variable called LANG
// Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = localLangConfig &&  "en";
// Log the result
console.log('Language setting:', LANG);

// Simulated user theme preference (change this variable to test)
const userSavedTheme = "dark"; // Change to 'dark', 'contrast', etc., or keep it null

// Create a variable called USER_THEME
// Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const USER_THEME = userSavedTheme || "light";
// Log the result
console.log('User theme setting:', USER_THEME);

//-------------------- Optional Chaining --------------------\\
const adventurer = {
    name: 'Alice',
  };
  
  let dog = adventurer.dog?.name; //Addding the question mark ? after the property we are unsure if it exists yet (usually a concern when tyring to access deeply nested properties), we handle the error and return the value of undefined instead of crashing after the code runs
  
//   console.log(dog); // undefined
 
//Exercise #11:
// Now check for `cat.age` on `adventurer2`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer2 = {
    name: 'Alice',
  };
  
  let cat = adventurer2.cat?.age // Your code here
  
  console.log(cat);
     