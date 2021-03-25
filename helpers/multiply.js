const fs = require('fs');
const colors = require("colors"); 

const createFile = async (base, listar, hasta) => {

    try {
            
        let salida = "";
        let consola = "";
    
        for(let i = 1; i <= hasta; i++){ 
            salida += (`${base} x ${i} = ${base * i}\n`);
            consola += (`${base} ${"x".blue} ${i} = ${base * i}\n`); 
        }
        
        if (listar){
            console.log("===============".rainbow);
            console.log(`  TABLA DEL`, colors.red(base));
            console.log("===============".rainbow);
            console.log(consola);
        }  

        fs.writeFileSync(`./salida/tabla-${base}x${hasta}.txt`, salida)
    
        return `tabla-${base}x${hasta}.txt`;

    } catch (error) {

        throw error
    
    }
    
}

module.exports = {
    createFile
}