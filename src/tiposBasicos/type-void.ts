function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  name: 'Walter',
  surname: 'Junior',

  ShowName(): void {
    console.log(this.name + ' ' + this.surname);
  },
};

semRetorno('Walter', 'Junior');
pessoa.ShowName();

export { pessoa };
