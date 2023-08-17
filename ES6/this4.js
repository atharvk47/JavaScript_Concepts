
// The apply() method is similar to the call() method.
// With the apply() method, you can write a method that can be used on different objects.

// The difference is:
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

const venture = {
    fullName: function(founder1,founder2) {
      return this.Name + " was created in " + this.year + ". "+ "It was founded by " + founder1 + " and " + founder2 + "." ;
    }
}

const venture1 = {
    Name:"John Labs",
    year: "2006"
}

console.log(venture.fullName.apply(venture1, ["Noman","Damon"]));
