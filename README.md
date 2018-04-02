# fritzing-parts-api-client-js [![Build Status](https://travis-ci.org/fritzing/fritzing-parts-api-client-js.svg?branch=master)](https://travis-ci.org/fritzing/fritzing-parts-api-client-js) [![](https://fritzing.github.io/fritzing-parts-api-client-js/badge.svg)](https://fritzing.github.io/fritzing-parts-api-client-js/)

This is a simple javascript/nodejs api client that connects to the [fritzing](http://fritzing.org/home/) parts data at https://fritzing.github.io/fritzing-parts. The api client support functions to fetch fzb, fzp and svg files.

## File Structure

- `docs` generated esdoc artifact
- `lib` generated babel artifact
- `src` the main sourcecode
- `test` jest test code

## Install

install with yarn
```sh
yarn add fritzing/fritzing-parts-api-client-js
```

or use npm
```sh
npm install fritzing/fritzing-parts-api-client-js --save
```

## Usage
initialize an api client and fetch /fzps endpoint
```javascript
const {FritzingPartsAPIClient} = require('fritzing-parts-api-client-js')
//import {FritzingPartsAPIClient} from 'fritzing-parts-api-client-js'

FritzingPartsAPIClient.getFzps()
.then((fzpz) => {
  console.log(fzps)
})
.catch((err) => {
  console.error(err)
})
```

## Api Documentation

The complete Api Documentation can be found here:
[Api Docs](https://fritzing.github.io/fritzing-parts-api-client-js/)

## Development

clone the repository
```sh
git clone git@github.com:fritzing/fritzing-parts-api-client-js.git
```

```sh
make test
make lint
```

if you have lint errors you can try running `make lint-fix` to fix the errors

to build an es5 compatible version run
```sh
make build
```

to generate the docs, run
```sh
make docs
```
if you want to open the docs after generating in your browser, run
```sh
make docs-open
```


## License
[MIT License](LICENSE)
