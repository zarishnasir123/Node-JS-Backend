// 🔹 Key Points (Async/Await Samajhne ke liye)
// async → function ko Promise-returning function banata hai
// await → Promise ke resolve hone tak wait karta hai
// Async function ke andar ka code top-to-bottom readable hota hai
// Event loop freeze nahi hota → dusre JS tasks run kar sakte hain



function delayFn(time) {
    return new Promise((resolve)=> setTimeout(resolve, time)); 
}

async function delayedGreet(name) {
    await delayFn(2000)
    console.log(`Hello, ${name}!`)
}

delayedGreet("zarish");

// Call delayedGreet("zarish")
//         ↓
// await delayFn(2000) → pause execution
//         ↓
// (2 sec wait)
//         ↓
// Promise resolved
//         ↓
// console.log("Hello, zarish!") → printed


async function division(num1, num2) {
    try {
        if(num2===0) throw new Error("cannot divide by zero");
        return num1/num2;
    } catch (error) {
        console.log("error", error)
    }
    
}

async function performDivision(num1, num2) {
    const result = await division(num1, num2);
    console.log("result", result)
}
performDivision(10, 2);


// 🔹 Key Points
// async function = always Promise return karta hai
// await = Promise ke resolve hone tak wait
// try/catch = error handling for async code
// return inside async = Promise.resolve(value)

// Call performDivision(10,2)
//         ↓
// await division(10,2) → pause
//         ↓
// division function runs
//         ↓
// return 5 (Promise resolved)
//         ↓
// await resolves → result = 5
//         ↓
// console.log("result", 5) → printed



// 🔹 Summary in Words
// Callbacks → Old school, direct function passing, messy with nesting.
// Promises → Better, chaining possible, avoids pyramid of doom.
// Async/Await → Modern, readable, synchronous-like flow, best for complex async code.