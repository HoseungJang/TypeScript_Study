// getter setter 미사용
class Student {
    public name: string;
    public birthYear: number;
}

const student = new Student();

// 속성값 설정
student.name = "장호승";
student.birthYear = 2002;

// 속성값 읽기
console.log(student.name);
console.log(student.birthYear);

/*
위에서 name, birthYear 속성은 값 설정이 가능하고, 값을 읽는 것도 가능하다.
하지만 값을 설정하거나 읽을 때 다른 처리를 하지 못한다.
*/

// getter setter 사용
class Student2 {
    private studentName: string;
    private studentBirthYear: number;

    get name(): string {
        return this.studentName;
    }

    set name(name: string) {
        if (name.indexOf("happy") !== 0) {
            this.studentName = name;
        }
    }

    get birthYear(): number {
        return this.studentBirthYear;
    }

    set birthYear(year: number) {
        if (year <= 2000) {
            this.studentBirthYear = year;
        }
    }
}

const student2: Student2 = new Student2();

student2.birthYear = 2001; // set
console.log(`1번: ${student2.birthYear}`); // get

student2.birthYear = 1999;
console.log(`2번: ${student2.birthYear}`);

student2.name = "happy";
console.log(`2번: ${student2.name}`);

student2.name = "JangHoseung";
console.log(`3번: ${student2.name}`);

/*
각각 undefined, 1999, undefined, JangHoseung 이 출력된다.
위처럼 getter, setter를 사용하면 값 설정, 읽기와 함께 특정 처리를 해줄 수 있다.
*/