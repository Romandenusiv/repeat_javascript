// замикання це момент коли функція має доступ до перемінних із вище зазначеного scop-а

// function sayHelloTo(name) {
//     const message = 'Hello ' + name

//     return function() {
//         console.log(message);
//     }
// }

// const helloToBob = sayHelloTo("Bob");
// const helloToElen = sayHelloTo('Elen')
// console.log(helloToBob())
// helloToElen()


// замикання з циклом фор

function createFrameworkManeger() {
    const fw = ['Angular', 'React']

    return {
        print: function() {
            console.log(fw.join(' '))
        },
        add: function(framework) { 
            fw.push(framework)
        }
    }
}

// const manager = createFrameworkManeger()

// // console.log(manager)
// // console.log(fw);

// manager.print();
// manager.add('VueJS')
// manager.print()


//setTimeout 

const fib = [1,2,3,5,8,13] 

for (let i = 0;i < fib.length; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(`fib[${i}] = ${fib[i]}`)
        }, 1500) 
    })(i)
}