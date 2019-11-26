const argv = require('./config/yargs').argv;

// const multiplicar  = require('./multiplicar/multiplicar');
//destructuracion para obtener solo el metodo que se desea importar
const { generaTablasMultiplicar, listarTabla } = require('./multiplicar/multiplicar');


// console.log(argv.base);
let options = {
    crear: 'crear',
    listar: 'listar'
}

let comando = argv._[0];

switch (comando) {
    case options.crear:
        generaTablasMultiplicar(argv.limite).then(msj => console.log(msj));
        break;
    case options.listar:
        listarTabla(argv.base, argv.limite).then(tabla => console.log(tabla));
        break;

    default:
        console.log('lo que sea');
        break;
}