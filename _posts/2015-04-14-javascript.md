---
layout: post
title: "JavaScript for loop"
description: ""
categories:    
- javascript
tags: [javascript]
---
{{ page.title }}
================
### The JavaScript for/in statement loops through the properties of an object:
```
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x];
}
```

### The JavaScript for/of statement loops through the values of an iterable objects
```
for (variable of iterable) {
  // code block to be executed
}
```

[javascript scope](https://blog.greenroots.info/javascript-scope-fundamentals-with-tom-and-jerry-ckcq723h4007vkxs18dxa97ae)
- There is something called, Global Execution Context and Function Execution Context.
- Each execution context has a special thing called, this and the reference to the Outer Environment.
- When we invoke a function, the JavaScript engine creates an outer reference for the current Function Execution Context.
- The function has access to the variables defined in the Outer reference and JavaScript engine does a look-up when it is unable to find it in the current execution context.
