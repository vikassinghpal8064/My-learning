//Singlet Pattern

class Database{
    private static instance:Database;
     private connectionString:string;
    private constructor(connectionString:string){
        this.connectionString=connectionString
        
    }
    public static getInstance(connectionString:string):Database{
        if(this.instance==null){
           this.instance=new Database(connectionString)
           return this.instance
        }
        else{
     return this.instance;
        }
    }
}

const Database1= Database.getInstance("MySql")
console.log(Database1)
const database2=Database.getInstance("MongoDB")
console.log(database2)