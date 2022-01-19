
![Logo](https://res.cloudinary.com/sbarria-dev/image/upload/v1642399893/sergiobarria/repo/sergiobarria.com-cover-3_1_mvekdi.png)


# sergiobarria.com

This is my personal website, blog and portolio showcase. Built with Next.js and Tailwind CSS. Written using TypeScript and content managed with MDX.




## Badges

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Cypress ci](https://github.com/sergiobarria/sergiobarria.com/actions/workflows/cypress.yml/badge.svg?branch=main)](https://github.com/sergiobarria/sergiobarria.com/actions/workflows/cypress.yml)

## Overview

I created the first two versions of my portfolio using Next.js and a a couple of headless CMS's for content management, and although I didn't had any proble I decided to try and use Gatsby. I had no problem either, and really enjoyed using Gatsby, however I ended deciding to switch back to Next.js.

I really like using headless CMS's like Sanity.io, Contentful or GraphCMS. But in this ocasion I decided to manage my content by myself using markdown. After a little research I decided to try with MDX and ended with the result you see [here](https://www.sergiobarria.com/).

## Folder Structure

Most of the project content is inside the `src` folder.

- `components/*` - All project components
- `content/*` - All data used to populate blog posts, library and projects info
- `context/*` - React context
- `hooks/*` - Custom hooks
- `lib/*` - Script utitlities to comunicate with 3rd party services
- `pages/*` - Project pages
- `styles/*` - All related to tailwind styles and global.css
- `types/*` - Global Typescript styles that are used in more than one component
- `utils/*` - Utility files that didn't fit any of the other categories


## Tech Stack

**Language:** Typescript

**Client:** React, Next.js

**Styling:** Tailwind CSS, CSS modules

**Databases:** Planetscale with Prisma

**Content:** MDX

**API's:** Spotify API, Github GraphQL API


## Run Locally

- Clone the project

```bash
  $ git clone git@github.com:sergiobarria/sergiobarria.com.git
  $ cd sergiobarria.com
  $ yarn && yarn dev
```

Create .env file similar to `.env.example`



## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

`SENDGRID_API_KEY`

`EMAIL_SENDER`

`EMAIL_RECEIVER`

`DATABASE_URL`

`SPOTIFY_CLIENT_ID`

`SPOTIFY_CLIENT_SECRET`

`SPOTIFY_REFRESH_TOKEN`

`GITHUB_ACCESS_TOKEN`


## Screenshots

My pinned github repos using Github GraphQL API and Urql client for data fetching
![Featured Projects](https://res.cloudinary.com/sbarria-dev/image/upload/v1642280532/sergiobarria/repo/featured_projects_ltdrog.png)

Currently playing using spotify API
![Spotify Now Playing](https://res.cloudinary.com/sbarria-dev/image/upload/v1642280643/sergiobarria/repo/spotify_now_playing_nae3rq.png)
