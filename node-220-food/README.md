## 복제 프로젝트에서 할 것

- node-220-food 폴더에서 npm install
- 내부 client 폴더에서 yarn(react에서 사용하는 것) 실행
- yarn 끝나면 yarn dev 실행(5000번 포트로 프로젝트가 열린다.)
- node-220-food 폴더에서 nodemon 실행(화면이 정상적으로 열린다.)
- 화면 정상 작동 됐으면 ctrl + C 누르기

# 오늘은 MySQL로 데이터 연동 예정이다.

## MySQL DB 연동

- mySQL DB와 연동하기 위해 Dependency 설치
- node-220-food 폴더에서 실행하기.

```
npm install mysql2
npm install sequelize
npm install moment
npm install -g sequelize-cli
```

- 이렇게 설치하면 node-220-food의 package.json에서 설치된 것을 볼 수 있다.
- 하지만 이렇게만 해주면 아직 설정 안된 것이다.

```
workspace 폴더를 관리자 권한으로 실행해서
npm install -g sequelize-cli
npm install -g sequelize-auto
npm install -g mysql2
```

- sequelize 도구를 사용하여 mysql DB 연동 정보 자동화
- node-220-food폴더에서 터미널 창에서 실행

```
sequelize init
sequelize-auto -o "./models" -d mydb -h 127.0.0.1 -u ppunikim -x '!Korea8080' -e mysql -l esm
```

- sequelize-auto 를 사용할 때 끝에 -l esm을 생략하면 CommonsJS(ES 5 이전) 버젼으로 모듈 생성됨. 이것은 옛 버전이다.
- 사용자 password에 특수문자가 포함된 경우 반드시 작은 따옴표로 묶어줄 것.
- 선택 사항들

```
-o 폴더 : model 설정 파일이 출력될 곳
-d DB명 : 사용할 mysql DB
-h Host : MySQL 서버가 설치된 컴퓨터의 ip, localhost, 127.0.0.1
-u username : MySQL에 접속할 권한이 있는 사용자
-x password : MySQL 접속 사용자 비번
-e mysql : 사용할 데이터베이스 소프트웨어(engin)
-l esm : ES6+ 버전으로 생성하기
-l es5 : ES5 버전으로 생성하기
-p PORTNUM : port 3306 이외의 다른 포트로 사용하는 경우
```
