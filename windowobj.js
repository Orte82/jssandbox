let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function() {
    let color = document.body.getElementsByTagName('h1')[0];

    if (color.style.backgroundColor == "yellow") {
        color.style.backgroundColor = "blue";
        color.style.color = 'white';
    } else {
        color.style.backgroundColor = "yellow";
        color.style.color = 'black';
    }




});

// button.addEventListener("mouseover", function() {
//     let color = document.body.getElementsByTagName('h1')[0];



// });