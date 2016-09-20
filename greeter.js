var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = this.firstName + " " + this.middleInitial + " " + this.lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = new Student("Mary", "M.", "Jane");
//var user = [0, 1, 2];
document.body.innerHTML = greeter(user);
var Student1 = (function () {
    function Student1(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = this.firstName + " " + this.middleInitial + " " + this.lastName;
    }
    return Student1;
}());
function greet(person) {
    return "Hello" + " " + person.firstName + " " + person.lastName;
}
var user = new Student1("Nathan", "S.", "Perdan");
document.body.innerHTML = greet(user);
//# sourceMappingURL=greeter.js.map