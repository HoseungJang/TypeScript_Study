enum WeekDay { Mon , Tue, Wed, Thu }
// 각 속성은 상수와 연결된다. 첫 번째 속성값의 인덱스는 0부터 시작한다.
// 위에서 Mon은 0과 연결된다.
// 특별히 명시하지 않는 이상 인덱스는 1씩 증가한다.

let a = WeekDay[WeekDay.Mon]; // 
console.log(a); // 1
let b = WeekDay; // 할당 가능
console.log(b);


// const 선언자를 붙여 선언할 수 있음.
const enum WeekDay2 { Mon = 10, Tue = 1, Wed, Thu }

// const 가 있을 때의 차이
let c = WeekDay2["Mon"];
// let c = WeekDay2[WeekDay2.Mon]; 이런식으로 접근 불가능. 문자열만 허용
console.log(c); // 10
// let c = WeekDay2; const붙인 enum은 할당 못함.

// 문자열 enum
enum WeekDay3 {
    Mon = "Monday",
    Tue = "Tuesday",
    Wed = 5,
}
// 속성 중 하나라도 문자열이 들어가면 나머지는 문자열 또는 숫자임.

// 문자열 enum과 숫자만 있는 enum과의 차이
// 문자열 enum의 속성에는 연산식을 할당할 수 없다.

// enum을 타입으로 지정한 변수
let myDay: WeekDay = 5; // 숫자만 할당 가능
// 문자열 enum의 경우 할당 불가능 (속성 중 하나가 숫자 값일 때 제외)
let myDay3: WeekDay3 = 5; // WeekDay3은 Wed 속성의 값이 숫자이므로 숫자 할당 가능
// 문자열 enum은 enum 객체를 거쳐야만 할당 가능
myDay3 = WeekDay3.Mon;

// 리버스 매핑
// enum 객체는 리버스 매핑을 지원함
// 속성명으로만 속성값에 접근하는게 아니라 속성값으로 속성명에 접근하는 것
console.log(WeekDay[0]); // "Mon"
console.log(WeekDay["Mon"]); // 0