/*
오버라이딩: 부모 클래스에 정의된 메소드를 자식 클래스에서 새로 구현(재정의)하는 것.

오버라이딩의 조건
1. 오버라이든 메소드의 매개변수 타입은 오버라이딩 메소드의 매개변수 타입과 같거나, 상위 타입이어야 한다. (오버라이딩 메소드의 매개변수 타입이 any인 경우는 예외)
2. 오버라이든 메소드의 매개변수 개수는 오버라이딩 메소드보다 많거나 같아야 한다.

- 매개변수 이름은 달라져도 된다.
*/

class Bird {
    // 오버라이든 메소드
    public flight(distance: number): string {
        return `새가 ${distance}미터 날아갑니다.`;
    };
}

class Eagle extends Bird {
    // 오버라이딩 메소드
    public flight(distance: number): string {
        return `독수리가 ${distance}미터 날아갑니다.`;
    };
}