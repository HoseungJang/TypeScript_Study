/*
명목 타이핑은 명시적으로 타입이 같아야만 타입 호환이 가능하다.
대표적인 예로 Enum이 있다.
*/

enum EastAsia1 { korea = 88, china = 86, japan = 81 }
enum EastAsia2 { korea = 88, china = 86, japan = 81 }

let east1: EastAsia1 = EastAsia1.china;
let east2: EastAsia2 = EastAsia2.korea;

/*
위처럼 명시적으로 같은 타입만 할당이 가능하다.
*/