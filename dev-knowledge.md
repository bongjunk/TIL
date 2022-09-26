# Development Knowledge

### 클라이언트(Client), 서버(Server)

- Client : 정보를 요구해서 받는 쪽
- Server : 정보를 제공해주는 쪽

### 프로토콜(Protocal)

- 통신규약

### HTTP 프로토콜

- HTTP(Hypertext Transfer Protocol) 프로토콜 : 통신 프로토콜, 상호간에 정의한 규칙
- 상태가 없는 프로토콜, 데이터 요청이 독립적으로 관리
- TCP/IP 통신 위에서 동작하고, 기본 포트는 `80` (HTTPS의 기본 포트는 `443`)
- HTTP 프로토콜로 데이터를 주고받기 위해서는 요청(Request) -> 응답(Response) 으로 진행된다. (브라우저 -> 서버)

### URL(Uniform Resource Locators)

- 서버에 자원을 요청하기 위한 입력주소

### IP(Internet Protocol Address)

- 네트워크 통신을 위한 주소
- 컴퓨터끼리 연결을 위한 네트워크 주소
- 우리가 연결하게 되는 네트워크를 기준으로 IP 주소를 부여받음

  - #### Port
    - 포트는 컴퓨터 내에 프로세스로 도달하기 위한 주소
    - 컴퓨터 내에서 프로세스가 가지고 있는 주소

### 프레임워크(Framework)

- 코드의 큰 뼈대(Frame)를 제공해줘서 개발을 할 수 있도록 도와줌
- 라이브러리와 마찬가지로 개발자가 미리 만들어 놓은 코드

### API(Application Programming Interface)

- 규칙들의 집합
- 프로그램과 프로그램을 연결 시켜주는 매개체
- 프로그램들의 기능들을 미리 정리해서 규칙을 세워두면 클라이언트는 접근할 프로그램을 몰라도 API에 따라 손쉽게 통신이 가능

### GIT & GITHUB

- Git : 소스 코드의 버전을 관리하는 툴
- Github : git이 적용된 원격 코드 저장소
  - 여러명의 개발자들이 git에 저장되어 있는 커밋들을 사용하기 위해서는 원격 저장소가 필요하다.

### 프론트엔드(FrontEnd)

- 유저가 서비스를 이용하기 위해 사용하는 프로그램인 웹
- 브라우저를 통해 웹이 실행됨

  - 브라우저가 웹 프로그램을 전달해주는 웹 서버에서 요청
  - 웹서버에서 개발한 웹을 전달
  - 브라우저에서 다운받은 웹을 실행

- 웹 개발을 하려면 JavaScript가 필요하다.
  - javascript 라이브러리, 프레임워크라는 것은 결국에는 JavaScript 구성된 코드 뭉치다.
- 웹 개발 초창기에는 순수한 자바스크립트로 코딩을 했다. 이를 바닐라 자바스크립트 라고 한다.

### 반응형 웹

- 모바일 시대가 오기 전에는 대부분 넓은 화면(데스크탑)을 기준으로 웹 개발을 진행했다. 하지만 요새는 스마트폰을 사용하면서 스마트폰 화면 크기에 맞는 화면을 개발한다.
- `모바일 웹` 은 단순히 모바일 용 화면에 맞게 개발된 웹을 의미
- 반응형 웹은 디바이스에 맞는 웹을 각각 개발하는게 아니다. 화면의 크기에 맞게 css를 다르게 적용하는 방식을 사용함

### SPA(Single Page Application)

- 웹은 실제로 여러 페이지가 존재한다. 그리고 보통 페이지마다 주소가 다르다.
- 페이지 별로 새롭게 웹 서버에서 페이지를 다운받는 방식 `MPA`(Multi Page Application) 이라고 한다.
- MPA는 해당 페이지만 제공해주면 되기 때문에 초기에 화면을 빠르게 보여주지만 페이지를 이동할 때 마다 새로 페이지를 로드해서 사용성이 떨어짐
- SPA는 한 번 요청에 모든 페이지를 받는다. 그래서 처음에는 로딩이 느릴 수 있지만, 그 이후에 페이지 전환은 빠르게 가능해서 좋은 사용성을 제공

### SSR(Server Side Rendering), CSR(Client Side Rendering)

- CSR

  - CSR은 브라우저 측에서 HTML, CSS, JavsScript를 처음부터 실행시키는 방식
  - 브라우저에서 전부 언어를 실행하므로 웹 서버는 큰 부담이 없다.

- SSR

  - SSR은 웹 서버에서 HTML, CSS, JavsScript를 미리 한 번 실행시킨 후 브라우저에게 건네주는 방식
  - API 통신을 웹 서버에서 미리 진행해서 데이터를 적용할 수 있다.
  - 결과가 적용된 파일을 받게되어 빠르게 화면을 보여줄 수 있음

- react, vue 프레임워크는 CSR 렌더링 방식에 SPA 형태로 제공

- SSR 전용 react, vue 프레임워크로 next.js, nuxt.js 가 있다.

출처 : https://joshua1988.github.io/web-development/http-part1/
https://www.grabbing.me/8d9e92b19e084c5a8cb173a695aa81af