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

/**/

export class UserAccount {
  constructor(public name1: string, public age1: number) {}
}

class CharAccount extends UserAccount {
  nickname1: string;
  level1: number;

  constructor(name1: string, age1: number, nick: string, level: number) {
    super(name1, age1);

    this.nickname1 = nick;
    this.level1 = level;
  }
}

const Walter = new UserAccount(`walter`, 17);
console.log(Walter);

const vitoria = new CharAccount('VITORIA', 16, 'vi', 4);
console.log(vitoria);
