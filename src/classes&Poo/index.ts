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
  private nickname1: string;
  /*readonly*/ level1: number;

  constructor(name1: string, age1: number, nick: string, level: number) {
    super(name1, age1);

    this.nickname1 = nick;
    this.level1 = level;
  }

  get getLevel() {
    console.log('-----GET-----');
    return this.level1;
  }

  set setLevel(level1: number) {
    this.level1 = level1;
  }

  reverseName(): string {
    return this.name1.split('').reverse().join('');
  }
}

const Walter = new UserAccount(`walter`, 17);
console.log(Walter);

const vitoria = new CharAccount('VITORIA', 16, 'vi', 4);
/*vitoria.nickname1 = 'witoria';*/
console.log(vitoria.getLevel);
vitoria.setLevel = 499;
console.log(vitoria.reverseName());
console.log(vitoria);
