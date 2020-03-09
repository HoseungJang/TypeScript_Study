/*
유니온 타입은 여러 타입을 받을 수 있다.
따라서 타입을 확신할 수 없다는 단점이 있다.

타입 가드를 추가함으로써 해결할 수 있다.
타입 가드란 유니온 타입에 대한 타입 검사를 통해 타입 안정성을 확보하는 것이다.
*/

// typeof
function myIndexOf(x: number | string, y: string): number {
    if (typeof x === "string") {
        return x.indexOf(y);
    } else {
        return -1;
    }
}

myIndexOf("hello", "hel");

// instanceof
class Cat {
    public name: string = "cat";
    public age: number = 13;
}

class Dog {
    public name: string = "dog";
    public leg: number = 4;
}

function diffCheck(x: Cat | Dog) {
    if (x instanceof Dog) {
        console.log(x.name);
        console.log(x.leg);
    }
}

diffCheck(new Dog());