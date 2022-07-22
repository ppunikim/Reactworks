## hook함수

- react 가 처음 탄생할땐 class를 사용하여 컴포넌트를 만들었다.
- JS Class 를 사용하면 기존의 JS코드의 장점을 많이 활용하기가 다소 어렵다.
- React 에서는 Class로 컴포넌트를 제작하는 대신 함수를 사용해 컴포넌트를 제작하는 문법을 도입한다.
- `useState()` : state 변수를 생성하는 함수
- `useEffect()` : state 변수가 변동될 때 ,
  React 사용자가 어떤 코드를 실행하고자 할 때,
  화면이 rendering될 대 fetch 데이터를 가져오거나 할 떄 1. 화면이 최초 rendering될 때 자동으로 호출되는 함수 2. state변수를 지정하여 state변수가 변화할 때
- hook함수는 모두 use접두사로 시작
- `useContext()` : 이 함수는 어떤 Provider Store에 저장된 데이터인지를 항상 명시해줘야 한다.
  함수를 사용할 때 무엇인가 명시해주는 것은 코딩을 하는 입장에서 다소 불편할 수 있다.
- 그래서 원래 있던 useContext를 useAppContext로 재 정의하고 사용자는 이제 어떤 Provider를 사용해야 하는지 걱정하지 않아도 될 수 있도록 만든 것이다.

### 사용자 정의 Hook만드는 규칙

- 접두사는 반드시 use로 시작, 접미사는 만들고자 하는 원래 Hook이름
  useContext => useMyContext
  useState => useMyState
  useEffect => useMyEffect
  을 이런식으로 바꿔준다.

# 합성 - Composition

- 일반적인 상속과 조금의 차이를 두는 개념이다.
- 상속 : is-a , 합성 : has-a
