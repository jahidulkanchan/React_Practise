import logo from "./logo.svg";
import "./App.css";

function App() {
  var heroDetails = {
    name: "jk_morga",
    action: "Kongfoo style",
  };
  var style = {
    color: "red",
    backgroundColor: "black",
    padding: "25px",
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jk action style is <span style={style}>{heroDetails.action}</span>
        </p>
      </header>
    </div>
  );
}

export default App;
