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
// const fs= require("fs");

// let readable= fs.createReadStream("./java_script/Revision.md",{encoding :'utf-8'});

// readable.on(("reading",(chunk)=>{
//     console.log(chunk);
// }))

const fs = require('fs');
const path=  require("path");
//console.log(path.format("/lol"));

const readable = fs.createReadStream('builder.ts', { encoding: 'utf8' });

try{
    readable.on('data', chunk => {
  console.log("Received chunk:", chunk);

  readable.o
});
}
catch(err){
    console.log(err);
}
