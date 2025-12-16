---
title: Astro + Strapi
description: astro + strapi
---

## API wrapper: `fetchApi`

### API wrapper

- Basically, all we need to do is to fetch the API endpoint.
  - and get the response
  - and get the json
  - and get the actual results from the data property
  - and set some options
  - EVERYTiME
- So let us make a reusable function to cover all our needs.

**Original Strapi API wrapper**:

```typescript
interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
}: Props): Promise<T> {
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }

  const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const res = await fetch(url.toString());
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    data = data[0];
  }

  return data as T;
}
```

**Our edited version**:

```typescript
import qs from "qs";

export default async function fetchApi(
  { endpoint, query = undefined, wrappedByKey, wrappedByList = undefined },
  options = {}
) {
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }

  const url = new URL(
    `${import.meta.env.STRAPI_URL}/api/${endpoint}${
      query ? `?${qs.stringify(query, { encode: false })}` : ``
    }`
  );

  console.log("Fetching...", url.toString());

  const res = await fetch(url.toString(), options);
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    data = data[0];
  }

  return data;
}
```

### QS?

**Without QS**:

```
/api/books?sort[0]=title:asc&filter
s[title][$eq]=hello&populate[auth
or][fields][0]=firstName&populate[
author][fields][1]=lastName
```

**Width QS**:

```json
{
  "sort": ["title:asc"],
  "filters": {
    "title": {
      "$eq": "hello"
    }
  },
  "populate": {
    "author": {
      "fields": ["firstName", "lastName"]
    }
  }
}
```

## `.env`

### `.env` file

Files that store environment variables for your application.

- **Security**: Keep sensitive data (API keys, passwords, tokens) out of your source code.
- **Configuration**: Store environment-specific settings that change between development and production.
- **Flexibility**: Allow different team members to use their own configurations without conflicts.
- **Separation of concerns**: Keep configuration separate from application logic.

## Slug

### Slug

- A url-friendly but still human readable string.
- Great for SEO
- Great for humans
- Replaces a regular ID

In strapi, generated through the UID field. (based on another field)

## How to organise everything

### Project structure

- Use 1 git repo for both projects.
- Strapi (backend)
- Astro (frontend)

```
my-project/
├── .git/
├── backend/
└── frontend/
```

- The package.json from Strapi & Astro are direct descendants of the backend and frontend directories. No need to nest it further.
- Don't create another repo for your Strapi and Astro project.