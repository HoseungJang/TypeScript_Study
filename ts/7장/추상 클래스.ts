/*
추상 메소드: 선언만 된 메소드
구현 메소드: 실제 구현 내용을 포함한 메소드

추상 클래스의 특징
1. 추상 클래스에는 추상 메소드와 구현 메소드가 동시에 존재할 수 있다.
2. 단독으로 객체 생성이 불가능하고, 추상 클래스를 상속받고 구현 내용을 추가하는 자식 클래스를 통해서 객체를 생성해야 한다.

추상 메소드, 추상 멤버 변수의 특징
1. public 또는 protected로만 선언할 수 있다. (자식 클래스에서 접근이 가능해야 구현을 할 수 있기 때문이다.)

템플릿 메소드 패턴
- 추상 클래스에 기반을 둔 구현 방식으로, 이 방식은 추상 클래스의 구현 메소드에서 추상 멤버 변수나 추상 메소드를 활용해 가상의 공통 로직을 구현해 두고, 추상 멤버 변수나 추상 메소드에 대한 세부 로직은 구현 클래스에서 구현한다.
*/

// 템플릿 메소드 패턴 예제
abstract class AbstractBird {
    // 추상 멤버 변수
    public abstract birdName: string;
    public abstract habitat: string;

    // 추상 메소드
    public abstract flySound(sound: string): void;

    // 구현 메소드
    public fly(): void {
        this.flySound("파닥파닥");
    }
    
    // 구현 메소드
    public getHabitat(): void {
        console.log(`${this.birdName}의 서식지는 ${this.habitat}입니다.`);
    }
}

class WildGoose extends AbstractBird {
    // 추상 멤버 변수를 상속
    constructor(public birdName: string, public habitat: string) {
        super();
    }

    // 추상 메소드를 오버라이딩하여 구현
    flySound(sound:string): void {
        console.log(`${this.birdName}가 ${sound} 날아갑니다.`);
    }
}

let wildGoose = new WildGoose("기러기", "순천만 갈대밭");
wildGoose.fly();
wildGoose.getHabitat();