import { useEffect, useState } from "react";

const FavouriteList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.airtable.com/v0/appK0n8UQ1jxmNCyv/Table%201",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
            },
          }
        );

        if (res.ok) {
          const data = await res.json();
          setItems(data.records);
        } else {
          console.error("Error fetching data:", res.statusText);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Favourite List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.fields.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavouriteList;
