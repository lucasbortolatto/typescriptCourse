// Exercise 1
class Car{
    name: string;
    acceleration: number;

    constructor(name: string){
        this.name = name;
        this.acceleration = 0;
    }

    accelerate(speed: number){
        this.acceleration = this.acceleration + speed;
    }

    honk(){
            console.log("Toooooooooot!");
    }
    
}

var car = new Car("PEUGEOT");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2

class BaseObject{
    width: number = 0;
    length: number = 0;

    constructor(width: number, length: number){
        this.width = width;
        this.length = length;
    }

    calcArea(){
        return this.width * this.length;

    }

}

class Rectangle extends BaseObject {

}

var rectangle = new Rectangle(2,2);
console.log(rectangle.calcArea());

// Exercise 3

class Person {
    _firstName: string = "";

    getFirstName(){
        return this._firstName;
    }

    setFirstName(value: string){
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
}
var person = new Person();
console.log(person.getFirstName());
person.setFirstName("Lu");
console.log(person.getFirstName());
person.setFirstName("Lucas");
console.log(person.getFirstName());