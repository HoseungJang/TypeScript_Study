/*
콜백 함수는 또 다른 함수의 매개변수로 전달될 수 있는 함수이다.
콜백 함수를 전달받는 함수는 콜백 함수보다 상위 처리를 담당하고, 고차 함수라고 불린다.
고차 함수는 하나 이상의 콜백 함수를 전달받거나 하나 이상의 함수를 결과로 반환해주는 특성이 있다.
*/

type echoCallbackType = (message: string) => string;

let callbackEcho: echoCallbackType = message => message;

function echoFunction(message: string, callback: echoCallbackType) {
    return callback(message);
}

echoFunction("hello", callbackEcho);