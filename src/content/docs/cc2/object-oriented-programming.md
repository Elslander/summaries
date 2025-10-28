---
title: Object Oriented Programming (OOP)
description: oop
---

## Programming

- **Variables**: small pieces of data.
- **Control flow**: if, if else, switch, loops,...
- **Functions**: reusable blocks of code.
- **Data structures**: strings, numbers, arrays, objects.

## Procedural programming

This is what we have done so far.

- Programming paradigm (style of programming).
- Step by step.
- Splitting up programs into functions (procedures) and variables (data).

## Object-Oriented Programming (OOP)

- Other programming paradigm (style of programming).
- Modelling a system as _a collection of objects_.
- Each object represents some particular aspect of the system.
- Object contains both _methods_ (functions) and _properties_ (data).
- Fundamental to many programming languages, including **PHP**, C#, C++,...

Three main concepts:

- Classes and Instances
- Inheritance
- Encapsulation

### 1 Classes and Instances

#### Class

The blueprint (templates) for creating an object.

A class describes the:

- **properties**: data, the characteristics
- **methods**: behaviour, the functionality

#### Object

- An instance of a class.
- An object is created with the data types and behaviour as described by the class.

### 2 Inheritance

Inheritance allows a class (child/subclass) to inherit properties and behaviours (methods) from another class (parent/superclass).

Why?

- Promotes code reusability.
- Creates a hierarchy of classes.
- Simplifies maintenance by modifying the parent class without changing child classes.

### 3 Encapsulation

The practice of restricting access to certain properties and methods of a class to protect the internal state and enforce controlled interactions.

- **public interface**: properties and methods accessible to external code (outside the class)
- **private interface**: properties and methods that are hidden from external code and only accessible within the class

## OOP in JavaScript

### Creating a Class

- Using the _class_ keyword.
- Using a _constructor_ function.
- **Best practice**: Create a new JavaScript file for every class.
- Do not forget to import your new file in index.html!

### Constructor

Constructor is executed when a new instance (object) is created.

It receives parameters who will be used to set the properties describing the object.

'this.' refers to itself, the object that is being created.

### Default values

Sometimes we won't receive parameters. In this case, we can add a default value.

If we receive a parameter, we will use it. Otherwise, we will use the default value.

| Class                                                                                                                                                                                                                                                                                   | Object                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| _Class_ keyword<br><br>In a new JS-file<br>- Class.js (uppercase)<br>- 1 file = 1 class<br>- _PascalCase_<br>- update index.html<br><br>**Constructor**<br>- executed when a new instance is created<br>- set properties using default values or parameters received<br><br>**Methods** | _new_ keyword<br><br>Creates a new instance of the class.<br><br>Can use the functionalities and properties described in the class. |

### Inheritance

The _extends_ means that a class inherits all the properties and methods from the parent-class.

The _super_ methods passed parameters from the child-class to the constructor of the parent-class.

### Static functions

The _static_ keyword defines a static method or field for a class.

Static properties (fields and methods) are defined on the class itself instead of each instance.

## Examples

### Class

```javascript
class name {
  // A constructor is used to set properties of a class when initialising an objext of that class
  constructor(param1, param2 = 25) {
    // param2 gets a default value
    this.property1 = param1;
    this.property2 = param2; // No value given? property2 will be 25
    this.property3 = 50; // This value can never change
  }

  // Method is basically the same as the 'functions' we have been using
  method1() {
    // what the method does
  }
}
```

### Creating an object of a class

**Class** square:

```javascript
class Square {
  constructor(x, y, size = 50) {
    // ask for properties for the square
    this.x = x;
    this.y = y;
    this.size = size;
  }

  // always have a display function (if you want to see something :) )
  display() {
    // when you want to use a property that you set in the constructor, always place 'this.' in front of it
    rect(this.x, this.y, this.size, this.size);
  }
}
```

**Creating an object of the class** square:

```javascript
// same way we create a variable
// square (no capital) is the object name
let square;

function setup() {
  createCanvas(400, 400);
  // variableName = new className(capital)(properties...);
  // third parameter is optional because in the class it gets a default value ('size = 50')
  square = new Square(200, 200, 100);
}

function draw() {
  background(220);
  // call the display function of that object (all objects of a class have access to the methods of the class)
  square.display();
}
```

### Inheritance

**Class** shape:

```javascript
class Shape {
  // just a regular class
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
  }

  update() {
    this.y += speed;
  }
}
```

**Class** square:

```javascript
// extends means this class (Square) can also use the methods and properties of the parent class (shape)
class Square extends Shape {
  constructor(x, y, size, speed) {
    // super gives on the parameters entered into the constructor of this class onto the constructor of the parent class
    super(x, y, size, speed);
  }

  display() {
    rect(this.x, this.y, this.size, this.size);
  }
}
```

### Static Functions

**Class** point:

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // method that is tied to the class not to an object of the class
  static distance(p1, p2) {
    return dist(p1.x, p1.y, p2.x, p2.y);
  }
}
```

**Testing out the static method**:

```javascript
let point1;
let point2;

function setup() {
  createCanvas(400, 400);
  point1 = new Point(50, 50);
  point2 = new Point(300, 300);
  // distance method is not tied to objects so you use the class name to call the method, const distance stores the value the method returns
  const distance = Point.distance(point1, point2);
}
```
