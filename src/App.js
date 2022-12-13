import './App.css';
import Board from './components/board/board';
// import Game from './components/game/game'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Board></Board>
        {/* <Game></Game> */}
      </header>
    </div>
  );
}

export default App;
