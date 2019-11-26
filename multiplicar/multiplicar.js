//required
const fs = require('fs');
const color = require('colors');

let listarTabla = async(pbase, plimite) => {

    let data = '';

    for (let i = 1; i <= plimite; i++) {

        // console.log(base * i);
        data += `${pbase} * ${i} = ${pbase * i}\n`;

    }

    return data

}


let generaTablasMultiplicar = async(ptope) => {

    let data = '';

    for (let m = 1; m <= ptope; m++) {

        data = '';

        for (let i = 1; i <= 10; i++) {

            // console.log(base * i);
            data += `${m} * ${i} = ${m * i}\n`;

        }

        fs.writeFile(`tablas/tabla-${m}.txt`, data, (err) => {
            if (err) throw err;

        });

    }

    return color.blue(`arcivos creados con exito!`);

}

module.exports = {
    generaTablasMultiplicar,
    listarTabla
}