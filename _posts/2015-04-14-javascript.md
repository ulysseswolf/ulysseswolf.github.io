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
// x is index
for (x in person) {
  text += person[x];
}
```

### The JavaScript for/of statement loops through the values of an iterable objects
```
for (let variable of iterable) {
  // code block to be executed
}

let aMap = new Map();
for (let [key, value] of aMap){
  ...
}
```

### remove element from Array
```
["apple", "banana", "pear", "kiwi", "melon", "blueberry"]
	
list.splice (list.indexOf("kiwi"), 1);
// Search for position of kiwi, and remove a single element when it appears
["apple", "banana", "pear", "melon", "blueberry"]
```

unshift/push - add an element to the beginning/end of an array
shift/pop - remove and return the first/last element of an array
A simple diagram...

   unshift -> array <- push
   shift   <- array -> pop

[javascript scope](https://blog.greenroots.info/javascript-scope-fundamentals-with-tom-and-jerry-ckcq723h4007vkxs18dxa97ae)
- There is something called, Global Execution Context and Function Execution Context.
- Each execution context has a special thing called, this and the reference to the Outer Environment.
- When we invoke a function, the JavaScript engine creates an outer reference for the current Function Execution Context.
- The function has access to the variables defined in the Outer reference and JavaScript engine does a look-up when it is unable to find it in the current execution context.


### pupeteer 

```
const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://danube-webshop.herokuapp.com");
  const content = await page.evaluate(() => {
    let data = [];

    let books = document.querySelectorAll(".preview");
    books.forEach((book) => {
      let title = book.querySelector(".preview-title").innerText;
      let author = book.querySelector(".preview-author").innerText;
      let price = book.querySelector(".preview-price").innerText;
      data.push({
        title,
        author,
        price,
      });
    });
    return data;
  });

  const jsonData = JSON.stringify(content);
  fs.writeFileSync("books.json", jsonData);
  await browser.close();
})();
```
