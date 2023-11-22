import Header from "./components/Header/Header.jsx";
import InputGroup from "./components/InputGroup/InputGroup.jsx";
import ResultLog from "./components/ResultLog/ResultLog.jsx";

import INPUTS_DEFAULT from "./util/InputDefaultData.js";

import { useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState(INPUTS_DEFAULT);

  function getInput(inputIdentifier, newValue) {
    setInputVal((oldInput) => {
      const updatedInput = {
        ...oldInput,
        [inputIdentifier]: +newValue,
      };
      return updatedInput;
    });
  }

  return (
    <>
      <Header />
      <main>
        <InputGroup dataInput={inputVal} onChange={getInput} />
        <ResultLog dataInputs={inputVal} />
      </main>
    </>
  );
}

export default App;
