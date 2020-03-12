/*
타입스크립트는 값 할당 시 타입을 명시하지 않으면 타입 추론을 통해 타입을 결정한다.
*/

let values = [0, "c", null];

console.log(typeof values); // object
console.log(typeof values[0]); // number
console.log(typeof values[1]); // string
console.log(typeof values[2]); // object