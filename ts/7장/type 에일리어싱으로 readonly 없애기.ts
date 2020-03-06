let emotion: { readonly name: string } = { name: "sad" };

//emotion.name = "happy"; // readonly 속성에 재할당 불가

/*
type 에일리어스
기존 타입에 새로운 이름을 붙일 수 있는 기능
*/

// { name: string } 타입에 emotionType 이라는 새로운 이름을 붙임
type emotionType = { name: string };

// { readonly name: string } -> { name: string }
let myEmotion: emotionType = emotion;

console.log(emotion.name);
myEmotion.name = "happy";
console.log(emotion.name);