/*
타입스크립트에서 배열 타입은 두 가지로 나뉜다.

1. 배열 타입
2. 제네릭 배열 타입
*/

// 배열 타입
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ['apple', 'banana', 'mango'];
let everyType: any[] = [1, "string", true];
let unionType: (number|string|boolean)[] = [1, "hello", false];

// 위처럼 요소 타입에 []를 붙여 선언함
// 요소 타입으로는 string, number, boolean 등의 내장 타입 뿐만 아니라 클래스, 인터페이스도 올 수 있음.
// any 타입으로 지정하여 모든 타입을 요소로 받아들일 수 있음.
// 유니온 타입으로 제약할 수도 있음.

// 제네릭 배열 타입
let nums: Array<number> = [1, 2, 3, 4, 5];
// Array<요소 타입> 형태로 선언함.

let nums2: typeof nums = [1, 2, 3, 4, 5];
// typeof 연산자로 다른 제네릭 배열의 타입을 참조할 수 있음.

let numAndString: Array<number|string> = [1, "hello"];
// 유니온 타입도 가능

let objArr: Array<() => string> = [() => "one", () => "two"];
// 객체 타입도 받을 수 있음

// 배열 선언과 요소 추가 분리
let num4: Array<number> = new Array<number>();
num4.push(1);
num4.push(2);