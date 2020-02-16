/*
다형성: 여러 타입을 받아들임으로써 여러 형태를 가지는 것

TS 에서 살펴볼 대표적 예시 3가지
1. 클래스의 다형성
2. 인터페이스의 다형성
3. 매개변수의 다형성
*/

// 클래스의 다형성
class Planet {
    public diameter: number;
    protected isTransduction: boolean = true;

    getIsTransduction(): boolean {
        return this.isTransduction;
    }

    stopTransduction(): void {
        console.log("stop1");
        this.isTransduction = false;
    }
}

class Earth extends Planet {
    public features: string[] = ["soil", "water", "oxyzen"];
    stopTransduction(): void {
        console.log("stop2");
        this.isTransduction = false;
    }
}

const earth: Planet = new Earth();
earth.diameter = 12656.2;
console.log(`1번: ${earth.diameter}`);
console.log(`2번: ${earth.getIsTransduction()}`);
earth.stopTransduction();
console.log(`3번: ${earth.getIsTransduction()}`);

/*
자식 클래스가 부모 클래스를 상속하고 있을 때 부모 클래스를 타입으로 가지는 변수에 자식 클래스의 객체가 할당됨으로써 다형성을 지니게 된다.
위의 예제에서, Earth 클래스의 객체를 할당받았지만 실제로는 부모 클래스를 기준으로 실행된다.
위에서 earth 변수는 getIsTransduction에는 접근이 되지만, Earth 클래스의 멤버변수 features에는 접근할 수 없다.
유의할 점은, stopTransduction이 자식 클래스에 오버라이딩 되어있는데, 실행해보면 stop2가 출력된다.
이는 오버라이든 메소드보다 오버라이딩 메소드가 우선으로 호출되기 때문이고, 런타임시에 호출될 메소드가 결정되는 특성을 런타임 다형성이라고 한다.
*/

// 추상 클래스와 자식 클래스 간 다형성
abstract class Train {
    constructor(protected speed: number) { }

    speedUp(): void {
        this.speed++;
    }

    abstract getSpeed(): number;
}

class Ktx extends Train {
    constructor(protected speed: number) {
        super(speed);
    }

    public getSpeed(): number {
        return this.speed;
    }

    public speedUpUp(): void {
        this.speed += 2;
    }
}

const ktx: Train = new Ktx(300);
console.log(`현재 속도: ${ktx.getSpeed()}km`);
ktx.speedUp();
console.log(`현재 속도: ${ktx.getSpeed()}km`);

/*
위의 예제에서, 변수 ktx는 추상 클래스의 타입으로 지정되있다.
할당되는건 Ktx 클래스의 객체지만, 할당될 때 Train 타입으로 upcasting되어 다형성이 생긴다.
따라서 ktx 변수는 추상 클래스 Train에 선언된 요소에는 접근할 수 있지만, Ktx에 선언된 요소에는 접근할 수 없다.
*/

// 인터페이스의 다형성
interface IPerson {
    height: number;
    getAlias: () => string;
    getAge(): number;
}

class PoliceOfficer implements IPerson {
    height: number;
    getAlias = () => "happy";
    getAge(): number {
        return 10;
    }
    hasClub() {
        return true;
    }
}

const policeMan: IPerson = new PoliceOfficer();
console.log(policeMan.getAlias());
console.log(policeMan.getAge());

/*
인터페이스 IPerson을 클래스 PoliceOfficer가 구현하고 있으므로 IPerson 타입 변수에 PoliceOfficer 클래스의 객체를 할당할 수 있다.
인터페이스를 기준으로 접근이 이루어지므로, policeMan에서 PoliceOffice 클래스의 메소드인 hasClub에는 접근할 수 없다.
*/

// 매개변수의 다형성
interface Monitor {
    getName(): string;
}

class Led implements Monitor {
    constructor(private name: string) { }
    getName(): string {
        return `LED => ${this.name}`;
    }
}

class Oled implements Monitor {
    constructor(private name: string) { }
    getName(): string {
        return `OLED => ${this.name}`;
    }
}

class MonitorDisplayTest {
    // 유니온 타입을 사용한 매개변수 다형성
    display1(monitor: Led | Oled) {
        if (monitor instanceof Led) {
            const myMonitor: Led = <Led>monitor;
            return myMonitor.getName();
        } else if (monitor instanceof Oled) {
            const myMonitor: Oled = <Oled>monitor;
            return myMonitor.getName();
        }
    }

    // 인터페이스를 사용한 매개변수 다형성
    display2(monitor: Monitor) {
        const myMonitor: Monitor = monitor;
        return myMonitor.getName();
    }
}

const displayTest = new MonitorDisplayTest();
console.log(`
1번 ${displayTest.display1(new Led("LED TV"))}
2번 ${displayTest.display1(new Oled("OLED TV"))}
3번 ${displayTest.display2(new Led("LED TV"))}
4번 ${displayTest.display2(new Oled("OLED TV"))}`);

/*
매개변수의 다형성은 유니온 타입, 인터페이스를 사용해서 만들 수 있다.
MonitorDisplayTest 클래스의 display1이 유니온 타입을 사용한 예시이다.
유니온 타입을 사용하면 새로운 클래스가 추가될 때 마다 해당 타입을 추가해주고 else if 절을 추가해주어야 한다.
하지만 인터페이스를 사용하여 다형성을 만들면, 인터페이스를 상속받는 클래스들은 해당 인터페이스 타입에 할당될 수 있으므로 용이하다.
*/