import { useState } from "react";

const State = () => {
  const [state, setState] = useState("Sara");

const handleClick = ()=> {
    setState("Deji")
}

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handleClick} className="bg-blue-600 text-white px-2 py-1 rounded-md">
        Click to change name
      </button>
    </div>
  );
};

export default State;
