// Callback functions
// A callback is a function passed as an argument to another function.

let Stocks = {
    fruits : ["apple", "mango", "orange"],
    liquid: ["water","ice"]
};

let order = (fruit_call,production_call) => {
    setTimeout(()=> {
        console.log(`${Stocks.fruits[fruit_call]} has been selected.`)
        
        production_call(2);              
    }, 2000)
}

let production = (number) => {
    setTimeout(()=> {
        
        console.log("Starting Production!");
        console.log("Step " + number + " in process.")
        console.log("Step " + number + " completed.")
        
        setTimeout(() => {
            console.log(`${Stocks.liquid[0]} and ${Stocks.liquid[1]} has been added.`)


            setTimeout(()=> {
                console.log("Machine is started and ice cream is being made.")


                setTimeout(() => {
                    console.log("Ice cream is done.")
                }, 2000)
            }, 2000)


        },2000)
    },2000)
}

order(0,production);
// The above one sided mountainous slope formed due to nested timeout functions is what we call as callback hell.
