/*
기본 타입
string, number, boolean
symbol
enum
문자열 리터럴
*/

// string
let myName: string = 'Jang'; // 작은따옴표 사용 가능
myName = "Hoseung"; // ts 스타일 가이드에서는 큰따옴표 사용을 권장

let thisYear: number = 2019;
let sentence: string = `올해는 ${thisYear}년`; // 백틱 사용 가능

// number
let dec: number = 6; // 10진수
let hex: number = 0xf00d; // 16진수 
let binary: number = 0b1010; // 2진수
let octal: number = 0o744; // 8진수

// boolean
let isShow: boolean = false;

// symbol
// 고유하고 수정 불가능한 데이터타입
// 객체 속성의 식별자로써 주로 사용됨
let hello = Symbol();

// enum
enum weekDay {Mon, Tue, Wed, Thu}
let day: weekDay = weekDay.Mon;

// 문자열 리터럴 타입
// string 타입의 확장 타입
// type 키워드를 사용해서 정의 가능
type strType = "Jang" | "Hoseung"; // Jang과 Hoseung 이라는 문자열만 허용
let str : strType = "Hoseung";