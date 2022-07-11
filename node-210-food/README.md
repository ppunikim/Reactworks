### 다이어트를 도와줘

- 오늘 섭취한 식품의 칼로리가 얼마인지 기록하여 다이어트를 하는데 도움을 주는 앱 만들기
- nodeJS, Express, MongoDB, React를 이용해 만들 것.

# BackEnd 만들기 위해 해야 할 일

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

## MongoDB연동을 위해 할 일

- node-210-food 터미널창에서 `ctrl + c` 눌러서 `npm install -g nodemon` 하기.(업뎃)
- mongoose dependency 설치하기 : `npm install mongoose`
- 이제는 client 터미널 창으로 가서,
- 날짜 시간 도구 설치 : `yarn add moment`
- UUID key 생성도구 설치 : `yarn add react-uuid`
- 다 끝났으면 client 터미널에서 `yarn build` 하기 => 그러면 package.json에서 설치된 것을 볼 수 있다.

## 이제 client 폴더 밑에 새 폴더 만들기

- 새 폴더와 파일 이름은 `comps/DietMain.jsx`, `DiatInput.jsx`, `DietList.jsx`
- 폴더 내용에 기초 내용으로는 `const 폴더명 = () => {}` 와 `export default 폴더명` 이렇게 두 가지는 있어야 한다.
