import React, { useState } from "react";

export default function NamedOne() {
  let Namer = class {
    constructor(first, last) {
      this.firstname = first;
      this.lastname = last;
      this.fullname = first + " " + last;
    }

    modify(first, last) {
      this.firstname = first;
      this.lastname = last;
      this.fullname = first + " " + last;
      return this.fullname;
    }
  };

  const newname = new Namer("John", "Doe");
  console.log({ new: newname.modify("Saddam", "Salokhiddinov") });

  return (
    <>
      <div>
        <button className="like-button" onClick={() => {}}>
          Test
        </button>
      </div>
      <style>{`
        .like-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:  #585858;
        }
        .liked {
            font-weight: bold;
            color: #1565c0;
        }
    `}</style>
    </>
  );
}
