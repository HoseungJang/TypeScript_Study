/*
배열 디스트럭처링
간결한 방법으로 배열 요소를 변수에 할당하는 방법을 제공함.
*/

let numbers: string[] = ["one", "two", "three", "four", "five"];

// 배열 디스트럭처링 없이 할당하기
let num1 = numbers[0];
let num2 = numbers[2];

// 배열 디스트럭처링 사용하기
let [num3, num4] = numbers; // 첫 번째, 두 번째 요소 할당
let [,,num5, num6] = numbers; // 세 번재, 네 번째 요소 할당
// 할당하지 않을 요소는 쉼표로 건너뛰면 됨.

//num3, num4의 교환
[num4, num3] = [num3, num4];