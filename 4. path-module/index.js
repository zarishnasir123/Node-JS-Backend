const path = require('path');
console.log("Directory name: ", path.dirname(__filename));
console.log("File name: ", path.basename(__filename));
console.log("File extention: ", path.extname(__filename));

const joinPath = path.join('/users', 'documents', 'node', 'projects');
console.log("Joined Path", joinPath);

const resolvePath = path.resolve('users', 'documents', 'node', 'projects');
console.log("Resolved Path", resolvePath);

const normalizePath = path.normalize('/users//documents/node/../projects');
console.log("Normalized Path", normalizePath);