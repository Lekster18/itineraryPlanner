import { useState } from "react";

const Dropdown = (props) => {
  const [isActive, setIsActive] = useState(false);
  const option = props.options;
  return (
    <div>
      <div onClick={() => setIsActive(!isActive)}>Click to choose</div>
      {isActive &&
        option.map((ele) => (
          <div
            key={ele}
            onClick={() => {
              {
                props.setSelected(ele);
              }
            }}
          >
            {ele}
          </div>
        ))}
    </div>
  );
};

export default Dropdown;
