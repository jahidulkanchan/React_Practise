import React, {useState} from 'react';
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
  // const adobeList = [
  //   { name: "Photoshop", price: "$234" },
  //   { name: "Premier Pro", price: "$199" },
  //   { name: "XD Lite", price: "$69" },
  // ];
  // // jhankar mahabub md-32-8
  // let pakhiList = ['Beiman','Nisthor','Pasani','kolar'];
  // const adobeList = [
  //   { name: "Photoshop", price: "$234" },
  //   { name: "Premier Pro", price: "$199" },
  //   { name: "XD Lite", price: "$69" },
  //   { name: "Illustator", price: "$219" }
  // ];

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
        {/* <Adobe list={adobeList[0]}></Adobe> */}
        {/* <Adobe list={adobeList[1]}></Adobe>
        <Adobe list={adobeList[2]}></Adobe> */}

        {/* jhankar mahabub md-32-8 */}

        {/* <h5>{
          pakhiList.map(x=><p>{x}</p>)
          }</h5> */}

        {/* <h4>
          {
            adobeList.map(a=>{
              const fancy = {
                display: 'inline-block',
                backgroundColor:'#000000',
                margin: '10px 10px',
                padding: '0px 10px',
                border: '5px solid #00FF00'

              };
              return( 
              <div style={fancy}>
                  <p>Adobe {a.name}</p>
                  <p>{a.price}</p>
              </div>
              )
            } )
          }
        </h4> */}

        <Counter></Counter>
        
      </header>
    </div>
  );
}
function Counter(){
  const [count,setCount] = useState(1);
  const decrease = ()=>{
    if (count > 1) {
      setCount(count-1)
    }
  };
  return(
    <div>
      <h2>count: {count}</h2>
      <button onClick={()=> setCount(count+1)}>Increment</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
  
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
// function Adobe(props) {
//   const styleAdobe = {
//     color: "cyan",
//     margin: "10px 0px 0px 0px",
//     padding: "30px",
//     lineHeight: "10px",
//     border: "1px solid white",
//   };
//   const { name, price } = props.list;
//   return (
//     <div style={styleAdobe}>
//       {/* <h3>Adobe {props.name}</h3> */}
//       {/* <h3>Adobe {props.name}</h3>
//       <h4>Price: {props.price}</h4> */}

//       {/* Other Formula */}

//       <h3>Adobe {name}</h3>
//       <h4>Price: {price}</h4>
//     </div>
//   );
// }

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
