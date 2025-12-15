---
title: Astro Images
description: astro images
---

## Images in Astro

- Good support
- Built-in `<Image />` and `<Picture />` Astro components.
- Markdown image syntax supported.
- Use SVG's as components.
- An image generating function.
- Automatically resizing responsive images.

## Heads up

- Local images: in `/src` to benefit from the magic ✨.
- Remote images: authorise domains.

## Responsive images in Astro

With responsive image properties applied to the `<Image />` or `<Picture />` components, Astro will automaticaly generated the required `srcset` and `sizes` values for your images, and apply the necessary styles to ensure they resize correctly.

## Sad trombone

> The generated `sizes` attribute for `constrained` and `full-width` images is based on the assumption that the image is displayed close to the full width of the screen when the viewport is smaller than the image's width. If its significantly different (e.g. if it's in a multi-column layout on small screens), you may need to adjust the `sizes` attribute manually for best results.