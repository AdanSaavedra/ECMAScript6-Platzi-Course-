const obj = {
    name: 'Adan',
    age: 21,
    country: 'PTY'
};

let {country, ...all }= obj;
console.log( all);

const obj1 ={
    nme : 'Adan',
    age: 21
}

const obj2 = {
    ...obj1,
    country: 'PTY'
}

console.log(obj2);


const helloWorld = ()=>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=> resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=> console.log('Finalizo'))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2022-05-30');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year,month,day);