import { useState } from "react";
function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  return (
    <div>
      <span onClick={() => setExpand(!expand)}>{explorer.name}</span>
      <br />
      <div style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
        {explorer.items.map((explore) => (
          <Folder key={explore.name} explorer={explore} />
        ))}
      </div>
    </div>
  );
}

export default Folder;