# fritzing-parts-api-client [![](https://paulvollmer.net/fritzing-parts-api-client/badge.svg)](https://paulvollmer.net/fritzing-parts-api-client/)

This is a super simple [nodejs](https://nodejs.org) Api-Client. It connects to the [fritzing-parts-server](fritzing.github.io/fritzing-parts) and fetches [fritzing](http://fritzing.org/home/) parts.  

## Install

install with yarn
```sh
yarn add paulvollmer/fritzing-parts-api-client
```

or use npm
```sh
npm install paulvollmer/fritzing-parts-api-client --save
```

## Usage
initialize an api client and fetch /fzps endpoint
```javascript
import ApiClient from 'fritzing-parts-api-client'

const apiclient = new ApiClient()
apiclient.getFzps().then(data => {
  // do something with the data
}).catch(err => {
  // do something with the error catch
})
```

## Api Documentation

The complete Api Documentation can be found here:
[Api Documentation](https://paulvollmer.net/fritzing-parts-api-client/class/src/index.js~ApiClient.html)

## Development

clone the repository
```sh
git clone git@github.com:paulvollmer/fritzing-parts-api-client.git
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
