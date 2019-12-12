/*
type 키워드를 사용해 매개변수의 타입을 선언하여
객체 디스트럭처링을 수행할 수 있다.
*/

type C = { a: string, b?: number }

function fruit({ a, b }: C): void {
    console.log(a, b);
}

fruit({ a: "apple", b: 10 }); // apple 10
fruit({ a: "apple" }); // apple undefined
// 매개변수 b는number 타입이고 선택연산자인 ?로 선언했기 때문에 생략할 수 있다.