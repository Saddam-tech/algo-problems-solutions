import React from "react";

export default React.memo(function Modal({ modalClick, modalText }) {
  console.log("Hello from Modal!!!");
  return (
    <button onClick={modalClick} className="App">
      {modalText}
    </button>
  );
});
