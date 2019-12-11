// any 타입
// 어떤 타입의 값도 받아들일 수 있는 최상위 타입
// 할당되는 타입을 예측할 수 없을 때 유용
// 배열의 요소로 사용하면 유용

let basket: any = 10;
basket = true;
basket = "banana";

let arr: any[] = [];
arr.push(1);
arr.push("asfd");
arr.push(true);

let asdf; // let asdf: any; 와 똑같음
// any를 명시했냐 안했냐의 차이
// noImplicitAny 옵션으로 any 타입이 생략 불가능하도록 만들 수 있음.
let num1 = 5;
let num2: any = 5;
num1.toFixed(2);
num2.toFixed(2);
// 문제 없음. number 타입의 기본 메소드임.
// 그러나 num1.asdf(); 이 경우 문제가 생김
num2.asdf(); // any 타입이기 때문에 에러 안생김

// Object 타입
// any 타입과 같은 역할을 함.
// 단, 속성 유무를 검사하는 시점이 다름
// any는 런타임 시점에 검사하지만, object는 컴파일 시점에 검사한다.
let num3: Object = 5;
// num3.toFixed(2); 컴파일 에러가 발생한다. num3는 타입이 불명확한 Object 타입이기 때문.