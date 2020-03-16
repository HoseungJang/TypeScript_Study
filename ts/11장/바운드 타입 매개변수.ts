/*
타입 매개변수에 대입되는 타입을 제한하려면 타입 매개변수가 특정 타입을 상속해야한다.
그것을 타입 매개변수가 특정 타입에 묶였다(bound)고 하여 바운드 타입 매개변수 라고 한다.
*/

function concat2<T extends string>(str1: T, str2: T): string {
    // 바운드 타입 매개변수끼리도 타입 캐스팅 없이는 연산이 불가능하다.
    return String(str1) + String(str2);
}