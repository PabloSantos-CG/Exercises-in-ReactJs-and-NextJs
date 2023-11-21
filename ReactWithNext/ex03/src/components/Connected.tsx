import React from "react";

type Props = { handleLogOut: () => void };

export default function Connected({ handleLogOut }: Props) {
  return (
    <div>
      <p>Connected</p>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
}
