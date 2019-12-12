/*
디스트럭처링

객체의 구조를 분해 후 할당, 확장과 같은 연산을 수행함.

타입에 따라 둘로 나뉨
1. 객체 디스트럭처링
2. 배열 디스트럭처링
*/

// 객체 디스트럭처링
// 변수명에 대응하는 속성값을 추출해 할당
let { id, country } = { id: "happy", country : 88 };

// 할당받을 속성이 없다면 새롭게 선언한 변수를 초기화해둘 수 있음.
let { name, number = 1 } = { name: "Jang" };

// 새로운 이름을 부여해 할당하는 속성 재명명
let { property : newProperty } = { property: "Hoseung"};
console.log(newProperty); // Hoseung