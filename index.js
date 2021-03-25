const { createFile } = require('./helpers/multiply.js')
const colors = require("colors"); 
const argv = require('./config/yargs.js')

console.clear();

createFile(argv.b, argv.l, argv.h)
    .then(nameFile => console.log(nameFile.green, "created"))
    .catch(err => console.log(err)); 