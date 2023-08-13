let stocks = {
    fruits: ["Strawberry", "Grapes","Apple"],
    liquid: ["Water","Ice"]
};

let is_shop_open = true;

function time(ms) {
    return new Promise((resolve,reject) => {
        if(is_shop_open){
            setTimeout(resolve, ms);
        }else{
            reject(console.log("Shop is closed."))
        }
    })
}

async function kitchen () {
    try{
       await time(2000)
       console.log(`${stocks.fruits[1]} has been selected.`)

       await time(0)
       console.log("Production begins.")

       await time(2000)
       console.log("Fruit has been chopped.")

       await time(2000)
       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added.`)

       await time(2000)
       console.log("The machine is started.")
    
       await time(2000)
       console.log("The ice cream is completed.")
    }catch(error){
       console.log("Customer left.")
    }finally{
       console.log("Day ends.")
    }
}

kitchen()