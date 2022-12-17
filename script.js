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
/*
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

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const milica = new PersonCl("Milica", 1996);
console.log(milica);
milica.calcAge();

console.log(milica.__proto__ === PersonCl.prototype); // provera da li je prototype milice isto sto i prototype PersonCl

// dodavanje metode izvan klase
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
milica.greet();
*/
/*
// SET and GET
const account = {
  owner: "Marko",
  movements: [120, 300, 420, 400, 640],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name; // ovde dodajemo _ fullName-u kako bismo izbegli da property setter-a bude isti kao property constructor-a
    else alert(`${name} is not a full name!!!`);
  }

  // set propertija koji vec postoji
  get fullName() {
    return this._fullName;
  }
}

const milica = new PersonCl("Milica Mitrovic", 1996);
console.log(milica.age);
console.log(milica);

const walter = new PersonCl("Walter", 1976);
*/
/*
// Static metode - vezuju se za constructor funkcije
const Osoba = function (ime, datumRodjenja) {
  this.ime = ime;
  this.datumRodjenja = datumRodjenja;
};

const uros = new Osoba("Uros", 1993);

Osoba.pozdrav = function () {
  console.log("Pozdrav 🖐");
  console.log(this); // this ukazuje na celu constructor funkciju
};

Osoba.pozdrav();

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance metode
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!!!`);
  }

  // set propertija koji vec postoji
  get fullName() {
    return this._fullName;
  }

  // Static metoda
  static pozdrav() {
    console.log("Pozdrav 🖐");
    console.log(this); // this ukazuje na celu klasu
  }
}

const milica = new PersonCl("Milica Mitrovic", 1996);

PersonCl.pozdrav();
*/

/*
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); // dodeljuje se prototip steven-a PersonProto-u
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto); // steven prototip je isti kao prototip PersonProto-a

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();
*/

// INHERITANCE izmedju KLASA: CONSTRUCTOR FUNCTIONS
const Osoba = function (ime, datumRodjenja) {
  this.ime = ime;
  this.datumRodjenja = datumRodjenja;
};

Osoba.prototype.calcAge = function () {
  console.log(2022 - this.datumRodjenja);
};

const Student = function (ime, datumRodjenja, kurs) {
  this.ime = ime;
  this.datumRodjenja = datumRodjenja;
  this.kurs = kurs;
};

Student.prototype.predstavljanje = function () {
  console.log(`Moje ime je ${this.ime} i ja pohadjam ${this.kurs}.`);
};

const uros = new Student("Uros", 1993, "Javascript");
uros.predstavljanje();
