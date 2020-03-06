/// <reference path="여러 파일에 하나의 네임스페이스1.ts" />
/*
프로젝트 단위 컴파일 시에는 필요 없지만,
파일 단위의 컴파일 시에는 위처럼 경로를 명시해주어야 한다.

단, 이 경우에서 올바른 결과를 보려면 '여러 파일에 하나의 네임스페이스1.ts' 파일과 합쳐서 하나의 js파일로 변환해야한다.
*/

namespace Car {
    let wheels: number;
    console.log(auto);


    class Taxi implements ICar {
        name: string;
        vendor: string;
    }
}

console.log(Car.auto);
// console.log(Car.wheels); // export 하지 않았음.