export class Person {
  /*name: string;
  age: number | string;*/

  constructor(public name: string, public age: number | string) {
    /*this.name = name;
    this.age = age;*/
  }

  info(): string {
    return `Meu nome é ${this.name} e tenho ${this.age} anos`;
  }
}
const person = new Person('Walter', 17);
console.log(person.info());
