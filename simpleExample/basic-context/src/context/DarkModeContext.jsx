import { createContext, useState } from 'react';

// 리액트에서 제공하는 createContext API를 이용해서 context를 만들 수 있다.
// Context는 데이터를 담고 있는 역할을 한다.
// 데이터를 담고 있는 Context 🔽
export const DarkModeContext = createContext();

// Context를 만들 때는 항상 Provider도 만들어줘야 한다.
// Provider는 Context가 담고 있는 데이터를 가지고 보여주고 있는 역할 (우산을 만든다고 생각)
// Provider도 컴포넌트이다. 우산 컴포넌트.
// 하위의 컴포넌트들을 감싸줄 수 있는 부모 우산 컴포넌트이다.
// 외부에서 컴포넌트들을 받을 수 있는 children를  props로 받아온다.
// DarkModeProvider 컴포넌트는 UI 적으로 무언가를 하지는 않지만,
// children을 감싸는 '데이터를 가지고 있는 DarkModeContext 우산'을 만들어준다.
export function DarkModeProvider({ children }) {
  // 글로벌로 기억하고 싶은 데이터, 그 데이터를 처리하는 함수들을 이 안에서 만들어주면 된다.
  const [darkMode, setDarkMode] = useState(false); //다크모드인지 아닌지 기억하는 데이터
  const toggleDarkMode = () => setDarkMode((mode) => !mode); // 다크모드 토글링하는 함수
  return (
    // 반환할 때 아래처럼 Context에 있는 Provider를 써줄 것임.
    // 내부적으로 Context에 있는 Provider를 쓰는 것인데,
    // 외부에서 편하게 쓰기 위해서 DarkModeProvider 우산을 만들어 주는 것이다.
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// 정리
// 우리가 리액트에서 context를 쓰는 것은 우산을 만드는 것
// 그 우산을 씌워주고 싶은 컴포넌트 위에다가 씌우면
// 그 하위의 모든 자식 컴포넌트 요소들이 그 우산에 있는 데이터에 접근이 가능하다.
// 그 우산, context를 만드려면
// 리액트에서 제공해주는 createContext를 이용해 context를 만든다.
// 그리고, 자식 컴포넌트들을 받아오는 컴포넌트를 만들어서
// 이 자식 컴포넌트들을 위에서 만든 context에서 제공해주는 provider로 감싸면 되고,
// 자식 컴포넌트와 공유하고 싶은 데이터가 있다면 value에 지정해주면 된다.

// 우리는 다크모드인지 아닌지와 다크모드를 토글링하는 것 까지
// 자식 컴포넌트에서도 공유해 활용하기를 원하므로
// darkMode 변수와 toggleDarkMode 함수까지 모두 value로 전달했다.


// 사용하기 위해서는 아래처럼 만들어준 컴포넌트로 감싸서 우산을 씌워주면 된다.
// 아래 예시에서는 Header, Main, Footer부터 하위의 모든 컴포넌트에서 모두 darkMode와 toggleDarkMode를 공유해 이용할 수 있다.
// 만약 Footer에서부터만 우산을 씌우고 싶다면 <DarkModeProvider>를 <Footer/>에만 씌우면 된다.
// export default function AppTheme() {
//   return (
//     <DarkModeProvider>
//       <Header />
//       <Main />
//       <Footer />
//     </DarkModeProvider>
//   );
// }

// 사용하고자 하는 어느 자식 컴포넌트에서도 useContext를 사용해 
// 아래와 같이 모두 데이터를 받아올 수 있다.
// 참고로 CardDetail은 Main의 자식의 자식 컴포넌트.

function CardDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      Product Detail
      <p>
        DarkMode:
        {darkMode ? (<span >Dark Mode</span>) : (<span>Light Mode</span>)}
      </p>
      <button onClick={() => toggleDarkMode()}>Change Theme</button>
    </div>
  );
}
