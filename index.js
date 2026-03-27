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


function add_all_number(num){
  let string_num= num.toString();
  let sum=0;
  for (let i=0;i<string_num.length;i++){
    let val = parseInt(string_num[i]);
    sum=sum+val;
  }
  return sum;
}

console.log(add_all_number(78912345));
let i=0;
function capitalize(str){
    let my_string="";
    
    my_string=my_string+str.charAt(i++).toUpperCase();
    for(i=i;i<str.length;i++){
     if(str[i]=' '){
        my_string=my_string+str.charAt(i++).toUpperCase();
        //i--;

     }
     else{
       my_string= my_string+str.charAt(i);
     }

    }
    return my_string;
}

console.log(capitalize("hello my name is vikas"))



function find_vowel(str){
    let count=0;
  let vowel_string="aeiouAEIOU"
   for(let i=0;i<str.length;i++){
    if(vowel_string.includes(str.charAt(i))){
        count++;
    }
    
   }
   return count;
}
console.log(find_vowel("AeiouAEIOUpmln"));

function check_armstrong(num){
    let my_num=0
    let str_num= num.toString();
    for (let i=0;i<str_num.length;i++){
        let num= parseInt(str_num[i]);
        my_num=my_num+num*num*num;
    }
    return my_num==num ;
}

console.log(check_armstrong(153));
