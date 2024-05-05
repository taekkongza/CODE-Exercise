console.log('---------------');
console.log('1. String concatenation');

// 1. String concatenation
console.log('my'+'cat');
console.log('1'+ 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);


console.log('');
console.log('---------------');
console.log('2. Numeric operators');
// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation


console.log('');
console.log('---------------');
console.log('3. Increment and Decrement oprators');
// 3. Increment and decrement operators
// ++ -- operators

// preIncrement
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1
// preIncrement = counter
// 1을 더한후 변수에 할당
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

// postIncrement
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
// postIncrement = counter
// counter = counter + 1
// 변수에 할당한후 1을 더한다.

// preDecrement
// 1뺀후 변수에 할당
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
// postDecrement
// 변수에 할당후 1을 뺀다
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);


console.log('');
console.log('---------------');
console.log('4. Assignment operators');
// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
console.log(x); // 9
x -= y; // x = x - y;
console.log(x); // 3
x *= y; // x = x * y;
console.log(x); // 18
x /= y; // x = x / y;
console.log(x); // 3

console.log('');
console.log('---------------');
console.log('5. Comparison operators');
// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal


console.log('');
console.log('---------------');
console.log('6. Logical operators');
// 6. Logical operators
// || (or) , && (and), ! (not)
const value1 = true;
const value2 = 4 < 2; //false

function check(){
  for (let i = 0; i < 10; i++){
    //wasting time
    console.log('@@@');
  }
  return true;
}


// || (or)
console.log(`or: ${value1 || value2 || check()}`);
// ||
// finds the first truthy value 
// true가 나오면 연산이 멈춘다.~~~
// value1 = true 면 wasting time이 출력 안됨.

// 즉 or 연산자는 앞에 연산이 덜되는 것을 먼저, 무거운 것을 마지막에 둔다.


// && (and)
// finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
// and도 무거운 연산을 마지막에 두는게 좋다.

// && (and) 는 null check에 많이 사용된다.
// often used to compress long if-statement
// nullalbeObject && nullableObject.somthing
/*
if ( nullableObject != null){
  nullableObject.something
}
*/

// ! (not)
// true -> false, false -> true
console.log(!value1);


console.log('');
console.log('---------------');
console.log('7. Equality');
// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);


console.log('---------------');
//  Object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

console.log('---------------');
console.log(0 == false); //true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false


console.log('');
console.log('---------------');
console.log('8. Conditional operator');
// 8. Conditional operator: if
// if, else if, else
const name = 'coder';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder'){
  console.log('You are amazing coder');
} else {
  console.log('unknown');
}


console.log('');
console.log('---------------');
console.log('9. Ternary operator');
// 9. Ternary operator : ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');
// 간단할때만 사용
// nesting이나 복잡한것은 if 또는 switch


console.log('');
console.log('---------------');
console.log('10. Switch statement');
// 10 switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS







console.log('');
console.log('---------------');