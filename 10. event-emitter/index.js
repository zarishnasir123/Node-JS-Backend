const eventEmitter = require('events');

const emitter = new EventEmitter();

// register a listener

myFirstEmitter.on('greet', (name)=>{
    console.log(`hello ${name}`);
})

myFirstEmitter.emit('greet', 'zarish'); // hello zarish


