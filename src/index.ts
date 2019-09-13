export interface StringAnyMap {
  [name: string]: any;
}

export function filterObjectByRegExp<T extends StringAnyMap>(object: T, regexp: RegExp): Partial<T> {
  const result: Partial<T> = {};

  return Object.keys(object)
    .filter((key) => regexp.test(key))
    .reduce((accumulator, key) => {
      accumulator[key as keyof T] = object[key];
      return accumulator;
    }, result);
}
