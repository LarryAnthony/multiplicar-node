const fs = require('fs');
let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`)
            return
        }

        let data = ''

        for (let i = 0; i <= 10; i++) {
            data += `${base}*${i}=${i * base}\n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`The file in base ${base} has been saved!`);
        });
    })
}

module.exports = {
    crearArchivo
}