
# 🟢 Beginner (1–15)


1.Data types & type coercion
2.var vs let vs const
3.Truthy & falsy values
4.== vs ===
5.Template literals
6.Arrow functions
7.Array methods — map, filter, reduce
8.Object basics & dot vs bracket notation
9.Spread & rest operators
10.Destructuring (arrays & objects)
11.Default function parameters
12.for...of vs for...in
13.null vs undefined
14.String methods (slice, split, trim, etc.)
15.typeof operator

# 🟡 Intermediate (16–35)

1.Hoisting
2.Scope — global, function, block
3.Closures
4.The this keyword
5.call, apply, bind
6.Prototype & prototype chain
7.class syntax & inheritance
8.ES6 Modules (import/export)
9.Promises & .then/.catch
10.async/await
11.Event loop & call stack
12.Callback functions & callback hell
Higher-order functions
Shallow vs deep copy
Object.keys, Object.values, Object.entries
Optional chaining (?.) & nullish coalescing (??)
setTimeout vs setInterval
DOM manipulation basics
Event bubbling & capturing
localStorage vs sessionStorage vs cookies

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
Want me to deep-dive any of these topics with explanations + code examples? I can also generate mock interview Q&As for any section.



# HOISTING

  what i have understood that hoisting is the using a variable or callings a function before 
  its decleration. In var, let and const => hoisting is differnt in var you will get undefined 
  but in let and const you will get reference error.


  note this code : 
  ```javascript
say();        // here you will get the error say is not a function but if you use let and const
              // in place of var , you will get error of saying you cannot use variable intialization
var say=function (){
                        console.log("hello")
                        }
```
# DTZ(dead temporal zone)
   when a particular variable is hoisted and when it is intialized during that time the variable is in
   the memory but remain non accessible . this period is called DTZ

3. if(true){
    const name="vikas singh pal";
    
}                           // note this code this will  give error will say name is not decleared but work in var 

console.log(name);

# SCOPE(GLOBAL, FUNCTIONAL, AND BLOCK)

```javascript

  function none(){
if(true){
    var a=10;
    let b=10;
    console.log(a+b);   // note this code as var has functional scope it means it can be used
                           // any where inside the function but not in the case of let and const
                           // this code snipet will shoe error beacuse of varible b.
}
console.log(a);
console.log(b);
}

none()

```

#  CLOSURE
 
 ```javascript

   function outer(){
    let firstName="Vikas";                         //  this is the example of simple closure, as the inner function
                                                       // remember about outer function.
    
    function inner(){
        let lastName="Singh";
        return `this is my full name ${firstName} ${lastName}`
    }
    return inner();
}


console.log(outer());

```

# important screenshot to consider

![firstOne](../Resorces/Screenshot%202026-04-03%20at%2011.42.59 AM.png)

![SecondOne](../Resorces//Screenshot%202026-04-03%20at%2011.46.45 AM.png)

# Async , Await, Callback Functions, Promises

1. CallBack Hell

```javascript
// lets assume we want to make icecream step by step

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
```

2. now how to handle this issues we have promises
![promiseStructure](../Resorces//Screenshot%202026-04-03%20at%2012.16.08 PM.png)
 
* .then work when the promise is resolved and .catch works when the promise is rejected
* Exampkle showing .then and .catch chaining

```javascript
function handlePromise(){
    let val= Math.floor(Math.random()*100);
    console.log(val);
   
  if(val%2==0){
    return new Promise((resolve,reject)=>{
        resolve(val);
    })
  }
  else{
    return new Promise((resolve, reject)=>{
        reject("rejected as the value is odd")
    })
  }

}
//handlePromise().then();
console.log(handlePromise().then((val)=>{
console.log(`value is resolved with value ${val}`);
})
.catch((val)=>{
console.log(val);
}))
```

* This is the new way of the promises Try and catch

``` javascript
function handlePromise(){
    let val= Math.floor(Math.random()*100);
    console.log(val);
   
  if(val%2==0){
    return new Promise((resolve,reject)=>{
        resolve(val);
    })
  }
  else{
    return new Promise((resolve, reject)=>{
        reject("rejected as the value is odd")
    })
  }

}
async function handTryandCatch(){
    console.log("fetching data so wait")
try{
    let res= await handlePromise();
    
    console.log("your promise is accepted with value"+ res);
 
}
catch(err){
    console.log(err)
}

}
handTryandCatch();


```

# Shallow Vs Deep Copy

```javascript
let Person={
    name:"vikas singh pal",
    phone:"8287216314",
    address:{
        street:"mohan garden",
        city:"new Delhi",
        State:"Delhi",
    }
}

let shallowCopy= {...Person};
shallowCopy.address.State="mumbai";
console.log(shallowCopy);
```
* note in above code if you copy the object and update the value it also update the original object as well whic you dont want then use Deep Copy

* Use of structuredClone(obj)

```javascript
let Person={
    name:"vikas singh pal",
    phone:"8287216314",
    address:{
        street:"mohan garden",
        city:"new Delhi",
        State:"Delhi",
    }
}

let shallowCopy= structuredClone(Person);
shallowCopy.address.State="mumbai";
console.log(shallowCopy);
console.log(Person);
```

# Use of Object.keys() , Object.values(), Object.entries();

```javascript
let Person={
    name:"vikas singh pal",
    phone:"8287216314",
    address:{
        street:"mohan garden",
        city:"new Delhi",
        State:"Delhi",
    }
}

let shallowCopy= structuredClone(Person);
shallowCopy.address.State="mumbai";
console.log(Object.keys(Person)) // it retuen array of Keys
console.log(Object.values(Person));// it returns array of Values

console.log(Object.entries(Person));// it return Array of matrix ecah element contains 2 values
```
# Optional Chaining (?.) and Nullish Coalescing (`??`)

``` javascript
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
```

# Use of setTimeout(), setTimeinterval() and setImmediate(only in node js)
```javascript
// Three Api setInterval, setTimeout,setImmediate
let val=10
setTimeout(()=>{
    val++;
    console.log("i am running with speed "+val);
},2000)
let count=0;
let id=setInterval(()=>{
    count++;
    if(count==5){
     clearInterval(id);
    }
    else{
        console.log("i am running .....")
    }
},1000);

```



