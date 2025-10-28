---
title: Events
description: events
---

Adding interactivity.

## What is an event

- Things that happen on a webpage in our browser.
- Our browser "fires" some kind of signal.
- JavaScript can react to these signals.
- Creates interactivity on a page.

### Examples

- The user selects, clicks, or hovers the cursor over a certain element.
- The user presses a key on the keyboard.
- The user resizes or closes the browser window.
- A web page finishes loading.
- A form is submitted.
- A video is played, paused, or ends.
- An error occurs.

## Reacting to an event

### Listen and handle

Open your console on any website.
Paste the following snippet to see all events.
`monitorEvents(window)`

> **George Berkeley**
> If a tree falls in a forest and no one is around to hear it, does it make a sound?

- Events occur all the time...
- To react to an event, you need to attach an event listener to it:
  - a block of code that runs when the event fires;
  - sometimes also called event handlers.

### The `addEventListener`

- Available on all DOM elements.
- Requires 2 parameters:
  - **type**: event type you want to listen to;
  - **listener**: which function (= event handler) should be executed.
- Don't use parentheses after the function (`handleClickButton()`). The function will be executed when the page loads instead of when you tell it to.

#### Example

```html
...
<button>Click</button>
```

```javascript
const $button = document.querySelector("button");

// Anonymous arrow function
$button.addEventListener("click", () => console.log("clicked"));

// Anonymous function with event object and block body
$button.addEventListener("click", (event) => {
  console.log("clicked");
});

// Named function (preferred option)
$button.addEventListener("click", handleClickButton);
```

#### Naming convention

naming: _`handle[event][element]`_

- handleClickButton
- handleSubmitForm
- handleFocusInput
- ...

### The `removeEventListener`

- Same 2 parameters:
  - **type**: event type you want to listen to;
  - **listener**: which function (= event handler) should be stopped.

#### Example

```javascript
const $button = document.querySelector("button");
$button.removeEventListener("click", handleClickButton);
```

### Types of events

Their names tell you what they do.

| Event      | What it does                                 |
| ---------- | -------------------------------------------- |
| click      | the element clicked                          |
| dblclick   | the element double-clicked                   |
| mouseenter | the mouse point enters the element           |
| mouseleave | the pouse pointer leaves the element         |
| mousemove  | the mouse pointer moves on the element       |
| mouseover  | the mouse pointer moves in on the element    |
| mouseout   | the mouse pointer moves out from the element |
| keyup      | a key is up                                  |
| keydown    | a key is down                                |
| blur       | the element is not focused                   |
| focus      | the element is focused                       |
| input      | value enter to input field                   |
| change     | value change on input field                  |

## `currentTarget` vs `target`

**target**: the DOM element that has triggered the event.
**currentTarget**: the DOM element linked to the eventListener.

## The `preventDefault`

- Prevents the default behaviour of an event.
- We will handle the behaviour ourselves.
- For example:
  - stop navigation when clicking on a link to prevent complete page refresh;
  - stop submission of a form for validation.

## Event propagation

- Events propagate to all parent elements!
- Clicking a child element means clicking all parent elements.

### `stopPropagation`

- Stop the propagation of the event to parent elements (Bubbling).
- Prevents that the same event handler is executed multiple times.
