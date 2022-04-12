// ARRAY<T> - T[]
export function multiplicaArgs(...args: Array<number>) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

console.log(multiplicaArgs(4, 3, 5));
console.log(concatenaStrings('a', 'b', 'c'));
console.log(toUpperCase('a', 'b', 'c'));
