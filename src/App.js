import logo from './logo.svg';
// import Tile from './components/tile';
import './App.css';
// import Board from './components/board/board';
import Game from './components/game/game'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Tile tile={{
      spawn: 3,
      treasure: "",
      orientation: 3,
      shape: "L",
      extra: false,
      used: true
    }}></Tile> */}
        {/* <Board></Board> */}
        <Game></Game>
      </header>
    </div>
  );
}

export default App;
