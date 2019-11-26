const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 5,
            demand: true
        }
    })
    .command('crear', 'Genera archivos con tablas de multiplicar hasta el limite deseado', {
        limite: {
            alias: 'l',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}