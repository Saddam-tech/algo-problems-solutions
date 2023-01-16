import { useState, useCallback } from "react";
import Modal from "./Modal";

export default function UseCallBack() {
  const [state, setState] = useState("Hello!!!");
  const [show, setShow] = useState(false);

  console.log("Hello from Parent of Modal!!!");

  const test1 = useCallback(() => {
    console.log("test1 => usaCallback()");
  }, []);
  const test2 = () => {
    setState("Escape the Matrix!!!");
  };
  const test3 = () => {
    console.log("test3");
    setShow((prev) => !prev);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={test2}>Click Me to re-render Modal!!!</button>
      <button onClick={test3}>Click me to Re-render Parent Component!!!</button>
      <Modal modalClick={test1} modalText={state} />
    </div>
  );
}
