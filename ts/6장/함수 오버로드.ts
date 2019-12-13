/*
함수 오버로드
함수명은 같지만 매개변수와 반환 타입이 다른 함수를 여러 개 선언할 수 있는 특징
*/

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
    return a + b;
}

// 매개변수, 반환값을 any로 선언한 함수를 가장 아래에, 구체적인 타입을 명시한 함수를 그 위에 쌓는 식으로 해야함.
