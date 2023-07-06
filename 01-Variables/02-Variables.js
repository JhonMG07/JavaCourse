/* 
Ejemplos de tipos de datos
en JavaScript
*/
var nombre = "Daniel";
console.log(nombre);
console.log(typeof nombre);

nombre = 10.5;
console.log(nombre);
console.log(typeof nombre);

var numero = 1000;
console.log(numero);
console.log(typeof numero);

var objeto = {
    nombre: "Daniel",
    apellido: "Aimacaña",
    telefono: "0999999999"
};
console.log(objeto);
console.log(typeof objeto);

var bandera = true;
console.log(bandera);
console.log(typeof bandera);

// Tipo de dato function
function miFuncion() {}
console.log(miFuncion);
console.log(typeof miFuncion);

// Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

// Tipo clase es una funcion
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
};
console.log(Persona);
console.log(typeof Persona);

// Tipo undefined
var x;
console.log(x);
console.log(typeof x);
x = undefined;
console.log(x);
console.log(typeof x);

// null = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

// Arreglos
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

// Valores vacios
var z = '';
console.log(z);
console.log(typeof z);

// Buena practica
let nombre1;
nombre1 = 'Daniel';
console.log(nombre1);

const apellido1 = 'Aimacaña';
console.log(apellido);

let x1, y1;
x1 = 10, y1 = 20;
let z1 = x1 + y1;
console.log(z1);

let $1a;
let _a;
let a1da;

