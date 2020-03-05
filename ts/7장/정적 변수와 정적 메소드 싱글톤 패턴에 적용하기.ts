/*
static 키워드는 클래스에 선언된 멤버 변수를 객체 생성 없이 접근 가능하게 해준다.
따라서 유일하게 상태 정보를 담을 수 있다.
*/

class Member {
    public static age: number = 0;
    public static getAge(): number {
        return this.age;
    }

    // 인스턴스 생성 막음
    private constructor() { }
}

/*
위 그림처럼 클래스를 선언하면 단일 상태를 관리하지만 외부에 변수를 둘 수 없다.
반드시 Member 클래스를 통해서 변수에 접근해야한다.
외부에 변수를 두면서 프로그램 단위에서 유일한 객체를 유지할 수 있게 하려면 싱글톤 패턴을 적용해야 한다.

싱글톤 패턴의 형태는 크게 두 가지이다.
1. eager initialization
- 1번 형태는 프로그램이 구동할 때 초기화가 일어난다.

2. lazy initialization
- 2번 형태는 정적 메소드를 호출하는 시점에 객체를 생성한다.
*/

// eager initialization
class EagerLogger {
    // 1. eager initialization
    private static uniqueObject: EagerLogger = new EagerLogger();

    // 2. private으로 객체 생성 제한
    private constructor() { }

    // 3. static을 붙여 외부 접근 가능하게 함
    public static getLogger(): EagerLogger {
        return this.uniqueObject;
    }

    // 4. 정보 로그 출력
    public info(message: string): void {
        console.log(`[info] ${message}`);
    }

    // 5. 경고 로그 출력
    public warnning(message: string) {
        console.log(`[warn] ${message}`)
    }
}

// 6. 유일한 객체를 얻고 메소드(info, warning)를 사용
let eagerLogger: EagerLogger = EagerLogger.getLogger();
let eagerLogger2: EagerLogger = EagerLogger.getLogger();
eagerLogger.info("1번: 정보 log");
eagerLogger.warnning("2번: 경고 log");
eagerLogger.info(`3번: ${eagerLogger === eagerLogger2}`); // true


// lazy initialization
class LazeLogger {
    // 1. eager initialization
    private static uniqueObject: LazeLogger = new LazeLogger();

    // 2. private으로 객체 생성 제한
    private constructor() { }

    // 3. lazy initialization 진행
    public static getLogger(): LazeLogger {
        if (this.uniqueObject == null) {
            this.uniqueObject = new LazeLogger();
        }
        return this.uniqueObject;
    }

    // 4. 정보 로그 출력
    public info(message: string): void {
        console.log(`[info] ${message}`);
    }

    // 5. 경고 로그 출력
    public warnning(message: string) {
        console.log(`[warn] ${message}`)
    }
}

// 6. 유일한 객체를 얻고 메소드(info, warning)를 사용
let lazeLogger: LazeLogger = LazeLogger.getLogger();
let lazeLogger2: LazeLogger = LazeLogger.getLogger();
lazeLogger.info("1번: 정보 log");
lazeLogger.warnning("2번: 경고 log");
lazeLogger.info(`3번: ${lazeLogger === lazeLogger2}`); // true


/*
위의 변수들 모두 싱글톤 객체를 참조하고 있습니다.
*/