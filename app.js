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
  

  
      
    