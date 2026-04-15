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



// Debounce function

function count(){
    let cleanupId=0;
    return ()=>{
        return val++;
    }
}
let res=count()
console.log(res());
console.log(res());console.log(res());console.log(res());

console.log(val);
