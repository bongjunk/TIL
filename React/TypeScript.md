# 타입스크립트(Typescript)란?

    자바스크립트에 타입을 부여한 언어다. (확장된 언어)
    기존의 ES5, ES6 문법을 사용할 수 있다.

- Typescript는 동적타입언어인 Javascript의 약점을 보완하기 위해서 타입을 지정해주는 것이다.

- 타입이 필요한 이유는 결론은 메모리를 절약하기 위해서다.

  - 메모리에 저장된 것을 읽어들일때, 값을 메모리에 저장할때, 값이저장되어있는 것을 참조할때의 크기들을 알아야 하기 때문이다.

- 에러를 잡기가 쉬워진다.
- 다른 동료와 협업 할때 코드의 예측도 가능해진다.
- 코드에디터의 도움을 더 받을 수 있다.
- 리액트의 경우 (브라우저는 javascript밖에 모르기떄문에) tsx파일을 javascript로 변환하는 트랜스파일링이 필요하다.
- 이 때 변환하는 과정에서 에러를 잡을 수 가있다. 런타임에 오류를 잡는 것보다 좋다.
  또한, Babel을 안써도 된다.

### 자바스크립트 와의 차이점

    1. 타입을 설정 할 수 있다.
    2. OOP를 사용하기에 더 좋다.
    3. 자바스크립트를 호환하면서 더 많은 기능들과 방식을 이용 할 수 있다.
    4. 자바스크립트는 클라이언트 측 스크립팅 언어이다.
     - 사용자가 웹 브라우저를 열고 웹 페이지를 요청하면 해당 요청이 웹 서버로 이동
    5. 타입스크립트는 객체지향 컴파일 언어다.

```javascript
// Javascript
function sum(a, b) {
  return a + b;
}

// Typescript
function sum(a: number, b: number) {
  return a + b;
}
sum(5, 10);
sum(5, "10"); // 숫자만 넣어야함

let name1 = "bong";
let name2: string = "bong";
```