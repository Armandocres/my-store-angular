const username: string = 'Armandocres';

const suma = (a: number, b: number):number => {
  return a + b;
}

suma(1, 3);

class Person {
  private age: number;
  lastName: string;

  // constructor(public age: number, public lastName: string){}

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }

  getName() {
    return this.age;
  }
}

const armando = new Person(15, 'Cres');
