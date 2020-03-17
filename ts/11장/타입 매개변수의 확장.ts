// 여러 타입 상속받기
function concat6<T extends string | number>(str1: T, str2: T): T;
function concat6(str1: any, str2: any): any {
    return str1 + str2;
}

console.log(concat6<string|number>("abc", 123));

// 타입 매개변수를 2개 이상 선언하기
function concat7<T, T2>(str1: T, str2: T2): T;
function concat7(str1: any, str2: any): any {
    return str1 + str2;
}

console.log(concat7<string, number>("abc", 123));