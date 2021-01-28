// values

// let a = 42 
// let b = a

// b++

// console.log('a', a)
// console.log('b', b)


// ссилка на масив. Задача така нам потрібно добавити тільки в Б четвірку а не до двох А та Б. ось приклад як воно є з самого початку 
// let a = [1,2,3] 
// let b = a

// b.push(4)

// console.log('a', a)
// console.log('b', b)

// рішення 
let a = [1,2,3] 
let b = a


b.push(4)
let c = [1, 2, 3, 4]
console.log('a', a)
console.log('b', b)

console.log(a === b)
console.log(a === c)