"use strict";

const Osoba = function (ime, datumRodjenja) {
  this.ime = ime;
  this.datumRodjenja = datumRodjenja;
};

const uros = new Osoba("Uros", 1993);
console.log(uros);

// Sta se desava kada se pozove  funkcija uz pomoc 'new'
// 1. Kreira se novi prazan object
// 2. funkcija se poziva, a 'this' se povezuje sa novokreiranim praznim objektom
// 3. novokreirani object je povezan sa prototype
// 4. funkcija automatski 'return' prazan objekat sa pocetka

const zorica = new Osoba("Zorica", 1966);
const zoran = new Osoba("Zoran", 1965);

console.log(zorica);
console.log(zoran);
