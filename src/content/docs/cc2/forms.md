---
title: Forms
description: forms 
---

## Recap

### Forms

- Collecting data from a server.
- Sending data to the server.

### Concepts

- Structure forms with HTML. (web1)
- Style forms with CSS. (web1)
- Sending to the server. (web2)
- Client- and server-side validation. (web2)
- Handling forms client-side. (cc2)

## Forms and JavaScript

### Getting form elements

Using `querySelector()` and `querySelectorAll()` we can for form (elements) in JavaScript.

Selecting the **whole form**:

```javascript
// Replace *.auth__form* with the class your form has.
const $form = document.querySelector(".auth__form");
```

Selecting **specific inputs** (using ID):

```javascript
// You don't actually need to use an ID but this way you are sure you have the specific input you want to select.
const $email = document.querySelector("#email");
const $password = document.querySelector("#password");
```

Selecting **multiple elements**:

```javascript
// This one selects all the inputs that are mandetory to fill in.
const $requiredInputs = document.querySelectorAll("[required]");
// This one selects all the checkboxes.
// If we look at this we can assume we can use any attribute to select things by using this style of selector.
const $allCheckboxes = document.querySelectorAll('[type="checkbox"]');
```

### Input events

"input" event:

- the value of a `<input>`, `<select>`, or `<textarea>` has changed
- triggered on each keystroke

"change" event:

- element loses focus AND the value has changed
- immediately triggers when a `<checkbox>` value changes or a new option is selected in the `<select>` element

**Example**:

```javascript
const $input = document.querySelector("#email");
const $feedback = document.querySelector("#feedback");

// This is nothing crazy, they are putting everything on one line instead of making a separate handle function.

// FOCUS: means when an input field becomes active the function gets triggered.
$input.addEventListener(
  "focus",
  () => ($feedback.textContent = "focus triggered")
);
// BLUR: means when an input field becomes inactive the function gets trigered.
$input.addEventListener(
  "blur",
  () => ($feedback.textContent = "blur triggered")
);
// INPUT: means the function gets triggered every time a character gets typed in an input field.
$input.addEventListener(
  "input",
  () => ($feedback.textContent = "input triggered")
);
// CHANGE: i don't really know :)
$input.addEventListener(
  "change",
  () => ($feedback.textContent = "change triggered")
);
```

### Getting values

The input control's value. You can GET and SET this.

Getting the value from regular input fields that return a string:

```javascript
const email = document.querySelector("#email").value;
```

Getting the value from the kind of inputs that return a state (true/false) rather than a string:

```javascript
// This is for the state of a checkbox (checked / unchecked).
const isSubscribed = document.querySelector("#subscrube").checked;
```

### The `preventDefault()`

The default behaviour of a form is to send data to a server. We want to prevent this. We will handle the submission.

Default behaviour:

- **Action**:
  - URL that processes the form submission.
- **Method**:
  - The HTTP method to submit the form with.
  - The only allowed methods/values are POST and GET.

### The _submit_ event

Listening to the _submit_ event:

```javascript
const $form = document.querySelector(".auth__form");

const ini = () => {
  $form.addEventListener("submit", handleSubmit);
};

init();
```

Handling the _submit_ event:

```javascript
const handleSubmut = () => {
  // I guess we always have to prevent its default behaviour because a form always wants to sent data to a server but in CC we never let it.
  event.preventDefault();
  console.log("Nope, not to the server. I will handle this.");
};
```

### Submitted values

Getting single values, one-by-one:

```javascript
// Selecting the form you want to get values from.
const $form = event.currentTarget;

// Specifying the different values you want (mail, password).
const email = $form.email.value;
const password = $form.password.value;

// Displaying the values in the console.
console.log("email: ", email);
console.log("password: ", password);
```

### FormData

Getting all elements at once:

```javascript
// Selecting the form.
const $form = document.querySelector(".auth__form");

// Funtion to handle the submit event.
const handleSubmit = (event) => {
  // Preventing default behaviour.
  event.preventDefault();

  // Selecting the form.
  const $form = event.currentTarget;
  // Storing the data from the form. (not values)
  const formData = new FormData($form);
  // Storing the values that were put in the form.
  const formValues = Object.fromEntries(formData);

  // Displaying the values in the console.
  console.log(formValues);
};

const init = () => {
  // Listening for the submittion of the form.
  $form.addEventListener("submit", handleSubmit);
};

init();
```
