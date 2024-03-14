import { useState } from "react";

const Dropdown = ({ option }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <div onClick={() => setIsActive(!isActive)}>Click to choose</div>
      {isActive &&
        option.map((ele) => (
          <div key={ele} onClick={() => setSelected(ele)}>
            {ele}
          </div>
        ))}
    </div>
  );
};

export default Dropdown;
