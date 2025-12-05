---
title: 'Fleabag API - Quick Node.js API with Express & TypeScript'
description: 'I recently started in a new job, a big part of my motivation to move being to get back to being hands-on with tech and 
writing code, with a better balance of c'
pubDate: '2023-08-04'
author: 'Olivia Knoedt'
image: 'https://d19w7e3j8gkywb.cloudfront.net/posts/inspirational.png'
tags: ['coding']
draft: false
---

I recently started in a new job, a big part of my motivation to move being to get back to being hands-on with tech and 
writing code, with a better balance of coding/management. Aside from working through my AWS Solutions Architect 
certification, I've been dusting off the cobwebs and writing a bit of code for fun.

I've also been re-watching and thoroughly enjoying the Phoebe Waller-Bridge series "Fleabag", and I thought it would be 
fun to build a quick API to serve some random quotes from the show. That's kinda basic, so I also added a fun endpoint 
to generate a quote in an inspirational image format like you see all over the internet. Hopefully this is an 
amalgamation of some of the best practices I've picked up over the years, and I'll be adding to it as I manage to 
implement more ✨ If you have any ideas or suggestions, open a GitHub issue! Or even better, submit a PR! 🤩

This blog post assumes at least a basic knowledge of JavaScript and related technologies - I cover quite a few topics, 
so I haven't gone into too much detail (plus there's a ton of content on each of these out there in the wild!). Check 
the code base for the full working examples, and feel free to reach out if you have any questions!

# Fleabag Quotes API
1. [Demo](#demo)
2. [Language, Frameworks & Libraries](#language-frameworks--libraries)
3. [Step-by-Step](#step-by-step)
- [Node.js, Express & TypeScript](#nodejs-express--typescript)
- [Testing with Jest & Supertest](#testing-with-jest--supertest)
- [Husky, prettier, commitlint & lint-staged for code quality](#husky-prettier-commitlint--lint-staged-for-code-quality)
- [Swagger API docs](#swagger-api-docs)
- [Generating the inspirational images](#generating-the-inspirational-images)
- [GitHub Actions](#GitHub-actions)
- [Deploying to Heroku](#deploying-to-heroku)
4. [Next Steps](#next-steps)

## Demo
* Hosted on Heroku here: [https://fleabag-quotes-6072411c0ec5.herokuapp.com/quotes/random/inspirational](https://fleabag-quotes-6072411c0ec5.herokuapp.com/quotes/random/inspirational)
* API docs on Swagger: [https://fleabag-quotes-6072411c0ec5.herokuapp.com/api-docs/](https://fleabag-quotes-6072411c0ec5.herokuapp.com/api-docs/)
* Code on GitHub: [https://GitHub.com/livkndt/fleabag-quotes](https://GitHub.com/livkndt/fleabag-quotes)

<div style="text-align: center; padding-bottom: 20px;">
<img src="https://fleabag-quotes-6072411c0ec5.herokuapp.com/quotes/random/inspirational" alt="Fleabag Quote" />
<br>
<i>(Above) A quote from the show as an "inspirational image" 400x400</i>
</div>
<div style="text-align: center; padding-bottom: 20px;">
<img src="https://fleabag-quotes-6072411c0ec5.herokuapp.com/quotes/random/inspirational?imageWidth=1024" alt="Fleabag Quote" />
<br>
<i>(Above) A quote from the show as an "inspirational image" 1024x400</i>
</div>

## Language, Frameworks & Libraries
* I went for a RESTful API built using **Node.js**, **Express** and **TypeScript**. I've been using TypeScript for 
several years now, and it's definitely my preference over plain JavaScript, especially working as a full-stack dev 
where I'm often switching between front-end and back-end code (often Java/Kotlin which is strongly typed).
* I added [`husky`](https://github.com/typicode/husky), [`eslint`](https://eslint.org/),
[`prettier`](https://github.com/prettier/prettier), 
[`commitlint`](https://github.com/conventional-changelog/commitlint) and 
[`lint-staged`](https://github.com/okonet/lint-staged) for decent commit messages using conventional commits, 
and to help ensure consistent code formatting and linting.
* I used **Jest** for unit testing, and [`Supertest`](https://github.com/ladjs/supertest) for testing the API endpoints.
* I added a very basic **GitHub Actions** pipeline to run the tests when code is pushed, and used the automated 
deployment feature from **Heroku**.
* I'm using **Dependabot** which is natively integrated into GitHub to check for any dependencies that need updating.
* I also added a GitHub integration with **Snyk** for this repo which performs static code analysis - an incredibly 
useful tool for encouraging secure engineering practices, check them out at [https://snyk.io/](https://snyk.io/).
* I'm using the [`node-canvas`](https://GitHub.com/Automattic/node-canvas) library to generate the inspirational images.
* I added [`helmet`](https://helmetjs.github.io/) and 
[`express-rate-limit`](https://github.com/express-rate-limit/express-rate-limit) to help secure the API and prevent abuse.
* I added [`swagger-autogen`](https://github.com/swagger-autogen/swagger-autogen) to generate Swagger API docs from my 
code and [`swagger-ui-express`](https://github.com/scottie1984/swagger-ui-express) with 
* [`swagger-jsdoc`](https://github.com/Surnet/swagger-jsdoc) to serve them.
* [`nodemon`](https://github.com/remy/nodemon) helps with development using hot reloading (restarting the server 
when you save changes to the code).

## Step-by-Step

### Node.js, Express & TypeScript
There are a million tutorials online for setting up a Node.js/Express/TypeScript app (or you can always ask ChatGPT...).
It's pretty straightforward to get up and running with your first endpoint:
```typescript
import express from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

### Testing with Jest & Supertest
Tests are important! Get them in early and have them run in a CI pipeline (e.g. GitHub Actions workflow) on every push.
```typescript
import request from 'supertest';
import app from './app';

describe('GET /', () => {
  it('should respond with Hello World', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toBe("Hello, world!");
  });
});
```

You'll need to install Jest & Supertest:
```bash
$ npm install --save-dev jest supertest @types/jest @types/supertest
```

and add a script to your package.json to run the tests:
```json
"scripts": {
    "test": "jest",
    ...
```

and then you'll be good to go!
```bash
$ npm test
```
### Husky, prettier, commitlint & lint-staged for code quality
Husky is a tool for setting up git hooks - it can automatically run tasks on git commit, git push and more.
I use it to run commitlint and lint-staged to ensure that my commits use 
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) and that my code is formatted
nicely (lint-staged runs prettier on staged files before committing them, keep reading for more on that).

Install commitlint and the conventional config:
```bash
$ npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

Add a config file for commitlint to include conventional commits `commitlint.config.js`:
```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

#### Husky
Now you have commitlint installed, you want to have it run on a git hook - in this case, whenever you run `git commit`.
This will check your commit message to ensure it follows the conventional commit style.
```bash
$ npm install --save-dev husky
```

Update your package.json scripts:
```json
"scripts": {
    ...
    "prepare": "husky install",
    ...
  },
```

Add your hook to husky:
```bash
$ npx husky add .husky/commit-msg 'npx commitlint --edit $1'
# you should end up with a directory .husky/ in your project with a file commit-msg
```

Make a non-conventional commit and a [conventional](https://www.conventionalcommits.org/en/v1.0.0/) one to test:
```bash
$ git commit -m "this isn't a conventional commit"
...
⧗   input: this is not a conventional commit
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://GitHub.com/conventional-changelog/commitlint/#what-is-commitlint

$ git commit -m "feat(app): add express router"
✔ Preparing lint-staged...
✔ Running tasks for staged files...
✔ Applying modifications from tasks...
✔ Cleaning up temporary files...
...
```

#### Prettier & lint-staged
Linting vs formatting - linting is checking your code for broken quality rules such as unused variables, whereas
formatting is all about making the code consistent (and pretty).
I'm using ESLint for linting, in conjunction with Prettier for formatting. This also integrates nicely with my IDE
(WebStorm) meaning I don't have to worry too much about formatting my code, it just happens automatically.

```bash
$ npm install --save-dev eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Create a `.prettierrc` file and define your [prettier options](https://prettier.io/docs/en/options.html):
```json
{
  "singleQuote": true,
  "trailingComma": "all",
  ...
```

Create a `.eslintrc.json` file and define your [eslint options](https://eslint.org/docs/user-guide/configuring).
You'll need to include the prettier plugin and config to ensure that prettier is run as part of the linting process:
```typescript
{
  "parser": "@typescript-eslint/parser", // enable ESLint to handle TypeScript
  "plugins": ["@typescript-eslint", "prettier"], // TypeScript linting rules and prettier formatting
  "extends": [
    "eslint:recommended", // ESLint recommended rules
    "plugin:@typescript-eslint/eslint-recommended", // Disable ESLint rules that conflict with TypeScript
    "plugin:@typescript-eslint/recommended", // TypeScript recommended rules
    "plugin:prettier/recommended", // Turn off conflicting rules that may interfere with prettier
    "prettier" // Helps resolve conflicts between prettier and other ESLint plugins/rules
  ],
  "rules": {
    "prettier/prettier": "error" // make prettier errors show up as ESLint errors
  },
  "env": {
    "node": true,
    "es6": true // ES6 syntax
  }
}
````

Add scripts to `package.json` to run eslint with `npm run lint` and prettier with `npm run format`:
```json
"scripts": {
  "lint": "eslint 'src/**/*.{ts,tsx}' --fix",
  "format": "prettier --write 'src/**/*.{ts,tsx}'",
    ...
```

We already have husky, so we can now add lint-staged to run eslint & prettier on staged files before committing.
This makes commits more efficient by ensuring that only files that are about to be committed are formatted.

```bash
$ npm install --save-dev lint-staged
```

Add lint-staged to the `package.json`:
```typescript
"lint-staged": {
  "*.{js,ts,tsx,json,css,md}": [
    "npm run format",
    "npm run lint",
    "git add ." // add any reformatted files to the commit
  ]
},
```

Create the git hook with husky
```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

Now in addition to checking for conventional commit format in your commit message, prettier will also run on any files 
that you're committing and reformat them nicely, and eslint will check for any broken code rules - consistent, high-quality
code and consistent git history! 🤩

### Swagger API docs
I won't go into too much detail here, there's a useful post on this topic here: 
[https://medium.com/swlh/automatic-api-documentation-in-node-js-using-swagger-dd1ab3c78284](https://medium.com/swlh/automatic-api-documentation-in-node-js-using-swagger-dd1ab3c78284)

Swagger is an industry standard for API docs, and there's plenty of tooling to help make it easy.

API docs let your users know how to use your API. It's a pain to remember to update them everytime you add a new endpoint,
change some functionality etc etc. Enter `swagger-autogen` to auto generate the docs from your code. You can add extra info
via code comments too. ✌️
```typescript
/*
  #swagger.tags = ['Quotes']
  #swagger.description = 'Get a random quote from the show.'
  #swagger.produces = ['application/json']
  #swagger.responses[200] = { schema: { "$ref": "#/definitions/Quote" } }
*/
```

I also added `swagger-autogen` to my pre-commit hook, so any changes to the API will be reflected in the docs without me 
needing to always remember to run it before pushing code.

Demo here: [https://fleabag-quotes-6072411c0ec5.herokuapp.com/api-docs/](https://fleabag-quotes-6072411c0ec5.herokuapp.com/api-docs/)

### Generating the inspirational images
The fun bit - I wanted to print a quote out and make it look like one of those "inspirational" quote images you see on 
pinterest or instagram or whatever.

I used `node-canvas` which is a library for generating images using the HTML5 canvas API.

You start by setting up your 'canvas' to draw on:
```typescript
import { Canvas } from 'canvas';

const canvas: Canvas = createCanvas(imageWidth, imageHeight); // give it a width and height in pixels
const context: CanvasRenderingContext2D = canvas.getContext('2d'); // get the context

// set the opacity of what you're about to draw
context.globalAlpha = 0.6;

// for a linear gradient...
const gradient: CanvasGradient = context.createLinearGradient(x0, y0, x1, y1);
gradient.addColorStop(0, colour1); // a string like 'red' or a hex code like '#FF0000'
gradient.addColorStop(0.5, colour2);
gradient.addColorStop(1, colour3);
```

I wanted to have random colours, and also sometimes have a radial gradient instead, so I also added a `getRandomHexCode`
function to generate a random hex code e.g. `gradient.addColorStop(1, getRandomHexCode());`.
Radial gradients are pretty much the same, using `createRadialGradient` and additional `r0` and `r1` params for radius 
of the circle. I had to fiddle around with all these values to get an effect I liked.

Then you can draw the gradient on the canvas 🙌:
```typescript
// Assign gradient to fill style & draw
context.fillStyle = gradient;
context.fillRect(0, 0, canvasWidth, canvasHeight);
```

Then onto drawing the quote! I had to do quite a bit of maths here... to make sure that the quote would fit within the 
canvas. Some of the quotes are pretty long so need to be in a smaller font to fit the dimensions of the image, and all 
of them needed to have line breaks added. In basic steps:
- I set the context font size and set a **line height** that corresponds to the font size (1.5x the font size)
- I split the quote into **words**, loop through and build a **line**, testing the width each time
- If the line is too long, I add a line break and start a new line
- I also had to check the height of all those lines using the **line height * number of lines**, and potentially 
recalculate the lines with a smaller font size if the whole quote is too tall for the canvas

There's quite possibly cleaner or more efficient ways to do this, but I always aim for working software in the first instance
and come back to refactor it later, plus I didn't notice any slowness for now 🐢.

I then center the text (with more maths) and draw it on the canvas line-by-line:
```typescript
// calculate the X & Y position to draw the line of text
// const drawX = centerX - (textWidth / 2)
// let drawY = centerY - (numLines * lineHeight) / 2;

// for each line...
context.fillText(line, drawX, drawY);
drawY += lineHeight;
```
- Take the canvas' centre X coordinate and minus half the width of the line to know the X coordinate to start drawing the line
- Take the canvas' centre Y coordinate and minus half the height of all the lines to know the Y coordinate to start drawing the line
- Loop over all the lines, draw the line and increment the Y coordinate by the line height

Phew.

### GitHub Actions
I pretty much made use of the standard nodejs template provided by GitHub actions. All I'm doing is running the tests 
on every push to the main branch; I intended to add a deployment job and automate the deployment to Heroku, but it seems 
you can hook Heroku up to GitHub with a button click these days, and it will deploy on every push to the main branch, 
so I didn't need to do anything 😍
```yaml
...
    steps:
      - uses: actions/checkout@v3

      - name: Use Node.js <node_version>
        uses: actions/setup-node@v3
        with:
          node-version: <node_version>
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test
```

### Deploying to Heroku
⚠️There is a cost for doing this these days! Depending on the [dynos](https://www.heroku.com/dynos) you use. Check 
[Heroku's website](https://www.heroku.com/) for the latest details & [pricing](https://www.heroku.com/pricing).
1. Create a Heroku account
2. Prep your app - check start scripts, you'll need:
```json
  ...
  "scripts": {
    "start": "node dist/server.js", -- point to wherever you start your app from
    "build": "tsc -p .", -- compile your ts to js
  }
```
3. Create a new app in Heroku
4. Deploy! You can either do this using Heroku's CLI, or you can do it via the console interface.
  
## Next Steps
Of course, there's a bunch of ways I could improve this API & the code, and I'll probably chip away at it over time 
(if I ever have time 😁).
If you have any ideas or suggestions, open a GitHub issue! Or even better, submit a PR!
