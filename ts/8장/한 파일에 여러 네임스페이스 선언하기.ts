namespace MyInfo1 {
    export let name: string = "happy1";
    export function getName2(): string {
        return MyInfo2.name2;
    }
}

namespace MyInfo2 {
    export let name2: string = "happy2";
    export function getName(): string {
        return MyInfo1.name;
    }
}

console.log(MyInfo1.getName2());
console.log(MyInfo2.getName());

/*
네임스페이스간 서로 모듈을 호출하고 주고받을 수 있다.
전역에서 네임스페이스에 선언된 외부 모듈을 호출할 수도 있다.
*/