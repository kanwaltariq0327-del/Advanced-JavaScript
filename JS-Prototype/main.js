const person = {
    greet: function() {
        console.log("Hello!");
    }
};

const student = Object.create(person); // here " person " became the prototype of " student "

student.greet(); //Hello!

// student did not have " greet " but person had  " greet " 
// This is a Prototype chain




// PROTOTYPE WITH CONSTRUCTOR FUNCTION i.e new:
function person(name) {
    this.name = name;
}

person.prototype.sayHello = function() {          //here " .prototype.sayHello " adds sayHello() to the prototype of objects created

    console.log(`Hello, I am ${this.name}`);
};

const person1 = new person("Ali");
const person2 = new person("Sara");

// WHAT HAPPENS WITH new:
// 1. JS creates an object 2.Connects it with person.prototype 3.Calls Person with this

person1.sayHello();
person2.sayHello();  //so both can use the same method