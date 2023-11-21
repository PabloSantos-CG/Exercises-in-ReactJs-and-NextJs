import React from "react";

type Prop = { handleLogIn: () => void }

export default function Connecting({ handleLogIn }: Prop) {

  return (
    <div>
      <input type="text" />
      <button
        className="
          border border-transparent hover:border-white p-2
        "
        onClick={handleLogIn}
      >
        Log In
      </button>
    </div>
  );
}
