import Dropdown from "../components/Dropdown";

const Search = () => {
  const options = ["Civic District", "Chinatown", "Little India"];
  return (
    <div>
      <h1>Let's get started!</h1>
      <div>
        <h3>Start date:</h3>
        <input type="date"></input>
      </div>
      <div>
        <h3>End date:</h3>
        <input type="date"></input>
      </div>
      <div>
        <h3>Search for districts:</h3>
        <Dropdown option={options} />
      </div>
    </div>
  );
};

export default Search;
