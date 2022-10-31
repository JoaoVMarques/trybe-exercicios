export function greeter(name: string):string {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function rhombus(dMaior: number, dMenor: number): number {
  return (dMaior / dMenor) / 2;
}

export function trapezoid(bMaior: number, bMenor: number, height: number): number {
  return ((bMaior + bMenor) * height) / 2;
}

export function circle(radius: number): number {
  return 3.14 * radius ** 2;
}