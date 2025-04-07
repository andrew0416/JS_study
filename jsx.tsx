import React from 'react';
import './App.css';

function App() {
  let name = '리액트';

  const style = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: '20px',
  };

  return (
    <div style={style}>
      <h1 className="test">Hello,
        {
          name === '리액트' ? (<h1>YES</h1>) : null
        }
        {/* 조건부 렌더링 예시 */}
      </h1>
      <p>반갑습니다.</p>
      {/* 주석문을 작성합니다. */}
    </div>
  );
}

export default App;