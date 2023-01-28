import { useState, useMemo } from "react";
import debounce from "lodash.debounce";

export default function FilterList({ names }) {
  const [query, setQuery] = useState("");
  let filteredNames = names;
  if (query !== "") {
    filteredNames = names.filter((name) => {
      return name.toLowerCase().includes(query.toLowerCase());
    });
  }
  const changeHandler = (event) => {
    setQuery(event.target.value);
  };
  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 300),
    []
  );
  return (
    <div>
      <input
        onChange={debouncedChangeHandler}
        type="text"
        placeholder="Type a query..."
      />
      {filteredNames.map((name) => (
        <div key={name}>{name}</div>
      ))}
    </div>
  );
}
