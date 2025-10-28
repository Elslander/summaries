---
title: Canvas
description: canvas
---

## Basic Usage

### What is canvas?

- An HTML element -> `<canvas></canvas>`.
- A built-in JavaScript API for drawing graphics and animations.

### Basic usage

Create a `<canvas>` element in HTML.

```html
<canvas class="drawing-surface" width="150" height="150"></canvas>
```

Address the element in JavaScript

```javascript
const $canvas = document.querySelector(".drawing-surface");
const context = $canvas.getContect("2d");
```

## Drawing shapes

### The grid

Point `(0, 0)` is in the upper left corner.
All elements are positioned to this point.
Move this point using _transformations_.

### Drawing rectangles

- `fillRect(x, y, width, height)` -> draws a filled rectangle in black
- `fillStyle` -> set a colour for the object
- `strokeStyle` -> sets a colour for the stroke
- `lineWidth` -> sets the width of the stroke
- `strokeRect(x, y, width, height)` -> draws a rectangular outline
- `clearRect(x, y, width, height)` -> clears the specified area making it transparent

### Colours

- `fillStyle` = colour:
  sets the style used when filling shapes.
- `strokeStyle` = colour:
  sets the style used for shapes' outlines.

```javascript
// Use backticks
context.fillStyle = `orange`;
context.fillStyle = `#FFA500`;
context.fillStyle = `rgb(255, 165, 0)`;
context.fillStyle = `rgba(255, 165, 0, 1)`;
```

## Drawing paths

- `beginPath()` -> Creates a new path. Once created, future drawing commands are directed into the path and used to build the path.
- `closePath()` -> Closes the path so that future drawing commands are once again directed to the context.
- `moveTo(x, y)` -> Moves the starting point of a new sub-path to the `(x, y)` coordinates.
- `lineTo(x, y)` -> Connects the last point in the subpath to the x, y coordinates with a straight line.
- `stroke()` -> Draws the shape by stroking its outline.
- `fill()` -> Draws the shape by filling the shape.

### `closePath()`

Necessary when:

- You want to create a **closed shape** that needs to be filled.

Not necessary when:

- You're drawing open paths like lines or curves.
- You're creating custom shapes where you don't want the last point connected to the first.

## Drawing circles

- `arc(x, y, radius, startAngle, endAngle)` -> adds an arc to the path which is centred at `(x, y)` position with radius r starting at startAngle and ending at endAngle (clockwise).

## Drawing text

- `fillText(text, x, y)` -> Fills a given text at the given `(x, y)` position.
- `strokeText(text, x, y, [maxWidth])` -> Strokes a given text at the given `(x, y)` position.

## `Window.devicePixelRatio`

- Canvas is a bitmap and looks blurry because:
  - CSS pixel is not the same as a device pixel.
  - On Retina screens the Device pixel ratio is 2, meaning 1 CSS pixel actually represents 2 Device pixels.
- So we need to double every pixel to get sharp results.
- Make the canvas twice as large (width & height attribute).
- And scale it down to the original size with inline CSS.

## Animations

- **Example**: moving an object,...
- We need some kind of repetition to adjust the position.

### Functions with repetition

- ~~`setInterval(function, delay)` -> Starts repeatedly executing the function specified by function every delay milliseconds.~~
- ~~`setTimeout(function, delay)` -> Executes the function specified by function in delay milliseconds.~~
- `requestAnimationFrame(callback)` -> Tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint.

### `requestAnimationFrame`

- Is synchronised with the repaint function of the browser.
- Is synchronised with the refresh rate of your screen.
- Accelerates / slows down / pauses automatically.
- Saves battery time.

## Using images

You _draw_ the images.

```javascript
// set image source (where the image is)
image = new Image();
image?src = './assets/protest.jpeg';

// draw image on canvas when loaded
image.addEventListener('load', () => {
	drawImage(image):
});
```
