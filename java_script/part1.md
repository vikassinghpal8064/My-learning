# 50 Questions of javaScript.

1. Write a function sumDigits(num) that returns the sum of all digits in a number.  
Example: 1234 → 10

```javascript
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
```
2.Write a function capitalizeWords(str) that capitalizes the first letter of each word in a sentence.  
Example: "hello world" → "Hello World"

```javascript
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
```
3.Write a function countVowels(str) that counts the number of vowels in a string.  
Example: "javascript" → 3


```javascript
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
```
4.Write a function isArmstrong(num) that checks if a number is an Armstrong number.  
Example: 153 → true (since 1^3 + 5^3 + 3^3 = 153)

```javascript
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
```
5.Write a function fizzBuzz(n) that prints numbers from 1 to n, but:
	◦ For multiples of 3 print "Fizz"
	◦ For multiples of 5 print "Buzz"
	◦ For multiples of both 3 and 5 print "FizzBuzz"


```javascript
function fizzBuzz(n){
if (n%3==0){
    return "Fizz"
}
if (n%5==0){
    return "Buzz"
}
if (n%3==0 & n%5==0){
    return "FizzBuzz"
}
}
```

