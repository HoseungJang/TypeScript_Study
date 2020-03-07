export function add(a: number, b: number): number {
    return a + b;
}

// 변수, 배열 등도 모듈로 선언할 수 있다.
export let a: number = 10;
export let b: number[] = [1, 2, 3, 4, 5];

// 여러개 한번에 export
let ver: number = 1.0;
let author: string = "happy";

export { ver, author };

interface IProfile {
    name: string;
}

function saveName(profile: IProfile, name: string): IProfile {
    profile.name = name;
    return profile;
}

// as 키워드로 export할 때 모듈 이름 변경할 수 있다.
// IProfile 타입의 매개변수를 사용하므로 함께 export 해야 한다.
export { IProfile, saveName as save };