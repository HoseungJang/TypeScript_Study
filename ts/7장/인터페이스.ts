/*
인터페이스

1. 자바스크립트가 지원하지 않는 타입스크립트만의 특징이다.
2. 인터페이스는 타입이고 컴파일 후에는 사라진다.
3. 인터페이스는 선언만 존재한다.
4. 인터페이스는 상속할 수 있다.
5. 기본적인 선언 형태는 아래와 같다.

interface <이름> {
    <이름>: <타입>;
    ...
}

6. 아래와 같은 형태로 상속할 수 있다.
interface <자식 이름> extends <부모 이름> {
    <이름>: <타입>;
    ...
}
*/

// 인터페이스 다중 상속
interface Car {
    speed: number;
}

interface SportsCar {
    acceleration: number;
}

interface MyOptimizedCar extends Car, SportsCar {
    waterproof: boolean;
}

let myCar = <MyOptimizedCar>{};
myCar.speed = 100;
myCar.acceleration = 500;
myCar.waterproof = true;

// 메소드 이름이 같은 인터페이스를 다중 상속시
interface Dog {
    run(): void;
    getStatus(): { runningSpeed: number; };
}

interface Bird {
    fly(): void;
    getStatus(): { flightSpeed: number; };
}

// 상속받는 인터페이스에서 같은 이름의 메소드를 모두 재정의해야함.
interface DogBird extends Dog, Bird {
    getStatus(): { runningSpeed: number, flightSpeed: number; };
}

// implements 키워드로 인터페이스를 클래스로 구현
// 인터페이스의 속성들을 모두 구현해줘야함.
class NewAnimal implements DogBird {
    run(): void { }
    fly(): void { }
    getStatus(): { runningSpeed: number, flightSpeed: number; } {
        return { runningSpeed: 10, flightSpeed: 20 };
    }
}

// 인터페이스는 컴파일 후에 사라지므로 typeof 키워드 사용이 불가능

// 함수 타입 정의
// 인터페이스에 익명 함수 선언 가능
// 익명 함수를 할당받는 변수의 타입으로 설정
interface IFormat {
    (data: string, toUpper?: boolean): string;
}

let format1: IFormat = (data: string, toUpper?: boolean): string => {
    if (toUpper) {
        return data.toUpperCase();
    }

    return data.toLowerCase();
}

let format2: IFormat = (str: string, toUpper?:boolean): string => {
    if (toUpper) {
        return str.toUpperCase();
    }

    return str.toLowerCase();
}

console.log(format1('HAPPY!'));
console.log(format1('happy!', true));
console.log(format2('HAPPY!', false));
console.log(format2('HAPPY!'));
console.log(format2('happy!', true));
console.log(format2('HAPPY!', false));