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

// 함수에 이름이 있는것 function name(p1, p2){body...return}
// --> named function
'use strict';

function printHello(){
  console.log('Hello'); 
}
printHello();  // Hello
// 쓸모가 별로 없어 파라미터로 변하게


/**
 * jsdoc
 *  파라미터 넣어야 쓸모
 * @param {*} message 
 */
function log(message){
  console.log(message);
}
log('hello!!!'); // hello!!!
log(1234); // 1234


// 2. parameters
// premitive parameters: passed by value
// object parameters; passed by reference
function changeName(obj){
  obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);  // {name: 'coder'}

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown' ){
  // if (from === undefined){
  //   from = 'unknown';
  // }
  console.log(`${message} by ${from}`);
}
showMessage('Hi!'); // default 값이 없으면 undefined
// Hi! by unknown

// 4. Rest parameter (added in ES6)
// ... 배열 형태로 전달
function printAll(...args) {
  for (let i = 0; i < args.length; i++ ){
    console.log(args[i]);
  } // dream \n coding \n ellie

  for (const arg of args){
    console.log(arg);
  } // dream \n coding \n ellie

  args.forEach((arg) => console.log(arg));
  // dream \n coding \n ellie
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
  // name : mike,  age : 30
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

  printAnother(); 
  // 안에서 밖은 출력
  // console.log(childMessage); // 밖에서 안은 못본다. 에러~~

  // return undefined  // javascript 에 기본적으로 지정된 return = undefined,  따라서 생략 가능함

}
printMessage(); 
// hello
// global
// hello

// console.log(message); //에러

// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다. #####
// 틴팅된 창문을 생각.

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);  // 3
console.log(`sum: ${sum(1, 2)}`);


// 7. Early return, early exit 
// 이렇게 하는게 좋다.

/*
// bad
function upgradeUser(user){
  if (user.point > 10){
    // long upgrade logic...
  }
}
*/

/*
//good
function upgradeUser(user){
  if (user.point <=10) {
    return;
  }
  // long upgrade logic..
}
*/


console.log('-----------------------------------------');
//------------------------------------------------------------------

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another functions
// 함수는 변수와 같이, 값이 할당, 파라미터로 사용 , 값이 리턴된다.


// 1. Function Expression
// a function declaration can be called earlier than it is defined.(hoisted)
// a function expression is created when the execution reaches it.

// function expression은 호이스팅이 된다.

// 함수에 이름이 없는것 function(){} -- anonymous function
const print = function(){
  console.log('print');
};
print();  // print
const printAgain = print;
printAgain();  // print
const sumAgain = sum;
console.log(sumAgain(1, 3));  // 4



// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
  if (answer === 'love you'){
    printYes();
  } else {
    printNo();
  }
}


// anonymous function
const printYes = function(){
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions - 함수 안에서 함수 자신을 다시 호출 
const printNo = function print(){
  console.log('no!');
  // print(); // recursion
};

randomQuiz('wrong',printYes, printNo);  // no!
randomQuiz('love you',printYes, printNo);  // yes!


// 3. Arrow function
// always anonymous function
const simplePrint = function (){
  console.log('simplePrint');
};
simplePrint();

const simplePrint1 = () => console.log('simplePrint');
simplePrint1();
const add = (a, b) => a + b;
console.log(add(4, 9));
// { } 블럭도 빼고 간결하다.

// 복잡한경우는 { }을 추가, 대신 return을 꼭 추가해야 한다.
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};
console.log(simpleMultiply(3, 8));










