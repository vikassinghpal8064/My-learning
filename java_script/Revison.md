
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

# Higher order function (HOF)

* HOF are those functions which full fill either of the two thing
1. either take the function as an argument
2. or return the function as its result.


* note sometimes we don't know now many arguments are passed into the function
take a look at this example
```javascript
function hello(fun, name, age, sirname){
    fun(1,2,3,4,5,56,6,67);
    return ` hello ${name} ${sirname}, my age is ${age}`;

}
function consoling(...args){
    console.log(args[0],args[1]);
 console.log([...args]);
}
console.log(hello(consoling,"vikas",23,"singh"));
```

Sure! In JavaScript, **debouncing** and **throttling** are performance optimization techniques used to limit how often a function is 
executed, especially when it's called repeatedly in a short time, such as during user interactions like scrolling or typing.

---

## 🔍 What Are Debounce and Throttle?

| Feature     | Debounce                                  | Throttle                                  |
|-------------|--------------------------------------------|--------------------------------------------|
| **Behavior**| a programming technique used to ensure that a heavy or expensive function only executes after a specific period of "quiet time" or inactivity | Executes at least once in every `N` ms        |
| **Use Case**| Event cleanup (e.g., search input)         | Rate-limiting or periodic updates (e.g., scroll) |
| **Result**  | Delayed, single execution after inactivity | Executes frequently, capped at intervals     |

---

## ⏱️ Debounce Implementation

```javascript
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example usage
const debouncedSearch = debounce(() => {
  console.log("Searching for:", input.value);
}, 500);

// Simulated typing
input.addEventListener('input', (e) => {
  debouncedSearch();
});
```

### How It Works:
- Clears any pending timer when triggered.
- Waits 500ms after last call before executing.
- Ideal when you want to execute once after user stops input.

---

## 🕒 Th≠rottle Implementation

```javascript
function throttle(func=, limit) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Example= usage
const thrott=ledScroll == throttle(()= => {
  console.log("Scrolling:", window.scrollY);
}, 100);

window.addEventListener('scroll', throttledScroll);
```

### How It Works:
- Allows execution on first call, then enforces a `limit` (e.g., 100ms).
- Useful for limiting how often functions run during continuous user actions.

---

## ✅ Real-World Use Cases

### 🧩 Debounce Use Cases
1. **Search Box Filtering**:
   ```javascript
   const debouncedSearch = debounce(async (term) => {
     const data = await fetch(`/api/search?q=${term}`);
     console.log(data);
   }, 300);

   input.addEventListener('input', () => debouncedSearch(input.value));
   ```

2. **Address Auto-Complete**:
   ```javascript
   const debouncedInput = debounce(() => {
     // Fetch location or suggest addresses
   }, 200);

   address.addEventListener('input', debouncedInput);
   ```

3. **Form Validation Delayed**:
   ```javascript
   const validateForm = debounce(() => {
     checkEmail(), checkPassword();
   }, 500);

   form.addEventListener('input', validateForm);
   ```

### 🧭 Throttle Use Cases
1. **Scroll-Triggered Actions**:
   ```javascript
   const onScroll = throttle(() => {
     console.log(`Scrolled to ${window.scrollY}px`);
   }, 200);

   window.addEventListener('scroll', onScroll);
   ```

2. **Resize Event Handling**:
   ```javascript
   const handleResize = throttle(() => {
     console.log(`Window size: ${window.innerWidth}x${window.innerHeight}`);
   }, 150);

   window.addEventListener('resize', handleResize);
   ```

3. **Resize/Scroll-Based API Requests**:
   ```javascript
   const request = async () => {
     // Fetch window metrics
     // Only runs at most once every 100ms
   };

   const throttledRequest = throttle(request, 100);
   window.addEventListener('scroll', throttledRequest);
   ```

4. **Animation Frame Throttling**:
   ```javascript
   function animate(timestamp) {
     update();
     requestAnimationFrame(animate);
   }

   const throttledAnimation = throttle(() => {
     animate();
   }, 16); // ~60fps
   ```

---

## 🛠️ Practical Tips

- **Debouncing is for "after inactivity"**: Use when you want to perform an action after no more input (e.g., API calls, form 
validation).
- **Throttling is for "limit frequency"**: Use when you need a bounded rate of execution (e.g., scroll listeners, 
animations).
- **Be careful with debouncing timers**: Ensure they're cleared properly to avoid memory leaks or duplicate 
executions.

---

## 🧪 Performance Comparison

```javascript
function test(func, input) {
  const calls = [];
  const start = performance.now();

  const wrapped = func(() => {
    const time = performance.now() - start;
    calls.push(time);
  });

  // Simulate multiple calls in 100ms
  let id = setInterval(() => {
    wrapped();
    if (calls.length >= 10) {
      clearInterval(id);
      console.log(func); // 'debounce' or 'throttle'
      console.log('First call:', calls[0], 'ms');
      console.log('Last call:', calls[calls.length - 1], 'ms');
    }
  }, 20);
}

// Debounce: first call delayed until after 500ms silence
// Throttle: executes first, then limits next calls to every 200ms
```

---

## ✅ Summary

- **Debounce** → Delayed single execution after a pause. Best for form inputs, search, API calls.
- **Throttle** → Frequent execution, bounded by a max frequency. Best for scroll, resize, animations.

Choose one based on whether you're waiting for inactivity (debounce) or limiting how often something happens (throttle). Both 
are essential tools for writing responsive, performant JavaScript applications.


