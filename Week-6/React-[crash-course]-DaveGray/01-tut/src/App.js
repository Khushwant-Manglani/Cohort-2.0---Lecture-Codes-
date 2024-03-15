import logo from './logo.svg';
import './App.css';

function App() {

  function handleNameChange() {
    const names = ['Khush', 'Rohit', 'Ayush'];
    const nameIdx = Math.floor(Math.random() * names.length);
    return names[nameIdx];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNameChange()}!
        </p>
      </header>
    </div>
  );
}

export default App;
