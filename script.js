"use strict";

const Osoba = function (ime, datumRodjenja) {
  // Instance properties
  this.ime = ime;
  this.datumRodjenja = datumRodjenja;

  // NIKAD NE RADI OVO - KREIRANJE METODE U CONSTRUCTION funkciji (Osoba funkcija)
  this.calcAge = function () {
    console.log(2022 - this.datumRodjenja);
  };
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

console.log(zorica instanceof Osoba); // provera da li je object zorica instance od Osoba
