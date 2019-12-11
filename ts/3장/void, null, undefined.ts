// void
// 함수의 반환값이 없을 때 지정하는 타입
// null 또는 undefined만 할당할 수 있음.

function hello(): void {
    console.log("no return");
}

// strictNullChecks 옵션을 통해 null과 undefined 할당을 막을 수 있음.

// undefined와 null의 차이
console.log(null === undefined); // false
console.log(null == undefined); // true
console.log(undefined === undefined); // true
/*
undefined와 null은 값이 없다는 관점에서 보면 같다.
따라서 == 로 비교하면 true 이고, === 로 비교하면 타입이 다르므로 false
*/