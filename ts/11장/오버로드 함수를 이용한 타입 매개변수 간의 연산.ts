function concat3<T>(str1: T, str2: T): T;
function concat3(str1: string, str2: string): string {
    return str1 + str2;
}

console.log(concat3<string>("123", "456"));