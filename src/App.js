import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Player fucntion
//_ 공통 기능 :: 플레이어 객체의 정보를 가지고 표현한다
class PlayerManager extends React.Component {
  constructor(props) { // Initialize
    super(props);
    this.state = {
      userID: null,
      userPoint: 0,
      userMoney: 0,
      hint: null,

      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  }
}
//_ 공통 기능 :: 버튼(button) 객체에 해당하는 화면을 캔버스(canvas)에 띄운다.
//_ 
class ButtonManager extends React.Component {

}
//_ 공통 기능 :: 
class CanvasManager extends React.Component {

}

class GameManager extends React.Component {
  //_ 전체 힌트,
  //_ hint index를 api 요청을 해.
  //_ response data가 hint이고,
  // <CanvasManager hint = ""/>
  // this.prop.hint 
}


export default App;
