//Singlet Pattern
var Database = /** @class */ (function () {
    function Database(connectionString) {
        this.connectionString = connectionString;
    }
    Database.getInstance = function (connectionString) {
        if (this.instance == null) {
            this.instance = new Database(connectionString);
            return this.instance;
        }
        else {
            return this.instance;
        }
    };
    return Database;
}());
// var Database1 = Database.getInstance("MySql");
// console.log(Database1);
// var database2 = Database.getInstance("MongoDB");
// console.log(database2);


//--------------------------------------------------------------

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
Object.freeze(car1);
car1.lol=()=>{
    return "lol have fun";
}

//console.log(car1.lol() ?? "nothing");

class Vahicle{
  constructor(name, model){
    this.name=name;
    this.model=model;
  }
  
}
class Truck extends Vahicle{
  constructor(){
    super();
  }
}