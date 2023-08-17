
// This file will describe the keyword "this".

// The this keyword in JavaScript designates an object.

// Which object is utilised depends on how this is called or used.

// 1) In an object method, this refers to the object. E.g:

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

console.log(person.fullName())     // Output: John Doe

//  2) When used alone, this refers to the global object.

// Because this is running in the global scope.

// In a browser window the global object is [object Window]

let x = this;
console.log(this)             // Output: {}

// However, there may be some constraints regarding this use as per the code.

// 3) An entire object prototype can be printed using 'this' keyword.

// E.g:

const person2 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    },
    display(){
        console.log(this);
    }
  };

  person2.display();     

// Output:
// {
//     firstName: 'John',
//     lastName: 'Doe',
//     id: 5566,
//     fullName: [Function: fullName],
//     display: [Function: display]
//   }



  