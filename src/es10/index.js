//es10

// Ejemplo 1 : valor de la profundidad array.flat
let array = [1,2,3, [1,2,3, [1,2,3,]]];
console.log(array.flat());
console.log(array.flat(2));

//Ejemplo 2 : flat.map
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

//Ejemplo 3: Eliminar espacios
let hello = '               hello world';
console.log(hello);
console.log(hello.trimStart());


let hello2 = 'hello world           ';
console.log(hello);
console.log(hello2.trimEnd());

//Ejemplo 4: Catch antes

try {

}catch(error) {
    error
}
//ahora
try {

}catch {
    error
}

//Ejemplo 5: 
// Object.fromEntries() lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(), y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));


//Ejemplo 6: Ver que elemtos se encuentran en este Symbol
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);
