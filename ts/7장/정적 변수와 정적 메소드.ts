class Circle {
    public static pi: number = 3.14;
    public static circleArea: number = 0;

    public static getArea(radius: number): number {
        this.circleArea = radius ** 2 * Circle.pi;
        return this.circleArea;
    }

    public static set area(pArea: number) {
        Circle.circleArea = pArea;
    }

    get area(): number {
        return Circle.circleArea;
    }
}

console.log(`1번: ${Circle.getArea(3)}`);

Circle.area = 100;

const circle: Circle = new Circle();

console.log(`2번: ${circle.area}`);

/*
static 키워드를 사용하면 객체 생성 없이 접근이 가능하다.
접근 제한자로 정적 멤버 변수, 메소드의 외부 접근을 허용/차단할 수 있다.

1번 출력 결과는 정적 메소드 getArea의 반환값이다.
2번 출력 결과는 circle 객체의 area 변수값인데, static 멤버는 클래스와 객체 간에 공유된다는 것을 알 수 있다.
*/