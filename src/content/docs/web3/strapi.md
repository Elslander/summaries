---
title: Strapi
description: strapi
---

### Strapi CMS

**The Open-Source Headless CMS for AI powered Websites and Apps.**

- CMS: Content Managment System
  - An end-user-friendly layer on top of a database.
- Headless: there is no frontend.
- Node.js: needs Node.js hosting to be deployed online.
  - No, things like GitHub Pages, Vercel,... can't run this.
  - Strapi cloud has a free tier.

### Install

- `npm create strapi@latest my-strapi-project`
- No need to sign-up or login.
- Npm project, just like Vite or Astro
- Do you need a repo or not?

### Content types

- Collection types: content-types that can manage several entries.
  - Probably the thing you will use the most.
- Single types: content-types that can only manage one entry.
- Components: content structure that can be used in multiple collection types and single types.

### Draft/publish

- There is a draft status for the entries.
- Not always desirable
- You can switch it off.

### Heads up

- Runs locally on an SQLite database
  - Good for development, bad for production
- Content & settings aren't transfered to production, only content-types.
  - Makes sense
- Let us all use Test1234 as a **local password** for exercises/assignments.

## REST API

### REST API

- Respresentational State Transfer Application Programming Interface.
- A way to transfer data.
- Aka webserice
- There are rules
- But most of them are RESTful, mostly following the rules.
- Making http request to create/read/update/delete content.

> `domain/plural-entry/optional-id?optional-extra-params`

### Http request methods

| CRUD   | HTTP Method | Description              | REST endpoint example | Body             |
| ------ | ----------- | ------------------------ | --------------------- | ---------------- |
| Create | POST        | Create a new entry       | /cars                 | {brand: "volvo"} |
| Read   | GET         | Get 1 or all the entries | /cars/33 or /cars     |                  |
| Update | PUT / PATCH | Update an entry          | /cars                 | {brand: "audi"}  |
| Delete | DELETE      | Delete an entry          | /cars                 |                  |

## REST API Tools

### API tools

- One can run a simple GET request via the browser address bar.
  - But what about POST/PUT/PATCH/DELETE?
  - But how to add body content to a request?
  - I don't want to type the same request over and over...

In order from bare essentials to fully bloated:

- VS Code Rest Client
- Bruno
- Httpie
- Insomnia
- Postman

## REST API in Strapi

### Strapi REST API

- All content types are **private** by default and need to be either made public or queries need to be authenticated with the propper permission.
- REST API responses **only include top-level fields** and does not populate any relations, media fields, components, or dynamic zones.

### Id VS documentID

- Use documentId
