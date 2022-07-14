# React Props Drilling

- React Compontent가 여러 겹으로 감싸고 있을 때, 상위 Component state를 생성하고, 그 state를 사용하여 하위(child) Compontent들이 rendering을 하거나 state를 변경해야 하는 경우가 아주 많다.
- 상위 Comp에서 여러 겹의 하위 Comp로 state를 전달할 때 중간에 위치한 Comp들은 실제로 필요하지 않지만, 부모 Comp로부터 Props로 받아서 자식 Comp에게 계속해서 props로 Toss해야하는 경우가 발생한다.
- 이러한 drilling 현상을 방지하기 위해 Store라는 개념이 생겨났다.
- Drilling현상을 방지하기 위해 기본 react 기능 중 `Redux`, `Mobox`,`recoil` 등의 3rd part LIB를 사용한다.
- 3rd part LIB 들이 오히려 React를 학습하는 것 보다 많은 어려운 경우가 많다. 그래서 React에서는 Context.Provider라는 도구를 제공해 단지 Store기능만 수행하도록 마련해놨다.
