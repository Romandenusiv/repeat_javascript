// const person = {
//     surname: 'Фудживара',
//     knows: function(what, model) {
//         console.log(`Tы ${what} знаешь, ${model} ${this.surname}`)
//     }
// }

// const bunta = { surname: 'Buntа'}

// person.knows('не', 'про полный привод')
// person.knows.call(bunta, 'все', 'Fujiwara')


function Person(name, age) {
    this.name = name
    this.age = age

    console.log(this)
}


const elena = new Person('Elena', 20)


const obj = {num: 42}
logThis.apply(obj)
logThis.call(obj)
logThis.bind(odj)()