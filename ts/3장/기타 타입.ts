import { NumericLiteral } from "babel-types";

/*
기타 타입

유니온 타입
인터섹션 타입
특수 타입
*/

// 유니온 타입
// 2개 이상의 타입을 하나의 타입으로 정의한 타입
let x: string|number;
x = "string";
x = 1234;

// 인터섹션 타입
// 두 타입을 합쳐 하나로 들 수 있는 타입
interface Cat {leg : number;}
interface Bird {wing: number;}
let birdCat: Cat & Bird = {leg : 4, wing : 2};
// Cat, Bird 인터페이스에 선언된 속성을 합치기 위해 Cat & Bird와 같은 방식으로 선언

// 특수 타입
// void, null, undefined

// void
// 빈 값을 나타내는 타입
// 함수에 반환값이 없을 때, undefined, null 값을 받을 때 등에 사용
function say() : void {
    console.log("hello");
}

let unusable: void = undefined;