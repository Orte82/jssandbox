const person = {
    firstName: "Steve",
    lastName: "Smith",
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['misic', 'sports'],
    address: {
        city: "Maimi",
        state: "FL"
    },
    getBithYear: function() {
        return 2017 - this.age;
    }
}

let val;
val = person;
//Get specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBithYear();





console.log(val);