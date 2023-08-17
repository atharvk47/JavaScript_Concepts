
// With call(), an object can use a method belonging to another object.

const venture = {
    fullName: function() {
      return this.Name + " was created in " + this.year + ".";
    }
}

const venture1 = {
    Name:"John Labs",
    year: "2006"
}

const venture2 = {
    Name:"Emmet Foods",
    lastName: "2010"
}

const func = venture.fullName.call(venture1);
console.log(func)        // Output: John Labs was created in 2006.