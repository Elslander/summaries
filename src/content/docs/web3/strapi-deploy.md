---
title: Strapi Deployment
description: strapi deployment
---

**The goal**:

- Strapi deployed to production
- Astro deployed to production
  - it is in a `/frontend` directory now
- Via continuous deployment
  - if there is a commit (merge) on the main, deploy a new Astro/Strapi build
- If there are any changes in Strapi content: redeploy Astro.

## Strapi

### Strapi deployment

- Via Strapi Cloud
- Create a new project

> Import a git repository, set the region, base directory, and node version.

### Strapi deployed

- Take note of the url
- There will be no data; only collection-types are set up.
- You also have to configure API access again.
- After some inactivity, it goes to sleep.

## Astro

### `/frontend` updates in deploy.yml

```yml
on:
  push:
    branches: [main]
    paths:
      - "/frontend/**" # Only trigger when frontend changes
      - ".github/workflows/deploy.yml" # or if we change our workflow
```

```yml
- name: Install, build, and upload your site
  uses: withastro/actions@v5
  width:
    path: ./frontend # Location of astro in your repo
```

### `.env` vars in deploy.yml

- Make variables available during build.
- But don't hardcode them in the deploy.yml.
  - Set them via repository variables and use them in your deploy.yml

```yml
- name: Install, build, and upload your site
  uses: withastro/actions@v5
  width:
    path: ./frontend # Location of astro in your repo
  env:
    STRAPI_URL: ${{ vars.STRAPI_URL }}
```

### Action variables

1. Settings
2. Secrets and Variables
3. Actions
4. Variables
5. Repository variables

### Media files

- Problem
  - Local: no domain
  - Production: full url
- Solution: env var STRAPI_MEDIA_URL
  - Local: same as STRAPI_URL
  - Production: emptu (nonexistent)

```env
STRAPI_URL=http://localhost:1337
STRAPI_MEDIA_URL=http://localhost:1337
```

```astro
<Image
  src="{`${import.meta.env.STRAPI_MEDIA_URL}${product.image.url}`}"
  alt="Product image" />
```

In deploy.yml:

```yml
env:
  STRAPI_URL: ${{ vars.STRAPI_URL }}
  STRAPI_MEDIA_URL: ${{ vars.STRAPI_MEDIA_URL }}
```

## Redeploy on update

### Webhooks

- Our GitHub action needs to run when content changes in Strapi.
- But how can our action be aware of this.
- We have to let it know somehow; can't we send it a text or so?
- Not a text message, but similar, we will use a **webhook** for this.
  - An automated message sent from one application to another when a specific event occurs. It is basically a POST request.

### Strapi webhooks

- In the settings
- Give it
  - a name
  - a URL to POST to
  - some headers

### Webhooks in GitHub actions

- Trigger our workflow on an incoming webhook.
- repository dispatch

```yml
on:
  repository_dispatch:
    types: [test_result]
```

### We are not along

- https://u11d.com/blog/passing-body-data-in-strapi-webhooks-triggering-git-hub-workflows-example/
- We need a proxy, a middle man
  - receiving the Strapi webhook
  - sending out a GitHub Actions conform webhook
- That proxy needs to be hosted, running
  - but we can also use Strapi for this
- Adding a couple of files to Strapi
  - do it manually
  - or ...

### Strapi-Webhook-Proxy-Creator

`npx strapi-webhook-proxy-creator`

- In the root of your Strapi project
- Still need to create a PAT
  - Personal Access Token
    - The fine-grained token must have the following permissions set: "Conents" repository permissions (write)
- Don't forget to set the other variables (these should have appeared after running the tool):
  - GITHUB_PAT = your_github_personal_access_token
  - GITHUB_URL = https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO_NAME
  - GITHUB_EVENT_TYPE = strapi_triggers_github_workflow

## Tip

### `kill-port`

- Port in use, but you are sure no Strapi instance is running?
  - `npx kill-port`
