# 인터프리터와 컴파일러

- 인터프린터를 사용하는 언어에서는 코드를 위에서 아래로 실행한다.
- 코드 구동 결과 즉시 반환된다.
- Javascript 코드를 실행하기 전에 다른 형태로 변환할 필요가 없다.
- 코드는 프로그래머가 읽을 수 있는 형태로 입력, 별도의 처리 없이 그대로 실행됨

- 컴파일러를 사용하는 컴파일 언어에서는 컴퓨터가 코드를 실행하기 전에 다른 형태로 변환(컴파일) 해야 한다.
- c, c++ 에서는 코드를 컴파일러로 기계언어로 변환하여, 그 결과를 컴퓨터가 실행

# typeof 연산자

    변수의 데이터 타입을 반환하는 연산자

```javascript
console.log(typeof "hello"); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // 의도하지 않은 빈 값, undefined
console.log(typeof null); // 의도한 빈 값, object
console.log(typeof {}); // object
console.log(typeof []); // object
```

```javascript
function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

console.log(getType(false)); // Boolean
console.log(getType(null)); // Null
console.log(getType({})); // Object
console.log(getType([])); // Array
```

<br />

# 산술 연산자 (arithmetic operator)

    사칙연산을 다루는 기본적이면서도 많이 사용되는 연산자

```javascript
console.log(1 + 2); // 3
console.log(5 - 7); // -2
console.log(3 * 4); // 12
console.log(10 / 5); // 2
console.log(10 % 5); // 0

let qq = 2; // : = 할당연산자
qq += 2;
console.log(qq); // 4
```

<br />

# 비교 연산자 (comparison operator)

```javascript
const a = 1;
const b = 2;
console.log(a === b); // flase
console.log(a !== b); // true
console.log(a < b); // true
console.log(a > b); // false
console.log(a >= b); // false

function isEqual(x, y) {
  return x === y;
}

console.log(isEqual(1, 1)); // true
```

<br />

# 논리 연산자 (logical operator)

```javascript
function logical() {
  const a = 1;
  const b = "AB" === "AB";
  const c = false;

  console.log(a); // 1
  console.log(b); // true
  console.log(c); // false

  // and 연산자 : a, b, c 가 전부 true인지 확인해서 전부 true인 경우에만 true 반환
  console.log("&&: ", a && b && b); // true
  // or 연산자: a, b, c 중 하나라도 true가 있으면 true 반환
  console.log("||: ", a || b || c); // 1(true)
  // not 연산자: true -> false, false -> true 반환
  console.log("!: ", !a);
}

logical();
```

<br />

# 삼항 연산자 (ternary operator)

```javascript
function ternary() {
  const a = 1 < 2;

  if (a) {
    console.log("참");
  } else {
    console.log("거짓");
  }

  console.log(a ? "참" : "거짓");
}

ternary();
```

<br />

# 조건문 (If statement, Switch statement)

```javascript
function ifElse() {
  const a = 2;

  if (a === 0) {
    console.log("a is 0");
  } else if (a === 2) {
    console.log("a is 2");
  } else if (a === 4) {
    console.log("a is 4");
  } else {
    console.log("rest...");
  }

  // 조건문 (Switch statement)
  const b = 2;

  switch (b) {
    case 0:
      console.log("a is 0");
      break;
    case 2:
      console.log("a is 2");
      break;
    case 4:
      console.log("rest...");
      break;
    default:
      break;
  }
}

ifElse();
```

<br />

# 반복문 (For statement)

```javascript
for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector("ul");

console.log(ulEl);

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement("li");
  li.textContent = `list-${i + 1}`;
  // 짝수인 리스트만 출력
  if ((i + 1) % 2 === 0) {
    li.addEventListener("click", function () {
      console.log(li.textContent);
    });
  }
  ulEl.appendChild(li);
}
```

```ts
for (초기화식; 종료조건; 증감식) {
  // 실행 코드
}

while (종료조건) {
  // 실행 코드
  증감식;
}

do {
  // 실행 코드
  증감식;
} while (종료조건);
```

<br />

# 변수의 유효범위 (Variable Scope)

```javascript
var, let, const

function scope() {
  if (true) {
    const a = 123;
    console.log(a); // 123
  }
  console.log(a); // a is not defined
}
scope()
```

<br />

# 형변환 (Type conversion)

<br />

```javascript
// Truthy(참 같은값)
// true, {}, [], 1, 2, 'false', -12, '3.14 ...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0 , -0, NaN

function type() {
  const a = 1;
  const b = "1";

  console.log(a == b); // true - 권장하지 않는방법
  console.log(a === b); // false

  if (1) {
    console.log(1 + undefined); // NaN, 숫자 데이터긴한데 숫자는 아니다
  }
}
type();
```

<br />

# 함수 복습

```javascript
// 함수선언식 - 기명함수
//          매개변수
function sum(x, y) {
  // 더해진 값이 반환되면 return 키워드를 통해 함수 밖으로 내보낼 수 있다.
  return x + y;
}
//   인수
sum(1, 3);
sum(4, 12);

// 함수표현식 - 익명함수
const sum = function (x, y) {
  return x + y;
};

sum(1, 3);

function sum2() {
  console.log(arguments); // [Arguments] { '0': 7, '1': 3 }
  return arguments[0] + arguments[1]; // 10
}

console.log(sum2(7, 3));
```

<br />

# 화살표 함수

```javascript
// () =>  {} vs function() {}

const double = function (x) {
  return x * 2;
};
console.log("double: ", double(7)); // double: 14

const doubleArrow = (x) => {
  return x * 2;
};

console.log("doubleArrow: ", doubleArrow(7)); // doubleArrow: 14

// 축약형
const doubleArrow = (x) => x * 2;
// 객체데이터는 () - 소괄호 안에 작성해야함
const duobleArrow = (x) => ({ name: "bongjun" });
```

# 즉시실행함수

    IIFE, Immediately-Invoked Function Expression

```javascript
const aa = 7;
function double2() {
  console.log(aa * 2); // 14
}
double2();

// 즉시실행함수
(function () {
  console.log(aa * 2); // 14
})();

(function () {
  console.log(aa * 2); // 14
})();
```

<br />

# 호이스팅(Hoisting)

    함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

```javascript
const a = 7;

double();

const double = function () {
  console.log(a * 2); // double is not a function
};

const a = 7;

double();

function double() {
  console.log(a * 2); // 14
}
```

<br />

# 타이머 함수

    setTimeout(함수, 시간): 일정 시간 후 함수실행
    setInterval(함수, 시간): 시간 간격마다 함수실행
    clearTimeout(): 설정된 Timeout 함수를 종료
    clearInterval(): 설정된 Interval 함수를 종료

```javascript
// 단위: ms = 1000ms = 1초
const timer = setTimeout(() => {
  console.log("Bongjun!");
}, 3000);

// // h1태그 클릭시 타이머 멈춤
const h1El = document.querySelector("h1");
h1El.addEventListener("click", () => {
  clearTimeout(timer);
});

const timer2 = setInterval(() => {
  console.log("Bongjun2");
});

const h1El2 = document.querySelector("h1");
h1El2.addEventListener("click", () => {
  clearTimeout(timer2);
});
```

<br />

# 콜백(Callback)

    함수의 인수로 사용되는 함수

```javascript
function timeout(callback) {
  setTimeout(() => {
    console.log("Bongjun!");
    callback();
  }, 3000);
}
// 콜백함수
timeout(() => {
  console.log("Done!");
});

const bong = {
  fitstName: "Bongjun",
  lastName: "Kim",
  getFullName: function () {
    return `${this.fitstName} ${this.lastName}`;
  },
};
console.log(bong.getFullName());

function user(first, last) {
  this.firstName = first;
  this.lastName = last;
}

//                생성자함수
const bongjunk = new user("Bongjun", "Kim");
console.log(bongjunk);
```

<br />

# this

    일반(Normal) 함수는 호출 위치에서 따라 this 정의!
    화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

```javascript
const bongjun = {
  name: "Bongjun",
  normal: function () {
    console.log(this.name); // Bongjun
  },
  arrow: () => {
    console.log(this.name); // undefined
  },
};
bongjun.normal(); // Bongjun
bongjun.arrow(); // undefined

const amy = {
  name: "Amy",
  normal: bongjun.normal,
  arrow: bongjun.arrow,
};

amy.normal(); // Amy, 호출 위치에서 정의
amy.arrow(); // undefined, 화살표 함수가 만들어지는 곳에서 정의
```

<br />

# ES6 Classes

```javascript
class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const james = new User("james", "kim");
const neo = new User("Neo", "Smith");

console.log(james); // User { firstName: 'james', lastName: 'kim' }
console.log(neo.getFullName()); // Neo Smith
```
