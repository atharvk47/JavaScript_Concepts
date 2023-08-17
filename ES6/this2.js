
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

console.log(person.fullName)          // [Function: fullName]

console.log(person.fullName())        // John Doe

const fullName = person.fullName;
console.log(fullName())               // undefined undefined

// With the bind() method, an object can borrow a method from another object or within the same object.

const completeName = person.fullName.bind(person);
console.log(completeName())           // John Doe
