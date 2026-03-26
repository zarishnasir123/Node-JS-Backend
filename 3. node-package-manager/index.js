const loadash = require('lodash');

const names = ['alice', 'bob', 'charlie', 'david', 'eve'];
const capitalize = loadash.map(names, name => loadash.capitalize(name));
console.log(capitalize);

const shuffledNames = loadash.shuffle(names);
console.log(shuffledNames);