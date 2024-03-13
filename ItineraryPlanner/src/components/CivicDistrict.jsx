import { useEffect, useState } from "react";

const CivicDistrict = () => {
  const [malls, setMalls] = useState([]);

  useEffect(() => {
    const getMalls = async () => {
      const searchType = "keyword";
      const searchValue = "Civic District";

      const url = new URL("https://api.stb.gov.sg/content/shops/v2/search");
      url.searchParams.append("searchType", searchType);
      url.searchParams.append("searchValues", searchValue);

      const res = await fetch(url, {
        method: "GET",
        headers: {
          "X-API-Key": import.meta.env.VITE_TIH_API_KEY,
        },
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setMalls(data.data);
      } else {
        console.log("an error has occurred");
      }
    };
    getMalls();
  }, []);

  return (
    <div>
      <h1>Test</h1>
      <ul>
        {malls.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default CivicDistrict;
