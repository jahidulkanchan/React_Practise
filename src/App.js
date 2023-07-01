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

  // // jhankar mahabub md-32-6
  //  let pakhiList = ['Beiman','Nisthor','Pasan'];

  // // jhankar mahabub md-32-7
  const adobeList = [
    { name: "Photoshop", price: "$234" },
    { name: "Premier Pro", price: "$199" },
    { name: "XD Lite", price: "$69" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* jhankar mahabub md-32-4 */}

        {/* <p>
          Jk action style is <span style={style}>{heroDetails.action}</span>
        </p> */}
        {/* ---------------------------- */}
        {/* jhankar mahabub md-32-5 */}

        {/* <Players pakhiName ='Beiman' limit='kono shantona pailam na'></Players>
        <Players pakhiName ='Boba' limit='toore r ki bolbo'></Players>
        <Players pakhiName ='nisthor' limit='kiso hobe na tor mone'></Players> */}

        {/* jhankar mahabub md-32-6 */}

        {/* <Players pakhiName = {pakhiList[0]} limit='kiso hobe na tor mone'></Players>
        <Players pakhiName = {pakhiList[1]} limit='kiso hobe na tor mone'></Players>
        <Players pakhiName = {pakhiList[2]} limit='kiso hobe na tor mone'></Players> */}
        {/* <Users></Users> */}
        {/* <Adobe name={adobeList[0].name} price={adobeList[0].price}></Adobe>
        <Adobe name={adobeList[1].name} price={adobeList[1].price}></Adobe>
        <Adobe name={adobeList[2].name} price={adobeList[2].price}></Adobe> */}
        {/* Other Formula */}
        <Adobe list={adobeList[0]}></Adobe>
        {/* <Adobe list={adobeList[1]}></Adobe>
        <Adobe list={adobeList[2]}></Adobe> */}
      </header>
    </div>
  );
}
// jhankar mahabub md-32-5
// function Players(props){
//   let styleCss ={
//     backgroundColor: '#1500e9',
//     border: '2px solid white',
//     padding: '5px 30px'
//   }
//   return (
//   <div>
//     {/* jhankar mahabub md-32-6 */}
//     {/* <h2 style={styleCss}>Hello {props.pakhiName} Pakhi</h2>
//     <h3 style={{backgroundColor: 'green',padding:'10px 50px'}}>{props.limit}</h3> */}
//     <h2 style={styleCss}>Hello {props.pakhiName} Pakhi</h2>
//     <h3 style={{backgroundColor: 'green',padding:'10px 50px'}}>{props.limit}</h3>
//     </div>
//   )
// }

// {/* jhankar mahabub md-32-7 */}
function Adobe(props) {
  const styleAdobe = {
    color: "cyan",
    margin: "10px 0px 0px 0px",
    padding: "30px",
    lineHeight: "10px",
    border: "1px solid white",
  };
  const{name,price} = props.list;
  console.log('vvv')
  return (
    <div style={styleAdobe}>
      {/* <h3>Adobe {props.name}</h3> */}
      {/* <h3>Adobe {props.name}</h3>
      <h4>Price: {props.price}</h4> */}

      {/* Other Formula */}

      <h3>Adobe {name}</h3>
      <h4>Price: {price}</h4>
    </div>
  );
}

// function Users(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then(data => {
//     return(
//       <div>
//         <h2>Hello {data.name} Pakhi</h2>
//       </div>
//     )
//   }
//   )
// }
export default App;
