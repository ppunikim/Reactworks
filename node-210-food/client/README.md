# React 에서 외부 파일 연결하는 방법

- 보통 우리는 html에서는 css, js 등을 link href로 연결한다.
- react의 public 폴더에는 index.html 파일에 css, js등을 기존 방식과 같이 연결할 수 있지만 react에서는 권장하지 않는다.
- React에서는 특히 css 파일을 src 폴더에 저장하고, index.js 또는 App.js 파일에서 import하여 사용하는 것을 권장한다.

* 그 이유는,
  `React 프로젝트에서는 yarn build 하면 css, js 파일들을 Transpiling에 저장하는데, 대부분 파일을 압축, 난독화 하여 저장한다. 압축된 css, js파일은 client로 전송될 때 용량이 상대적으로 적어져서 네트워크에 저장된다. public 폴더에 저장되거나 연결된 파일도 압축이 되긴 하지만, css, script등을 외부 연결을 통해 사용하면 압축이 되지 않아 네트워크에 노출되는 현상이 발생한다. 따라서 App.js 혹은 index.js에서 css, js를 적어주는 것이 좋다.`

## React의 parent와 child간 데이터 공유

- react 변수를 state 변수라고 하는데, state변수는 부모가 만들고, child가 공유하여 사용하는 구조이다.
- 부모가 생성한 state변수는 child가 변경하거나 할 수 없다.
- state변수는 어디에 생성 할 것인가는 전체적인 구조를 확정하는, 매~우 중요한 것이다.
- 일반적으로 state변수는 부모 comp에서 생성하고, 부모 comp에서 변경하는 함수를 만들어서 child에게 전파하는 것이 좋다.
