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


// lets asume we want to make icecream step by step

// 1 sec for preparing milk
// 2 sec for cutting fruits
// 2 sec for stirring and adding icrcream powder
// 3 second for refrigation

function prepareIcecream(){
    console.log('icrcream making has been started');
    console.log("preparing milk");
    setTimeout(()=>{
        console.log("milk prepared");
        console.log("cutting fruits");
        setTimeout(()=>{
          console.log("fruits has been chopped"); 
          console.log("stirring and adding icrcream powder"); 
          setTimeout(()=>{
            console.log("stirred properly");
            console.log("starting refrigartion")
            setTimeout(()=>{
                console.log("you icecream is chilled now now you can eat");
            },3000)
          },2000)

        },2000)
    },1000)
}

prepareIcecream()

