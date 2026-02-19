---
title: React
description: react
---

## Data driven

- Data changes ? -> React renders the view
  - Essential concept

No more need for `document.querySelector()`.

## Start

### With viteJS

- `npm create vite@latest`
- Just 'JavaScript'
  - Makes use of **OXC** when using **rolldown**.
  - Should be the fastest.
- React compiler
  - Appears to be slow.
- SWC
  - Slower than OXC

## Components

### Code quality

- `.editorconfig`
- linting
  - ESlint
  - Stylelint

### Components

**What is a component**

- A reusable UI element for you app.
- A function `const MyComponent = () => <p>This is a component!</p>;`
- Name must start with a capital letter.
- Call it as if calling/using a tag. `<MyComponent />`

**Combining components**

- Separate your app in pieces.

```jsx
const Hello = () => <h1>Hello</h1>;

const App = () => {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
};
```

## Export/import components

- You need to export your component.
  - Can be named or default.
- 1 component in 1 file is fine.
  - Easier to find.
- Filename with a capital.
  - It is a component, recognisable.
- You can use `.jsx` as an extension, but there is no real added value.
  - `.js` is just fine
- Group them in a folder 'components'.
  - Neat!

## JSX

**JSX**

- No String or HTML but JavaScript.
- React element.
- JSX transformation into a JS object.
- Attributes in camelCase.
  - readonly => readOnly
- class => reserved keyword
  - Use className instead.

**The power of the {}**

- Use `{}` to run an expression.
  - as in: parse JavaScript code

```jsx
<p>I'm James</p>
<p>I'm {name}</p>
<p>I'm {getName()}</p>
```

## Props

**Props**

- Properties that a component receives.
- A component may not alter its props.
- A component should always be a pure function.
  - Never edit props.
  - Always return the same result for the same props.

**Passing data to a component**

- Just like passing arguments to a function.
- Via an attribute:
  - `<Hello planter="earth" />`
  - `<Hello planter="venus" distance={170} />`
- The component receives all the attributes in 1 object.
  - `const Helo = (props) => {}`

**All together**

- All attributes are combined in 1 'props' object.

```jsx
<Student name="James" course="Devine" group="2DEV5" />
```

```jsx
const Student = (props) => {
  const name = props.name;
  const course = props.course;
  const group = props.group;
  return (
    <p>
      ${name} is in ${group} at ${course}
    </p>
  );
};
```

## Destructuring

**Destructuring**

- Break it apart.
- Get cariables out of arrays and objects.

**Destructuring in JS**

```js
const hero = {
  name: "Batman",
  realName: "Bruce Wayne",
};

const { name, realName } = hero;

console.log(name, realName);
```

```js
const heroes = ["Batman", "Wonderwoman"];

const [firstHero, secondHero] = heroes;

console.log(firstHero, secondHero);
```

**Destructuring in React**

- All attributes are combined in 1 'props' object.
- Destructuring FTW!

```jsx
<Student name="James" course="Devine" group="2DEV5" />
```

```jsx
const Student = props => {
  const name = props.name;
  const course = props.course;
  const group = props.group;
  return <p>${name} is in ${group} at ${course}</p>;
};

const Student = ({ name, course, group }) => (
  <p>${name} is in ${group} at ${course}</p>;
)
```

## Conditional rendering

**Conditional rendering**

- `{condition ? <span>True</span> : <span>False</span>}`
- `{condition ? <span>Show</span> : null}`
- `{condition && <span>Show</span>}`

## Lists

**Key attribute**

- Provide a key attribute when rendering list items.
- Unique and consistent, index is a bad choice.
