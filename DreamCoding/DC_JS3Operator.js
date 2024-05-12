console.log('---------------');
console.log('1. String concatenation');

// 1. String concatenation
console.log('my'+'cat');  // mycat
console.log('1'+ 2);  // 12 
console.log(`string literals: 1 + 2 = ${1 + 2}`);  // 3


console.log('');
console.log('---------------');
console.log('2. Numeric operators');
// 2. Numeric operators
console.log(1 + 1); //add      
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder  1
console.log(2 ** 3); // exponentiation  8


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
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);  // 3 3

// postIncrement
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // 3 4
// postIncrement = counter
// counter = counter + 1
// 변수에 할당한후 1을 더한다.

// preDecrement
// 1뺀후 변수에 할당
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // 3 3
// postDecrement
// 변수에 할당후 1을 뺀다
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);  // 3 2


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
console.log(stringFive == numberFive);  // true
console.log(stringFive != numberFive);  // false

// === strict equality, no type conversion
console.log(stringFive === numberFive);  // false
console.log(stringFive !== numberFive);  // true


console.log('---------------');
//  Object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

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
// use for multiple type check in TS

const browser = 'Chrome';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
    console.log('love you!');
    break;
  case 'Firefox':
    console.log('love you!');
    break;
  /*
  값이 같을 경우
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break
  */
  default:
  console.log('same all!');
  break;
}

// enum 타입은 일반적으로 상수 값의 집합을 나타내는 데 사용됩니다.
// enum 타입에는 여러가지 특징이 있는데 그 중 하나는 "enum-like value" 입니다.

// "enum-like value"는 enum 타입의 각 멤버(상수)에 대응되는 값을 의미합니다. 이 값은 enum 타입 내부에서 자동으로 생성되며, 각 멤버를 구분하는데 사용됩니다.

/*
예)
enum Color {
  red,
  green,
  blue
}
*/
// 이 경우 각 enum 멤버 (red, green,blue)에는 자동으로 enum-like value가 할당됩니다.
// 이 값은 0, 1, 2 와 같은 정수 값입니다. 이를 통해 enum 멤버를 구분할 수 있습니다.
// 이러한 enum-like value는 enum 타입을 사용할 때 다음과 같이 활용할 수 있습니다.
// - 특정 enum 멤버를 식별하거나 비교할 때 사용할 수 있습니다.
// - 특정 enum 멤버를 순서를 알 수 있습니다.
// - 특정 enum 멤버의 인덱스를 알 수 있씁니다.

// 따라서 enum-like value는 enum 타입을 사용할 때 편리하게 활욯할 수 있는 특징이라고 볼 수 있습니다.


console.log('');
console.log('---------------');
console.log('11. Loops');
// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
// 조건 확인하고 블럭 실행
let i = 3;
while (i>0){
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
// 블럭을 먼저 실행하고 조건 확인
do {
  console.log(`do while: ${i}`);
  i--;
} while (i>0);


// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
//     1 loop  2 ^ 4
  console.log(`for: ${i}`);
//               3
// 1은 한번만,  loop 2,3,4
}

for (let i = 3; i > 0; i = i - 2){
  //inline variable declaration
  console.log(`inline variable for: ${i}`);
}


// nested loop
// 연산이 많아 CPU에 부담. 되도록이면 작성하지 않는게 좋다.
for (let i = 0; i < 10; i++){
  for (let j = 0; j < 10; j++){
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++){
  // if ( i % 2 === 1 ) {
  //   continue
  // } else {
  //   console.log(`i: ${i}`);
  // }
  if ( i % 2 == 1 ) {
    continue
  }
  console.log(`i: ${i}`);
}
//---------------------------
// 실제로는 조건에 부합될때만 작성
for (let i = 0; i < 11; i++){
  if (i % 2 == 0){
    console.log(`Q1: ${i}`);     
  }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11 ; i++){
  if (i > 8){
    break;
  }
  console.log(`Q2: ${i}`);
}


// Label 레이블
// javascript에서 레이블(label)은 반복문(loop)을 제어하는데 사용되는 특별한 구문입니다.
// 레이블은 다음과 같은 용도로 사용됩니다.

// 1. 중첩된 반복문에서 바깥쪽 반복문으로 빠져나올 수 있게 해줍니다.
// 2. break 또는 continue문과 합께 사용하여 특정 반복문을 제어할 수 있습니다.

// 레이블은 반복문 앞에 식별자를 붙여 사용합니다.
// 예> JS
console.log('______ lable(+) ______________')
outer: for (let i = 0; i < 3; i++){
  for (let j = 0; j < 3; j++){
    console.log(`i = ${i}, j = ${j}`);
    if (i + j === 2) break outer;
  }
}
// 위 코드에서 outer가 레이블이며, i 와 j 의 합이 2가 되면, outer 반복문을 빠져나오게 됩니다.
// 따라서 javascript에서 레이블은 중첩된 반복문을 제어하고 특정 반복문을 선택적으로 종료하는데 사용되는 구문입니다.



// 레이블을 사용하지 않으면 다음과 같은 차이가 있습니다.
// 1. 중첩된 반복문에서 바깥쪽 반복문으로 빠져나올 수 없습니다.
// 2. break문을 사용해도 내부 반복문만 종료되고, 바깥쪽 반복문은 계속 실행됩니다.

// 예) JS
console.log('______ lable(-) ______________')
for (let i = 0; i < 3; i++){
  for (let j = 0; j < 3; j++){
    console.log(`i = ${i}, j = ${j}`);
    if (i + j === 2) break; // 내부 반복만 종료
  }
}
// 이 경우 i + j 가 2가 되면 내부 반복문 ( j loop )만 종료되고, 외부 반복문 ( i loop )은 계속 실행됩니다.
// 따라서 레이블은 중첩된 반복문을 제어하는 데 매우 유용합니다.
// 특히 복잡한 알고리즘을 구현할때 레일블을 사용하면 코드의 가독성과 유지 보수성을 높일 수 있습니다.

// 현업에서는 label은 잘 사용하지 않는다 보다 간편하게 작성하면 되기 때문....
