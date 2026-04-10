# Document.create element
how to create the element and append the child in the dody of the document.

```javascript
let element= document.createElement("div");
element.className="btn";  // there are  multiple property such as id, style,className
document.body.appendChild(element);


const element2 = document.createElement("h2");
element2.style = "color: red; background-color: blue";
```

# how the react element is different from the document.createElement

A virtual DOM is when a representation of the UI is kept in memory and synced with the DOM. The main goal of the virtual DOM is to check for updates in memory and to update the DOM only when necessary. More on that later.

```javascript
import React from "react";
const element = React.createElement("h1");// here it create a object but in document.create element it acctually reate the elemnent that can be inserted in the acctual DOM
console.log(element);
// Simplified output
// {
//   type: 'h1',
//   props: {}
// }
```

# Recap

 * A React Element is the smallest building block of a User Interface.
* React.createElement() returns an object that we call a React Element.
* The function signature is: React.createElement(type, options, children).
* React.createElement("h1", {className: "text--regular"}, "Welcome!") creates an object  
* describing the following element: <h1 class="text--regular">Welcome!</h1>
* A virtual DOM is when a representation of the UI is kept in memory and synced with the DOM.
* The main goal of the virtual DOM is to check for updates in memory and to update the DOM only when necessary.

* React creates the virtual representation of your UI in the memory, and then ReactDOM receives that and syncs your UI (and the changes to it) to the DOM. This process is called reconciliation

