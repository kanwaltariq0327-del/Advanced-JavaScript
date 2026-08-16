# Advanced-JavaScript
# EVENTS In JavaScript:
**=> " Events are actions that happens on a web-page and JavaScript can detect and respond to those actions. "**

#### For Example:
- A user clicks a button → click event
- A user types something → input event
- A web-page finishes loading → load event
- A user moves the mouse → mousemove event
- A form is submitted → submit event

## Events Handling Function:
**=> " addEventListener() is the most common way to handle events. "**

-> ```element.addEventListener("event", function () {
         // code to execute
    });```
    
#### For Example:

-> ```const button = document.querySelector("#button");
      button.addEventListener("click", () => {
            alert("Hello!");
      });```

In Short: **Event happens → JavaScript detects it → JavaScript runs some code**

## Common JavaScript events:
- Mouse Events:
   - click
   - dblclick
   - mousedown
   - mouseup
   - mousemove
   - mouseenter
   - mouseleave
 
- Keyboard Events:
   - keydown
   - keyup
 
- Form Events:
   - submit
   - input
   - change
   - focus
   - blur

# EVENT OBJECT:

### What is the event object?
**=> " When an event occurs, JavaScript gives your function an event object containing information about what happened. "**

#### For Example:

-> ```button.addEventListener("click", (event) => {
          console.log(event);
      });```

**- We can use to find information such as:**
   
   - event.target: tells us which element was clicked.
   - event.type: tells us what kind of action just took place such as ( " click ", " keydown " or " submit " )
   - event.key: tells us the exact value or character of the key that a user presses on the keyboard ( like " a ", " Shift " or " Enter " )

## Event Propagation in JavaScript

**=> " Event propagation is the process of an event travelling through the HTML elements when an event occurs. "**

### There are Two phases of event propagation:
#### 1.Bubbling Phase:

- After reaching the target, the event travels back upward through its parent elements.
- Bubbling is the default behaviour you will encounter most often.
- JavaScript can detect that whether to use event bubbling if we write **false** in the code.
- even if we don't write it **false** is the default behaviour.

#### For Example:
-> ```child.addEventListener("click", (event) => {
           console.log("Button clicked");   
      }, false);```
  
#### 2.Capturing Phase:
- The event travels from the outermost element toward the element that was clicked.
- JavaScript can detect it if we write **true** in the code.

#### For Example:
-> ```child.addEventListener("click", (event) => {
           console.log("Button clicked");
       }, true);```

## stopPropagation()

Sometimes we don't want the event to continue travelling so, we use stopPropagation()

-> ```child.addEventListener("click", (event) => {
          event.stopPropagation();
          console.log("Button clicked");
      });```
      
Now when we click the **button** the event will not reach it's parent.

### JAVA-SCRIPT EVENTS PRACTICE PROJECT IN  [JS-EVENTS](https://kanwaltariq0327-del.github.io/Advanced-JavaScript/JS-EVENTS/index.html)

# Async JavaScript fundamentals:
#### " JavaScript is a synchronous language. "
- JavaScript itself is primarily **single-threaded** and **synchronous**.
- JavaScript can perform **asynchronous** operations using features provided by its environment, such as the browser or Node.js.

## setTimeout( ) and setInterval( ):
- These operations are asynchronous operations and can be performed by JavaScript

## JavaScript async Functions:
**=> " async function is a function that can perform a task that takes some time without stopping the rest of the program from continuing. "**
- We can create an **asynchronous** function by putting *async* before a function
- An *async* function always returns a **Promise**.

#### For Example:
- A **simple function** runs like this:
-> ```function greet() {
         return "Hello";
      }
      console.log(greet());```
- This runs immediately printing " Hello ".

- An **async function** runs like this:
-> ```async function greet() {
         return "Hello";
      }
      console.log(greet());```
- This will print a Promise: " Promise { "Hello" } ".


## fetch( ) API:
 
- The Fetch API is a built-in JavaScript feature used to request data from a server/API.
- The fetch method starts the process of fetching the resource from the network.
- Returning a Promise which is fulfilled once the response is available.
- The basic syntax is:
  -> ```fetch(url)```
- fetch doesn't immediately give us the data instead it always returns a Promise.

### JAVA-SCRIPT ASYNC PRACTICE PROJECT IN  [JavaScript-Async](https://kanwaltariq0327-del.github.io/Advanced-JavaScript/JavaScript-Async/index.html)

## PROMISE:
### What is a Promise?
**=> " A Promise represents a value that we don't have right now, but will have later. "**
- It goes like this:
   - You request data ↓
   - Promise ↓
   - Waiting... ↓
   - Server responds ↓
   - Success / Failure
- A Promise does not reject on **HTTP errors** ( 404 etc ) instead a then( ) handler must check response.
 
## States of Promise:
- A Promise has three possible states:
   - **pending**: Operation is still running
   - **fulfilled**: Operation succeeded
   - **rejected**: Operation failed

### A Basic Syntax in creating a Promise:

-> ```const promise = new Promise((resolve, reject) => {
    // asynchronous operation
     resolve();
    });```

    
- The Promise constructor receives a function called the executor function.
- Inside it, you get two functions: **1.resolve() → Success 2.reject()  → Failure**

#### For Example:

-> ```const promise = new Promise((resolve, reject) => {
          let success = true;
          if (success) {
               resolve("Operation successful!");
          } else {
               reject("Operation failed!");
          }
      });```

- If success is **true**, the Promise becomes **fulfilled**
- If it's false then **rejected**

## 1- .resolve():
- **resolve()** tells the Promise that it was successful.
- That value can later be accessed using **.then()**.

## 2- .reject():
- **reject()** tells the Promise that something is wrong.
- The rejection reason can be accessed using **.catch()**.

## 3- .then():
- **.then()** is used when the Promise is fulfilled successfully.

## 4- .catch()
- **.catch()** handles a rejected Promise.

## 5- .finally():
- **.finally()** runs regardless of whether the Promise succeeds or fails.

 
## AWAIT:

**=> " await tells JavaScript TO Wait for the Promise to finish before continuing the async function. "**

#### For Example:

-> ```async function getData() {
           const response = await fetch("https://example.com/data");
           console.log(response);
     }```

- Here await fetch ( ... ) means to wait for **fetch()** to complete, then put its result inside *response*.
- The need for **async and await** is for one of the most common uses in **fetching data from an API**.
- We generally use await inside an async function.

# OOP ( OBJECT ORIENTED PROGRAMMING ):

### What is Object-Oriented Programming?

**=> " Object-Oriented Programming (OOP) is a way of writing programs by organising code around objects. "
- An object is simply the collection of Properties and Method
- OOP puts related data and functions together inside objects.

## Object:
- In JavaScript, an object is a standalone, non-primitive data structure that stores related data as a collection of key-value pairs.
- An object serves as a structural container to group complex data and behavior together.
- it is consist of Properties and Method.
- 
#### For Example:
-> ```// Creating a user object
const user = {
  name: "Alice",                 // Property (String)
  age: 28,                       // Property (Number)
  isAdmin: true,                 // Property (Boolean)
  hobbies: ["chess", "coding"],  // Property (Array/Object)
  // Method
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};```

## Object Literals:
- Objects are typically created using curly braces {}, known as an object literal.

## .this:
- **.this** is very important in JavaScript OOP.
- **.this** refers to the current object.


### Why do we need OOP?

- In order to clear out the messed up code by putting them in object to make it more readable and to work more efficiently.
- We can organise our code by using more features using OOP.

# Important Parts of OOP:

## 1.Classes:
- A class is like a blueprint for creating objects.
- It bundles data and behaviours together into a single logical unit
- While a class defines the structure, it does not consume memory until we instantiate it to create an "object".
- Classes are largely a cleaner syntax for working with JavaScript's prototype-based inheritance.	

## 2.Constructor Function:

- A constructor Function is a special method that automatically initialises a newly created object.
- A class can have a special method called constructor( ).
- The constructor automatically runs when we use **new** keyword.
- It must have the exact same name as the class.
- It helps to create multiple instances using one Object Literal.
- It always gives us a new instance.
 
#### Basic Syntax and Example:
-> ```class Car {
    // Constructor
    constructor(modelName) {
        this.model = modelName;
    }
}
// Usage
let myCar = new Car("Tesla");```


## 3.Prototypes:
- JavaScript have a prototype based behaviour.
- Everything in JavaScript is an Object itself -> Array, String, function etc.

### The Prototype Chain:
- In JavaScript, objects inherit properties and methods directly from other objects through a mechanism called the prototype chain.
- When we try to access a property or a method on an object, JavaScript first looks at the object itself. If it is not found, it travels up the chain to the prototype, and continues upward until it finds the property or hits null.
- Instead of copying methods into every new object instance, instances share a single reference to the methods defined on their prototype
- Through Prototype Chaining memory can be saved because the method is stored on the shared prototype rather than separately on every object.
- Every object in JavaScript has a hidden internal property, commonly accessed via **__proto__** or **Object.getPrototypeOf()**, that points to its prototype object.


## __proto__ :
- __proto__ is a property that lets you access an object's prototype.


#### For Example:
-> ```const person = {
    name: "Ali"
};
console.log(person.__proto__);```

- In the above example we can say that **person.__proto__ === person.prototype**

## 4.Instances:
- Instance is a specific object created from a class or a constructor function.
- A class as a blueprint and an instance is the actual object built from that blueprint.
- Instances can be created using the " new " keyword.


### JAVA-SCRIPT PROTOTYPE PRACTICE AND SIMPLE EXPLANATION IN  [JS-Prototype](https://github.com/kanwaltariq0327-del/Advanced-JavaScript/blob/main/JS-Prototype/main.js)




## The Main Concepts of OOP:
- Classes are the vehicle through which the four primary pillars of Object-Oriented Programming are achieved

### 1.Encapsulation
- Encapsulation keeps related data and functionality together and controls how that data can be accessed or changed.

### 2.Abstraction
- Abstraction hides complicated implementation details and shows only what the user needs.

### 3.Inheritance
- In Inheritance, one class/object can inherit properties and methods from another class/object.
- The keyword *extends* is used for **inheritance**.
  
### 4.Polymorphism
- The word polymorphism basically means **" Many forms ".**
- Different objects can have a method with the same name but behave differently.


# OOP Cheat Sheet:

| Term | Simple Meaning |
| -------- | -------- |
| Object | A thing containing data and functions |
| Class | Blueprint for creating objects |
| Property | Data belonging to an object |
| Method | Function belonging to an object |
| Constructor | Runs when an object is created |
| .this | Refers to the current object |
| Encapsulation | Keep data and functionality together/control access |
| Abstraction | Hide complicated details |
| Inheritance | One class gets features from another |
| Polymorphism | Same method name, different behaviour |
| extends | Used for inheritance |
| new | Creates an object from a class |

# GETTER AND SETTER:

## Get:
**=> " A *get* is a special method that runs when you read/access a property. "**
#### Syntax:

-> ```get propertyName() {
    // code
}```

## Set:
**=> "A *set* is a special method that runs when you assign a value to a property. "**
#### Syntax:
- The real power of setters is that you can validate data before changing it.

-> ```set propertyName(value) {
    // code
}```

- Usually getter and setter are to be seen together.
- The biggest reason we use getters and setters is **encapsulation**.
- Instead of allowing outside code to freely manipulate our object's internal data.
- We can control what happens with the help of get and set.
- Setters can filter or sanitise data before it gets stored in the object.
- In other words:
   - Getter: controls how a property is read.
   - Setter: controls how a property is changed.
 
## Core Comparison:

| Feature | Getter (get) | Setter (set) |
| -------- | -------- | -------- |
| Purpose | Retrieves a computed value | Modifies or validates a value |
| Parameters | Accepts zero parameters | Accepts exactly one parameter |
| Invocation | Triggered via reading (obj.prop) | Triggered via assignment (obj.prop = val) |
| Return Value |  Must return a value | Usually returns nothing (void) |


### NOTE: 
-Never use the exact same variable name inside the getter/setter function as the getter/setter name itself 
#### For Example:
-> get name() { return this.name; } 

- This causes an infinite loop recursion crash **(Maximum call stack size exceeded)**.
- Use an internal alias like *_name* or a private field *#name* instead.

# ARRAYS:

## beyond the basics

#### Two types of arrays can be found:

## 1.Holey Arrays:
**=> " A holey array (also called a sparse array) is a JavaScript array that contains **empty slots** or **"holes"** at non-contiguous index positions. "**

- It Is an array that contains empty slots or "holes" at non-contiguous index positions.
- These empty slots are fundamentally different from positions explicitly filled with undefined or null values, they represent missing keys entirely.
- JavaScript engines like V8 (Node.js & Chrome) distinguish these from "packed" (dense) arrays.
- Causing severe performance penalties and inconsistent method behaviours.

#### How Holey Arrays are Created:
-> ```// 1. Array constructor with a predefined length
const arr1 = new Array(3); // [empty × 3]```
-> ```// 2. Assigning an index past the current length
const arr2 = [1, 2, 3];
arr2[6] = 7; // [1, 2, 3, empty × 3, 7]```


## 2. Continuous -> Packed Elements
**=> "an array where all elements are dense and contiguous, meaning every single index from 0 to array.length - 1 contains a valid value and there are no missing slots or "holes". "**
- It can store any data type i.e ( integers, floating, string )

#### For Example:
-> ```const arr = [1, 2, 3, 6.0, "7"]```

#### Both of these array types can be available in further three kinds:
- SMI ( Small Integers )
   - This type restrictively only has numbers in it, not even decimals numbers.
   - SMI can also be as a Packed Array Elements and a Holey Array Elements.

- Double ( floating, string, function )
   - these are ```[6.0, 7.1]``` 
   - Once Double is added in the array it will not be optimised back into SMI.
 
### Highest Optimisation:
- In Continous -> SMI > Double > Packed Elements
- In Holey -> H_SMI > H_Double > H_Packed Elements

**=> Once it s Downgraded it will not be Upgraded.*



         








