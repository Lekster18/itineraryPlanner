import { useEffect, useState } from "react";

const FavouriteList = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://api.airtable.com/v0/appK0n8UQ1jxmNCyv/Table%201/",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
            },
          }
        );

        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setData(data);
        } else {
          console.error("Error fetching");
          console.log(res);
        }
      } catch (error) {
        console.error("An error occurred:" + error.message);
      }
    };
    getData();
  }, []);

  return (
    <>
      <h1>Testing fetch get</h1>
    </>
  );
};

export default FavouriteList;
