## Install.

Install with [npm](https://www.npmjs.com/):
```sh
$ npm install --save object-keys-filter
```

## Usage.

```ts
import { filterObjectByRegExp } from "object-keys-filter";

const source = {
  property: true,
  Property: true,
  key: "value"
};

const filtered = filterObjectByRegExp(source, /property/i);
```
