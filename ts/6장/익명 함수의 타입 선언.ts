/*
익명 함수는 변수에 할당할 수 있다.
익명 함수가 할당된 변수에는 타입을 추가할 수 있다.
타입스크립트에서는 함수 자체에 대한 타입을 함수 타입이라고 한다.
*/

// 익명 함수의 타입 선언 방법 1
let first = function (name: string): string {
    return name;
};
// 익명 함수의 매개변수와 반환값의 타입을 직접 명시하는 방법

console.log(first("Jang")); // Jang

// 익명 함수의 타입 선언 방법 2
let second: (name: string) => string = (name) => {
    return name;
};
// 익명 함수가 할당되는 변수에 타입을 따로 정의하고, 할당되는 익명 함수에는 타입을 명시하지 않는 방법

console.log(second("Ho seung")); //Ho seung

/*
두 번째 방법의 좋은 점

1. 익명 함수의 매개변수나 반환값의 타입을 별도로 분리할 수 있다.
2. 익명 함수에 타입을 추가하지 않아도 함수 타입만으로 익명 함수의 타입 안전성이 보장된다.
3. 익명 함수의 타입을 함수 타입을 통해 곧바로 확인이 가능하므로 가독성이 좋아진다.
*/

// type 키워드로 분리하기
// 하나의 타입을 여러 변수가 가질 때 유용
type calcType = (a: number, b: number) => number;

let add: calcType = (a, b) => {
    return a + b;
};

let sub: calcType = (a, b) => {
    return a - b;
}
console.log(add(5, 3)); // 8
console.log(sub(5, 3)); // 2