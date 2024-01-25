"use string";
// monto = prompt("cuanta plata hay");
// const listaDeHelados = [5, 10, 15, 20, 25];
// const listaDeTipos = ["vainilla", "limon", "chocolate", "arequipe", "naranja"];
// let heladoMasCaro;
// for (let index = 0; index < listaDeHelados.length; index++) {
//   console.log(index);
//   console.log("for works");
//   if (listaDeHelados[index] > monto) {
//     heladoMasCaro = " de " + listaDeTipos[index - 1];
//     index = listaDeHelados.length;
//   }
//   if (listaDeHelados[index] == monto) {
//     heladoMasCaro = " de " + listaDeTipos[index];
//     index = listaDeHelados.length;
//   }
// }
// if (heladoMasCaro === undefined) {
//   heladoMasCaro = listaDeTipos[4];
// }
// document.write("El helado mas caro es " + heladoMasCaro);

// monto = prompt("cuanta plata hay");
// const precioVoleto = 10;
// document.write(
//   "puedes comprar " +
//     parseInt(monto / precioVoleto) +
//     "y te sobra " +
//     (monto % precioVoleto)
// );

let primerInvitado = false;
const validarEntrada = (hora) => {
  let edad = prompt("cuantos años tienes");
  if (edad >= 18) {
    if (hora == 2 && primerInvitado == false) {
      document.write("puedes entrar gratis");
      primerInvitado = true;
    } else {
      document.write("puedes entar pero tienes que pagar");
    }
  } else {
    document.write("No puedes pasar");
  }
};
validarEntrada(2);
