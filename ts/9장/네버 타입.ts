/*
네버 타입은 두 가지 상황에서 사용한다.

1. 함수에 닿을 수 없는 코드영역이 있어 반환값이 존재하지 않을 때
- ex) while(true)

2. 함수에서 Throw 객체가 반환되어 오류가 발생할 때
*/

// 1번 케이스
const neverTouch = function (): never {
    while (true) {
        console.log("Never");
    }

    // console.log("닿을 수 없는 코드"); // 무한루프에서 탈출하는 것은 불가능
};

// let resultNever: never = neverTouch();

// 2번 케이스
function error(message: string): never {
    throw new Error(message);
}

// let resultNever: never = error("2번 케이스");