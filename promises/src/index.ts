const example1FulfilledPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve("1")},1000)
})
const example2FulfilledPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve(2)},1000)
})
const example3FulfilledPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {reject(3)},1000)
})

async function main() {
    // This is an example for not parallel work
    // const value1 = await example1FulfilledPromise()
    // const value2 = await example2FulfilledPromise()
    // const value3 = await example3FulfilledPromise()
    // console.log(value1, value2, value3)

    const [value1, value2, value3] = await Promise.all([
        example1FulfilledPromise(), 
        example2FulfilledPromise(), 
        example3FulfilledPromise()]).catch(e=>{
            console.log("one of them failed")
            throw e;
        })
    console.log("parallel", value1, value2, value3)
}

main()

function PromiseAll(promisesArray: Promise<any>){
    return new Promise((resolve, reject) =>{
        
    })
}


// const exampleRejectedPromise = new Promise((resolve, reject) => {
//     reject("I failed")
// })

// example1FulfilledPromise.then((value) => {
//     console.log("then",value)
// }).catch((e) => {
//     console.error("Shouldn't get to here1", e)
// })

// exampleRejectedPromise.then((value) => {
//     console.log("Shouldn't get here 2", value)
// }).catch(e => {
//     console.error("Rejected with", e)
// })