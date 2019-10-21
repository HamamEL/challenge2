// Use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

/*
Depending on data modeling concept that you have learned:

Create a factory function called makeComputer that represents computers, 
What different attributes computers may have? 
Create two computers object from your factory function and save them in one array called computers!

Note: please write one or two lines here describing your solution.
*/

function makeComputer(type, color, weight) {

// i can not remember the right syntax of HOF but it works as a function that takes another function as a parameter here i may use 
// a function with the computer parts than call it in higher order function 

  
}

// Write a function displayComputer that can be used to display one computer.

function displayComputer(computer) {
  // TODO: Your code here
}

//=============================================================================
/*                                  Q2                                       */
//=============================================================================

/*
Write a function that takes an array of strings as a input
and returns an array of all of those strings, but transformed to upper case.

You can use toUpperCase method to convert a string to upper case. 
Solve it using the most appropriate helper functions(each,map,filter).

Note: please write one or two lines here describing your solution.

var strArr = ['hello', 'world', 'whirled', 'peas'];
uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]
*/

function uppercaseAll(arrayOfStrings) {
  return map(arrayOfStrings, function(elem, key){
     if(typeof elem === 'string'){
      return elem.toUpperCase();
    }
    return elem;
  });
}

// here the map will take the arrayoOfStrings and anoynmous function with two parameters 
//en element and key then check for the type of the element if it is string it will applay the build-in function .toUpperCase 
//otherwise if the element is in uppercase it will return it as it is 

//=============================================================================
/*                                  Q3                                       */
//=============================================================================

/*
Write a function that takes array of objects as an input and returns an array
with only the countries that have a population higher than 500 million.

Solve it using one of the most appropriate helperthe helpers functions(each,map,filter).

highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
Note: please write one or two lines here describing your solution.

Here’s the data you’ll work with:
*/

var data = [
  {
    country: 'China',
    population: 1409517397
  },
  {
    country: 'India',
    population: 1339180127
  },
  {
    country: 'USA',
    population: 324459463
  },
  {
    country: 'Indonesia',
    population: 263991379
  }
];

function highestPopulation(arrayOfObjects) {
  
  return filter(arrayOfObjects function(number){
    if (number > 500000000){
      return number;
    }
  });
}
// filter will take the array of object and an anoynoumos function with parameter number than it will be applied 
// on the varibale data the filter is working as an if statment to check if the number is greater than 500 million and return the number
//if the condition is met 
//=============================================================================
/*                              Q4                                           */
//=============================================================================

/*
Write a function halveAll that takes an array of numbers as a input 
and returns an array of all of those numbers halved (divided by two).

Note: solve it using the most appropriate helper functions(each,map,filter)

var numsArray = [2, 6, 20, 8, 14];
halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]

Note: please write one or two lines here describing your solution.
*/

function halveAll(numbers) {
   return filter(numbers, function(number){
    if (typeof number === 'number' ){
      return number /2;
    }
  });

}
// as the same before here the filter will work to take numbers and function as a parameter and check if the input type is 
//number if it is it will divide it by two 
//=============================================================================
/*                                  Q5                                       */
//=============================================================================

/*
Write a function called values that accepts an object as a parameter, and outputs an array of the object's values. 
Solve it using one of the most appropriate helpers functions(each,map,filter).

values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];

Note: please write one or two lines here describing your solution.
*/
function values(obj) {

       var total = 0; 
       each(obj, function(number){
        total = total + obj;
       })
       return total; 
 }
  // i did not have time to solve this question and i am not sure if i am using the appropriate method here 

  

//Good Luck :))
