import { useState } from "react";
import District from "../components/District";
import Dropdown from "../components/Dropdown";
import styles from "./Search.module.css";

const Search = () => {
  const options = [
    "Civic District",
    "Chinatown",
    "Little India",
    "Kampong Glam",
    "Tanjong Pagar",
  ];
  const [selected, setSelected] = useState(null);
  return (
    <div className={styles.container}>
      <br />
      <h1>Let's get started!</h1>
      <br />
      <div>
        <div className={styles.search}>
          <h3>Search for precinct:</h3>
          <Dropdown
            options={options}
            selected={selected}
            setSelected={setSelected}
          />
        </div>

        <br />
        <District selected={selected} />
      </div>
    </div>
  );
};

export default Search;
