const argv = require("yargs")
                .options({
                    "b": {
                        alias: "base",
                        type: "number",
                        demandOption: true,
                        describe: "Es la base de la tabla de multiplicar"
                    },
                    "l":{
                        alias: "listar",
                        type:"boolean",
                        default: false, 
                        describe: "muestra la tabla en consola"
                    },
                    "h":{
                        alias: "hasta",
                        type: "number",
                        demandOption: true,
                        describe: "Hasta donde vamos a multiplicar "
                    }
                })
                .check((argv, options) => {
                    if( isNaN(argv.b && argv.h)){
                        throw "La base y el hasta tienen que ser un numero"
                    }
                    return true
                }) 
                .argv;

module.exports = argv;