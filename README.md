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

### JAVA-SCRIPT EVENTS PRACTICE PROJECT IN  [EXERCISE-1](https://kanwaltariq0327-del.github.io/Advanced-JavaScript/EXERCISE-1/index.html)

# Async JavaScript fundamentals:
#### " JavaScript is a synchronous language. "
- JavaScript itself is primarily **single-threaded** and **synchronous**.
- JavaScript can perform **asynchronous** operations using features provided by its environment, such as the browser or Node.js.

## setTimeout( ) and setInterval( ):
- These operations are asynchronous operations and can be performed by JavaScript
- #### JAVA-SCRIPT ASYNC PRACTICE PROJECT IN  [EXERCISE-2](https://kanwaltariq0327-del.github.io/Advanced-JavaScript/EXERCISE-2/index.html)

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

## PROMISE:
### What is a Promise?
**=> " A Promise represents a value that we don't have right now, but will have later. "**
- It goes like this:
   - You request data ↓
   - Promise ↓
   - Waiting... ↓
   - Server responds ↓
   - Success / Failure
 
## States of Promise"
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











