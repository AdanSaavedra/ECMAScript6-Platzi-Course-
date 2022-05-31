let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

let arrays = [1,2,3,4,5];

console.log(arrays.flatMap(value =>[value,value*2]));

let hello= '          hello world';
console.log(hello);
console.log(hello.trimStart());

let hellos = 'hello world       ';
console.log(hellos);
console.log(hellos.trimEnd());

try {
    
} catch {
    error
}


let entries = [["name", "Adan"],["age", 21]];
console.log(Object.fromEntries(entries));

let mySymbl = `My Symbol`;
let symbol =Symbol(mySymbl);
console.log(symbol.description);