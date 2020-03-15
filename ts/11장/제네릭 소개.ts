/*
제네릭은 클래스와 함수에 타입이 고정되는 것을 방지하고 재사용할 수 있는 요소를 선언할 수 있게 한다.

장점

1. 제네릭의 타입 검사를 컴파일 시간에 진행해 타입 안전성 보장

2. 캐스팅 관련 코드 제거 가능

3. 제네릭 로직을 통한 재사용 가능한 코드 생산 가능
*/

// 타입 매개변수 T, 매개변수는 T에 의해 타입이 정해짐
function arrayConcat<T> (array1: T[], array2: T[]): T[] {
    return array1.concat(array2);
}

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// 타입 매개변수로 number를 넘김
let resultConcat = arrayConcat<number>(array1, array2);
console.log(resultConcat);