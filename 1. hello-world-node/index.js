console.log("hello node js");

const array = [1,2,3,4]

console.log(array, 'array');

setTimeout(() => {
    console.log("This message is delayed by 2s");
}, 2000);

console.log("this is the last line of the sync code");