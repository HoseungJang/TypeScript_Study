// 함수 호출 시 객체 리터럴 전달 후 속성을 검사하는 것은 번거로운 일임.
// 예시
function printProfile1(obj: any): void {
    let name: string = "";
    let nationality: string = "";

    name = (obj.name == undefined) ? "anonymous" : obj.name;
    nationality = (obj.nationality == undefined) ? "?" : obj.nationality;

    console.log(`${name} : ${nationality}`);
}

printProfile1({ name : "Jang" }); // Jang : ?

// 위 코드는 obj 객체에 속성이 있는지 검사하고, 없다면 기본값을 할당한다.
// 속성이 여러개라면 저런 검사는 상당히 비효율적이다.

function printProfile2({ name, nationality = "?" }): void {
    console.log(`${name} : ${nationality}`);
}

printProfile2({ name : "Jang" }); // Jang : ?

// 위 코드는 디스트럭처링 매개변수로 기본값을 설정하였다.
// 전달받은 객체에 nationality가 없을 때를 대비한 것이다.
// 단, 무조건 객체를 전달해야 한다.

function printProfile3({ name, nationality = "?" } = { name: "anonymous" }): void {
    console.log(`${name} : ${nationality}`);
}

printProfile3(); // anonymous : ?
printProfile3({ name: "Jang" }); // Jang : ?
printProfile3({ name: "Jang", nationality: "Korea" }); // Jang : Korea

// 객체를 무조건 전달하지 않아도 되게 하려면 디스트럭처링 매개변수의 우항에 할당식을 추가해야 한다.
// 객체를 전달할 때는 name 속성은 무조건 넘겨져야 한다.
// nationality 속성이 있다면 기본값은 무시된다.