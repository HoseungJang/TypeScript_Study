import * as ns from "./네임스페이스 모듈1";

namespace Car2 {
    let wheels: number;
    console.log(ns.Car2.auto);

    class Taxi implements ns.Car2.ICar {
        name: string;
        vendor: string;
    }
}

console.log(ns.Car2.auto);
// console.log(Car.wheels); // export 하지 않았음.