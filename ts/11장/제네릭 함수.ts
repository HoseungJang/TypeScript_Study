function concat1<T>(str1: T, str2: T): string {
    // 타입 캐스팅 없이는 연산 불가능 (타입 매개변수끼리 + 연산을 할 수 없음)
    return String(str1) + String(str2);
}

concat1<string>("abc", "def");