/*
readonly는 타입스크립트 2.0부터 지원하는 제한자이다.
상수 선언 시 사용할 수 있다.

const와 비교한 내용은 아래와 같다.

const와 readonly는 상수 선언에 사용할 수 있다.
const는 초기화가 필수지만, readonly는 선언만 해둘 수 있다.
const는 재할당이 불가능 하지만, readonly는 초기화를 한 번도 하지 않았다는 조건 하에 재할당이 가능하다.
const는 전역 변수, 클래스 메소드의 변수, 함수의 변수에만 사용할 수 있지만,
readonly는 인터페이스와 클래스의 멤버 변수, 객체 리터럴의 속성, 새롭게 정의하는 타입에만 사용할 수 있다.
즉, readonly는 읽기 전용 '속성'을 만드는 것이고, const는 상수를 만든다.
*/

interface ICount {
    readonly count: number;
}

class TestReadonly implements ICount {
    readonly count: number; // readonly 멤버변수

    static readonly count2: number; // static 키워드 사용 가능

    private readonly count3: number; // 접근 제한자 사용 가능

    readonly count4: number = 0; // 선언 후 초기화

    getCount(): void {
        //this.count4 = 0; // readonly로 선언되어 초기화된 멤버에 재할당 불가
        //readonly count5: number = 0; // readonly는 메소드에 선언 불가
    }
}

function getCount(): void {
    //readonly count: number; // readonly는 함수에 선언 불가
}

// readonly는 객체 리터럴의 속성 앞에 지정 가능
let literalObj: { readonly alias: string } = { alias: "happy" };
//literalObj.alias = "test"; // readonly 속성에 재할당 불가