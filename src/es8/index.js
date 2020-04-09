//es8 junio 2017

//Ejemplo 1
const data = {
    fronted: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}
const entries = Object.entries(data);
const keys = Object.keys(data);
const values = Object.values(data);
console.log(keys);
console.log(entries);
console.log(values);
console.log(values.length);

//Ejemplo 2: padStart, padEnd
const string = 'hello';
console.log(string.padStart(11, 'hi'));
console.log(string.padEnd(12, '-----'));


//Ejemplo 3: Aync Await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello Wolrd'), 3000)
            : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}
helloAsync();


const anotherFucntion = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);        
    } catch (error) {
        console.log(error);
    }
};

anotherFucntion();

//Ejemplo 4: Async Await
const delay = () => {
    return new Promise(
        resolve => setTimeout(resolve, 1000)
    )
};
const counter = async() => {
    await delay();
    console.log('one second')
    await delay();
    console.log('two seconds')
    await delay();
    console.log('three seconds')
    await delay();
    console.log('four seconds')
    await delay();
    console.log('five seconds')
};
counter();