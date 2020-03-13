// 구조가 같은 클래스
class Animal {
    name: number;
    constructor(name: string, weight: number) { }
}

class Bird {
    name: number;
    constructor(speed: number) { }
}

let animal: Animal = new Animal("happy", 100);
let bird: Bird = new Bird(10);

// animal, bird의 구조가 같으므로 호환 가능
[animal, bird] = [bird, animal];

console.log(bird instanceof Animal);
console.log(animal instanceof Bird);

// 상속관계
// 부모를 가진 자식 클래스와 같은 구조의 클래스가 있다면, 두 클래스는 구조 타이핑이 가능하다.
class Person {
    public name: string;
}

class Member extends Person {
    public grade: number;
}

class Admin extends Member { }

class MemberCard {
    public name: string;
    public grade: number;
}

let admin: Admin = new Admin();
admin = new MemberCard(); // 호환 가능
console.log(admin instanceof MemberCard);

// 구조가 같은 클래스와 인터페이스 간의 구조 타이핑
interface Person {
    name: string;
}

class Employee {
    name: string;
}

let person: Person;
person = new Employee(); // 호환 가능
console.log(person instanceof Employee);