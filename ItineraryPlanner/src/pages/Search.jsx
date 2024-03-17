import Dropdown from "../components/Dropdown";

const Search = () => {
  const options = ["Civic District", "Chinatown", "Little India"];
  return (
    <div>
      <h1>Let's get started!</h1>
      <div>
        <h3>Search for districts:</h3>
        <Dropdown options={options} />
      </div>
    </div>
  );
};

export default Search;
