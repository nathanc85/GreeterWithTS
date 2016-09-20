interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello " + person.firstName + " " + person.lastName;
}

var user = {firstName: "Mary", lastName: "Jane"}
//var user = [0, 1, 2];

document.body.innerHTML = greeter(user);