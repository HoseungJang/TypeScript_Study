/*
오버로딩: 메소드의 이름은 같지만 매개변수의 타입과 개수를 다르게 정의하는 것.
*/

class SingleTypeChecker {
    constructor() { }

    // 오버라이든 메소드
    typeCheck(value: string): void {
        console.log(`${typeof value} : ${value}`);
    }
}

class UnionTypeChecker extends SingleTypeChecker {
    constructor() { super(); }

    // 오버라이딩 메소드를 오버로딩
    typeCheck(value: number): void;
    typeCheck(value: string): void; // 오버라이든 메소드와 같은 타입을 포함해야함.
    
    // 오버라이딩 메소드
    typeCheck(value: any): void {
        if (typeof value === "number") {
            console.log(`숫자: ${value}`);
        } else if (typeof value === "string") {
            console.log(`문자열: ${value}`);
        } else {
            console.log(`기타: ${value}`);
        }
    }
}

const unionTypeChecker = new UnionTypeChecker();
unionTypeChecker.typeCheck(123);
unionTypeChecker.typeCheck("asdf");
// unionTypeChecker.typeCheck(true) <- 에러
// any 타입이라 모든 타입이 할당 될 것 같지만, 실제로는 오버로드된 메소드들의 매개변수 타입만 받을 수 있다.

// 인터페이스를 클래스에서 구현하여 오버로딩
interface IPoint {
    getX(x: any): any;
}

class Point implements IPoint {
    getX(x?: number | string): any {
        if (typeof x === "number") {
            return x;
        } else if (typeof x  === "string") {
            return x;
        }
    }
}

let p = new Point();
console.log(p.getX());
console.log(p.getX("hello"));
console.log(p.getX(123));