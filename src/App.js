
import './App.css';
import Tut from './components/fc';
import Ctut from './components/cc';
import Stat from './components/stat'


function App() {
  return (
    <div className="App">

      <div>
        <Tut name="Giridhar bro" />
        <p>I am reporting 2nd time from functional component to check.</p>
      </div>

      <div>
        <Ctut name="class bro"/>
        <p>I am reporting 2nd time from class component to check.</p>
      </div>

      <Stat />
    </div>
  );
}

export default App;
