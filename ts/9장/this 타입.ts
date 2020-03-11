/*
this 타입은 인터페이스와 클래스의 하위 타입이면서 이들을 참조할 수도 있는 타입이다.
this 타입을 다형적 this 타입(polymorphic this type)이라고도 한다. 선언 위치에 따라 참조하는 대상이 달라지기 때문이다.

자기 자신을 반환하는 인스턴스 메소드를 활용해 체이닝 형태로 선언하면 마치 데이터가 흐르는 듯이 표현할 수 있다.
이러한 패턴을 플루언트 인터페이스 패턴(fluent interface pattern)이라 하고 줄여서 플루언트 패턴이라고 한다.
*/

// 플루언트 패턴을 사용한 메소드 체이닝
class AddCalc {
    public constructor(public value: number = 0) { }
    // this가 아닌 number를 반환함으로써 체이닝을 추가할 수 없음.
    public add(operand: number): number {
        return this.value += operand;
    }
}

class MyCalc extends AddCalc {
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
}

const result: number = new MyCalc(3).multiply(5).add(10);
console.log(result);