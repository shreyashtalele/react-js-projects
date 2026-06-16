import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(5);
  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1> Counter Value : {counter} </h1>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value </button>
    </>
  );
}

export default App;
