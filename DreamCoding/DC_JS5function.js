// Function?
// - fundamental building block   in the program
// - subprogram   can be used multiple times
// - performs a task   or   calculates a value

// 1. Function  declaration
//
// function name(param1, param2) { body... return; }
//
// one function === one thing   하나의 함수는 하나의 일만 한다.
//
// naming : doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// 변수는 명사로 이름...
//
// function is object in JS
'use strict';

function printHello(){
  console.log('Hello');
}
printHello();
// 쓸모가 별로 없어 파라미터로 변하게


/**
 * jsdoc
 *  파라미터 넣어야 쓸모
 * @param {*} message 
 */
function log(message){
  console.log(message);
}
log('hello!!!');
log(1234);


// 2. parameters
// premitive parameters: passed by value
// object parameters; passed by reference
function changeName(obj){
  obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown' ){
  // if (from === undefined){
  //   from = 'unknown';
  // }
  console.log(`${message} by ${from}`);
}
showMessage('Hi!'); // default 값이 없으면 undefined


// 4. Rest parameter (added in ES6)
// ... 배열 형태로 전달
function printAll(...args) {
  for (let i = 0; i < args.length; i++ ){
    console.log(args[i]);
  }

  for (const arg of args){
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// for ... of 문법은 자바스크립트에서 반복가능한 객체 (배열, 문자열, 맵, 세트등)의 
// 요소를 순환하는데 사용
// for (let 요소 of 반복가능한 객체){
  // 요소에 대한 작업 수행
// }
const person = { name : 'mike' , age : 30 };
for ( const [key, value] of Object.entries(person)){
  console.log(`${key} : ${value}`)
}
// Object.entries() 메서드는 자바스크립트에서 객체를 배열로 변환
// 사용되는 유용한 도구, 객체의 키-값 쌍을 배열 요소로 구성하여 반환, 
// 다양한 상황에서 객체 데이터를 다루고 활용하는데 도움

// 5. local scope
let globalMessage = 'global'; // global variable
function printMessage(){
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother(){
    console.log(message);
    let childMessage = 'hello';
  }

  printAnother(); // 안에서 밖은 출력
  // console.log(childMessage); // 밖에서 안은 못본다. 에러~~

  // return undefined  // javascript 에 기본적으로 지정된 return = undefind,  따라서 생략 가능함

}
printMessage();
// console.log(message); //에러

// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다. #####
// 틴팅된 창문을 생각.

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);  // 3
console.log(`sum: ${sum(1, 2)}`);





