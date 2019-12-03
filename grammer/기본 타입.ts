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

// void

// 반환값 없는 함수 선언
function warnUser(): void {
    console.log("This is warning message");
}

// 변수에는 undefined 또는 null만 할당할 수 있어서 유용하지 않음.
let unusuable: void = undefined;

// never

// 절대로 발생하지 않는 값의 타입
// 함수 표현식의 반환 타입, 화살표 함수, 절대 반환하지 않는 표현식 등
// never는 모든 타입의 서브 타입으로서 모든 타입에 할당 가능
// 단, never에는 그 어떤 타입도 할당할 수 없음.

// 다른 코드로 절대 연결되지 않는 경우
function error(message: string): never {
    throw new Error(message);
}

function infinityLoop(): never {
    while (true) {

    }
}