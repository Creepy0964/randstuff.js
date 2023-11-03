# randstuff.js
Randstuff API on Node.JS using Axios.

## Prerequisites
`NodeJS` and `Axios` library (`npm i axios`)

## How to use
1. Put `randstuff.js` in your project folder
2.
```js
import { Randstuff } from './randstuff.js';s
const rnd = new Randstuff();
rnd.get_random_joke().then((joke) => console.log(`Joke: ${joke["joke"]["text"]}`));
```
For more information about returnable objects and functions, refer to `randstuff.md`.
