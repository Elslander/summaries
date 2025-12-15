---
title: Images
description: images
---

## `<img>`

### Image element

- Browser is in control
- We need to give some hints to help them.
- `srcset`:
  - a set of images where the browser can pick from
  - comma-separated: filename and descriptor
  - `srcset="small-image.png 300w, medium-image.png 600w, large-image.png 1200w"`
- `sizes`:
  - expected size at certain conditions
  - comma-separated: media query and image width
  - `sizes="(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw"`

### Pixel density

- The `srcset` descriptor can also specify the pixel density.
- For images/screens with a higher resolution.
- Use width descriptors or density descriptors, but not both together.
- `srcset="small-image.png 1x, medium-image.png 2x, large-image.png 3x"`
- Pixel density is specified in **DPR**(Device Pixel Ratio)

## `<picture>`

### Picture element

- We are in control. Art direction.
- Picture element wraps around the image element

```html
<picture>
  <img src="image.jpg" alt="A description of the image." />
</picture>
```

### Source element

- Provide multiple source elements in the picture tag.
- The browser will use the first one that is matching.
  - Also using the `srcset` attribute.
  - The src of the image element will be updated with this value.

```html
<picture>
  <source srcset="large.png" media="(min-width: 75em)" />
  <source srcset="medium.png" media="(min-width: 40em)" />
  <img
    src="image.jpg"
    alt="A description of the image."
    width="300"
    height="200" />
</picture>
```
```html
<picture>
  <source srcset="image.avif" type="image/avif" />
  <source srcset="image.webp" type="image/webp" />
  <img
    src="image.jpg"
    alt="A description of the image."
    width="300"
    height="200" />
</picture>
```

## CSS

### What about a responsive background-image?

- No out-of-the-box solution.
- Make use of media queries and provide alternative image.
- `image-set` will let the browser select the most appropriate image, based on resolution (dpr) or file type.

## File types

- WebP
- Avif

**So...**:

- About 94-97% of the browsers support Avif.
  - That's a lot, but not all...
  - Same browsers that support WebP, Avif has better compression.
- No way for the regular `<img>` tag to check this.
  - What about a site where no image is loaded?
- **Solution!**
  - Picture element with Avif in source element.
  - With a jpg/png fallback.

## Loading hints

- **width & height**
  - essential, even with responsive images
- **loading**
  - Everything below the fold = `lazy`.
- **fetch priority**
  - high, on an image if it's truly vital
- **preloading**
  - Fetch images included via JS/CSS ahead of time.
- **decoding**
  - low impact