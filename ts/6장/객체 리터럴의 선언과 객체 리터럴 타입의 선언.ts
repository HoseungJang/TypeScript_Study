/*
객체 리터럴은 여러 속성과 값을 한 단위로 묶어서 표현할 수 있는 객체이다.
*/

interface PersonType {
    name: string;
    hello(this: PersonType, name2: string): string;
}
// this는 항상 첫 번째 매개변수에 선언해줘야함.

let typedPerson: PersonType = {
    name: "Jang",
    hello: function (this: PersonType, name2: string): string {
        return `Hello, ${this.name} + ${name2}`;
    },
};

console.log(typedPerson.hello('Hoseung'));