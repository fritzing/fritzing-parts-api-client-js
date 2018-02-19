# fritzing-parts-api-client

## Usage

install with yarn
```
yarn add paulvollmer/fritzing-parts-api-client
```

or use npm 
```
npm install paulvollmer/fritzing-parts-api-client --save
```

initialize an api client and fetch /fzps endpoint
```
import ApiClient from 'fritzing-parts-api-client'

const apiclient = new ApiClient()
apiclient.getFzps()
```

## License
[MIT](LICENSE)
