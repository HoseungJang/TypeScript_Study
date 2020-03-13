/*
구조 서브타이핑
구조가 부분적으로 같으면 타입 호환

조건
- 하위 타입이 상위 타입으로만 호환된다.

상위 타입
- 타이핑 관점에서 공통되는 구조가 들어있는 기본 형태

하위 타입
- 상위 타입을 포함하면서 구조가 보태어진 특정한 형태
*/

type upper = { a: string, b: string };
type sub = { a: string, b: string, c: string};
let objectUpper: upper = { a: "a", b: "b" }; // 상위 타입
let objectSub: sub = { a: "a", b: "b", c: "c" };
objectUpper = objectSub; // 상위 타입 = 하위 타입;
console.log(objectUpper);

// 매개변수 개수가 다른 함수 타입간의 구조 타이핑
// 함수 간의 구조 서브타이핑에서는 예외로 하위 타입 = 상위 타입; 꼴로 할당된다.
let funcUpper = (a: string) => a;
let funcSub = (a: string, b: string) => a + b;

funcSub = funcUpper; // 하위 타입 = 상위 타입;
console.log(funcSub("hello", "world")); // funcUpper가 실행됨

// 구조가 일부 같은 객체와 인터페이스 간의 구조 서브타이핑
interface GroupUpper { name: string; }
let groupSub = { name: "TypeScript Group", id: 1 };
let groupUpper: GroupUpper;
groupUpper = groupSub;
console.log(groupUpper.name); // TypeScript Group
// console.log(groupUpper.id) // 구조 서브타이핑이 됬기 때문에 id 속성에 접근 불가능