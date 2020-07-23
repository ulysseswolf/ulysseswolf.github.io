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
