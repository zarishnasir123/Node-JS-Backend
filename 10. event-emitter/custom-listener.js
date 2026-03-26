const eventEmitter = require('events');

class MyCustomEmitter extends eventEmitter{
    constructor(){
        super();
        this.greeting = 'Hello';
    }

    greet(name){
        this.emit('greet', `${this.greeting} ${name}`);
    }
}

const myCustomEmitter = new MyCustomEmitter();

// register a listener
myCustomEmitter.on('greet', (message)=>{
    console.log(message);
});

myCustomEmitter.greet('Zarish'); // Hello Zarish



// 🔹 Key Points
// on(event, callback) → listener register karta hai
// emit(event, args) → event trigger karta hai aur listeners ko args pass karta hai
// Class extend karne se hum custom events + properties bana sakte hain
// super() → parent EventEmitter initialize karne ke liye zaroori hai