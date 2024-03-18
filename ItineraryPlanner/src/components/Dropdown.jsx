import { useState } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = (props) => {
  //Reusable component
  const [isActive, setIsActive] = useState(false);
  const option = props.options;
  const selected = props.selected;

  return (
    <div className={styles.dropdown}>
      <div
        onClick={(e) => {
          setIsActive(!isActive);
        }}
      >
        {!isActive && !selected ? "Click to choose" : selected}
      </div>
      <div className={styles["dropdown-content"]}>
        {isActive &&
          option.map((ele, i) => (
            <div
              key={`${ele}-${i}`}
              onClick={() => {
                props.setSelected(ele);
                setIsActive(false);
              }}
            >
              {ele}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
