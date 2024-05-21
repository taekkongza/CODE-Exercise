// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

'use strict'

// Objects
// one of the Javascript's data type.
// a collection of related data and/or functionality
// Nearly all objects in Javascript are instances of Object

// 중요!!!!!
// object는 key와 value의 집합체 이다.


/* 불편해~~
const name = 'ellie';
const age = 4;

print(name, age);

function print(name, age){
  console.log(name);
  console.log(age);
}
print('ellie0', 20);
*/

// 1. Literals and properties
const obj1 = { };   // 'object literal' syntax
const obj2 = new Object();   // 'object constructor' syntax


function print(person){
  console.log(person.name);
  console.log(person.age);
}
const ellie = { name:'ellie', age: 4};
print(ellie);

// runtime : 프로그램이 동작할때

// 동적으로 property 추가시 유지 보수가 어렵다. 따라서 가능하면 피해서 코딩
ellie.hasJob = true;
console.log(ellie.hasJob)  // true

delete ellie.hasJob;
console.log(ellie.hasJob);  // undefined


// 2. Computed properties
// object key - key는 항상 ' ' string type으로 해야 한다.
console.log(ellie.name);
console.log(ellie['name']);
// 배열에서 받아 접근할 수 있다.
console.log(ellie.hasJob); // undefined
ellie['hasJob'] = true;
console.log(ellie.hasJob); // true

// computed property는 어떤 변수를 받을지 모를때 , 
// runtime에서 결정날때, 실시간으로 키를 받아올때
// computed property를 사용한다.

function printValue(obj, key){
  // console.log(obj.key); // undefined
  console.log(obj[key])
}
printValue(ellie, 'name'); //????
printValue(ellie, 'age');


// 3. Property value shorthand
function makePerson(name, age){
  return { name, age    // property와 value의 이름이 같으면 생략. = property value shorhand
  };
}

const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = makePerson('ellie', 30);
console.log(person4);

// 4. Constructor function
function Person(name,age){
  // this = { }; object
  this.name = name;
  this.age = age;
  // return this;
}
const person5 = new Person('mike', 22);
console.log(person5);

// 5. in operator : property existence check (key in obj)
console.log('name' in ellie); // true
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

console.clear();

console.log(ellie);

// 6. for ... in vs for ... of
// for (key in obj)
for (let key in ellie){
  console.log(key);
}

// 좀더 strict하게 
/*
for ...in 구문:
객체의 열거 가능한 속성을 반복
객체의 모든 열거 가능한 속성, 즉 객체 자신의 속성과 프로토 타입 체인의 속성까지
모두 열거합니다. 이로인해 예상치 못한 속성이 포함될 수 있습니다.
이는 특히 객체가 다른 객체로부터 상속받은 속성을 가지고 있을때 문제가 될 수 있습니다.

객체의 프로토타입 속성 포함 가능성
만약 ellie객체가 다른 객체를 상속받고 있고, 상속된 객체에 열거 가능한 속성이 있다면, 
해당 속성들도 함께 출력될 수 있습니다. 이는 보통 의도하지 않은 동작일 수 있습니다.

이를 방지하기 위해 hasOwnProperty 메서드를 사용하여 객체 자신의 속성만을 
출력하도록 할 수 있습니다.
*/

for (let key in ellie){
  if (ellie.hasOwnProperty(key)){
    console.log(key);
  }
}
 

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++){
  console.log(array[i]);
}
// 간편하게 for ... of 
for (let value of array){
  console.log(value);
}


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3, obj4 ...])
const user = {name: "ellie", age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// object를 내용을 복사하는 방법.

// old way
const user3 = {};  // 빈 object 설정
for (let key in user){
  user3[key] = user[key];
}
console.log(user3);
user2.name = 'ellie';
console.log(user3);
console.log(user2);
console.log(user);
// 새로운 방법...
// Object.assign
// javascript에 있는 모든 object는 Object를 상속한다.

// Object.assign(target, source1, source2)
const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue 뒤에 나온게 overriding
console.log(mixed.size); // big



