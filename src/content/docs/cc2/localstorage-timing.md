---
title: Localstorage & Timing
description: localstorage & timing
---

## Timing

### The `setTimeout()`

Sets a timer which executes a function or specific piece of code once the timer expires.

Execute a **specific piece of code**:

```javascript
// Executed after 1 second.
setTimeout(() => {
  console.log("Delayed for 1 second");
}, "1000");
```

Execute a **function**:

```javascript
// Executed after 2 seconds.
setTimeout(showInfo, "2000");
```

### The `setInterval()`

Calls a function or executes a code snippet, with a fixed time delay between each call.

Executing a **code snippet**:

```javascript
// Executed every second.
setInterval(() => {
  console.log("Delayed for 1 second");
}, "1000");
```

Executing a **function**:

```javascript
// Executed every 2 seconds.
setInterval(showInfo, "2000");
```

## Local storage

Allows you to save data across browser sessions.

**Saving** an item:

```javascript
localStorage.setITem("myCat", "Tom");
```

**Reading** an item:

```javascript
const cat = localStorage.getITem("myCat");
```

**Removing** an item:

```javascript
localStorage.removeITem("myCat");
```

**Clearing** the whole local storage:

```javascript
localStorage.clear();
```
