//Let

// Let - це перемінна яку можна в майбутньому переназначити
// let a = 'Variable a' 
// let b = 'Variable b' 


// {
//     a = 'New variable A'          - ось це глобальна перемінна яка перезазначена в скоупі
//     let b = 'Local Variable B'       - ось це все scope і тут  ми зазначили через let значення яке тільки можна дістати в scope
//     console.log('Scope A', a);
//     console.log('Scope B', b); 
// }
  
// console.log('A:', a); // ось тут ми бачимо що пише New variable A
// console.log('B:', b); // А ось тут просто пише Variable b  адже b у скоупі це окрема перемінна та b не у скоупі це також окрема перемінна
// Сonst -
//     const PORT = 8080 // - константа не змінюється вона є сталим значенням
//     const array = ['Javascript', 'is', 'Awesome']
// array.push('!') // - можна добавляти в константу з масивом певні значення крім цього = ''
// array[0] = 'JS' //
// console.log(array);

// // значення в обєкті та значення в константі в якій обєкт можна міняти значення в самому обєкті
// const obj = {}
// obj.name = 'Login'
// obj.age = '19'

// delete obj.name

// obj.age = '25'
// console.log(obj);
