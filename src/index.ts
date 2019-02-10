export const add = (x, y) => x + y;
export const sub = (x, y) => x - y;
export const mul = (x, y) => x * y;
export const div = (x, y) => x / y;
export const mod = (x, y) => x % y;
export const inc = x => x++;
export const dec = x => x--;
export const like = (x, y): boolean => x == y;
export const eq = (x, y): boolean => x === y;
export const is = (value1, value2): boolean => Object.is(value1, value2);
export const undefinedPrimitive = (): undefined => void 0;
export const id = <T>(x): T => x;
export const oneOf = <T>(input: T, choices: T[]): boolean =>
  Array.from(choices).some(item => item === input);
export const noneOf = <T>(input: T, choices: T[]): boolean => !oneOf(input, choices);
export const divMod = (x: number, y: number): [number, number] => [x / y, x % y];
export const almostEq = (x: number, y: number, epsilon: number = Number.EPSILON): boolean =>
  Math.abs(x - y) < epsilon;
