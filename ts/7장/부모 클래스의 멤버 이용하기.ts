class PC {
    constructor(public hddCapacity: string) { }

    private ram: string = "0GB"
    set ramCapacity(value: string) { this.ram = value };
    get ramCapacity() { return this.ram };

    protected getHddCapacity() {
        return this.hddCapacity;
    }
}

class Desktop extends PC {
    constructor(public hddCapacity: string) {
        //부모 클래스 생성자 호출
        super(hddCapacity);
    }

    getInfo() {
        console.log("1번 hdd 용량 : " + super.getHddCapacity(), super.hddCapacity);
        console.log("2번 hdd 용량 : " + this.getHddCapacity(), this.getHddCapacity);

        this.ramCapacity = "2000GB";
        console.log("3번 hdd 용량 : " + super.getHddCapacity(), super.hddCapacity);
        console.log("4번 hdd 용량 : " + this.getHddCapacity(), this.hddCapacity);

        super.ramCapacity = "16GB";
        console.log("5번 ram 용량 : " + this.ramCapacity, super.ramCapacity);
        
        this.ramCapacity = "8GB";
        console.log("6번 ram 용량 : " + this.ramCapacity, super.ramCapacity);
    }
}

const myDesktop: Desktop = new Desktop("1000GB");
myDesktop.getInfo();