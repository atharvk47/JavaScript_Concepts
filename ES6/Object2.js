
// This file displays some more things about the objects.

const venture = {
    name: "John Drinks",
    age: 4,
    est_year: 2019,
    work: function(){
        console.log("John Drinks is a brand which creates the finest beverages.")
    }
    
};

// A property can be reassigned to some values in following ways:

// 1)

 venture.age = 9;
 console.log(venture.age);           // Output: 9
 venture['est_year'] = 2020;
 console.log(venture['est_year'])    // Output: 2020

// 2)

 const number = 'age';
 venture[number.value] = 9;
 console.log(venture['age']);        // Output: 9

// Bracket notation or dot notation does not really matter in accessing and initialized to objects.

// A function as a property can also be written in following way:
// const venture = {
//  work(){
//      
//   }


