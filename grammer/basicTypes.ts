// 자바스크립트의 타입 지원

// boolean
const bool: boolean = true;

// number
const dec: number = 5;
const hex: number = 0xf00d;
const bin: number = 0b1010;
const oct: number = 0o744;
console.log(dec, hex, bin, oct);

// string
const color: string = "blue";
const sentence: string = `Age : ${dec + 5}`;
console.log(color, sentence);

// Array
const list1: number[] = [1, 2, 3, 4, 5];
const list2: Array<number> = [1, 2, 3, 4, 5];
console.log(list1);
console.log(list2);

// null
const n: null = null;
console.log(n);

// undefined
const u: undefined = undefined;
console.log(u);

// object
interface objForm {
    num: number,
    str: string,
}

const obj1: object = {};
const obj2: { num: number, str: string } = { num: 5, str: 'string' };
const obj3: objForm = { num: 5, str: 'string' };
console.log(obj1);
console.log(obj2);
console.log(obj3);

// 타입스크립트에만 있는 타입

// Tuple
let age: [string, number] = ["JangHoseung", 10];
age.push(5); // string, number 이외 타입의 값은 추가 못함
console.log(age);

// enum
enum Color { Red, Green, Blue }

let c: Color = Color.Red;
console.log(c);

// any
let notSure: any = 4;
notSure = "문자열도 가능";
notSure = false;