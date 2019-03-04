export interface StringAnyMap {
  [name: string]: any;
}


export function filterObject(object: StringAnyMap, regexp: RegExp) {
  const result: StringAnyMap = {};

  return Object.keys(object)
    .filter((key) => regexp.test(key))
    .reduce((accumulator, key) => {
      accumulator[key] = object[key];
      return accumulator;
    }, result);
}
