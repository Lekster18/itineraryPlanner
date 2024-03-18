import { useEffect, useState } from "react";
import styles from "./FavouriteList.module.css";

const FavouriteList = (props) => {
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

  const handleDelete = async (recordId) => {
    try {
      // Delete the record from Airtable
      const res = await fetch(
        `https://api.airtable.com/v0/appK0n8UQ1jxmNCyv/Table%201/${recordId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to delete record");
      }

      // Remove the record from the local state
      setItems(items.filter((item) => item.id !== recordId));
    } catch (error) {
      console.error("An error occurred while deleting the record:", error);
    }
  };

  return (
    <div className={styles.container}>
      <br />
      <h1>Favourite List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.fields.name}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouriteList;
