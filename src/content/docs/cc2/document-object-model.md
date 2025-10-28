---
title:  Document Object Model (DOM)
description: dom
---

To manipulate the structure.

## The Web

### Developing for the web

- **HTML**: the structure.
- **CSS**: the layout.
- **JavaScript**: interactivity in the browser.

- **PHP**: interactivity on the server.
- **IDE**: application to write code.

## Adding JavaScript

### Setup

- Same HTML structure as Web 1.
- CSS in the head.
- `<script src="path/to/script.js"></script>`
- Just before the closing `</body>` tag.
- JavaScript at the bottom of the document to avoid _render blocking_.

### init()

- Best practice.
- Functions that initialise all other functions. This is the starting point of your code.

```javascript
const init = () => {
  // "init" is just a name, this can be anything
  // This is the entry point of our script
  console.log("Hello from th external script!");
};

init();
```

### Console

- Open developer tools > console. (google inspector)
- Use the console to watch for errors.
- Use `console.log()` to test.
- **Always leave your console open while developing!**

## Arrow functions

Arrow functions are a shorter way to write functions by using the fat arrow notation. (`=>`)

| Normal function                                               | Arrow function                                                   |
| ------------------------------------------------------------- | ---------------------------------------------------------------- |
| function init() {<br> console.log("Hi!");<br>}<br><br>init(); | const init = () => {<br> console.log("Hi!"):<br>}<br><br>init(); |

**Example**:

```javascript
const calculateSurfaceArea = (someWidth, someHeight) => {
  let area = someWidth * someHeight;
  return area;
};

let result = calculateSurfaceArea(10, 6);
console.log(result);
```

### Arrow function with parameters

**No parameters**:

```javascript
const doSomething = () => {
  /* Code */
};
```

**1 parameter**:

```javascript
const doSomething = (param) => {
  /* Code */
};
```

**2 or more parameters**:

```javascript
const doSomething = (param1, param2) => {
  /* Code */
};
```

### Single- or Multi-line

**Single line block**:

```javascript
const sumNumbers = (number1, number2) => number1 + number2;
```

**Multi-line block**:

```javascript
const sumNumbers = (number1, number2) => {
  const sum = number1 + number2;
  return sum;
};
```

## The DOM

- Document Object Model.
- Programming interface for structured documents (like HTML).
- Connects HTML with script.
- Manipulate the structure.
- Available for all programming languages.

### Terminology

- **Document**: page loaded in the browser.
- **Node**: part of the document.
  - document node
  - root node
  - element node
  - attribute node
  - text node

## Select HTML Element(s)

### querySelector

- Using a CSS selector.
- Selects exactly 1 element.
- Only the first element if more than one matches the selector.
- Can be called from any element (node).
- Naming convention: variables that contain an HTML element should start with a dollar sign `$`. Examples:
  - $listItem
  - $menu
  - $nav

### querySelectorAll

- Using a CSS selector.
- Returns a NodeList, this is a list of HTML elements.
  - A NodeList is not an Array!
  - Can be converted using `Array.from()`.
- Can be called from any element (node).

### FYI

- Also other functions available:
  - `getElementByID`
  - `getElementByClassName`
  - `getElementByTagName`
- We do not use them in this course.
- `querySelector` and `querySelectorAll` cover everything.

### Children & siblings

- Multiple functions available:
  - `firstElementChild` and `lastElementChild`
  - `parentNode`
  - `nextElementSibling` and `previousElementSibling`
  - `children`
- **Note**:
  - `firstChild`, `lastChild`, `nextSibling`, and `previousSibling` mostly return an empty textNode (whitespace).

## Manipulating elements

### Select and manipulate content

- `textContent`
  - Get and set text in an element.
  - HTML tags and attributes are ignored.
- `innerHTML`
  - Get and set text in an element:
    - _get_: HTML tags ad attributes are received as plain text.
    - _set_: possible to set HTML tags and attributes.

Which one do you use?

- `textContent` if no further HTML is required.
- Otherwise use `innerHtML`.

Why?

- `innerHTML` is a risk for XCC (Cross-Site Scripting).
- `<script>` is also an HTML tag...

Check MDN for the following function. The names speak for themselves.

- `getAttribute`
- `setAttribute`
- `hasAttribute`
- `removeAttribute`

### Manipulate the style

#### Style attribute

- All elements contain a style attribute with a CSS Style Declaration Object.
  - Value is mostly empty.
  - Is only set with inline CSS.
- Try to avoid this!

#### classList

- Collection of all classes used on an element.
- Some important function:
  - `add`
  - `remove`
  - `contains`
  - `toggle`
- Perfect way to set style using JavaScript.
- All style rules stay in CSS.

> **Adding another class**
> If an element already has a class, you need to use
> _tag_.classList.add("...").

#### Custom properties

- Update custom properties on the fly with JavaScript.
- CSS variables have access to the DOM, which means that you can change them with JavaScript.
- `setProperty`
- Perfect way to dynamically style using JavaScript.

## Creating new elements

In 3 steps:

1. create an element;
2. set the content (manipulate styling);
3. attach to the DOM.

### Step 1

- Create an empty element using `createElement()`.
  - _Parameter_: which element.
  - _Returns_: the element itself.

### Step 2

- `textContent`: if content is only text.
- `innerHTML`: if content also contains HTML.
- `classList`: to set classes.
- `setAttribute`: to set other attributes.

### Step 3

Element must be attached to the DOM, otherwise it's not usable.

- `appendChild`: last child of the parent.
- `insertBefore`: before another child element, also set that child element.

## Template literals

Using backtick (\`\) characters, we can:

- multi-line strings;
- string interpolation with embedded expressions.

```javascript
`string text``string text line 1
string test line 2``string text ${expression} string text`;
```

## Random numbers

### Between 2 values

Random number **between 0 and 1**:

```javascript
Math.random();
```

Random number **between 0 and 10**:

```javascript
Math.random() * 10;
```

random number **between a min and max value**:

```javascript
Math.random() * (max - min) + min;
```

**Snippet to generate random numbers** (basically a template):

```javascript
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
```
