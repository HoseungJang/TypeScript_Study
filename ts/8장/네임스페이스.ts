/*
네임스페이스는 하나의 독립된 이름 공간을 만든다.
여러 파일에 걸쳐 하나의 네임스페이스를 공유할 수 있다.
namespace 키워드를 사용해 선언할 수 있다.

namespace와 똑같은 기능을 하는 키워드로 module이 있다.
타입스크립트에 namespace가 생기기 전에는 module로 이름 공간을 구분짓고 있었다.
그런데 ES6에서 namespace가 내부 모듈을 의미하는 표준 용어로 선택되었고,
타입스크립트에 namespace가 추가되면서 module과 공존하게 되었다.
*/

module Hello {
    function print(): void {
        console.log("Hello!");
    }
}

namespace Hello {
    function print(): void {
        console.log("Hello!");
    }
}

// ES6로 변환하면 똑같은 코드로 변환된다.