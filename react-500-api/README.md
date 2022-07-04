# 공공 DB API 프로젝트

- data.go.kr의 기상청 기상특보 서비스를 활용한 App제작

## React API를 사용하기 위해

- data.go.kr : 대한민국 공공 DB 서비스 회원가입
- 기상청 기상특보 활용 신청
- Service key 받기

## react CORS 문제 해결하기

- http-proxy-middleware 설치하기 : yarn add http-proxy-middleware
- 현재 react에서 보편적으로 많이 사용하는 중간자 컴포넌트
- 실제 localhost:3000 에서 apis.data.go.kr로 요청을 보내면 CORS오류가 나면서 요청이 거부된다.
- 이 때, http-proxy-middleware가 중간에서 마치 localhost:3000주소를 api.data.go.kr에서 요청하는 것 처럼 변경해 상대방 CORS문제를 우회하여 요청한다.
