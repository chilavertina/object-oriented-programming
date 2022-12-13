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
