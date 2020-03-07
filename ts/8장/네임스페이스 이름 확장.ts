// <상위요소>.<하위요소> 형태로 확장

namespace Animal {
    export function run() {
        console.log("동물이 달립니다!");
    }

    // 하위 요소는 위치상 호출 불가
}

namespace Animal.Land {
    Animal.run();
    export function run() {
        console.log("육상 동물이 달립니다!");
    }
}

namespace Animal.Land.Pet {
    Animal.Land.run();
    export function run() {
        console.log("애완 동물이 달립니다!");
    }

    export class Cat {
        run() {
            Animal.Land.Pet.run();
        }
    }
}

let cat: Animal.Land.Pet.Cat = new Animal.Land.Pet.Cat();
cat.run();

// import 할 때는 최상위 요소만 import 해서 하위 요소에 접근해야함.