// 이행 상태가 되면 then()을 이용하여 처리 결과 값을 받을 수 있다.
function getPromiseResolve() {
  return new Promise(function (resolve, reject) {
    let data = 50;
    resolve(data);
  });
}

// resolve()의 결과 값 data를 resolveData로 받음
getPromiseResolve().then(function (resolveData) {
  setTimeout(() => {
    console.log("setTimeoutData =", resolveData); //100
  }, 1000);
});

function getPromise() {
  return new Promise(function (resolve, reject) {
    reject(new Error("Error!!"));
  });
}

// reject()의 결과 값 Error를 err에 받음
// getPromise()
//   .then()
//   .catch(function (err) {
//     console.log(err);
//   });

getPromise()
  .then(console.log("success"))
  .catch((err) => console.log(err))
  .finally(console.log("finally"));

const student = {
  name: "bongjun",
  age: 29,
  level: 5,
};

const { name, age, level } = student;
console.log(name, age, level);

const { name: studentName, age: studentAge, level: studentLevel } = student;
console.log(studentName, studentAge, studentLevel);

const animals = ["🐶", "😽"];

const [dog, cat] = animals;
console.log(dog, cat);

const obj1 = { key: "key1" };
const obj2 = { key: "key2" };
const arr = [obj1, obj2];

const arrCopy = [...arr];
console.log(arrCopy); // [ { key: 'key1' }, { key: 'key2' } ]

const arrCopy2 = [...arr, { key: "key3" }];
obj1.key = "newKey";

console.log(arr); // [ { key: 'newKey' }, { key: 'key2' } ]
console.log(arrCopy2); // [ { key: 'newKey' }, { key: 'key2' }, { key: 'key3' } ]
console.log(arr.flat());

const obj3 = { ...obj1 };
console.log(obj3); // { key: 'newKey' }

const fruits1 = ["🍑", "🍓"];
const fruits2 = ["🍌", "🥝"];
const fruits = [...fruits1, ...fruits2];
console.log(fruits); // [ '🍑', '🍓', '🍌', '🥝' ]
console.log(fruits.flat());

const dog1 = { dog: "🐕" };
const dog2 = { dog: "🐶" };
const doggy = { ...dog1, ...dog2 };
console.log(doggy);

let a = null ?? "hello";
let b = "" ?? true;
let c = false ?? true;
let d = 0 ?? 1;
let e = undefined ?? "world";
let f = "word" ?? "";

console.log(a); // 'hello'
console.log(b); // ''
console.log(c); // false
console.log(d); // 0
console.log(e); // 'world'
console.log(f);

const customer = "고객님";
console.log(
  "문자열에서 여러번 나오는 문자열을 한꺼번에 변경할 수 있습니다.".replace(
    /문자열/g,
    ""
  )
);
// 에서 여러번 나오는 을 한꺼번에 변경할 수 있습니다.

console.log(
  "문자열에서 여러번 나오는 문자열을 한꺼번에 변경할 수 있습니다.".replaceAll(
    "문자열",
    customer
  )
);
// 에서 여러번 나오는 을 한꺼번에 변경할 수 있습니다.

// Array.prototype.flat() - 중첩 배열 삭제 / 빈공간 삭제
let arrWord = ["it`s Rainy Day", "", "South Korea"];
console.log(arrWord.map((x) => x.split(" ")));
console.log(arrWord.flatMap((x) => x.split(" ")));

let user1 = {
  admin() {
    console.log("관리자 계정입니다");
  },
};

let user2 = {};

console.log(user1.admin?.(), user2.admin?.());

console.log(globalThis);

// Promise.all
// - 모든 프로미스가 이행될 때 까지 기다렸다가 결과값을 담은 배열을 반환하는 메서드

// Promise.any
// - 여러개의 프로미스를 담은 배열을 인자로 받아서 배열의 프로미스 중 하나라도 결과가 반환되면 조건을 만족하고 종료

const promise1 = new Promise((resolve) => setTimeout(resolve, 300, "normal"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "high"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "low"));

const promises = [promise1, promise2, promise3];

Promise.all(promises).then((values) => {
  console.log(values); // [ 'normal', 'high', 'low' ]
});

Promise.any(promises).then((value) => console.log(value)); // high

// Promise.allSettled
// - 주어진 모든 프로미스를 이행하거나 거부한 후, 각 프로미스에 대한 결과를 나타내는 객체 배열을 반환

const promiseAll = [
  new Promise((resolve, reject) => setTimeout(resolve, 1000, "abc")),
  new Promise((resolve, reject) => setTimeout(reject, 2000)),
  new Promise((resolve, reject) => setTimeout(resolve, 3000)),
];

Promise.allSettled(promiseAll).then((data) => console.log(data));
/*
  [
    { status: 'fulfilled', value: 'abc' },
    { status: 'rejected', reason: undefined },
    { status: 'fulfilled', value: undefined }
  ]
*/

// throw
// - throw 문은 사용자 정의 예외를 발생(throw)할 수 있습니다. 예외가 발생하면 현재 함수의 실행이 중지되고,
