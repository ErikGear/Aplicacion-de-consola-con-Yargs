const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();



//argumentos que vienen de la cosola
//console.log(process.argv);

console.log(argv);
console.log('base: yargs', argv.base);

/*
Devuelve un arreglo con lo siguiente:
- 1. El Path donde se encuentra instalada nuestra aplicación de node
- 2. Es donde se encuentra ejecutandose la aplicación de node en la que estamos trabajando
*/

//deestructurando el arreglo con los argumentos de la consola
//const [ , ,arg3 = "base=5" ] = process.argv;
//const [, base = 5] = arg3.split('='); 
//console.log(base);



//const base = 6;

crearArchivo( argv.b, argv.l, argv.h)
.then( nombreArchivo => console.log(`El archivo ${nombreArchivo.rainbow} se ha creado exitosamente`))
.catch( error => console.log(error));



//esto crea un archivo con la extensión txt, en este caso
/*
fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
    if (err) {
        throw err;
    }

    console.log(`Archivo tabla-${base}.txt creado exitosamente`);
});
*/



