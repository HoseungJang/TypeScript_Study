/*
타입 어설션을 사용하면 타입스크립트 컴파일러는 타입 어설션 정보를 이용해 컴파일을 수행한다.
타입 어설션은 크게 두 가지로 사용할 수 있다.

1. <>
2. as
*/

let myNum: any = "2017";

let num1: number = <number>myNum;
let num2: number = myNum as number;

console.log(typeof num1);
console.log(typeof num2);