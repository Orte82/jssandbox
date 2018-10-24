const num1 = 100;
const num2 = 50;
let val;
// let string1 = '';
// let User = "my name is "
// for (let i = 0; i < 10; i++) {
//     string1 = string1 + User;
// }
// console.log(string1);

val = function() {
    let some = Math.sqrt(num1);
    let vel = Math.random() * num2;
    return some + vel;
}
console.log(val());

document.body.style.backgroundColor = "blue";