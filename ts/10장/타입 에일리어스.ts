/*
타입 에일리어스
기존 타입에 새로운 이름을 지을 수 있음
*/

type myId = string;

// 유니온 타입, 객체 리터럴 타입 등의 복잡한 타입에 사용하면 좋음
type myAlias = string | undefined;
type User = {
    id: myId;
    alias?: myAlias;
    city: string;
};

const id1: User = { id: "happy1", city: "seoul" };
const id2: User = { id: "happy2", alias: undefined, city: "daegu" };
const id3: User = { id: "happy3", alias: "happy3!!", city: "daejeon" };

console.log(id1);
console.log(id2);
console.log(id3);