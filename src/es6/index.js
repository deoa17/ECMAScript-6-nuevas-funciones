//Ejemplo 1: es5
function newFunction (name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = || 'MX';
    console.log(name, age, country);
}

//Ejemplo 1: es6
function newFunction2 (name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
};
newFunction2();
newFunction2('Ricardo', '23', 'CO');

//Ejemplo 2: es5
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//Ejemplo 2: es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Ejemplo 3: es5
let lorem = "Hola, Como estas? \n" + "Bien gracias";
console.log(lorem);

//Ejemplo 3: es6
let lorem2 = `Hola, Como estas? 
Bien gracias`;
console.log(lorem2);

//Ejemplo 4: es5
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.age, person.country);

//Ejemplo 4: es6
let {name, age, country} = person;
console.log(name, age, country);

//Ejemplo 5: es5
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
let education = ["David", 'Oscar', 'Julian', 'Ricardo', 'Valeria', 'Yesica', 'Camila'];
console.log(education);

//Ejemplo 5: es6
let education2 = ["David", ...team1, ...team2];
console.log(education2);

//Ejemplo 6: Var GLobal y Let solo dentro del bloque
{
    var globalVar = "Global Var";
}
{
    let globalLet = "Global Let";
    console.log(globalLet);
}
console.log(globalVar);

//Ejemplo 7: const no se puede reasignar su valor
const a = 'b';
a = 'a'
console.log(a);

//Ejemplo 8
let name = 'Daniel';
let age = 31;

//es5
obj = {name: name, age: age};
console.log(obj);

//es6
obj2 = {name, age};
console.log(obj2);

//Ejemplo 9 Arroy function
const names = [
    {name: 'Daniel', age: 32},
    {name: 'Oscar', age: 27}
]
//es5
let listOfNames = names.map(function (item) {
    console.log(item.name);
})
//es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num;

//ejemplo 10: Promesas es6
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false){
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

//Ejemplo 11: Clases
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//Ejemplo 11: MOdulos (Import y export)
// import hello from './module'
// hello();

const hello = require('./module')
console.log(hello());


//Ejemplo 12: Generator
function* helloWorld() {
    if(true) {
        yield 'Hello, ';
    }
    if(true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


function* fibonacci() {
    var fn1 = 1;
    var fn2 = 1;
    while (true){  
      var actual = fn2;
      fn2 = fn1;
      fn1 = fn1 + actual;
      var reset = yield actual;
      if (reset){
          fn1 = 1;
          fn2 = 1;
      }
    }
  }
  
  var secuencia = fibonacci();
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3
  console.log(secuencia.next().value);     // 5
  console.log(secuencia.next().value);     // 8
  console.log(secuencia.next().value);     // 13
  console.log(secuencia.next(true).value); // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3