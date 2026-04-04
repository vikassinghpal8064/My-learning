# 🔴 Advanced (36–50)

Microtasks vs macrotasks (task queue)
Generator functions (function*)
Iterators & the iterator protocol
Symbols
WeakMap & WeakSet
Proxy & Reflect
Memory management & garbage collection
Debounce & throttle (implementation)
Currying & partial application
Memoization
Functional programming concepts (pure functions, immutability)
Design patterns (module, singleton, observer)
Web Workers
Service Workers & PWA basics
V8 engine internals — JIT compilation, hidden classes


# memory management and Garbage Collection 

* Garbage Collection
In JS there is a algorithem is used called Mark and Sweep , in this it traverse from the root node which are reachable are not marked and which are not are marked then those unmarked are erased from the memory in second phase.

* Memory management
In Js memeory management is automatic , all objects , variables , and function occupy some memory. 


# Design Pattern

* Singlet Pattern
It means that you want your object Cannot be changed or copied.

```javascript
class Car{
    constructor(name, model){
        this.name=name;
        this.model=model;
    }
    whichCar(){
        return `this car is ${this.name} and model ${this.model}`
    }
}

let car1= new Car("mahindra","SUV800");
Object.freeze(car1);                     // note this line Object.freeze
car1.lol=()=>{
    return "lol have fun";
}

console.log(car1.lol() );
```

* Factory method

This is the method which is similar to just making class as an object, it can be modified later by adding other properties.

* Abstract factory method

```javascript
// We have a class or "concrete factory" for each vehicle type
class Car {
    constructor () {
        this.name = "Car"
        this.wheels = 4
    }
    turnOn = () => console.log("Chacabúm!!")
}

class Truck {
    constructor () {
        this.name = "Truck"
        this.wheels = 8
    }
    turnOn = () => console.log("RRRRRRRRUUUUUUUUUMMMMMMMMMM!!")
}

class Motorcycle {
    constructor () {
        this.name = "Motorcycle"
        this.wheels = 2
    }
    turnOn = () => console.log("sssssssssssssssssssssssssssssshhhhhhhhhhham!!")
}

// And and abstract factory that works as a single point of interaction for our clients
// Given the type parameter it receives, it will call the corresponding concrete factory
const vehicleFactory = {
    createVehicle: function (type) {
        switch (type) {
            case "car":
                return new Car()
            case "truck":
                return new Truck()
            case "motorcycle":
                return new Motorcycle()
            default:
                return null
        }
    }
}

const car = vehicleFactory.createVehicle("car") // Car { turnOn: [Function: turnOn], name: 'Car', wheels: 4 }
const truck = vehicleFactory.createVehicle("truck") // Truck { turnOn: [Function: turnOn], name: 'Truck', wheels: 8 }
const motorcycle = vehicleFactory.createVehicle("motorcycle")
```