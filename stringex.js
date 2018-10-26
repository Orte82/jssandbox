const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = "Hello there, my name is Brad";

let val;

val = firstName + lastName;

val = firstName + ' ' + lastName;
//Append

val = "Brad ";
val += "Traversy";

val = "Hello, my name is " + firstName + "and I am " + age;

val = 'That I can\'t do';

val = firstName.length;

val = firstName.concat(" ", lastName);

val = firstName.toLocaleUpperCase();
val = firstName.toLocaleLowerCase();

val = firstName[2];

val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

val = firstName.charAt('2');

val = firstName.charAt(firstName.length - 1);

//substring
val = firstName.substring(0, 4);
val = firstName.slice(0, 4);
val = firstName.slice(-3);

val = str.split(" ");

val = str.replace("Brad", "Jack");

val = str.includes('Hello');

console.log(val);