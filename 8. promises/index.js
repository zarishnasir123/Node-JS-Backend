function delayFn(time) {
    return new Promise((resolve)=>setTimeout(resolve, time))
}

console.log("Promise lecture starts");

delayFn(2000).then(()=>{
    console.log("Promise resolved after 2 seconds");
    console.log("end");
})

function divide(num1, num2) {
    return new Promise((resolve, reject)=>{
        if(num2==0){
            reject("Cannot divide by zero");
        }
        else{
            resolve(num1/num2);
        }
    })
    
}
divide(10,5)
.then((result)=> console.log("result", result))
.catch((error)=> console.log("error", error));

divide(10,0)
.then((result)=> console.log("result", result))
.catch((error)=> console.log("error", error));
