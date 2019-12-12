/*
전개 연산자
- 나머지 매개변수를 선언할 때 (함수를 다루는 장에서 설명)
- 배열 요소를 확장할 때
- 객체 요소를 확장할 때
*/

// 배열 요소 확장
let arr: number[] = [3, 4, 5];
let arr2: number[] = [1, 2, ...arr];
console.log(arr2); // [1, 2, 3, 4, 5]

// 배열 디스트럭처링에 사용
let [first, ...arr3]: number[] = arr2;
console.log(first); // 1
console.log(arr3); // [2, 3, 4, 5]

// 객체 요소 확장
let obj = { c: 3, d: 4, e: 5 };
let obj2 = { a: 1, b: 2, ...obj };
console.log(obj2); // { a: 1, b: 2, c: 3, d: 4, e: 5 }

// 객체 디스트럭처링에 사용
let { d, ...obj3 } = obj;
console.log(d); // 4
console.log(obj3); // { c: 3, e: 5 }