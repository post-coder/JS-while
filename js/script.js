// creo un array di 10 numeri casuali, da 1 a 20, tutti diversi tra loro.

const numeriCasuali = [];

// for (let i = 0; i < 10; i++) {

//   let newNumber = Math.floor(Math.random() * 20 + 1)
  
  
//   console.log(numeriCasuali, newNumber)

  
//   if(!numeriCasuali.includes(newNumber)) {
//     numeriCasuali.push(newNumber);
//   }
  
// }

// console.log(numeriCasuali);

// let contatore = 0;

// while (numeriCasuali.length < 20) {

//   let newNumber = Math.floor(Math.random() * 20 + 1)
  
//   console.log(numeriCasuali, newNumber)

//   if(!numeriCasuali.includes(newNumber)) {
//     numeriCasuali.push(newNumber);
//   }

//   contatore++;
// }

// console.log("Array finale: ", numeriCasuali);
// console.log("ci ha provato " + contatore + " volte")


// fai inserire un numero all'utente, mostragli il quadrato del numero
let numeroUtente = prompt("Inserisci un numero maggiore di zero");

while ( isNaN(numeroUtente) || numeroUtente == "" || numeroUtente == 0 || numeroUtente == null) {
  
  numeroUtente = prompt("Inserire un numero maggiore di zero");
  
}

// versione do-while
// let numeroUtente
// do {
  
//   numeroUtente = prompt("Inserire un numero maggiore di zero");
  
// } while ( isNaN(numeroUtente) || numeroUtente == "" || numeroUtente == 0 || numeroUtente == null);

let quadratoNumero = numeroUtente * numeroUtente;

console.log(`Il quadrato di ${numeroUtente} è ${quadratoNumero}`);