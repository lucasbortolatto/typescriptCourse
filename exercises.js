var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Exercise 1
var Car = (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    return Car;
}());
var car = new Car("PEUGEOT");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2
var BaseObject = (function () {
    function BaseObject(width, length) {
        this.width = 0;
        this.length = 0;
        this.width = width;
        this.length = length;
    }
    BaseObject.prototype.calcArea = function () {
        return this.width * this.length;
    };
    return BaseObject;
}());
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super.apply(this, arguments) || this;
    }
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle(2, 2);
console.log(rectangle.calcArea());
// Exercise 3
var Person = (function () {
    function Person() {
        this._firstName = "";
    }
    Person.prototype.getFirstName = function () {
        return this._firstName;
    };
    Person.prototype.setFirstName = function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    };
    return Person;
}());
var person = new Person();
console.log(person.getFirstName());
person.setFirstName("Lu");
console.log(person.getFirstName());
person.setFirstName("Lucas");
console.log(person.getFirstName());
