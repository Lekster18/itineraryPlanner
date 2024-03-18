import { useEffect, useState } from "react";
import styles from "./District.module.css";

const District = (props) => {
  const [malls, setMalls] = useState([]);
  const [accoms, setAccoms] = useState([]);
  const [fnb, setFnb] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const district = props.selected;

  const addToFavourites = async (itemName, itemUUID) => {
    //POST favourite record to Airtable
    try {
      const res = await fetch(
        "https://api.airtable.com/v0/appK0n8UQ1jxmNCyv/Table%201",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            records: [
              {
                fields: {
                  uuid: itemUUID,
                  name: itemName,
                },
              },
            ],
          }),
        }
      );
      if (res.ok) {
        const data = await res.json();
        console.log("Item added to favourites:", itemName);
      } else {
        console.error("Error fetching");
        console.log(res);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    //GET records from 4 different TIH APIs
    const fetchData = async (searchValue, endpoint) => {
      const searchType = "keyword";
      const url = new URL(endpoint);
      url.searchParams.append("searchType", searchType);
      url.searchParams.append("searchValues", searchValue);

      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "X-API-Key": import.meta.env.VITE_TIH_API_KEY,
          },
        });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        return data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchDataForDistrict = async () => {
      const mallsData = await fetchData(
        district,
        "https://api.stb.gov.sg/content/shops/v2/search"
      );
      setMalls(mallsData);

      const accomsData = await fetchData(
        district,
        "https://api.stb.gov.sg/content/accommodation/v2/search"
      );
      setAccoms(accomsData);

      const fnbData = await fetchData(
        district,
        "https://api.stb.gov.sg/content/food-beverages/v2/search"
      );
      setFnb(fnbData);

      const attractionsData = await fetchData(
        district,
        "https://api.stb.gov.sg/content/attractions/v2/search"
      );
      setAttractions(attractionsData);
    };

    fetchDataForDistrict();
  }, [district]);

  return (
    <div className={styles}>
      {district && (
        <div>
          <h1>Search Results:</h1>
          <h2>Malls:</h2>
          <ul>
            {malls.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <button onClick={() => addToFavourites(item.name, item.uuid)}>
                  Add to favourites
                </button>
              </li>
            ))}
          </ul>
          <h2>Accommodations:</h2>
          <ul>
            {accoms.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <button onClick={() => addToFavourites(item.name, item.uuid)}>
                  Add to favourites
                </button>
              </li>
            ))}
          </ul>
          <h2>Food & Beverages:</h2>
          <ul>
            {fnb.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <button onClick={() => addToFavourites(item.name, item.uuid)}>
                  Add to favourites
                </button>
              </li>
            ))}
          </ul>
          <h2>Attractions:</h2>
          <ul>
            {attractions.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <button onClick={() => addToFavourites(item.name, item.uuid)}>
                  Add to favourites
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default District;
