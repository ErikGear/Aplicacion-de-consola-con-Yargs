const fs = require("fs");
const colors = require("colors");

//cuando colocamos el async, estamos tranformanod la función para que regrese una promesa
//dentro del código con async podemo emplear la palabra await
//

/*
const crearArchivo = async (base = 5) => {
  try {
    console.clear();
    console.log("====================");
    console.log(`Tabla del ${base}`);
    console.log("====================");

    let salida = "";

    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `tabla-${base}.txt creado exitosamente`;
  } catch (error) {
    throw error;
  }
};

*/

const crearArchivo = async (base, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";

    if (listar) {
      console.clear();
      console.log("====================".green);
      console.log(`Tabla del ${base}`.bgBlue);
      console.log("====================".green);
      console.log(salida);
    }

    if (hasta) {
      for (let i = 1; i <= hasta; i++) {
        consola += `${base} ${"x".yellow} ${i} = ${base * i}\n`;
        salida += `${base} x ${i} = ${base * i}\n`;
      }
      console.log(consola);
      fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
      return `tabla-${base}.txt`;
    }

    for (let i = 1; i <= 10; i++) {
      consola += `${base} ${"x".yellow} ${i} = ${base * i}\n`;
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    console.log(consola);

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw `Error no fue posible crear el archivo tabla-${base}.txt`.red;
  }
};

//module -> es un objeto global que existe en node
module.exports = {
  crearArchivo
};
