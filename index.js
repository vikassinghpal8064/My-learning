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
var Database1 = Database.getInstance("MySql");
console.log(Database1);
var database2 = Database.getInstance("MongoDB");
console.log(database2);
