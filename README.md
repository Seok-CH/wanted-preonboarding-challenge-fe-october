<img src='https://cdn.discordapp.com/attachments/1016940382061346880/1027609720124624966/970f8d92.jpeg' width='400'>

# 원티드 프리온보딩 챌린지 과제 - 10월 프론트엔드([사이트링크](https://www.wanted.co.kr/events/pre_challenge_fe_3))

> ### Week 1-1

- **주제** : React와 History API 사용하여 SPA Router 기능 구현하기

- **구현사항**

  - route-module 폴더

    - `Router`, `Routes`, `Route` 컴포넌트를 담은 **components.tsx** 파일이 있습니다
    - `useRouter` hooks를 담은 **hooks.tsx**파일이 있습니다.
    - `Router` 컴포넌트에서 Context API를 활용하기 위한 **context.ts**파일을 생성했습니다.
    - 폴더구조와 파일명은 [React-router 깃헙레포](https://github.com/remix-run/react-router/tree/main/packages/react-router/lib)를 참고했습니다.

  - `Router`컴포넌트

    - 현재 사이트의 pathname 정보를 state로 가지고 있습니다.
    - Context API를 통해서 하위 컴포넌트에게 **path**와 **changePath**함수를 전달합니다.
    - **changePath** 함수는 **setPath**함수를 통해서 path를 바꾸고 `history.pushState()`함수를 사용하여 바뀐 path를 히스토리 스택에 푸쉬하는 기능을 가집니다.
    - `useEffect`를 사용하여 popstate이벤트가 일어나면 **setPath**함수로 path를 변경합니다.

  - `Routes`컴포넌트

    - `Route`컴포넌트를 담고있는 컨테이너입니다.
    - Context API를 통해 받은 path정보를 통해 children(`Route`컴포넌트)을 순회하면서 path와 `Route`컴포넌트의 props.path와 일치하는 것만 렌더링합니다

  - `Route`컴포넌트

    - props로 path와 어떤 컴포넌트를 렌더링할지 정보를 가지고 있습니다.

  - `useRouter`hooks
    - 실행시 함수를 반환하고 이 함수에 path정보를 인수로 전달하면 함수 내부에서는 Context API를 통해 받은 changePath함수에 전달하여 실행시킵니다.

- **어려웠던점**

  - React-router 깃헙레포를 참고하면서 만들었는데 레포에는 Context API를 활용하여 구현하고 있어서 한번도 사용해보지 않은 Context API를 공부하는데 시간이 걸렸습니다

  - 초반에 popstate 이벤트가 `history.pushState()`함수를 실행시킬 때는 트리거되지 않는다는 사실을 몰라서 많이 헤매었고 `Router` 컴포넌트에 path를 state로 두어 해결했습니다
