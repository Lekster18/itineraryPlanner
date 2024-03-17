import { useState } from "react";
import District from "./District";

const Dropdown = ({ options }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <div onClick={() => setIsActive(!isActive)}>Click to choose</div>
      {isActive &&
        options.map((ele) => (
          <div key={ele} onClick={() => setSelected(ele)}>
            {ele}
          </div>
        ))}
      <District selected={selected}></District>
    </div>
  );
};

export default Dropdown;
