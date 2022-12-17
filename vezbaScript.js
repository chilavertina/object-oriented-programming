"use strict";

const Tenk = function (model, godinaProizvodnje, kalibar) {
  this.model = model;
  this.godinaProizvodnje = godinaProizvodnje;
  this.kalibar = kalibar;
};

const m84 = new Tenk("M-84", 1985, "125 mm");
const t55 = new Tenk("T-55", 1955, "100 mm");
const t72 = new Tenk("T-72", 1972, "125 mm");
const t34 = new Tenk("T-34", 1941, "85 mm");

console.log(m84);
console.log(t34);
/*
// CODING CHALLENGE 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 160);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
mercedes.accelerate();

bmw.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();
*/
// CODING CHALLENGE 2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);

console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
