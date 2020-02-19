/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
/**
 * @param {any} name
 */
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(newName, newAge) {
  this.name =newName;
  this.age= newAge;
  this.stomach= [];
  }

  Person.prototype.eat = function(food) {
    if(this.stomach.length < 10){
        this.stomach.push(food);
    }
  };

  Person.prototype.poop = function(){ this.stomach=[]};

  Person.prototype.toString = function(){
    return `${this.name}, ${this.age}`;
  }
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank =0;
  this.odometer = 0;
}
Car.prototype.fill = function(gallonsOfGas){
  this.tank += gallonsOfGas;
}

Car.prototype.drive = function(distance){
  let allowedDistance = this.tank * this.milesPerGallon;
  let gasUsed = distance / this.milesPerGallon;
  if(gasUsed < this.tank){
    this.odometer += distance;
    this.tank = this.tank - gasUsed;
  }else if(gasUsed == this.tank){
    this.odometer += distance;
    this.tank = 0;
    return "I ran out of fuel at " + this.odometer + " miles!";
  } else if(gasUsed > this.tank){
      this.odometer += allowedDistance;
      this.tank = 0;
      return  `I ran out of fuel at ${this.odometer} miles!`
  }
}

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.bind(name, age);
  this.name = name;
  this.age = age;
  this.favoriteToy= favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function (){
  return `Playing with ${this.favoriteToy}`
}

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. global context: the window itself is what this refers to since this refers to the parent of the current function. so global functions when using this refer to windwo
  2. new binding: in an object lets you create new objects and use the current called object as the reference for this. allows you to save on variable creation and use objects as molds for multiple objects of same kind
  3. implicit: methods of an object will use this to imply the object and its attributes
  4. explicit: when you call or otherwise use an objects methods and are binding objects together the this keyword is now being explicit as it is being explicitly defined to mean the called or bound method's object now
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
