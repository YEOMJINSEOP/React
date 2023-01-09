import React from 'react';
export default function AppCard() {
  return (
    <>
      <Menu>
        <p>오늘의 메뉴:라면🍜</p>
        <p>예약 손님</p>
        <ul> 
          <li>라이언님</li>
          <li>무지님</li>
        </ul>
      </Menu>
        
      <Menu>
        <h1>스테이크🥩</h1>
        <p>스테이크에 대한 설명</p>
      </Menu>

      <Menu>
        <h2>새우튀김 덮밥🍤</h2>
        <article>
          미쉐린이 소개한 기사글
          This prawn is the BEST...
        </article>
      </Menu>
    </>
  );
}

function Menu({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'lightgoldenyellow',
        borderRadius: '20px',
        color: 'white',
        minHeight: '200px',
        maxWidth: '200px',
        margin: '1rem',
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      메뉴
      {children}
    </div>
  );
}
