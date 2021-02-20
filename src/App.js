import logo from './logo.svg';
import meme from './meme.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<p>
          //Edit <code>src/App.js</code> and save to reload.
		  Site under construction. Learning JavaScript in progress...
        </p>
        <img src={meme}/>
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

export default App;
