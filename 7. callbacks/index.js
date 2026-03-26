const fs = require('fs');

function person(name, callbackFn) {
  console.log(`Name is ${name}`);
  callbackFn();
}

function address() {
  console.log("Pakistan");
}

person("Zarish", address);

fs.readFile('input.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log("error reading file", err);
        return;
    }

    else{
        console.log("File data is", data);
    }
})
