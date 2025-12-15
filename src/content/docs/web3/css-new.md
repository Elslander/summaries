---
title: New in CSS
description: new in css
---

## Container queries

### The new responsive

- User preferences
- Viewport media query
- Mactro layouts
- Container styles

### Container size queries

- Container context
  - `container-type`
  - `container-name` (optional)
- Container query
  - `@container`

```html
<div class="post">
  <h2>Card title</h2>
</div>
```

```css
.post {
  container-type: inline-size;
}

h2 {
  font-size: 1em;
}

@container (min-width: 700px) {
  h2 {
    font-size: 2em;
  }
}
```

### Container style queries

- Container context
  - All elements can be style query containers.
- **For now**: only custom properties with or without values.

```css
@container style(--theme-color) {
  /* <stylesheet> */
}

@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

### Container query length units

- **cqw**: 1% of a query container's width.
- **cqh**: 1% of a query container's height.
- **cqi**: 1% of a query container's inline size.
- **cqb**: 1% of a query container's block size.
- **cqmin**: the smaller value of either cqi or cqb.
- **cqmax**: the larger value of either cqi or cqb.

### CQ unitd for `font-size`

[Utopia.fyi](utopyia.fyi) can handle these.

### Container queries and responsive images

- Can we propose an image width based on the container width?
- Nope: _images are usually loaded before the layout happens, so there is no way to evaluate the parent container_.
- But there is a way to load the images after the layout step.
  - `loading="lazy"`
- `sizes="auto"`
  - only makes sense if the image is lazy loaded

## `:has`

### `:has` selector

- aka: the parent selector
- In combination with other css selectors: superpowers
  - **`.card:has(img)`**: Select `.card` elements that have an image as a child.
  - **`.card:has(+ p)`**: Select `.card` elments that are before a `p` tag.
  - **`.card:has(.p:nth-child(n + 3))`**: Select `.card` element with 3 `p` tags.

## View transitions

Smooth transitions between different view.

## And many more

- anchor positioning (limited)
- layers (widely)
- crazy colors (baseline)
- random (experimental)
