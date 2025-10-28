---
title: Micro Interactions
description: micro interactions
---

## Concept

**Changes between states**:

- Default -> Hover
- Default -> Active
- Disabled -> Enabled
- Unchecked -> Checked
- Invisible -> Visible
- Out of view -> In to view

## HTML

### Interactive elements

- `<a>` tag: links to other pages or parts of a page.
- Input types:
  - checkbox (:checked state);
  - radio buttons (:checked state).
- `<button>` tag:
  - `type="submit"` for submitting forms;
  - `type="button"` for client-side interactions with javascript.

#### Popover API

Make any element a popover.
Use for non-blocking UI.

1. Add the `popover` attribute to any element to make it a popover. This wil hide it.
2. Give it an ID.
3. Add the `popovertarget` to any button with the ID of the as the value to open it.
4. Light-dismiss bu default: clicking outside the popover element will hide it.

**Examples**:
Popover.

```html
<button class="toggle-popover" popovertarget="myPopover">Toggle popover</button>
<div class="popover" id="myPopover" popover>
  <p>This is a popover</p>
</div>
```

Manual popover.

```html
<button class="toggle-popover" popovertarget="myPopover">Toggle popover</button>
<div class="popover" id="myPopover" popover="manual">
  <p>This is a popover</p>
</div>
```

- Beware: popover elements are added to the top layer, so you can't position them absolutely tot he parent.
- You need CSS anchor positioning for that. (experimental)

#### Details tag

The details disclosure element.

- Consists of a `<detail>` and a `<summary>` element.
- The summary element opens the detail when clicked.
- Group them together with the same _name_ attribute to open only one at the same time.

**Example**:
Details - summary.

```html
<details>
  <summary>Summary</summary>
  All the details go here so you can see them when opening this thing.
</details>
```

Details - summary group.

```html
<details name="det">
  <summary>Summary</summary>
  All the details go here so you can see them when opening this thing.
</details>
<details name="det">
  <summary>Summary</summary>
  All the details go here so you can see them when opening this thing.
</details>
<details name="det">
  <summary>Summary</summary>
  All the details go here so you can see them when opening this thing.
</details>
```

## CSS

- Know what you are selecting!
- Use CSS variables to simplify selectors.

- Pseudo-classes or attribute selectors can be used to add or enhance simple interactions.
- `:hover`, `:active`, `:focus`,...
- `:checked`, `:valid`, `:user-valid`,...
- `[open]`, `:popover-open`,...
- `:has()`

Combine pseudo classes with selectors and select other elements.
_Nested elements_:
Hover parent -> change child / descendant.

_Next sibling (sister / brother element: same parent)_:
Check checkbox -> change sibling that comes after it.

_:has() (the "parent" or "god" selector)_:
Changed state of element -> change completely other element.

**Examples**:
Nested hover.

```html
<a class="link" href="#">
  Hover me
  <svg class="link__arrow" viewBox="0 0 20 20">
    <path d="M4_ _10H16M16 10L10 4M16 10L10 16" />
  </svg>
</a>
```

```css
.link:hover {
  color: deeppink;
}

.link:hover .link__arrow {
  translate: 0.5rem;
  color: deeppink;
}
```

Checked sibling.

```html
<li class="checkbox">
  <input
    class="checkbox__input"
    type="checkbox"
    name="checkthisout"
    id="checlthisout" />
  <label class="checkbox__label" for="checkthisout">Make me red</label>
  <span class="checkbox__span">And me</span>
</li>
```

```css
.checkbox__input:checked + * {
  color: red;
}

.checkbox--input:checked ~ * {
  color: red;
}
```

### Combine selectors

Checked sibling.

```css
.checkbox__input:checked ~ .checkbox__label .checkbox__icon {
  opacity: 1;
}
```

Elements with class of _`checkbox\_\_icon`_ inside elements with class of _`checkbox\_\_label`_ that come after elements with class _`checkbox\_\_input`_ that are checked.

Has checked.

```html
<body>
	<form class="form">
		<span class="thanks">
			Thank you
		</span>
		<label>
			<input class="check-me" type="checkbox" name="checking">
				Check me please
			</input>
		</label>
	</form>
</body>
```

```css
.form:has(.check-me:checked) .thanks {
  display: block;
}

:has(.check-me:checked) {
  background-color: hotpink;
}
```

Nested hover nesting.

```css
/* hover state of the link */
.link:hover {
  color: deeppink;
}

/* hover state of the arrow inside of the link */
.link:hover .link__arrow {
  translate: 0.5rem;
  color: deeppink;
}
```

```css
/* hover state of the link */
.link:hover {
  color: deeppink;

  /* hover state of the arrow inside of the link */
  .link__arrow {
    translate: 0.5rem;
    stroke: deeppink;
  }
}
```

CSS variables to simplify selectors. When the parent is hovered, change the variables of its child.
Nested hover variables.

```css
/* initial state of the link */
.link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: 0.5rem;
  color: slateblue;
}

/* initial state of the arrow */
.link__arrow {
  display: block;
  width: 1.25rem;
  aspect-ratio: 1;
  stroke: slateblue;
}

/* hover state of the link */
.link:hover {
  color: deeppink;
}

/* hover state of the arrow inside of the link */
.link:hover .link__arrow {
  translate: 0.5rem;
  stroke: deeppink;
}
```

Better way to do it than above:

```css
/* initial state of the link */
.link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: 0.5rem;
  color: slateblue;
}

/* initial state of the arrow */
.link__arrow {
  display: block;
  width: 1.25rem;
  aspect-ratio: 1;
  stroke: var(--link-arrow-stroke, slateblue);
  translate: var(--link-arrow-translate, 0);
}

/* hover state of the link */
.link:hover {
  color: deeppink;

  /* hover state of the arrow inside of the link */
  --link-arrow-stroke: deeppink;
  --link-arrow-translate: 0.5rem;
}
```

## JavaScript

- Something happens like an event or setInterval.
- Change class with `toggeclass()` or `classList`.
- Combine SS selectors and select other elements:
  - toggle class of element -> change element inside;
  - toggle class -> change element after;
  - toggle class -> change completely unrelated element with `:has()`.

### Data attributes

Dat attributes allow us to store extra information on standard, semantic HTML elements.

Starts with **data-** and you give it a custom name:
`<element data-custom-name="value">`

Use them to tie elements together with **data attributes values and id's**.
With JavaScript you ca always them interact with each other.

### Combine selectors

```html
<button class="show-element" data-show-element="element1" type="button">
  Click me
</button>

<div id="element1">Thanks for clicking!</div>
```

### Transitions

- Animate the **state change** with transitions.
- Set the default transition properties on the **initial state** of **all elements** that need transitions. The transitions will automatically reverse that way.
- Try to use opacity and transform properties as much as possible.

- _Transition-property_: what properties should transition.
- _Transition-duration_: not too slow, not too fast/ Depends on distance, size, complexity, and type of easing.
- _Transition-delay_: to wait.
- _Transition-timing-function_:
  - easing;
  - the acceleration and deceleration over time (duration).

#### Transition-timing-function

- _Linear_: no acceleration.
- _Ease-in_: start slow, end fast.
- _Ease-out_: start fast, end slow.
- _Ease-in-out_: start, slow, acceleration, end slow.
- _Ease_: start a bit slow, accelerate fast, end slow.
- _Cubic-bezier()_: for more complex / pronounced easings.
- _Linear()_: for even more complex / pronounced easings.

#### Transition discrete properties

- `display: none;` -> `display: block;`
- `height: 0;` -> `height: auto;`
- 3 things:
  - interpolate-size: allow-keywords;
  - transition-behaviour: allow-discrete;
  - @starting-style { }.

#### View transition API

Want to move elements around in the DOM and animate them?
`document.startViewTransition(() => updateTheDOMSomeHow());`

Browser takes snapshots of the old and new state and puts it in a layer on top of the whole page inside the `::view-transition` pseudo element.

Give it a unique view-transition-name with CSS:

```css
.dot {
  view-transition-name: ball;
}
```

Or with inline style:

```html
<div class="ball" style="view-transition-name: ball;"></div
```

Customise the animation with CSS:

```css
::view-transition-group(ball) {
  animation-duration: 1s;
  animation-timing-function: var(--elastic-easing);
}
```

Multiple elements with the same class?

```css
.ball {
  view-transition-class: ball;
}
```

Each element should have a unique view-transition-name:

```html
<div class="ball" style="view-transition-name: ball-1;"></div>
<div class="ball" style="view-transition-name: ball-2;"></div>
<div class="ball" style="view-transition-name: ball-3;"></div>
```

Customising the animation:

```css
::view-transition-group(.ball) {
  animation-duration: 1s;
  animation-timing-function: var(--elastic-easing);
}
```

#### Debugging transitions & animation

- Animation panel in dev tools. (inspect)
- Control the speed.

Animation panel in dev tools. Let's you control the speed and pause the animation.
