class Student {
    fullName: string;
    constructor (public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = this.firstName + " " + this.middleInitial + " " + this.lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello " + person.firstName + " " + person.lastName;
}

var user = new Student("Mary", "M.", "Jane");
//var user = [0, 1, 2];

document.body.innerHTML = greeter(user);


class Student1 {
    fullName: string;
    constructor (public firstName: string, public middleInitial: string, public lastName: string){
        this.fullName = this.firstName + " " + this.middleInitial + " " + this.lastName;
    }
}

interface Person1 {
    firstName: string;
    lastName: string;
}

function greet(person: Person1) {
    return "Hello" + " " + person.firstName + " " + person.lastName;
}

var user = new Student1("Nathan", "S.", "Perdan");

document.body.innerHTML = greet(user);