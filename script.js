"use strict";

/*
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

// PROTOTYPES
console.log(Osoba.prototype);

Osoba.prototype.calcAge = function () {
  console.log(2022 - this.datumRodjenja);
};

zorica.calcAge();
zoran.calcAge();
uros.calcAge();

console.log(uros.__proto__); // __proto__ property nastaje u trecem koraku pozivanja funkcije new
console.log(uros.__proto__ === Osoba.prototype); //prototype uros-a je isti kao i prototype Osoba-e constructor objekta

Osoba.prototype.vrsta = "Homo Sapiens";
console.log(uros.vrsta, zoran.vrsta);

console.log(zoran.hasOwnProperty("ime"));
console.log(zoran.hasOwnProperty("vrsta"));

const arr = [3, 4, 7, 3, 9, 9, 5]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
*/

// ES6 CLASSES

// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }
}

const milica = new PersonCl("Milica", 1996);
console.log(milica);
milica.calcAge();

console.log(milica.__proto__ === PersonCl.prototype); // provera da li je prototype milice isto sto i prototype PersonCl
