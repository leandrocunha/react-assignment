<img src="https://workingatendouble.com/content/uploads/2016/09/logo_endouble_default_coated.jpg" width="400">

# React assignment

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and ejected to have full control over its configuration.

To complete the assignment, fork this repo and send us a PR. To help us assess the assignment, please commit often and use clear and concise commit messages.

## The assignment

Create an application that:

- retrieves data from an API (refer to https://github.com/toddmotto/public-apis/ for public APIs)
- shows a grid of items (thumbnails, cards, etc.)
- has a form that allows filtering the data set
- shows item details (large image or other information available from the API's response) in a modal when an item is clicked

## Requirements

- Test coverage is sufficient
- Linter and tests pass
- Works in IE11 and up
- Eslint rules extend [eslint-config-endouble](https://www.npmjs.com/package/@endouble.com/eslint-config-endouble)
- Uses web fonts (eg. Google Fonts)
- Runs on HTTPS
- Third-party package usage kept to a minimum
- No state managers (MobX, Redux, ...)
- UI is accessible by keyboard
- Code is documented
- Items in the grid show up to four items per row and gracefully degrade to a vertical list on narrow screens

## How to run

- After clone the repo you need install depencies

```
$ npm install
```

- Now we need keep the API running:

```
$ node index
```

- Open other terminal window and run the command belowm maybe you will receive a warning of creat-react-app to user another port like 3001. Accept it:

```
npm start
```

## Tests

- To run the test

```
$ npm run test
```

- To coverage

```
$ npm run test:coverage
```

## My considerations

In general I liked a lot to do it, was a great challenge. I had some difficults to test the fetch API URL and because this, I could not 100% converage.

I didn't have to much time to work in mobile version, then in the small screen, the standings table and slide card, can be show some weird behaviors :(

I know that one the requirements was no use some app state library, but I decided use because I think I did a application sufficient complex to use it, instead a local state approach.

Thank so much
