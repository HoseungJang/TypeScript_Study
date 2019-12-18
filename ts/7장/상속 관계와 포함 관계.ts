/*
상속 관계
상속은 클래스 계층을 만들어서 코드 중복을 줄이는 객체지향 프로그래밍 방법이다.
상속에서 부모 클래스를 기반 클래스 또는 슈퍼 클래스라고 한다.
그리고 부모를 상속받는 자식 클래스를 파생 클래스 또는 서브 클래스라고 한다.
*/

class parents {
    echo(): string {
        return "helloWorld";
    }
}

class child extends parents {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }
}

let s: child = new child("Jang");
console.log(s.name);
console.log(s.echo());

/*
포함 관계
포함 관계는 클래스가 다른 클래스를 포함하는 관계이다.
대표적으로 두 가지로 나뉜다.

1. 합성 관계
2. 집합 관계
*/