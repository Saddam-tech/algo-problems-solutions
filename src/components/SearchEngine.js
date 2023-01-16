import { useState } from "react";

export default function SearchEngine() {
  const [words] = useState([
    "apple",
    "orange",
    "mango",
    "banana",
    "grape",
    "slander",
    "typical",
    "Some Person",
    "Jack Anderson",
  ]);
  const [output, setOutput] = useState([]);

  function filter(value) {
    setOutput(
      words.filter((word) => {
        if (value === "") return words;
        return word.toLowerCase().includes(value.toLowerCase().trim());
      })
    );
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <h2>Start editing to see some magic happen!</h2>
      <p>
        Existing value:{" "}
        {output.length === 0 ? words.join(" ") : output.join(" ")}
      </p>
      <input type="text" onChange={(e) => filter(e.target.value)} />
    </div>
  );
}
