// LEXICAL SCOPE:
let name = "Kanwal";

function greet() {
  console.log(name);
}

greet(); // Kanwal
// Here, greet() can access name because it was defined inside the scope where name exists.






// CLOSURES:
function outer() {
  let name = "Kanwal";

  function inner() {
    console.log(name);
  }

  return inner;  //We return the function, not its result.
}
//  it is expected that name should disappear because outer() has finished
// but js will keep it because inner still needs name
const greet = outer();  //stored in a variable

greet(); //output Kanwal