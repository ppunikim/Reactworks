# React Props Drilling

- React Compontent가 여러 겹으로 감싸고 있을 때, 상위 Component state를 생성하고, 그 state를 사용하여 하위(child) Compontent들이 rendering을 하거나 state를 변경해야 하는 경우가 아주 많다.
- 상위 Comp에서 여러 겹의 하위 Comp로 state를 전달할 때 중간에 위치한 Comp들은 실제로 필요하지 않지만, 부모 Comp로부터 Props로 받아서 자식 Comp에게 계속해서 props로 Toss해야하는 경우가 발생한다.
- 이러한 drilling 현상을 방지하기 위해 Store라는 개념이 생겨났다.
- Drilling현상을 방지하기 위해 기본 react 기능 중 `Redux`, `Mobox`,`recoil` 등의 3rd part LIB를 사용한다.
- 3rd part LIB 들이 오히려 React를 학습하는 것 보다 많은 어려운 경우가 많다. 그래서 React에서는 Context.Provider라는 도구를 제공해 단지 Store기능만 수행하도록 마련해놨다.

# React Content.Provider를 사용해 Drilling 문제 해결

- 3rd part LIB 를 사용해 Drilling 문제를 해결할 수 있지만, 학습 곡선이 매우 커 큰 프로젝트가 아니면 오히려 불편할 수 있다.

# Context.Provider 향상된 사용

- context-v2 에서는 Context.Provider 의 간단한 사용법을 확인했다.
- 실제 사용해야 할 state 변수와 여러가지 함수들을 만드는 곳과 보관하는 곳의 별도의 장소가 돼 프로젝트가 커지면 관리가 불편해질 수 있다.
- 관리할 요소들(state, 여러가지 함수)과 store를 한곳에서 관리하는 코드 작성

# 합성 - Composition
