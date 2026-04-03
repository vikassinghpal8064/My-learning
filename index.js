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


let Person={
    name:"vikas singh pal",
    phone:"8287216314",
    address:{
        street:"mohan garden",
        city:"new Delhi",
        State:"Delhi",
    },
    //subject:null,
}

console.log(Person.subject);
console.log(Person.subject?.something);

console.log(Person.subject ?? "english") // nullish value if something is null or undeined then other thing will work

