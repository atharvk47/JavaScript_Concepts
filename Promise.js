// Synchronous Functions
// As the name suggests synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. 
// So, basically a statement has to wait for the earlier statement to get executed.

// Asynchronous Functions
// Asynchronous code allows the program to be executed immediately where the synchronous code will block further execution of 
// the remaining code until it finishes the current one. This may not look like a big problem but when you see it in a bigger picture
// you realize that it may lead to delaying the User Interface.

// Example of synchronous functions

console.log(" Hi! I am a fool.");
console.log(" This statement will be exceuted synchronously.");
console.log(" I am being called after the word 'synchronously'.");

// Example of Asynchronous Functions
console.log(" Call one!")
console.log(" Call two!")
console.log(" Call three!")
setTimeout(()=>{

    console.log(" Call four! is delayed.")

}, 5000);


console.log(" Call five!")


// A Promise is a proxy for a value not necessarily known when the promise is created. 

// It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. 
// This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, 
// the asynchronous method returns a promise to supply the value at some point in the future.

// Every promise statement has two entities within it.
// By convention, one is resolve: the entity executed when a promise is successful.
// The second one, is reject: the entity executed when a promise is unsuccessful.

// E.g:

let Stocks = {
    fruits : ["apple", "mango", "orange"],
    liquid: ["water","ice"]
};

let is_shop_open = true;

let order = (time, work) => {

    return new Promise((resolve, reject) => {
       
        if(is_shop_open){

            setTimeout(()=> {
                resolve(work())
            }, time);
        
        } else {

            reject(console.log("Our shop is closed."))
        
        }
    })
}

order(5000, () => {
    console.log(`${Stocks.fruits[0]} has been selected.`)
})
.then(()=> {
    return order(0, () => {
        console.log("Production is started.")
    })
})
.then(() => {
    return order(2000, ()=> {
        console.log("Fruit is chopped.")
    })
})
.then(() => {
    return order(2000, () => {
    console.log(`${Stocks.liquid[0]} and ${Stocks.liquid[1]} has been added.`)
    })
})
.then(() => {
    return order(2000, ()=> {
        console.log("The machine is started and ice is being made.")

    })
})
.then(()=> {
    return order(2000, ()=> {
        console.log("Ice cream is completed and ready to serve.")
    })
})
.then(()=> {
    return order(2000, ()=> {
        console.log("Ice cream is served.")
    })
})
.catch(() => {
    console.log("Customer left!")
})
.finally(() => {
    console.log("Day ends.")
})