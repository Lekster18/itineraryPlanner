import { useState } from "react";

const Dropdown = ({ option }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div onClick={(e) => setIsActive(!isActive)}>Click to choose</div>
      {isActive && (
        <div onClick={(e) => setSelected(e.target.textContent)}>{option}</div>
      )}
    </div>
  );
};

export default Dropdown;
