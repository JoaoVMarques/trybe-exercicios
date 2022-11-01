type bird = {
  wings: 2;
  beak: 1;
}

type sum = (x: number, y: number) => number;

type adress = {
  state: string;
  city: string;
  number: number;
  publicPlace: boolean;
}

// --- parte 2 --- //

type state = "liquid" | "solid" | "gaseous";

type document = number | string;

type system = "linux" | "mac os" | "windows";

type vogals = "a" | "e" | "i" | "o" | "u";

// --- parte 3 --- //

interface Dog {
  _name: string;
  _age: number;

  bark(frase: string) : string
}

class Dog { 
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  bark(frase : string) {
    return `${this._name}: auau, ${frase}`
  }
}

// const meuDoguinho = new Dog('caramelo', 4);
// console.log(meuDoguinho.bark('olá mundo'));

interface House {
  _address: string;
  _color: string;
  _size: string;
  _number: number;
}

class House {
  constructor(address: string, color: string, size: string, number: number) {
    this._address = address;
    this._color = color;
    this._number = number;
    this._size = size;
  }
}

interface Flight {
  _origin: string;
  _destination: string;
  _startDate: Date;
  _endDate: Date;
  _passagers: number;
}

class Flight {
  constructor(origin: string, destination: string, startDate: Date, endDate: Date, passagers: number) {
    this._origin = origin;
    this._destination = destination;
    this._startDate = startDate;
    this._endDate = endDate;
    this._passagers = passagers;
  }
}