import logo from "./logo.svg";
import "./App.css";

function App() {
  const testSession = async () => {
    const test = await fetch("/test");
    const result = await test.json();
    console.log(result);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => testSession()}>Learn React</button>
      </header>
    </div>
  );
}

export default App;
