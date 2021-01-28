// null,undefined boolean string Object, symbol

// console.log(typeof(0)) // return number 

// console.log(typeof true) // return boolean

// console.log(typeof 'Javascript') // "", '', - це звичайні      `` - литерали передают динамические данні
// console.log(typeof undefined) // return undefined
// console.log(typeof Math) // return object
// console.log(typeof Symbol('Js'))   //return symbol
// console.log(typeof null)
// console.log(typeof function() {}) // return function - функции являются обектами и нет такого типа данних как функция  
// console.log(NaN) // return number и єто не логично
// console.log(undefined * 1) // return NaN - NaN - Not a Number 

// // Чем отлечается undefiend  от null ?
// // тип данных undefiend используется тогда, когда 
// // // переменная не обявлена или она была обявлена с помощью ключевого слова const или let 
// // но при этом не имеет никакого значения
// // null - говорит про то что у нас отсуствует значение переменная обявлена но в ней нет никакого значания  

// // Приведения типов 
// let language = 'JavaScript'

// // if (language) {
// //     console.log('The best language is:', language)

// // }
// //  if - если значение которое в єтих скобках равно тру -> (true) {
//     // то пожалуста я виведу єто -> console.log('The best language is :', language)
// // } 

// // Але є деякі елементи які повертають  False  і ці елементи я зараз перечислю 
// //      '', 0, null, undefined, NaN, false
// //  Прикоад із пустою та не пустою строкою які виводять різні значення 
// console.log(Boolean('')) // - верене false 
// console.log(Boolean('Hello world')) // верне True
// console.log(' ') // верне true  бо воно не пусте
// console.log('0') // верене нам true бо це строка а не число а якщо чсло буде 0
// console.log(Boolean(0)) // верене нам - false


// console.log(Boolean(undefined)) // - false 
// console.log(Boolean(NaN))  // - false
// console.log(Boolean(null)) //  - false

// console.log(Boolean([])) // - return true 
// console.log(Boolean({})) // - return true 


// Строка и числа 

// console.log(1 + '2') // return 12 
// console.log('' + 1 + 0) // return 10
// console.log('' - 1 + 0) // return -1 
// console.log('3' * '8') // number 24
// console.log(4 + 10 + 'px') // 14 px
// console.log('px' + 5 + 10) // string
// console.log('42' - 40) // 42 -40 = 2
// console.log('42px' - 2) // NaN
// console.log(null + 2) // 2 
// console.log(undefined + 42)

// == vs ===

// 
///  == зрівнює значення зі зведенням типів  
/// === зрівнює без зведення типів

// console.log(2 == '2')  // return true  через те що зводить 2 типи даних в один тип даних в даному випадку до чисел 
// console.log(2 === '2') // return false  через те що не зводить типи даних а просто рівняє 
// console.log(undefined == null) // return true  бо там пусто і там пусто нема значеннь 
// console.log(undefined === null) // return false а тут зводиться строго за одним типом даних 
 
// console.log('0' == false)  // return true  бо тому що false = 0 строка нуль переводиться в тип даних цифровий 0 і виводиться ось таке 0 = 0 і це буде true
// console.log('0' == 0) // true
// console.log(0 == 0) // true


// Питання на саббесі  по типах 


// console.log(false == '') // return true / бо false це false  а '' це false  a false == f
// console.log(false == []) // return true / так само  бо false це false  а  []  - це false
// console.log(false == {}) // return false / бо false це false  а '' це false  a {} - це true


// console.log('' == 0) // true
// console.log('' == []) // true
// console.log('' == {}) // false

// console.log(0 == []) // true
// console.log(0 == {}) // false
// console.log(0 == null) // false 