import "./App.css";
import pics from "./assets/countryside-woman-holding-plant-leaves 1(1).png";
import Child from "./components/Child";
import Greeting from "./components/Greeting";
import NavBar from "./components/NavBar";
import State from "./components/State";

function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleClick = () => {
    console.log("heyyy");
  };

  // const firstName = "deji";
  // const lastName = "atanda";

  // const styleghehdjd = {
  //   fontSize: "90px",
  //   textTransform: "uppercase",
  // };

  const popUp = (name) =>{
    alert(`my name is ${name}`)
  }

  return (
    <div>
      <NavBar />
      <State/>
     
      {/* <Child>GMCcfdghjliopoiuytrtrytyuiop</Child> */}
      {/* <Greeting name={'atanda'} />
      <Greeting name={'CR7'} /> */}

    </div>
  );
}

export default App;
