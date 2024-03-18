import { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown";
import styles from "./Plan.module.css";

const Plan = (props) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState([]);
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    //GET the record from Airtable
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

          setItems(data.records.map((item) => item.fields.name));
        } else {
          console.error("Error fetching data:", error);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  //Function to create array of dates between given start and end date
  const generateDaysArray = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const daysDifference =
      Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;

    const daysArray = [];
    for (let i = 0; i < daysDifference; i++) {
      const currentDate = new Date(start);
      currentDate.setDate(start.getDate() + i);
      daysArray.push(currentDate.toDateString());
    }
    setDays(daysArray);
  };

  //Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    generateDaysArray();
  };

  return (
    <div className={styles.container}>
      <br />
      <h1>Plan Your Trip</h1>
      <form onSubmit={handleSubmit}>
        <label>Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <label>End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {days.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            {days.map((day, index) => (
              <tr key={index}>
                <td>{day}</td>
                <td>
                  <Dropdown
                    options={items}
                    selected={selected[index]}
                    setSelected={(val) => {
                      setSelected({ ...selected, [index]: val });
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Plan;
