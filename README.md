# CTCI-Solutions-TS

This repo was created using the exercises in Gayle Laakman's CTCI.

All current solutions are written in TypeScript and compiled to JavaScript (ES6)

## Installation
`npm install`

This will install all related dev-dependencies which are:

- TypeScript
- tslint
- eslint
- mocha/chai for testing
- istanbul/isparta for test coverage
- babel (for es6)

## Scripts

`npm test` - runs all tests in the project using mocha with chai

`npm run coverage` - runs npm test with istanbul test coverage, opens results in browser

`npm run testcov` - essentially the same as coverage, except that it runs npm test with isparta for test coverage

`npm run lint:ts` - fixes errors within TypeScript

`npm run lint:js` - fixes errors with JavaScript

`npm run compile` - compiles typescript, and also runs JS and TS linters
