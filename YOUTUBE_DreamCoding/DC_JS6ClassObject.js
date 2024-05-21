/*
class person {
  name; 
  age;       속성(field)    
  speak();   행동(method)
}
*/

/*
class = field + method 

class  ~~ 붕어빵 틀
- template
- declare once
- no data in

object ~~ 붕어빵, 팥붕어빵, 피자붕어빵.....
- instance of a class
- created many times
- data in

 */


'use strict'
// object-oriented programming
// class : template
// object : instance of a class
// Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance
// - 문법상으로 달달한, 가짜의


// 1. Class declarations
class Person {
  //constructor
  constructor (name, age){
    //field
    this.name = name;
    this.age = age;
  }

  //methods
  speak(){
    console.log(`${this.name}: hello!`);
  }
}

// object 생성
const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and Setters 
// getter 와 setter는 사용자가 잘못 사용 입력하지 못하게 한다.
// get 은 값을 return
// set 은 값을 설정 , 값을 받아야 해서 value를 설정

// private은 외부인이 프로그램을 건들지 못하게 한다.
class User {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age(){
    return this._age;
  }

  set age(value){
    // if (value < 0){
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', ' Job', -1);
console.log(user1.age);


// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties

class Experiment {
  publicField = 2;
  #privateField = 0;
}
// # 기호를 붙이면 private , 클래스 내부에서만 값이 보이고 변경이 가능하다


const experiment = new Experiment();
console.log(experiment.publicField); // 0
console.log(experiment.priavteField); // undefined



// 4. Static properties and methods 
// Too soon
// 클래스에 속한 값, 인스턴스에 동일하게 사용되는 값

// 클래스 . ~~~

class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber){
    this.articleNumber = articleNumber;
  }

  static printPublisher(){
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(article1);
console.log(article1.publisher);
// console.log(article1.printPublisher); //Error , object에 붙은게 아니라 클래스에 붙어있다.
console.log(Article.publisher);
console.log(Article.printPublisher());  // Dream Coding 출력, undefined 반환
// printPublisher() 메서드는 반환값이 없으므로 , undefined반환
Article.printPublisher();


console.log(article2);


// ###############33
// 상속 & 다양성

// 5. Inheritance
// a way for one class to extend another class.

class Shape {
  constructor (width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw (){
    console.log(`drawing ${this.color} color!!`);
  }

  getArea(){
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

class Triangle extends Shape {
  draw (){
    super.draw();     // 부모 클래스 사용
    console.log('△')  // 추가로 삼각형 그리기
  }

  // overriding -- 재정의
  getArea (){
    return (this.width * this.height / 2);
  }

  toString(){
    return `Triangle: color : ${this.color}`;
  }
}

const triangle = new Triangle(30, 30, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking : instanceOf

// intanceof operator, 
// object - 클래스를 이용해서 만든 새로운 instance
// 좌측object instanceof 우측클래스
// 좌측 object가 우측클래스의 인스턴스 인지 아닌지 확인 
console.log(rectangle instanceof Rectangle);  // true
console.log(triangle instanceof Rectangle);   // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString()); // object Object --> overriding   


// ##################
// javascript MDN
// object에는 어떤것들이 있는지 보여준다.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference



