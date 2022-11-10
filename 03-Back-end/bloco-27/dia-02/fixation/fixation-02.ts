interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  public myFunc(number: number) : string {
    const result = number + this.myNumber;
    return `${number} +  ${this.myNumber} = ${result}`;
  }
}

const object = new MyClass(4);
console.log(object.myFunc(2));