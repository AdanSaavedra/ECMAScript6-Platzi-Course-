function newFunction(name,age,country){
    var name = name || 'adan';
    var age = age || 21;
    var country = country || 'PTY';
    console.log(name,age,country);
}

//es6

function newFunction2(name = 'oscar', age='21', country = "PTY"){
    console.log(name,age,country);
}

newFunction2();
newFunction2('Ricardo', '23','CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' '+world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Hola que tal estas. aqui estudiando. Mañana es sabado \n"
+ "otra frase epica que necesitamos."

//es6
let lorem2= `otra frase epica que necesitamos
ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);

let person={
    'name': 'Adan',
    'age': 21,
    'country': 'PTY'
}

console.log(person.name,person.age);
//es6
let{name,age}=person;
console.log(name,age);

let team1=['oscar','julian','ricardo'];
let team2=['valeria','jesica','camila'];

let education = ['david', ...team1,...team2];

console.log(education);

{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global let';
    console.log(globalLet);
}

console.log(globalVar);

var a ='b';
a = 'a';
console.log(a);

let name1 = 'adan';
let age1 = 21;

//es5
obj = { name: name1, age: age1};
//es6
obj2 = {name1, age1};
console.log(obj2);

const names = [
    {name: 'Adan', age: 21},
    {name: 'yes', age: 23}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
});

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country)=>{

}

const listOfNames4 = name =>{

}

const square = num => num * num;

const helloPromise = ()=>{
    return new Promise((resolve,reject)=>{
        if(false){
            resolve('Hey!')
        }else{
            reject('ups!!');
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error=>console.log(error));

    class calculator {
        constructor(){
            this.valueA = 0;
            this.valueB = 0;
        }
        sum(valueA,valueB){
            this.valueA=valueA;
            this.valueB=valueB;
            return this.valueA+this.valueB;
        }
    }

    const calc =new calculator();
    console.log(calc.sum(2,2));

    import { hello } from './module.js';

    hello();


    function* helloWorld(){
        if(true){
            yield 'Hello, ';
        }
        if(true){
            yield 'World';
        }
    };

    const generetorHello = helloWorld();
    console.log(generetorHello.next().value);
    console.log(generetorHello.next().value);
    console.log(generetorHello.next().value);

    