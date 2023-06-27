import logo from "./logo.svg";
import "./App.css";

function App() {
  // // jhankar mahabub md-32-4
  // var heroDetails = {
  //   name: "jk_morga",
  //   action: "Kongfoo style",
  // };
  // var style = {
  //   color: "red",
  //   backgroundColor: "black",
  //   padding: "25px",
  // };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* jhankar mahabub md-32-4 */}
        {/* <p>
          Jk action style is <span style={style}>{heroDetails.action}</span>
        </p> */}
        {/* jhankar mahabub md-32-5 */}
        <Players></Players>
      </header>
    </div>
  );
}
// jhankar mahabub md-32-5
function Players(){
  let styleCss ={
    backgroundColor: '#1500e9'
  }
  return (
  <div>
    <h2 style={styleCss}>Hello Beiman Pakhi</h2>
    <h3 style={{backgroundColor: 'green',padding:'10px 50px'}}>Beimani nite parlam na</h3>
    </div>  
  )
}
export default App;
