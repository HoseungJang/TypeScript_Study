/*
[Symbol.iterator]()
[Symbol.iterator]() 메소드는 ES6에 추가된 특징이다.
배열, 맵, 셋과 같은 이터러블 객체를 순회하는데 사용한다.
*/

let arr: number[] = [1, 2];
let itObj = arr[Symbol.iterator]();

console.log("1 : ", itObj.next()); // { value: 1, done: false }
console.log("2 : ", itObj.next()); // { value: 2, done: false }
console.log("3 : ", itObj.next()); // { value: undefined, done: true }

// itObj에 심볼 arr을 심볼 이터레이터 객체로 변환해 할당하였다.
// itObj는 next() 메소드를 사용해서 차례대로 순회할 수 있음