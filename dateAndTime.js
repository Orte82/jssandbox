let val;


const today = new Date();
let birthday = new Date('20-04-1982 11:25:00');
birthday = new Date('September 10 1982');
birthday = new Date('10/10/2015');
val = today; //.toString();

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getSeconds();

birsthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1999);
birthday.setHours(3);
birthday.setSeconds();


console.log(typeof val);
console.log(val);
console.log(birthday);