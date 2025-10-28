---
title: Async Calls
description: async calls
---

- Sometimes JavaScript needs some time:
  - retrieving data from a database;
  - reading a file;
  - submitting a form.
- You can't know exactly how long this action will take.
- But you give the user some feedback. (no frozen browser)

**Solution**: use ASyNC calls.

## Sync

- Calling a function means the function is added to the _callstack_.
- The next function is called when the previous function completes.
  ![[sync.png]]

## Async

- Calling a function means it is added to the _callstack_.
- Possibility to execute the next function, while the previous function is executing.
- Execution of the original function continues.
  ![[async.png]]

- **Async functions**: `setInterval()`, `setTimeout()`.
- **Called** directly after each other: `first()`, `second()`, and `third()`.
- Two processes are **executed simultaneously**:
  - sequence of `first()`, `second()`, and `third()`;
  - `setInterval()` scheduling / callback.

## Promises

- When the result isn't available immediately.
  (Retrieve data from a server, using `setTimeout()`,...)
- While we wait the function returns a "_promise_".
- This promise has one of the following states:
  - **pending**: no result yet, promise hasn't been completed;
  - **fulfilled**: there's a result, promise has been completed;
  - **rejected**: promise was executed, but there was an error.

## Async / Await

- **NO PANIC**, you don't need to write promises yourself.
- You only need to be able to use the _async_ and _await_ keywords.
- If you're using 'await' in a function, that function needs to be `async`. (`const init = async () => {...}`)

## Fetch

- A JavaScript API to load external resources. (text, JSON,...)
- Works over HTTP(S).
- Returns a promise.
- A two step process:
  1.  await for the Response object;
  2.  retrieve the content of the Response object:

**Example**:

```javascript
const getSongtext = async () => {
  console.log("Started loading the txt file");
  const response = await fetch("assets/data/songtext.txt");
  console.log(response);
  const lyrics = await response.text();
  console.log(lyrics);
  console.log("finished_ _processing the txt file");
};
```

### Response methods

- `text()` -> textural data
- `json()` -> json encoded data (JavaScript objects as text files)
- `blod()` -> binary data (images, video,...)
- `arrayBuffer()` -> data as an array of bytes
- `formData()` -> key / value pairs of a form

## Json

- A text based format.
- Platform / language independent:
  - usable on Windows, Linux, Mac,...;
  - usable in JavaScript, PHP, C#, Python,...
- 2 principles:
  - collection of **key-value pairs** (object);
  - **list** with values (array).

Json is not a JavaScript Object!

- **JSON**: property name (the key) needs to be wrapped in quotes `"..."`.
- **JSON**: types are limited to _String_, _number_, _array_, _true_, _false_, _null_, or another (JSON) _object_.
- **JSON**: values cannot be functions.

### Fetching a JSON file

- Reading a JSON file / service.
- Uses the `json()` method.
- You can use the resolved item as a regular JavaScript object!

**Example**:

```javascript
const getDate = async () => {
  console.log("start loading the JSON file");
  const response = await fetch("assets/data/nero.json");
  const data = await response.json();
  console.log("finish loading the json");

  document.querySelector(".artist").textContent = data.artist;
  document.querySelector(".album").textContent = data.album;
  document.querySelector(".lyrics").innerHTML = data.lyrics
    .map((line) => `<p>${line}</p>`)
    .join(``);
};
```
