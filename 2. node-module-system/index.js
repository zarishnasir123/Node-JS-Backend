/// module.exports--> export

//require -->import


const firstModule = require('./first-module.js');

console.log(firstModule.add(10,20));

try {
    console.log("Trying to divide by 0");
    let result = firstModule.divide(0,10);
    console.log("Result of division:",result);
} catch (error) {
    console.log("Caught an error", error.message);
}

// module wrapper function
(
function (exports, require, module, __filename, __dirname){
    // your module code will be wrapped in this function by node js
}
)