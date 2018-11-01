// document.getElementById()

console.log(document.getElementById("task-title"));

//Get things from the element

document.getElementById("task-title").id;
document.getElementById("task-title").className;

//Change styling

const taskTitle = document.getElementById("task-title")

document.getElementById("task-title").style.background = '#333';
document.getElementById("task-title").style.color = '#fff';
document.getElementById("task-title").style.padding = '5px';
//document.getElementById("task-title").style.display = 'none';

//Change content
document.getElementById("task-title").textContent = 'Task List';
document.getElementById("task-title").innerText = 'My Tasks';
//document.getElementById("task-title").innerHTML = '<span slyle ="color:red">Task List</span>';

//document.querySelector();
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));
document.querySelector("li").style.color = "blue";
document.querySelector("ul li").style.color = "blue";
document.querySelector("li:last-child").style.color = "yellow";
document.querySelector("li:nth-child(3)").style.color = "grey";
document.querySelector("li:nth-child(4)").textContent = "Hello World";