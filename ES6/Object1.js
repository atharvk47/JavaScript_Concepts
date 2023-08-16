
// This file depicts the datatype: Objects

// Objects are variables or datatypes that can contain many properties.
// Every property is in the form of key-value pair as in the case of dictionaries in python.

// Syntax:
// Object_Name = {
//  property_name : value,
//  .,.,. (Other key-value pairs)
//  };

// A property can be a variable or a function. An example is given below:

const venture = {
    name: "John Drinks",
    age: 4,
    est_year: 2019,
    work: function(){
        console.log("John Drinks is a brand which creates the finest beverages.")
    }
    
};

// A property of the object can be accessed using as follows:

console.log(venture.name);            // Object_Name.property
venture.work()                        // Object_Name.function_name