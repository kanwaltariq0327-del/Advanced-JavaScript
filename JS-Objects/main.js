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

person.prototype.sayHello = function() {      //here " .prototype.sayHello " adds sayHello() to the prototype of objects created

    console.log(`Hello, I am ${this.name}`);
};

const person1 = new person("Ali");
const person2 = new person("Sara");

// WHAT HAPPENS WITH new:
// 1. JS creates an object 2.Connects it with person.prototype 3.Calls Person with this

person1.sayHello();
person2.sayHello();  //so both can use the same method





// PROTOTYPE INHERITANCE = .getPrototypeOf() .setPrototypeOf()
const Username = {
    user : "kanwal",
    email: "kanwal.tariq@gamil.com"
}

const Student = {
    id : 234,
    isAvailable: true,
}
// one object inheriting the properties of other object through proto
Object.setPrototypeOf(Username, student)






// USING CLASSES WITH CONSTRUCTOR IN JAVA-SCRIPT
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }
    
    capUser() {
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User("kanwal", "kanwal.tariq@gamil.com", "123")

console.log(user1.encryptPassword()); //output -> 123abc
console.log(user1.capUser());  //output -> KANWAL




// USING CONSTRUCTOR WITHOUT CLASSES IN JAVA-SCRIPT
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}
User.prototype.capUser = function() {
    return `${this.username.toUpperCase()}`
}

const user2 = new User("sara", "sara0327@gamil.com", "456")

console.log(user2.encryptPassword()); //output -> 456abc
console.log(user2.capUser());  //output -> SARA







// HOW TO USE INHERITANCE
class Username1 {
    constructor(username){
        this.username = username
    }


    logMe() {
        console.log(`USERNAME IS ${this.username}`);
    }
}

class Teacher extends Username1 {
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const newPerson = new Teacher("sara", "sara0327@gamil.com", "456");

newPerson.addCourse()  //output -> A new course was added by sara


const newPerson2 = new Username1("kanwal")
newPerson2.logMe() //output -> USERNAME IS kanwal

console.log(newPerson === Teacher); //output -> false ---> it's not the same because one is just the instance of another
console.log(newPerson instanceof Teacher); //output -> true
console.log(newPerson instanceof Username1);  //output -> true







// GETTER and SETTER
class User1 {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get password() {
        return `${this._password}abc`
    }

    set password(value) {
        this._password = value
    }
}

const sara = new User1("sara0327@gamil.com", "123")
console.log(sara.password);  //output -> 123abc

