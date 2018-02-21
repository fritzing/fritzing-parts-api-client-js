# fritzing-parts-api-client

This is a super simple api client to fetch data from the fritzing.github.io/fritzing-parts server.

## Usage

install with yarn
```sh
yarn add paulvollmer/fritzing-parts-api-client
```

or use npm
```sh
npm install paulvollmer/fritzing-parts-api-client --save
```

initialize an api client and fetch /fzps endpoint
```javascript
import ApiClient from 'fritzing-parts-api-client'

const apiclient = new ApiClient()
apiclient.getFzps().then(data => {
  // do something with the data
}).catch(err => {
  // do something with the error
})
```

## License
[MIT](LICENSE)
