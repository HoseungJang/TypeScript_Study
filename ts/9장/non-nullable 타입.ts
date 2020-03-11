/*
null, undefined는 모든 타입의 변수에 할당할 수 있다.
이를 불가능하게 하려면 tsconfig 파일의 compilerOptions에 strictNullCheck옵션을 추가하고 true로 설정해야 한다.
*/

let studentName: string;
studentName = "happy";
studentName = null;
studentName = undefined;