const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("Data folder created");
}

const filePath = path.join(dataFolder, 'example.txt');
//synchronous way to write to a file
fs.writeFileSync(filePath, 'Hello, this is an example file.');
console.log("File created successfully");

const ReadContentFromFile = fs.readFileSync(filePath, 'utf-8');
console.log("File Content: ", ReadContentFromFile);

//append another line in examplefile.txt
fs.appendFileSync(filePath, '\nThis line is appended to the file.');
console.log("Line appended successfully");

//async way of creating the file
const asyncFilePath = path.join(dataFolder, 'asyncExample.txt');
fs.writeFile(asyncFilePath, "Hello Async Node.js!", (err)=>{
    if(err){
        throw err;
    }
    console.log("Async file created successfully");

    fs.readFile(asyncFilePath, 'utf-8', (err, data)=>{
        if(err){
            throw err;
        }
        console.log("Async File Content: ", data);

        fs.appendFile(asyncFilePath, "\nthis line is added which is new(async)", (err)=>{
            if(err){
                throw err;
            }
            console.log("Async line appended successfully");

            fs.readFile(asyncFilePath, 'utf-8', (err, data)=>{
                if(err){
                    throw err;
                }   
                console.log("Updated Async File Content: ", data);
            });
        });
    });
});