'use strict'

// Variable
// let
// (added in ES6)
/*
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
*/

// block scope
// {   } 밖에서는 안을 볼수 없다.

// 밖에 상위 블록이 하위
// 위에서 아래로 

let globalName = 'global name';
// global scope
// 블록 밖에서 정의 
// 블록 안밖에서 볼수 있다. 
// ---> 상위 개념 -- 하위에서 상위를 볼수 있으나 상위에서 하위는 볼수 없다.

{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}

console.log(name);
console.log(globalName);

// global 변수는 프로그램이 실행되는 내내 메모리를 사용하므로
// 최소한도만 사용


// var (Never use this!)
// var hoisting - 사용하면 안되는 이유1
// hoisting - move declaration from bottom to top
// 끌어올려주다
// var no block scope - 사용하면 안되는 이유2
console.log(age);
age=4;
console.log(age);
var age;

//let은 바로 에러가 난다.
// name1 = 4;
// let name1;

{
  age1 =4;
  var age1;
}
console.log(age1);

// ES6 로 개발후 BABEL을 사용하여 ES4,ES5로 내려서 배포

//--------------------------------------------------------------
//3. constant
// favor immutable data type always for a few reasons;
// - security
// -  thread safety
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;


//----------------------------------------------------------------
//4. Variable types
// Primitive type
//    더이상 나눠지지 않는 한가지 아이템
//    single item
//    number, string, boolean, null, undefienc, symbol
// Objective type
//    여러가지 아이템을 묶어
//    box container
//      function 
//      first-class function - 함수 인자, 리턴 가능하다.


//------------------------------------------------------------------
/*
C 언어

int main(){
  short a = 12;    // 2 bytes
  int a = 12;      // 4 bytes
  long b = 1234;   // 8 bytes
  float d = 1.2f;  // 4 bytes
  double e = 8.2;  // 16bytes

  return 0;
}


java

class Main {
  public static void main(String[] args){
    byte a =12;
    short b = 12;
    long c = 12;
    int d = 12;
    float e = 1.2f;
    double f = 1.2;
  }
}

*/

// javascript는 숫자는 number type 하나 있따.
// type을 선언할 필요 없다.

let a = 12;
let b = 1.2;

// typescript
// let a: number = 12;
// let b: number = 12;

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count} `);
console.log(`value: ${size}, type: ${typeof size} `);


// number - special numeric values
// infinity , -infinity, NaN
// NaN = Not A Number

const infinity = 1/0;
const negativeinfinity = -1/0;
const nAn = 'not a number' /2;
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);


// bigInt (faily new, don't use it yet)  -- 숫자 끝에 n 붙여
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// javascript의 number 는 -2**53 ~~ 2**53 범위다...
Number.MAX_SAFE_INTEGER;

//--------------------------------------------------------------
// String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);


// boolean
// false : 0 , null, undefined, NaN, ''
// true : any other value

const canRead = true;
const test = 3 < 1; // false;

console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null - type:object
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined - type: undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);


// symbol, create unique identifiers for objects
// 고유한 식별 자료 만들때 사용됨

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);  // false  이 두 id는 같은게 아니야 

// 반대로 동일한 심볼을 만들고 싶으면
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);  // true

//Symbol은 그냥 출력이 안된다..  항상 .description 으로 string으로 변환하여 출력한다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
console.log(`value: ${symbol2.description}, type: ${typeof symbol2}`);
console.log(`value: ${gSymbol1.description}, type: ${typeof gSymbol1}`);
console.log(`value: ${gSymbol2.description}, type: ${typeof gSymbol2}`);



// #####################################################
// 5. Dynamic typing: dynamically typed language
// 
// C 나 java는 static type으로 변수를 선언할때 type을 선언하여 고정
// JS는 프로그램이 실행될때 (런타임시) 변수 type 이 변한다.

let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`); // hello string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // 1 number

text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 75 string

text = '7' * 5;
console.log(`value: ${text}, type: ${typeof text}`); // 35 number
text = '7' - 5;
console.log(`value: ${text}, type: ${typeof text}`); // 2 number
text = '7' / 5;
console.log(`value: ${text}, type: ${typeof text}`); // 1.4 number
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // 4 number

text = 'hello'
console.log(`value: ${text}, type: ${typeof text}`); // hello string
console.log(text.charAt(0));  // h
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); 
// 4 number  -- 다른 개발자 숫자로 변경
// console.log(text.charAt(0));  // Error

// 그래서 Typescript가 나온다.  JS + type
// 브라우저가 이해할수 있는 JS로 TS를 transcomplier : BABEL을 사용해야 한다.


//################################################################
// object , real-life object, data structure
const ellie = { name: 'ellie', age: 20};

console.log(ellie);
console.log(ellie.age);

// object

// ellie  - const -> ref - name --> ellie 
//           잠겨있다. |---- age --> 20
// ellie.name, ellie.age는 변경이 가능하다.

ellie.age = 22;
console.log(ellie.age);








