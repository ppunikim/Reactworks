# React Project Navigation

- React Project 에서 메뉴 시스템 구현하기

## Dependency 추가하기

- React Nav구현하기 위해 `react-router-dom` 이 필요하다.
- `yarn add react-router-dom`

## React Router 이해하기

- React 의 화면 구현은 SPA(Single Page Application) 구조이다.
- 일반적인 화면 구현은 Nav(menu) 구현하는 방법에 따라 다수의 페이지가 필요하고
- Menu 를 통해 페이지를 전환하는 방식이다.
- React Nav구조는 전체 모든 페이지가 하나라는 생각을 해야한다.
- Nav 에서 메뉴를 클릭하면 감춰진 페이지가 앞으로 나타나는 구조로 인식해야 한다.
- react-router-dom 을 사용하여 구현하는 nav를 `라우터`라고 하고 (경로를 바꿔주는 중간단계)
- 메뉴를 클릭했을 때 페이지가 나타나도록 하는 것을 `라우팅`이라고 한다. (가는 경로)

# :heart:node-react 연결(BackEnd 만들기)하기 위한 방법!

## NodeJS BackEnd Project를 만들기 위해

- express-21c node-210-food 로, 프로젝트를 생성했다.
- project 폴더에서 `npm install` 하기.

## react client Project를 생성하기 위해

- node-210-food 에서 React Client생성하기.
- 이 프로젝트에서 `create-react-app client` 해서, client생성하기

## client폴더에서 terminal 열기

- `yarn` 실행하기.
- 끝난 후, `yarn build` 실행하여 build하기.
- node-210-food에 client/build생성 확인하기

## nodeJS에서 client 인식하기

- node-210-food/app.js열기 (소문자다! 주의하기)
- 29번째 줄을 `"./client/build"` 로 바꾸기 => 그 이유는 build폴더가 최종 확인 폴더이므로
- 13, 31번째 줄 삭제하거나 주석처리하기.
- 이렇게 다 했으면 node-210-food폴더에서 서버 시작 즉, nodemon 실행하기.
- 다 했으면 웹브라우저에서 `localhost:3000` 입력 후, 리엑트 화면 나오는지 확인.

## React 부분 바꿔주기.

- client/src에 있는 App -> React 로 이름 바꾸기 -> 헷갈리기 방지용도.
- React.js, React.css, React.test.js, index.js부분 바꾸기.
- index.js에서는 5, 17번 주석처리 하거나 지우기.
- 다 됐으면 client창에서 `yarn build`하기.
