import { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown";

const Plan = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);

  // Function to generate an array of days between start date and end date
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

  const handleActivitySelect = (activity, index) => {
    const updatedActivities = [...selectedActivities];
    updatedActivities[index] = activity;
    setSelectedActivities(updatedActivities);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    generateDaysArray();
  };

  return (
    <div>
      <h2>Plan Your Trip</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <label htmlFor="endDate">End Date:</label>
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
                  {/* <select>
                    <option value="">Select an activity</option>
                    <option value="activity1">{item.field.name}</option>
                    <option value="activity2">Activity 2</option>
                    <option value="activity3">Activity 3</option>
                  </select> */}
                  <Dropdown
                    options={selectedActivities}
                    onSelect={handleActivitySelect}
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
