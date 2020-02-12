// 배열 타입을 지정하지 않았을 때
let noTypePerson = [
    { name1: "a", city1: "seoul" },
    { name2: "b", city2: "daejeon" },
    { name3: "c", city3: "daegu" },
];

// 자바스크립트의 객체는 구조를 고정할 수 없으므로 문제가 생김
console.log(JSON.stringify(noTypePerson));

// 객체 리터럴을 배열 요소 타입으로 지정
let objectLiteralTypePerson1: { name: string, city: string }[] = [
    { name: "a", city: "seoul" },
    { name: "b", city: "daejeon" },
    { name: "c", city: "daegu" },
];

console.log(JSON.stringify(objectLiteralTypePerson1));

// 객체 리터럴 타입의 타입 에일리어스
type objectLiteralType = { name: string, city: string };
let objectLiteralTypePerson2: objectLiteralType[] = [
    { name: "a", city: "seoul" },
    { name: "b", city: "daejeon" },
    { name: "c", city: "daegu" },
];

console.log(JSON.stringify(objectLiteralTypePerson1));

// 클래스를 배열 요소 타입으로 지정
class Person1 {
    public full: string;
    constructor(public name: string, public city: string) {
        this.full = `${name}(${city})`;
    }
}

let classTypePerson: Person1[] = [
    new Person1("a", "seoul"),
    new Person1("b", "daejeon"),
    new Person1("C", "daegu"),
]

console.log(JSON.stringify(classTypePerson));

// 인터페이스를 배열 요소 타입으로 지정
interface Person2 {
    name: string,
    city: string,
}

let interfaceTypePerson1: Person2[] = [
    { name: "a", city: "seoul" },
    { name: "b", city: "daejeon" },
    { name: "c", city: "daegu" },
];

console.log(JSON.stringify(interfaceTypePerson1));

// 인터페이스에 배열 객체 상속

interface PersonItems extends Array<Person2> { }

let interfaceTypePerson2: PersonItems = [
    { name: "a", city: "seoul" },
    { name: "b", city: "daejeon" },
    { name: "c", city: "daegu" },
];

console.log(JSON.stringify(interfaceTypePerson2));