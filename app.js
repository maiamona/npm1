// // const mod1 = require('./mod1').falaNome();

// const {nome, sobrenome, falaNome} = require('./mod1');

// // console.log(mod1);
// // console.log(mod1.falaNome());
// console.log(falaNome());

const path = require('path');
const {Pessoa} = require('./mod1');

const p1 = new Pessoa('Lucinda');

console.log(p1);