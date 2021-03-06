### 리덕스(Redux)란?

- 가장 많이 사용하는 리액트 상태 관리 라이브러리 입니다.
- 전역 상태를 관리할 때 효과적이다.

#### 리덕스의 세 가지 규칙

- 단일 스토어
  - 하나의 애플리케이션 안에는 하나의 스토어가 있다.
  - 상태 관리가 복잡해질 수 있으므로 여러 개의 스토어x
- 읽기 전용 상태
  - 리덕스 상태는 읽기 전용
  - 상태를 업데이트 할 땐 기존의 객체는 건드리지 않고 새로운 객체를 생성 해 주어야함
- 리듀서는 순수한 함수

### 액션

- 상태에 어떠한 변화가 필요하면 액션(action)이란 것이 발생
- 하나의 객체로 표현된다

```javascript
// 액션 객체는 type필드를 반드시 가지고 있어야 한다. = 액션의 이름
{
  type: "TOGGLE_VALUE";
}
```

## 리덕스의 액션이란?

- 액션은 사실 그냥 객체(object)입니다.
- 두 가지 형태의 액션이 있습니다.
  - { type: 'TEST'} // payload 없는 액션
  - { type: 'TEST', params: 'hello'} // payload 있는 액션
- type만이 필수 프로퍼티이며, type은 문자열 입니다.

## 리덕스의 액션 생성자란?

```js
function 액션 생성자(...args) { return 액션; }
```

- 액션을 생성하는 함수를 "액션 생성자(Action Creator)"라고 합니다.
- 함수를 통해 액션을 생성해서, 액션 객체를 리턴해줍니다.
- createTest('hello'); // { type: 'TEST', params: 'hello' } 리턴

## 리덕스의 액션은 어떤 일을 하나요?

- 액션 생성자를 통해 액션을 만들어 냅니다.
- 만들어낸 액션 객체를 리덕스 스토어에 보냅니다.
- 리덕스 스토어가 액션 객체를 받으면 스토어의 상태 값이 변경 됩니다.
- 변경된 상태 값에 의해 상태를 이용하고 있는 컴포넌트가 변경됩니다.
- 액션은 스토어에 보내는 일종의 인풋이라 생각할 수 있습니다.

## 액션을 준비하기 위해서는?

- 액션의 타입을 정의하여 변수로 빼는 단계

  - 강제는 아닙니다. (그러므로 안해도 됩니다.)
  - 그냥 타입을 문자열로 넣기에는 실수를 유발할 가능성이 큽니다.
  - 미리 정의한 변수를 사용하면, 스펠링에 주의를 덜 기울여도 됩니다.

- 액션 객체를 만들어 내는 함수를 만드는 단계
  - 하나의 액션 객체를 만들기 위해 하나의 함수를 만들어냅니다.
  - 액션의 타입은 미리 정의한 타입 변수로부터 가져와서 사용합니다.

## 리덕스의 리듀서란?

```js
// previousState 와 액션객체를 이용해서 새로운 state 객체를 만들어내는게 reducer의 역할
//                현재 state,    액션객체
function reducer(previousState, action) {
  return newState;
}
```

- 액션을 주면, 그 액션이 적용되어 달라진(안달라질수도 있다) 결과를 만들어줌
- 그냥 함수이다
  - Pure Function - 같은 인풋을 받으면 같은 결과를 내는 함수, 리듀서 안에 시간에 따라서 달라지는 결과를 갖는 코드가 들어가면 안된다.
  - Immutable(불변) - 오리지날 state와 새로 바뀐 state가 별도의 객체로 만들어져야함
    - 왜?
      - 리듀서를 통해 스테이트가 달라졌음을 리덕스가 인지하는 방식

### 액션 생성 함수

- 액션 객체를 만들어 주는 함수

### 리듀서

- 변화를 일으키는 함수
- 현재 상태와 전달받은 액션 객체를 파라미터로 받아온다.

### 스토어 (Store)

- 하나의 프로젝트는 단 하나의 스토어만 가질 수 있다.
- 스토어 내부엔 현재 애플리케이션 상태와 리듀서가 있다.
- 내장함수도 지닌다.

- store.getState(); - 현재 스토어의 state를 가져오는 함수
- store.dispatch(액션);, store.dispatch(액션생성자()); - 액션을 인자로 넣어서 스토어에 상태를 변경
- const unsubscribe = store.subscribe(() => {}); store.subscribe는 스토어에 변경이 생겼을때 이 함수를 실행하도록 하는 함수 (() => {}) 결과물이 unsubscribe라고 하는 역할을 하는 함수
  - 리턴이 unsubscribe 라는점!
  - unsubscribe(); 하면 제거 - 구독되는 함수를 제거
- store.replaceReducer(다른리듀서);

## 스토어를 만드는 함수

```js
const store = createStore(reducer);

· createStore<S>(
  reducer: Reducer<S>,
  preloadedState: S,
  enhancer?: StoreEnhancer<S>
): Store<S>;
```

### 디스패치

- 스토어의 내장함수 중 하나.
- '액션을 발생시키는 것'
- action을 store에 전달하는 행위
- 이 함수가 호출되면 스토어는 리듀서 함수를 실행시켜서 새로운 상태를 만들어 줌

### 구독

- 스토어의 내장 함수 중 하나.
- subcribe 함수 안에 리스너 함수를 파라미터로 넣어서 호출해주면,
- 이 리스너 함수가 액션이 디스패치되어 상태가 업데이트 될 때마다 호출

[만들기] 단일 스토어 사용 준비하기

- import redux
- 액션을 정의하고,
- 액션을 사용하는, 리듀서를 만들고,
- 리듀서들을 합친다.
- 최종 합쳐진 리듀서를 인자로, 단일 스토어를 만든다.

[사용하기] 준비한 스토어를 리액트 컴포넌트에서 사용하기

- import react-redux
- connect 함수를 이용해서 컴포넌트에 연결

<!-- ## combineReducers

단일 store를 만들고,
subscribe와 getState를 이용하여,
변경되는 state 데이터를 얻어,
props로 계속 아래로 전달

- componentDidMount - subscribe
- componentWillUnmount - unsubscribe -->

## react-redux

- Provider 컴포넌트를 제공해줍니다.
- connect 함수를 통해 "컨테이너"를 만들어줍니다.
  - 컨테이너는 스토어의 state와 dispatch(액션)를 연결한 컴포넌트에 props로 넣어주는 역할을 합니다.
  - 그렇다면 필요한 것은?
    - 어떤 state를 어떤 props에 연결할 것인지에 대한 정의
    - 어떤 dispatch(액션)을 어떤 props에 연결할 것인지에 대한 정의
    - 그 props를 보낼 컴포넌트를 정의

비동기 작업을 어디서 하느냐? 가 제일 중요

- 액션을 분리
- start
- success
- failure
- ..등등
- dispatch를 할때 해준다.
  - 당연히 리듀서는 동기적인것 => pure
  - dispatch도 동기적인것

## 리덕스 미들웨어

- 미들웨어는 function
- 미들웨어가 "디스패치"의 앞 뒤에 코드를 추가할수 있게 해줍니다.
- 미들웨어가 여러개면 미들웨어가 "순차적으로" 실행됩니다.
- 두 단계가 있다
  - 스토어를 만들때, 미들웨어를 설정하는 부분
    - {createStore, applyMiddleware} from redux
  - 디스패치가 호출될때 실제로 미들웨어를 통과하는 부분
- dispatch 메소드를 통해 store로 가고있는 액션을 가로채는 코드

## redux-devtools-extension

    npm i redux-devtools-extension -D

## redux-thunk

    npm i redux-thunk

- 리덕스 미들웨어
- 리덕스를 만든사람이 만듬
- 리덕스에서 비동기 처리를 위한 라이브러리
- 액션 생성자를 활용하여 비동기 처리
- 액션 생상자가 액션을 리턴하지 않고, 함수를 리턴함.

## redux-promise-middleware

    npm i redux-promise-middleware

## Redux Advanced

Ducks Pattern
react-router-dom 과 redux 함께쓰기
redux-saga
redux-actions

### Ducks Pattern

1. 항상 reducer()란 이름의 함수를 export default 해야합니다.
2. 항상 모듈의 action 생성자들을 함수형태로 export 해야합니다.
3. 항상 npm-module-or-app/reducer/ACTION_TYPE 형태의 action 타입을 가져야합니다.
4. 어쩌면 action 타입들을 UPPER_SNAKE_CASE로 export 할 수 있습니다. 만약, 외부 reducer가 해당 action들이 발생하는지 계속 기다리거나, 재사용할 수 있는 라이브러리로 퍼블리싱할 경우에 말이죠.
