# nodeJS, Express, React Full Stack Project

- NodeJS, Express 프로젝트 생성하기 위한 도구 설치 `npm install -g express-21c`
- NodeJS, Express 프로젝트 생성 `express-21c 내가 정하는 프로젝트 명(myproject)`
- myproject 폴더에서 React client 프로젝트 생성 ` create-react-app client`
- nodeJS 프로젝트와 React 프로젝트 관련 파일들의 이름이 혼동될 수 있으므로 파일 이름 변경
  `App.js`파일을 `React.js`로,
  `App.css` 파일을 `React.css` 로,
  `App.test.js` 파일을 `React.test.js`로 변경.
- client/src/index.js 파일을 열어서 import App from "./App.js" 부분을 import ReactJS from "./React.js"로 변경
- 기타 파일 import 부분에 오류가 있는지 검사하고 변경 완료.
- React Client Build : `yarn build` (소스코드 바꿀때마다 해줘야 한다.)
- client/build폴더 생성 확인.

## nodejs 서버와 react client 연동

- node 서버의 app.js파일을 열어서 static 설정을 `./client/build` 로 변경
- node 서버의 실행 웹 화면을 새로고침해 React 화면이 나타나는지 확인.

## nodeJS와 mongoDB 연동

- mongoDB는 local에 서버를 설치해 사용할 수도 있고, mongodb.com에 회원가입해 무료 cloud서비스를 이용할 수 있다.
- nodeJS와 mongoDB를 연동하기 위한 Dependency를 설치하기 mongoose를 설치하여 NoSQL을 DBMS Schema처럼 사용한다.
  `npm install mongoose`
