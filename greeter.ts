function greeter(person: string) {
    return "Hello " + person;
}

var user = "Mary Jane";
//var user = [0, 1, 2];

document.body.innerHTML = greeter(user);