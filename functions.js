//function declaration

function greet(firstName = "John") { //default parameter
    console.log("Hello");
    return "Hello " + firstName;
}

console.log(greet('John'));

//function expresions

const square = function(x = 3) {
    return x * x;
}

console.log(square(34));

// immidiately invokable funcion expressions - IIFEs

(function(name) {
    console.log('IIFF Run' + name);
})('Brad'); // modular design pattern

// property methods

const todo = {
    add: function(id) {
        console.log(`Add todo...${id}`);
    }
}

todo.delete = function() {
    console.log('Delete todo...');
}

todo.add();
todo.add(22);
todo.delete();