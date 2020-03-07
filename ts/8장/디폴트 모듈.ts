/*
export에는 두 가지 형태가 있다.

1. named export
모듈을 동일한 이름 또는 특정 이름으로 export 한다.

2. default export
모듈을 이름 없이 export 한다.
*/

function hello() {
    console.log("hello");
}

export default {
    title: "helelo world",
    length: 11,
    hello,
}