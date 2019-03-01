## Install.

Install with [npm](https://www.npmjs.com/):
```sh
$ npm install --save object-keys-filter
```

## Usage.

```ts
import { filterObject } from "object-keys-filter";

const source = {
  property: true,
  Property: true,
  key: "value"
};

const filtered = filterObject(source, /property/i);
```