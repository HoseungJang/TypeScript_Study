/*
자바스크립트 코드의 런타임 시 동적으로 타이핑이 이루어지는 타입 지정 방식
*/

class Duck {
    speak(): void {
        console.log("Quak!");
    }

    swim(): void {
        console.log("Duck swimming");
    }
}

class Goose {
    speak(): void {
        console.log("Squak!");
    }

    swim(): void {
        console.log("Goose swimming");
    }
}

function swim(obj): void {
    obj.speak();
    obj.swim();
}

let duck = new Duck();
let goose = new Goose();
swim(duck);
swim(goose);

// 위의 방식은 유연하지만, 타입 안정성이 떨어진다. 인터페이스를 추가하면 타입 안정성을 확보하면서 덕 타이핑을 구현할 수 있다.

interface DuckGoose {
    speak(): void;
    swim(): void;
}

class Duck2 implements DuckGoose {
    speak(): void {
        console.log("Quak!");
    }

    swim(): void {
        console.log("Duck swimming");
    }
}

class Goose2 implements DuckGoose {
    speak(): void {
        console.log("Squak!");
    }

    swim(): void {
        console.log("Goose swimming");
    }
}

function swim2(obj: DuckGoose): void {
    obj.speak();
    obj.swim();
}

let duck2 = new Duck2();
let goose2 = new Goose2();
swim2(duck2);
swim2(goose2);