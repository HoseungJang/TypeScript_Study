// 클래스 생성
class Rectangle {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getArea(): number { return this.x * this.y };
}

// Rectangle 클래스는 class 타입이 된다.
// Rectangle 클래스 타입은 아래의 interface 타입과 정확히 일치한다.
interface Rectangle {
    x: number;
    y: number;
    getArea(): number;
}

// 클래스 내부에서는 생성자인 constructor를 정의한다.
// 생성자는 객체 생성에 필요한 것들을 매개변수로 전달받아 멤버 변수를 초기화한다.
// 클래스 선언 시 생성자를 생략하면 기본 생성자를 호출한다.
// 즉, 클래스에 초기화할 내용이 없다면 생성자를 생략할 수 있다.

// 객체 생성
// 클래스는 '틀'이고, 실제 사용을 위해서는 객체로 생성해야 한다.
let rectangle: Rectangle = new Rectangle(1, 5);