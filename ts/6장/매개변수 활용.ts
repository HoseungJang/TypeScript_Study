// 기본 초기화 매개변수
// 함수의 특정 매개변수에 인자가 전달되지 않으면 매개변수에 설정된 초깃값으로 값을 초기화하는 기능

function add(x: number, y: number = 2): number {
    return x + y;
}

console.log(add(3)); // 5
console.log(add(3, 5)); // 8

// 나머지 매개변수
// 개수가 정해지지 않은 인수를 배열로 받을 수 있는 기능
// 0개 이상의 인자를 받을 수 있음

function concat(...list: string[]): string {
    return list.join("");
}

console.log(concat("one", " ", "two", " ", "three"));

// 선택 매개변수
// 생략 가능한 매개변수를 선언할 때 사용
// 선택 매개변수에는 기본 초기화를 쓸 수 없음
function minus(a: number, b?: number): number {
    return a - b;
}

console.log(minus(5)); // NaN
console.log(minus(5, 5)); // 0