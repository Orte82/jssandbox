//Create some arrays

const numbers = [43, 14, 353, 3434, 553, 34];
const numbers2 = new Array(23, 34, 53, 445);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 2, b: 2 }, new Date()];

let val;

//Get array length

val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value

val = numbers[3];
val = numbers[0];

//Inser into array
numbers[2] = 100;
//Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// add on to end
numbers.push(250);
// add on to front
numbers.unshift(120);
//Take off from end
numbers.pop();
// Tak off from front
numbers.shift();
//Splice values
numbers.splice(1, 1);
//Reverse
numbers.reverse();
//Concatenate
val = numbers.concat(numbers2);

//Sort
val = fruit.sort();
val = numbers.sort();
// Use the compare function to sort

val = numbers.sort(function(x, y) {
    return x - y;
});
//Reverse sort
val = numbers.sort(function(x, y) {
    return y - x;
});
//Find

function under50(num) {
    return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);