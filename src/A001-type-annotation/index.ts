/*eslint-disable*/
let nome: string = 'Walter';
let age: number = 17;
let old: boolean = false;
let symbol: symbol = Symbol('qualquer-symbol');
/* let big: bigint = 10n; */

//Arrays
let arrayNumber: Array<number> = [1, 2, 3];
let arraynumber2: number[] = [1, 2, 3];
let arrayString: Array<string> = ['1', '2', '3'];
let arrayString2: string[] = ['1', '2', '3'];

//Objetos
let pessoa: {name: string, age: number, old?: boolean} = {
    age: 17,
    name: 'Walter'
}

//Funçoes
function soma(x: number, y: number) {
    return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y