class Superclass {
  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  protected sayHello(): void {
    console.log('Olá mundo!') 
  }
}

class Subclass extends Superclass {
  public sayHello2(): void {
    this.sayHello();
  }
}

const myFunc = (object: Subclass) => {
  object.sayHello2();
};

const sub = new Subclass();

myFunc(sub);