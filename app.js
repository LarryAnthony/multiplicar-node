const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv

const { crearArchivo } = require('./multiplicar/multiplicar')

let comando = argv._[0]

switch (comando) {
    case 'listar':
        console.log('Listar')
        break
    case 'crear':
        crearArchivo(argv.base)
            .then((archivo) => console.log(`Archivo creado: ${archivo}`))
            .catch((e) => console.log(e))
        break
    default:
        console.log('No se encontró comando')
}

// let argumentos = process.argv

// console.log('Límite', argv.limite)



// let base = argumentos[2].split('=')[1]
// console.log(base)

// crearArchivo(base)
//     .then((archivo) => console.log(`Archivo creado: ${archivo}`))
//     .catch((e) => console.log(e))