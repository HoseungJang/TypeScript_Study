/*
1. public
- 자식 클래스에서 접근 가능
- 외부 접근 가능

2. protected
- 자식 클래스에서 접근 가능
- 외부 접근 불가능

3. private
- 자식 클래스에서 접근 불가능
- 외부 접근 불가능
*/

class Base {
    public defaultAge: number = 3;
    public defaultHeight: number = 5;
}

class Member extends Base {
    age = 17;
    height = 182;
    public getAge(): number {
        return this.age + this.defaultAge;
    }
    private getHeight(): number {
        return this.height + this.defaultHeight;
    }

    public getInfo(): [number, number] {
        return [this.getAge(), this.getHeight()];
    }
}

const Jang: Member = new Member();
Jang.getAge(); // public이라 접근 가능
// Jang.getHeight(); 는 private이라 접근 불가능
Jang.getInfo(); // public이라 접근 가능

class Cube {
    public getInfo(): number[] {
        return [this.width, this.length, this.height];
    }
    // 생성자 매개변수에 접근 제한자를 붙이면 그것들이 클래스의 멤버변수가 됨
    constructor(public width : number, private length : number, protected height: number) {}
}

const box: Cube = new Cube(5, 3, 4);
box.getInfo();

class Base2 {
    protected birthYear: string = '2017';
}

class Member2 extends Base2 {
    protected getBirthYear() {
        return this.birthYear; // protected는 상속됨
    }
}

const hoseung: Member2 = new Member2();
// hoseung.getBirthYear();
// protected는 외부접근 안됨