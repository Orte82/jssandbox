// //Window methods objects and properties

// window.console.log(23);

// // Alert

// //window.alert("Hello worold");

// const input = prompt();
// alert(input);

// //Confinm
// if (confirm("Are you sure?")) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

let val;

//Outer height and width

val = window.outerHeight;
val = window.outerWidth;

//Inner height and width

val = window.innerHeight;
val = window.innerWidth;

//Scroll points

val = window.scrollY;
val = window.scrollX;

//location Object

val = window.location;

val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//Rederect

//window.location.href = 'http://google.com';
//Reload

//window.location.reload();

//History object

//window.history.go(-1);

//Navigator Object

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;


console.log(val);