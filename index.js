
function receivesAFunction(callback) {
    callback();
  }
  
  // Returns a named function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function.");
    }
    return namedFunction;
  }
  
  // Returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function.");
    };
  }

  receivesAFunction(function() {
    console.log("This is a callback function.");
  });
  
  // Call returnsANamedFunction and store the returned named function in a variable
  const myNamedFunction = returnsANamedFunction();
  myNamedFunction(); // Call the named function that we stored in the variable
  
  // Call returnsAnAnonymousFunction and store the returned anonymous function in a variable
  const myAnonymousFunction = returnsAnAnonymousFunction();
  myAnonymousFunction();