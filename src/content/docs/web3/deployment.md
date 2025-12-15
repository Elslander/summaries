---
title: Deployment
description: deployment
---

## Recap

### How the internet works

- Your browser -> DNS -> server -> HTML/CSS/JS -> Browser renders the page
- Servers just store and serve files
- Browsers can only understand HTML, CSS and JavaScript

### Everything is HTML, CSS & JS in the end

React, Astro, Vite, PHP, Svelte, Angular, Vue,...  
All produce the same output:

- HTML
- CSS
- JS

Frameworks / development workflows differ, output does not.

### Tools / Frameworks VS Hosting

| Development tools (local)                  | Hosting (remote)           |
| ------------------------------------------ | -------------------------- |
| Runs on your machine                       | Runs on a server           |
| Used for development                       | Store and serve your files |
| They simulate a server                     | Users visit these URLs     |
| They help you with coding more efficiently | Browser renders website    |

### Client side VS Server side

| Frontend (runs in the browser = client) | Backend (runs on a server)                    |
| --------------------------------------- | --------------------------------------------- |
| Makes API resuests to server            | Talks to the database                         |
| Public and visible                      | Send prepared data or HTML back to the client |
|                                         | Not visible to the user (secure)              |

## Deployment

### Flow

> Code editor -> Dev server -> Build -> Hosting -> User

- `npm run dev` = development mode
- `npm run build` = produce `/dist`
- `npm run preview` = simulates hosting locally

**Deployment** = putting dist online, putting your files online

## Build

### Creating a build

Build is a process that compiles your code using all required components, configurations, environment assets, and any other external libraries to produce an executable or usable application.

> In frontend -> Creating HTML, CSS, and JS

### `/dist`

The production version of your site:

- optimised HTML
- minified CSS
- bundled JavaScript
- assets

This is the only thing hosting providers need.

### Base configuration

If you are deploying your project under a nested public path:

- Specify the base config option and all asset paths will be rewritten accordingly.

## Hosting

### Combell + FTP client

Classic hostin.

Can also run PHP (= server side).

1. You build locally
2. You upload `/dist` via FTP client (FileZilla)
3. Server hosts the files

### Deploy to GitHub Pages

You laptop (or GitHub actions) builds.

- You push the files to GitHub repo
- GitHub Pages serves files

Great for static sites, blogs, portfolios.

### Deplou to Vercel/Netlify/...

Same principle.

## Automating everything

### CI (Continuous Integration)

Developers merge code changes into a shared repository frequently (multuple times per day).

- Automated build process triggers on each commit.
- Linting
- AI code review
- Automated test run to verify code quality.
- ...

Immediate feedback on code.

### CD (Continuous Delivery)

Extension of CI where code is always in a deployable state.

- All code changes automatically pass through build, tests.
- Code is packaged and ready for production deployment.

Human aproval required before releasing to production.

### Continuous Deployment

Full automation.

Every change (that passes tests) goes directly to production.

- No manual gate between development and production.
- Automated tests are the only quality gate.
- Users get new features within minutes/hours of code commits.

### Automate everything

- CI - Continuous Integration
  - Developmers merge code frequently.
- CD - Continuous Delivery
  - Code is always ready to deploy to production.
- CD - Continuous Deployment
  - Every change automatically goes to production.

> **Pipeline Flow**: CI -> CD (Delivery) -> CD (Deployment)
