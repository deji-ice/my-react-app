import "./App.css";
import pics from "./assets/countryside-woman-holding-plant-leaves 1(1).png";
import NavBar from "./components/NavBar";

function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleClick = () => {
    console.log("heyyy");
  };

  const firstName = "deji";
  const lastName = "atanda";

  const styleghehdjd = {
    fontSize: "90px",
    textTransform: "uppercase",
  };

  return (
    <div>
      <NavBar />
      {arr.map((items, i) => (
        <p key={i} > {items} </p>
      ))}

      {/* <img src={pics} alt="" />
      <img src="/vite.svg" alt="" /> */}
      <h1 style={styleghehdjd}>{firstName + " " + lastName}</h1>
      <button onClick={handleClick} className="">
        click me
      </button>
      <button onClick={() => console.log(firstName)}>hey</button>
    </div>
  );
}

export default App;
