/*
유니온 타입
두 개 이상의 타입을 하나의 타입으로 정의한 타입
*/

// 타입 사이에 | 사용
let strAndNum: string | number;
strAndNum = "asdf";
strAndNum = 1234;